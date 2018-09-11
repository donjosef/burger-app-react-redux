import React, {Component} from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
class Checkout extends Component {

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
                ingredients={this.props.ingredients}
                backToHomeHandler={this.backToHomeHandler}
                continueCheckout={this.continueCheckoutHandler}/>
              <Route
                path={this.props.match.url + '/contact-data'}
                component={ContactData}
              />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ingredients: state.ingredients.ingredients
});


export default connect(mapStateToProps)(Checkout);
