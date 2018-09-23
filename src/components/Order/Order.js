import React from 'react';
import classes from './Order.css';

const order = props => {
  const orderIngredients = Object.keys(props.ingredients).map(igKey => (
         <span key={igKey}>
             {igKey}({props.ingredients[igKey]})
         </span>
  )).reduce((prev, curr) => [prev, ' ', curr]); //transform ingredients object in array of span element, then separate them with a blank space

    return (
      <div className={classes.Order}>
        <p>Ingredients: {orderIngredients}</p>
        <p>Price: <strong>{props.price}</strong></p>
      </div>

    )


}

export default order;
