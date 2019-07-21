/**
 * Created by kanamars on 18/07/19.
 */
import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { "label": "Salad", type:"salad"},
    { "label": "Bacon", type:"bacon"},
    { "label": "Cheese", type:"cheese"},
    { "label": "Meat", type:"meat"}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map((control) => <BuildControl
            label={control.label}
            type={control.type}
            key={control.label}
            less={props.less}
            more={props.more}
            disableIng={props.disableInfo[control.type]}/>)}
    </div>
);

export default buildControls;