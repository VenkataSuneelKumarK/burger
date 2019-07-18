/**
 * Created by kanamars on 18/07/19.
 */
import React, {Component} from 'react';
import Aux from "../../HOC/Aux";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component{
    render(){
        return (
            <Aux>
                <div><Burger/></div>
            </Aux>
        )
    }
}
export default BurgerBuilder;