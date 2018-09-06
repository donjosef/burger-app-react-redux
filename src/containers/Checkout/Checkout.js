import React, {Component} from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';
class Checkout extends Component {
    state = {
        ingredients: {},
        totalPrice: 0
    }
    
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search); //iterator. Extract the query params from url
        const ingredients = {};
        let totalPrice = 0;
        for(let param of params) {
            if(param[0] === "price") {
                totalPrice = param[1];
            } else {
                ingredients[param[0]] = Number(param[1]);
            }
        }

        this.setState({ ingredients, totalPrice });
    }
    
    backToHomeHandler = () => {
        this.props.history.push('/');
    }
    
    continueCheckoutHandler = () => {
        this.props.history.push('/checkout/contact-data');
    }
    
    
    render() {
        return (
            <div>
              <CheckoutSummary 
                ingredients={this.state.ingredients}
                backToHomeHandler={this.backToHomeHandler}
                continueCheckout={this.continueCheckoutHandler}/>
              <Route 
                path={this.props.match.url + '/contact-data'} 
                render={(props) => <ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props}/>} 
              />
            </div>
        );
    }
} 

export default Checkout;