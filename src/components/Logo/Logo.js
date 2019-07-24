/**
 * Created by kanamars on 22/07/19.
 */
import React from 'react';
import burgerLogo from '../../assests/images/burger-logo.png';
import classes from './Logo.module.css';
const logo = () => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="Burger logo"/>
    </div>
);

export default  logo;