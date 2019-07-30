/**
 * Created by kanamars on 22/07/19.
 */
import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';
import {Link} from 'react-router-dom';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem active link="/"><Link to="/">Burger Builder</Link></NavigationItem>
        <NavigationItem link="/"><Link to="/Checkout">Checkout</Link></NavigationItem>
    </ul>
);

export default navigationItems;