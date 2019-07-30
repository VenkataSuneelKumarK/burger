/**
 * Created by kanamars on 18/07/19.
 */
import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    console.log("props.ingredients", props.ingredients);
    let transformedIngredients = Object.keys(props.ingredients).map(ingreKey=> (
        [...Array(props.ingredients[ingreKey])].map( (value, i) => (
            <BurgerIngredient type={ingreKey} key={ingreKey + i}/>
        ))
        )
    ).reduce((accumulator, nextEle) => {
        return accumulator.concat(nextEle);
    }, []);

    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding the ingredients</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};
export default burger;