import React from 'react'
import Aux from '../../hoc/Auxiliary'
import Button from '../Button/Button'

const orderSummary = props => {
    const {hideModal, continuePurchase} = props;
    const summaryIngredients = Object.keys(props.ingredients).map(igKey => (
        <li key={igKey}>
            <span style={{textTransform: "uppercase"}}>{igKey}: {props.ingredients[igKey]}</span>
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
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button clicked={hideModal} type="Danger">CANCEL</Button>
            <Button clicked={continuePurchase} type="Success">CONTINUE</Button>
        </Aux>
    );
    
}

export default orderSummary;