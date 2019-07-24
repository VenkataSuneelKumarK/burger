/**
 * Created by kanamars on 21/07/19.
 */
import React from 'react';
import classes from './ToolBar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolBar = (props) =>{

    return(
    <header className={classes.ToolBar}>
        <DrawerToggle menuClick={props.menuClick}/>
        <div className={classes.Logo}>
         <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
    );
};

export default toolBar;