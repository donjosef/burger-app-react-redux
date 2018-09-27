import React from 'react';
import classes from './Order.css';

const order = props => {
  const orderIngredients = Object.keys(props.ingredients).map(igKey => (
         <span key={igKey}>
             {igKey}({props.ingredients[igKey]})
         </span>
  )).reduce((prev, curr) => [prev, ' ', curr]); //transform ingredients object in array of span element, then separate them with a blank space
  const purchaseDate = new Date(props.purchaseDate); //props.purchaseDate is a string retrieved from the server. Transform it into date Object
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

  const time = `${purchaseDate.getHours()}:${purchaseDate.getMinutes()}:${purchaseDate.getSeconds()}`;
  const month =  monthNames[purchaseDate.getMonth()];
  const day = purchaseDate.getDate();

    return (
      <div className={classes.Order}>
        <section className={classes.Date}>
          <span>{day} {month}</span>
          <span>{time}</span>
        </section>
        <p className={classes.Ingr}>Ingredients: {orderIngredients}</p>
        <p className={classes.Price}>Price: <strong>{props.price}</strong></p>
      </div>

    )


}

export default order;
