/**
 * Created by kanamars on 21/07/19.
 */
import React, {Component} from 'react';
import classes from './Modal.module.css';
import Aux from '../../../../src/HOC/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
class Modal extends Component {
    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}>
                    {this.props.children}
                </div>
            </Aux>
        )


    }
};

export default Modal;
