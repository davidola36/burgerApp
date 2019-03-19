import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'


const controls = [
    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'bacon'},
    {label:'Cheese', type: 'cheese'},
    {label:'Meat', type: 'meat'}
];
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Total price is: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=> {
            return <BuildControl key={ctrl.label} label ={ctrl.label} added={()=>props.ingredientAddded(ctrl.type)}
                    removed={()=>props.ingredientDeducted(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                    />
        })}
        <button disabled={!props.purchasable} className={classes.OrderButton} onClick={props.ordered}>ORDER NOW</button>
    </div>
)

export default buildControls