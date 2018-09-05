import React, {Component} from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {}
    }
    
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search); //iterator. Extract the query params from url
        const ingredients = {};
        for(let param of params) {
          ingredients[param[0]] = Number(param[1]);
        }

        this.setState({ ingredients });
    }
    
    backToHomeHandler = () => {
        this.props.history.push('/');
    }
    
    continueCheckoutHandler = () => {
        this.props.history.push('/my-orders/contact-data');
    }
    
    render() {
        return (
            <div>
              <CheckoutSummary 
                ingredients={this.state.ingredients}
                backToHomeHandler={this.backToHomeHandler}
                continueCheckout={this.continueCheckoutHandler}/>
            </div>
        );
    }
} 

export default Checkout;