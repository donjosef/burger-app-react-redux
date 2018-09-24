import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../store/actions/auth';
import Button from '../../components/Button/Button';
import classes from './Auth.css'

class Auth extends Component {

    state = {
      email: '',
      pass: ''
    }

    inputHandler = (e) => {
        switch(e.target.name) {
          case 'email':
              this.setState({ email: e.target.value });
              break;
          case 'password':
              this.setState({ pass: e.target.value})
        }
    }

    submitHandler = (e) => {
      e.preventDefault();
      this.props.onAuth(this.state.email, this.state.pass);
    }
    render() {
      let validationPass = null;
      let isEmailValid;
      const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(regx.test(this.state.email)) {
        isEmailValid = true;
      } else {
        isEmailValid = false;
      }
      if(this.state.pass.length < 6 ) {
         validationPass = <p>Password must be at least 6 characters</p>;
      }

      return (
          <div className={classes.Auth}>
            <form onSubmit={this.submitHandler}>
              <input
                  value={this.state.email}
                  onChange={this.inputHandler}
                  name='email'
                  type='email'
                  placeholder='Email'/>
              <input
                  value={this.state.pass}
                  onChange={this.inputHandler}
                  name='password'
                  type='password'
                  placeholder='Password'/>
              {validationPass}
              {isEmailValid && !validationPass ? (
               <Button type="Success">SUBMIT</Button>
              ) : (
               <p style={{color: "#944317", fontWeight: "bold"}}>Enter a valid email and password</p>
              )}

            </form>

          </div>

      )
    }
}


const mapDispatchToProps = dispatch => {
    return {
      onAuth: (email, password) => dispatch(auth(email, password))
    }
}
export default connect(null, mapDispatchToProps)(Auth);
