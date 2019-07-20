/**
 * Created by kanamars on 18/07/19.
 */
import React from 'react';
import classes from './BuildControl.module.css';
const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>
            {props.label}
        </div>
        <button onClick={()=>props.less(props.type)}>Less</button>
        <button onClick={()=>props.more(props.type)}>More</button>
        {/*<button >Less</button>*/}
        {/*<button >More</button>*/}
    </div>
);

export default buildControl;
