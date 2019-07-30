/**
 * Created by kanamars on 18/07/19.
 */
import React, {Component} from 'react';
import Aux from "../../HOC/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
import classes from "./BurgerBuilder.module.css";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios';
import withErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler';

const IngredientsPrices = {
  salad: .5,
    bacon: 1,
    cheese: 1,
    meat: 1.5
};

class BurgerBuilder extends Component{
    state = {
        ingredients:null,
        totalPrice: 3,
        readyToBuy: false,
        purchasing: false,
        loading: false,
        errorGettingIngredients: false
    };

    componentDidMount(){
      axios.get('/ingredients.json')
          .then(response =>{
              this.setState({
                  ingredients: response.data
              });
              this.updatePurchaseStatus(response.data);
          })
          .catch(error =>{
              this.setState({
                  errorGettingIngredients: true
              })
          })
    };

    addIngredients = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        let oldPrice = this.state.totalPrice;
        let newPrice = oldPrice + IngredientsPrices[type];
        this.updateIngredientsInState(updateIngredients, newPrice);
        this.updatePurchaseStatus(updateIngredients);
    };

    removeIngredients = (type) =>{
        if(this.state.ingredients[type] > 0) {
            const oldCount = this.state.ingredients[type];
            const updatedCount = oldCount - 1;
            const updateIngredients = {
                ...this.state.ingredients
            };
            updateIngredients[type] = updatedCount;
            let oldPrice = this.state.totalPrice;
            let newPrice = oldPrice - IngredientsPrices[type];
            this.updateIngredientsInState(updateIngredients, newPrice);
            this.updatePurchaseStatus(updateIngredients);
        }

    };

    updateIngredientsInState = (updateIngredients, newPrice) => {
        this.setState({
            ingredients: updateIngredients,
            totalPrice: newPrice
        })
    };

    updatePurchaseStatus = (updateIngredients) => {
        const ingredients = {
            ...updateIngredients
        };
        let isReadyToOrder = false;
        for(let key in ingredients){
            if(ingredients[key] > 0){
                isReadyToOrder = true;
            };
        }
        this.setState({readyToBuy : isReadyToOrder});
    };

    updatePurchasing = () => {
      this.setState({purchasing:true});
    };

    purchaseCancelHandler = () =>{
        this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        // alert("Continue!");
        // this.setState({
        //     loading:true
        // });
        // const order ={
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: "Suneel",
        //         address: {
        //             street : "pragathi nagar",
        //             zipcode: 123456,
        //             country: "india"
        //         },
        //         email: "test@test.com"
        //     },
        //     deliveryMethod: "fastest"
        // };
        // axios.post("/orders.json", order)
        //     .then(response =>{
        //         this.setState({
        //             loading:false,
        //             purchasing:false
        //         });
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         this.setState({
        //             loading:false
        //         });
        //         console.log(error);
        //     })
        const query = [];
        for(let i in this.state.ingredients){
            query.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]));
        }
        this.props.history.push({
            pathname:"/Checkout",
            search : "?" + query.join('&')
        });
    };
    render(){
        const disableInfo = {
            ...this.state.ingredients
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <=0;
        }
        let burger = this.state.errorGettingIngredients ? "Unable to load the ingredients" : <Spinner/>;
        let orderSummary=null;
        if(this.state.ingredients){
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <div className={classes.Price}>Price : {this.state.totalPrice}</div>

                    <BurgerControls more={this.addIngredients}
                                    less={this.removeIngredients}
                                    disableInfo={disableInfo}
                                    isReadyToBuy={this.state.readyToBuy}
                                    updatePurchasing={this.updatePurchasing}
                    ></BurgerControls>
                </Aux>
            );
            orderSummary = (<OrderSummary ingredients={this.state.ingredients}
                                          cancel={this.purchaseCancelHandler}
                                          continue={this.purchaseContinueHandler}
                                          totalPrice={this.state.totalPrice.toFixed(2)}/>);
        }

        if(this.state.loading){
            orderSummary = <Spinner/>
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}

            </Aux>
        )
    }
}
export default withErrorHandler(BurgerBuilder, axios);