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

class BurgerBuilder extends Component {
    state = {
        showOrderSummary: false,
        loadingPurchase: false,
        errorPurchase: false,
        errorIngredients: false
    };

// componentDidMount() {
//     axios.get('/ingredients.json')
//     .then(res => {
//         const ingredients = res.data;
//         console.log(ingredients)
//         this.setState({ ingredients });
//     })
//     .catch(err => {
//         this.setState({
//             errorIngredients: err
//         });
//     });
// }

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
     const params = Object.entries(this.state.ingredients);
     const orderParams = []; //will be[bacon=0, cheese=1, ecc]
     orderParams.push('price=' + this.state.totalPrice);
     for(let param of params) {
            orderParams.push(param.join("="));
     }
    this.props.history.push({
        pathname: '/checkout',
        search: "?" + orderParams.join("&") //passing query parameters to url
    });


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

        console.log("render of BurgerBuilder")
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
      increaseHandler: (ingrType) => dispatch({type: 'INCREASE', ingrType}),
      decreaseHandler: (ingrType) => dispatch({type: 'DECREASE', ingrType}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder)
