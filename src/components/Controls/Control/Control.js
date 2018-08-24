import React from 'react'
import classes from './Control.css'

const control = props => {
    const {type, qty, increase, decrease} = props;
    let disabled = true;
    if(qty > 0) {
        disabled = false;
    }
    
    return (
        <div className={classes.Control}>
           <p className={classes.Type}>{type}: {qty}</p>
           <div>
            <button onClick={() => increase(type)} className={classes.More}>More</button>
            <button 
                onClick={() => decrease(type)} 
                className={classes.Less}
                disabled={disabled}
            >Less</button>
           </div>
        </div>
    
    )
}

export default control;