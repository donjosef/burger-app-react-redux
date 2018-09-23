import React, { Component } from 'react';
import Button from '../../../components/Button/Button'
import Spinner from '../../../components/Spinner/Spinner'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import {connect} from 'react-redux';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loadingOrder: false,
    }

    inputChangeHandler = (e) => {
        let address = {...this.state.address};
        switch(e.target.name) {
            case "name":
                this.setState({
                  name: e.target.value
              });
                break;
            case "email":
                 this.setState({
                  email: e.target.value
              });
                break;
            case "street":
                address['street'] = e.target.value;
                this.setState({ address });
                break;
            case "postal":
                address['postalCode'] = e.target.value;
                this.setState({ address });
        }

    }

    orderingBurgerHandler = (e) => {
        e.preventDefault();
        const {loadingOrder, ...customer} = this.state;
        this.setState({loadingOrder: true});
        const order = {
            ingredients: this.props.ings, //retrieved by redux store
            price: this.props.price,//retrieved by reudx store
            customer
        };


        axios.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loadingOrder: false,
                });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({
                    loadingOrder: false,
                });
            }) //firebase uses a mongoDB like structure. We dont have tables, we have kind of json like nested structure. If we make a request to /orders, it will create a node and stores our orders beneath that node

    }

    render() {
        let validationPostal = null;
        if(this.state.address.postalCode.length > 0 && this.state.address.postalCode.length < 5 ) {
           validationPostal = <p>Postal code must be at least 5 characters</p>;
        }
        const {loadingOrder, ...formElementsData} = this.state;

        const formElementsValues = [];
        for(let key in formElementsData) {
            if(typeof formElementsData[key] === "object") {
                for(let addressKey in formElementsData[key]) {
                    formElementsValues.push(formElementsData[key][addressKey]);
                }
            } else {
                formElementsValues.push(formElementsData[key]);
            }
        }
        console.log(formElementsValues)
        const allElementsFilled = formElementsValues.every(value => value.length > 0); //true or false
        let form = (
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={this.state.name}
                    onChange={this.inputChangeHandler}/>
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={this.state.email}
                    onChange={this.inputChangeHandler}/>
                <input
                    type="text"
                    name="street"
                    placeholder="Your Street"
                    value={this.state.address.street}
                    onChange={this.inputChangeHandler}
                    />
                <input
                    type="text"
                    name="postal"
                    placeholder="Your Postal Code"
                    value={this.state.address.postalCode}
                    onChange={this.inputChangeHandler}
                />
                {validationPostal}

               {allElementsFilled && !validationPostal ? (
                <Button type="SubmitOrder" clicked={this.orderingBurgerHandler}>ORDER</Button>
               ) : (
                <p style={{color: "#944317", fontWeight: "bold"}}>Please complete all the fields to make an order</p>
               )}
            </form>
        );
        if(this.state.loadingOrder) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => ({
  ings: state.ingredients.ingredients,
  price: state.totalPrice.totalPrice
});

export default connect(mapStateToProps)(ContactData);
