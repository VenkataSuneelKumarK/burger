/**
 * Created by kanamars on 18/07/19.
 */
import React, {Component} from 'react';
import Aux from "../../HOC/Aux";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component{
    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    };
    render(){
        return (
            <Aux>
                <div><Burger ingredients={this.state.ingredients}/></div>
            </Aux>
        )
    }
}
export default BurgerBuilder;