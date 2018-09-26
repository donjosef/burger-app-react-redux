import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import Spinner from '../../components/Spinner/Spinner';
import { fetchOrders } from '../../store/actions/orders';
import { connect } from 'react-redux';

class Orders extends Component {

  componentDidMount() { //if user refresh the page the token on the state is lost. So get it from localStorage instead
    if(localStorage.getItem('token')) {
      this.props.fetchOrders(localStorage.getItem('token'), localStorage.getItem('userId'))
    } else {
      this.props.fetchOrders(this.props.token, this.props.userId)//now handled by redux thunk and action creators
    }
  }
    render() {
        let orders = <Spinner />;

        if(!this.props.loading) {
            orders = this.props.orders.map(order => (
              <Order
                  key={order.id}
                  ingredients={order.ingredients}
                  price={order.price}/>
            ));
        }
        if(this.props.err) {
          orders = <h2>Error occured while fetching the orders. Status {this.props.err.response.status}</h2>
        }
        return (
            <div>
              {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    orders: state.orders.orders,
    loading: state.orders.loading,
    err: state.orders.ordersErr,
    token: state.auth.token,
    userId: state.auth.userId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: (token, userId) => dispatch(fetchOrders(token, userId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
