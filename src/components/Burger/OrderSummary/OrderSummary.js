/**
 * Created by kanamars on 21/07/19.
 */
import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Aux from '../../../../src/HOC/Aux'
class OrderSummary extends Component{
    render(){

        // componentWillUpdate(){
        //     console.log("[OrderSummary]: will update");
        // };

        const ingredientsSummary = Object.keys(this.props.ingredients).map((igKey) =>
            {
                return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>:<span>{this.props.ingredients[igKey]}</span></li>
        });

        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.totalPrice}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.cancel}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.continue}>Continue</Button>
            </Aux>
        );
    }
};

export default OrderSummary;