import React from 'react'
import Burger from '../Burger/Burger'
import Button from '../Button/Button'
import classes from './CheckoutSummary.css'

const checkoutSummary = props => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Your Order</h1>
            <Burger ingredients={props.ingredients}/>
            <Button type="Success" clicked={props.continueCheckout}>Continue</Button>
            <Button type="Danger" clicked={props.backToHomeHandler}>Cancel</Button>
        </div>
    );
}

export default checkoutSummary;