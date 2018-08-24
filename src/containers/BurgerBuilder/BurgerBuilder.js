import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import Controls from '../../components/Controls/Controls'
import Modal from '../../components/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import Backdrop from '../../components/Backdrop/Backdrop'

const INGREDIENTS_PRICES = {
    meat: 3,
    cheese: 1.5,
    salad: 1,
    bacon: 2
};

class BurgerBuilder extends Component { //purecomponent per evitare il render quando clicco nuovamente su showModal
    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        },
        totalPrice: 0,
        showOrderSummary: false
        
    };


increaseHandler = (key) => {
    const ingredients = {...this.state.ingredients} //make a copy of ingredients
    const partialPrice = INGREDIENTS_PRICES[key];
    ingredients[key] += 1;
    this.setState(prevState => ({ 
        ingredients,
        totalPrice: prevState.totalPrice += partialPrice
    }));
   
}

decreaseHandler = (key) => {
   const ingredients = {...this.state.ingredients} //make a copy of ingredients
   const partialPrice = INGREDIENTS_PRICES[key];
   if(ingredients[key] > 0) {
        ingredients[key] -= 1;
        this.setState(prevState => ({
            ingredients,
            totalPrice: prevState.totalPrice -= partialPrice
        })); 
   }
}

showOrderSummary = () => {
    this.setState({
        showOrderSummary: true
    })
}

hideOrderSummary = () => {
    this.setState({
        showOrderSummary: false
    })
}

continuePurchaseHandler = () => {
    alert("U can continue!")
}

    render () {
        console.log("render")
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <Controls 
                    price={this.state.totalPrice}
                    ingredients={this.state.ingredients}
                    increase={this.increaseHandler}
                    decrease={this.decreaseHandler}
                    showModal={this.showOrderSummary}
                />
               <Backdrop show={this.state.showOrderSummary} hideModal={this.hideOrderSummary}/>
               <Modal show={this.state.showOrderSummary}>
                    <OrderSummary 
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        hideModal={this.hideOrderSummary}
                        continuePurchase={this.continuePurchaseHandler}/>
               </Modal>
            </Aux>
        
        ) 
    }
}


export default BurgerBuilder