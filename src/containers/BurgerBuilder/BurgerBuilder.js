import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import Controls from '../../components/Controls/Controls'
import Modal from '../../components/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import Backdrop from '../../components/Backdrop/Backdrop';
import axios from '../../axios-orders'; //from the instance
import Spinner from '../../components/Spinner/Spinner'

const INGREDIENTS_PRICES = {
    meat: 3,
    cheese: 1.5,
    salad: 1,
    bacon: 2
};

class BurgerBuilder extends Component { 
    state = {
        ingredients: {},
        totalPrice: 0,
        showOrderSummary: false,
        loadingPurchase: false,
        errorPurchase: false,
        errorIngredients: false
        
    };

componentDidMount() {
    axios.get('/ingredients.json')
    .then(res => {
        const ingredients = res.data;
        this.setState({ ingredients });
    })
    .catch(err => {
        this.setState({
            errorIngredients: err
        });
    });
}

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
        showOrderSummary: false,
        errorPurchase: false
    })
}

continuePurchaseHandler = () => {
     const params = Object.entries(this.state.ingredients);
     const orderParams = []; //will be[bacon=0, cheese=1, ecc]
     for(let param of params) {
            orderParams.push(param.join("="));
     } 
    this.props.history.push({
        pathname: '/my-orders',
        search: "?" + orderParams.join("&") //passing query parameters to url
    });
    
//    this.setState({loadingPurchase: true});
//    const order = {
//        ingredients: this.state.ingredients,
//        price: this.state.totalPrice,
//        customer: {
//            name: "Giuseppe",
//            address: {
//                street: "test-street",
//                zipCode: 74027,
//                country: "Italy"
//            },
//            email: "email@gmail.com"
//        },
//        deliveryMethod: "fastest"
//    };
//    
//    axios.post('/orders.json', order)
//        .then(response => {
//            this.setState({
//                loadingPurchase: false,
//                showOrderSummary: false
//            });
//        this.props.history.push('/my-orders');
//        
//        })
//        .catch(err => {
//            this.setState({
//                loadingPurchase: false,
//                errorPurchase: err
//            });
//        
//        })//firebase uses a mongoDB like structure. We dont have tables, we have kind of json like nested structure. If we make a request to /orders, it will create a node and stores our orders beneath that node
}

    render () {
        let modalContent;
        if(this.state.loadingPurchase) {
            modalContent = <Spinner />
        } else {
            modalContent = <OrderSummary 
                            price={this.state.totalPrice}
                            ingredients={this.state.ingredients}
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
                <Burger ingredients={this.state.ingredients}/>
                <Controls 
                    price={this.state.totalPrice}
                    ingredients={this.state.ingredients}
                    increase={this.increaseHandler}
                    decrease={this.decreaseHandler}
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


export default BurgerBuilder