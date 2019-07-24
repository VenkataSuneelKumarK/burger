/**
 * Created by kanamars on 22/07/19.
 */
import React from 'react';
import classes from './NavigationItem.module.css'
const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <a href={props.link} className={props.active ? classes.active : null}>{props.children}</a>
    </li>
);

export default navigationItem;