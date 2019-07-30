/**
 * Created by kanamars on 30/07/19.
 */
import React from 'react';
import classes from './CheckoutSummary.module.css';
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const checkoutSummary = (props) => {
  return(
      <div className={classes.CheckoutSummary}>
        <h1>We hope it taste well!</h1>
        <div style={{width:'100%', margin:'auto'}}>
          <Burger ingredients={props.ingredients}/>
        </div>
        <Button btnType="Danger" clicked>Cancel</Button>
        <Button btnType="Success" clicked>Continue</Button>
      </div>
  )
};

export default checkoutSummary;