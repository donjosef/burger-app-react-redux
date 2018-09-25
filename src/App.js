import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import Logout from './containers/Auth/Logout/Logout'
import {BrowserRouter, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
              <Layout>
                <Route exact path='/' component={BurgerBuilder}/>
                <Route path='/orders' component={Orders}/>
                <Route path='/auth' component={Auth} />
                <Route path='/checkout' component={Checkout}/>
                <Route path='/logout' component={Logout} />
              </Layout>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
