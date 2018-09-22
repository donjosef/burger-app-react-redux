import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import { fetchOrders } from '../../store/actions/orders';
import { connect } from 'react-redux';

class Orders extends Component {

  componentDidMount() {
    this.props.fetchOrders() //now handled by redux thunk and action creators
  }
    render() {

        return (
            <div>
                <Order />
                <Order />
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
