/**
 * Created by kanamars on 30/07/19.
 */
import React, {Component} from 'react';
import classes from './Checkout.module.css';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component{
    state = {
        ingredients:{
            meat:1,
            bacon:2,
            cheese:1,
            salad:1
        },
    };
    render(){
        return <CheckoutSummary ingredients={this.state.ingredients}/>
    }
}

export default Checkout;