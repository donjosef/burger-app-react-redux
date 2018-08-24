import React from 'react'
import Control from './Control/Control'
import classes from './Controls.css'

const controls = props => {
    const {ingredients, price, increase, decrease, showModal} = props;
    const ingredientsControls = Object.keys(ingredients).map(ingrKey => (
        <Control 
            key={ingrKey} 
            type={ingrKey}
            qty={ingredients[ingrKey]}
            increase={increase}
            decrease={decrease}
        />
    ));
    
    let disabled = Object.values(ingredients).every(value => value === 0); //true or false
      
    return (
        <div className={classes.Controls}>
          <p style={{textAlign: "center"}}>Price: <strong>${price.toFixed(2)}</strong></p>
          {ingredientsControls}
           <button 
            className={classes.Order} 
            disabled={disabled}
            onClick={showModal}>Order Now</button>
        </div>
    
    )
}

export default controls;