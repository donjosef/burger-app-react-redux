import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import Controls from '../../components/Controls/Controls'
import Modal from '../../components/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import Backdrop from '../../components/Backdrop/Backdrop';
import axios from '../../axios-orders'; //from the instance
import Spinner from '../../components/Spinner/Spinner'
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes'

class BurgerBuilder extends Component {
    state = {
        showOrderSummary: false,
        loadingPurchase: false,
        errorPurchase: false,
        errorIngredients: false
    };

componentDidMount() {
    this.props.reset();
    axios.get('/ingredients.json')
    .then(res => {
        const ingredients = res.data;
        // this.setState({ ingredients });
        this.props.setIngredients(ingredients); //now handled through dispatch

    })
    .catch(err => {
        this.setState({
            errorIngredients: err
        });
    });
}

showOrderSummary = () => {
    this.setState({
        showOrderSummary: true
    })
}

hideOrderSummary = () => {
    this.setState({
        showOrderSummary: false,
        errorPurchase: false
    })
}

continuePurchaseHandler = () => { //continue button of orderSummary
    this.props.history.push('/checkout');
}


    render () {
        let modalContent;
        if(this.state.loadingPurchase) {
            modalContent = <Spinner />
        } else {
            modalContent = <OrderSummary
                            price={this.props.totalPrice}
                            ingredients={this.props.ingredients}
                            hideModal={this.hideOrderSummary}
                            continuePurchase={this.continuePurchaseHandler}/>
        }
        if(this.state.errorPurchase) {
            modalContent = <p>Something went wrong {this.state.errorPurchase.message}</p>
        }

        return(
            <Aux>
            {this.state.errorIngredients && (
              <h1>
                 Cannot load any ingredients: {this.state.errorIngredients.message.slice(this.state.errorIngredients.message.indexOf("status"))}
              </h1>)
            }
                <Burger ingredients={this.props.ingredients}/>
                <Controls
                    price={this.props.totalPrice}
                    ingredients={this.props.ingredients}
                    increase={this.props.increaseHandler}
                    decrease={this.props.decreaseHandler}
                    showModal={this.showOrderSummary}
                />
               <Backdrop show={this.state.showOrderSummary} clicked={this.hideOrderSummary}/>
                <Modal show={this.state.showOrderSummary}>
                    {modalContent}
                </Modal>
            </Aux>

        )
    }
}

const mapStateToProps = state => {
    return {
      ingredients: state.ingredients.ingredients,
      totalPrice: state.totalPrice.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
      increaseHandler: (ingrType) => dispatch({type: actionTypes.INCREASE, ingrType}),
      decreaseHandler: (ingrType) => dispatch({type: actionTypes.DECREASE, ingrType}),
      setIngredients: (ingredients) => dispatch({type: actionTypes.SET_INGREDIENTS, ingredients}),
      reset: () => dispatch({type: actionTypes.RESET}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder)
