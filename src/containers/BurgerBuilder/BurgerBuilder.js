/**
 * Created by kanamars on 18/07/19.
 */
import React, {Component} from 'react';
import Aux from "../../HOC/Aux";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component{
    state = {
        ingredients:{
            salad: 1,
            bacon: 2,
            cheese: 2,
            meat: 1
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