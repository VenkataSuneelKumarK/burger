/**
 * Created by kanamars on 22/07/19.
 */
import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';
import Aux from '../../../HOC/Aux/Aux';

const sideDrawer = (props) => {
    let attachClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachClasses.join(" ")}>
                <div className={classes.Logo}><Logo/></div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;