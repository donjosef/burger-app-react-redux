import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import Spinner from '../../components/Spinner/Spinner';
import { fetchOrders } from '../../store/actions/orders';
import { connect } from 'react-redux';

class Orders extends Component {

  componentDidMount() {
    this.props.fetchOrders(this.props.token) //now handled by redux thunk and action creators
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
    token: state.auth.token
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: (token) => dispatch(fetchOrders(token))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
