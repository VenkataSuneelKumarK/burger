/**
 * Created by kanamars on 30/07/19.
 */
import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
class ContactData extends Component{
    render(){
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact details</h4>
                <form>
                    <input type="text" placeholder="Your Name"/>
                    <input type="text" placeholder="Phone number"/>
                    <input type="email" placeholder="Email address"/>
                    <input type="text" placeholder="Address"/>
                    <input type="text" placeholder="Postal code"/>
                    <Button>ORDER</Button>
                </form>
            </div>
        )
    }
}
export default ContactData;