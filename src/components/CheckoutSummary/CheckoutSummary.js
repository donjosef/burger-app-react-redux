import React from 'react'
import Burger from '../Burger/Burger'
import Button from '../Button/Button'
import classes from './CheckoutSummary.css'

const checkoutSummary = props => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Your Order</h1>
            <Burger ingredients={{}}/>
            <Button type="Success" clicked>Continue</Button>
            <Button type="Danger" clicked>Cancel</Button>
        </div>
    );
}

export default checkoutSummary;