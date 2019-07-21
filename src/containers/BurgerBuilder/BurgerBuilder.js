/**
 * Created by kanamars on 18/07/19.
 */
import React, {Component} from 'react';
import Aux from "../../HOC/Aux";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
import classes from "./BurgerBuilder.module.css";

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
        totalPrice: 3
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
        }
    };

    updateIngredientsInState = (updateIngredients, newPrice) => {
        this.setState({
            ingredients: updateIngredients,
            totalPrice: newPrice
        })
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
                <Burger ingredients={this.state.ingredients}/>
                <div className={classes.Price}>Price : {this.state.totalPrice}</div>

                <BurgerControls more={this.addIngredients} less={this.removeIngredients} disableInfo={disableInfo}></BurgerControls>
            </Aux>
        )
    }
}
export default BurgerBuilder;