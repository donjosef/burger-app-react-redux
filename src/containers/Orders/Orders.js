import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import { fetchOrders } from '../../store/actions/orders';
import { connect } from 'react-redux';

class Orders extends Component {

  componentDidMount() {
    this.props.fetchOrders() //now handled by redux thunk and action creators
  }
    render() {
        let orders = this.props.orders.map(order => (
          <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.price}/>
        ));
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
    err: state.orders.ordersErr
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: () => dispatch(fetchOrders())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
