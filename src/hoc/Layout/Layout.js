import React, { Component } from 'react'
import Aux from '../Auxiliary/Auxiliary'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import classes from './Layout.css'
import SideBar from '../../components/Navigation/SideBar/SideBar'
import { authSuccess } from '../../store/actions/auth';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Layout extends Component {

    state = {
        showSideBar: false
    }

    componentDidMount() {
      if(!this.isStorageEmpty()) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        this.props.onSetAuthState(token, userId);
      }
    }

    isStorageEmpty = () => {
      if(localStorage.getItem('token')) {
        return false;
      } else {
        return true;
      }
    }

    openSideBarHandler = () => {
       this.setState({
           showSideBar: true
       })
    }

    closeSideBarHandler = () => {
        this.setState({showSideBar: false})
    }

    render() {
        console.log("render of Layout Component")
        return (
            <Aux>
                <Toolbar loggedIn={this.props.loggedIn || !this.isStorageEmpty()} openSideBar={this.openSideBarHandler}/>
                <SideBar loggedIn={this.props.loggedIn || !this.isStorageEmpty()} open={this.state.showSideBar} close={this.closeSideBarHandler}/>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }

}

const mapStateToProps = state => {
    return {
      loggedIn: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onSetAuthState: (token, userId) => dispatch(authSuccess(token, userId))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
