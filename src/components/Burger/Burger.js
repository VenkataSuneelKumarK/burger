/**
 * Created by kanamars on 18/07/19.
 */
import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let ingredient = Object.keys(props.ingredients).map(ingreKey=> (
        [...Array(props.ingredients[ingreKey])].map( (value, i) => (
            <BurgerIngredient type={ingreKey} key={ingreKey + i}/>
        ))
        )
    );

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
                {ingredient}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};
export default burger;