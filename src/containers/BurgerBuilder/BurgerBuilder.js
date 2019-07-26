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
const IngredientsPrices = {
  salad: .5,
    bacon: 1,
    cheese: 1,
    meat: 1.5
};

class BurgerBuilder extends Component{
    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 3,
        readyToBuy: false,
        purchasing: false
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
        alert("Continue!");
    };
    render(){
        const disableInfo = {
            ...this.state.ingredients
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <=0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                                  cancel={this.purchaseCancelHandler}
                                  continue={this.purchaseContinueHandler}
                                  totalPrice={this.state.totalPrice.toFixed(2)}/>
                </Modal>

                <Burger ingredients={this.state.ingredients}/>
                <div className={classes.Price}>Price : {this.state.totalPrice}</div>

                <BurgerControls more={this.addIngredients}
                                less={this.removeIngredients}
                                disableInfo={disableInfo}
                                isReadyToBuy={this.state.readyToBuy}
                                updatePurchasing={this.updatePurchasing}
                ></BurgerControls>
            </Aux>
        )
    }
}
export default BurgerBuilder;