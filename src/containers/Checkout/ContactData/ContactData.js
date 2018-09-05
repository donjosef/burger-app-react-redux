import React, { Component } from 'react';
import Button from '../../../components/Button/Button'
import classes from './ContactData.css'

class ContactData extends Component {
    
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
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
                    <Button type="SubmitOrder">ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;