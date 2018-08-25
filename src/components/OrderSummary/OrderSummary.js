import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Button from '../Button/Button'
import PropTypes from 'prop-types'

class OrderSummary extends Component { 
    render() {
         const {ingredients, price, hideModal, continuePurchase} = this.props;
         const summaryIngredients = Object.keys(ingredients).map(igKey => (
                <li key={igKey}>
                    <span style={{textTransform: "uppercase"}}>{igKey}: {ingredients[igKey]}</span>
                </li>
        ));
        
        return (
            <Aux>
                <h3>Order summary:</h3>
                <hr />
                <p>You burger has the following ingredients:</p>
                <ul>
                   {summaryIngredients}
                </ul>
                <p><strong>Total Price: ${price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button clicked={hideModal} type="Danger">CANCEL</Button>
                <Button clicked={continuePurchase} type="Success">CONTINUE</Button>
            </Aux>
        )
    }
}

OrderSummary.propTypes = {
    ingredients: PropTypes.object.isRequired,
    hideModal: PropTypes.func.isRequired,
    continuePurchase: PropTypes.func.isRequired,
    price: PropTypes.number.isRequired
};

export default OrderSummary;