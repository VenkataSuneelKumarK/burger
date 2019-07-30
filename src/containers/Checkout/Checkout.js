/**
 * Created by kanamars on 30/07/19.
 */
import React, {Component} from 'react';
import classes from './Checkout.module.css';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom';

class Checkout extends Component{
    state = {
        ingredients:{
            meat:1,
            bacon:2,
            cheese:1,
            salad:1
        },
    };

    componentDidMount(){
      const query = new URLSearchParams(this.props.location.search);
      const ingredients = {};
      for(let item of query.entries()){
          //item ['salad', '1']
          ingredients[item[0]] = +item[1];
      }
      this.setState({
          ingredients:ingredients
      })
    };
    checkoutCancelled = () =>{
        // this.props.history.push('/');
        this.props.history.goBack();
    };
    checkoutContinued = () =>{
        this.props.history.replace('/Checkout/contact-data');
    };
    render(){
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                                checkoutCancelled={this.checkoutCancelled}
                                checkoutContinued={this.checkoutContinued}/>
                <Route path={this.props.match.path + "/contact-data"} component={ContactData}></Route>
            </div>

        )

    }
}

export default Checkout;