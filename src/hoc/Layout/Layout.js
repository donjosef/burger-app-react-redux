import React, { Component } from 'react'
import Aux from '../Auxiliary/Auxiliary'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import classes from './Layout.css'
import SideBar from '../../components/Navigation/SideBar/SideBar'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Layout extends Component {

    state = {
        showSideBar: false
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
                <Toolbar loggedIn={this.props.loggedIn} openSideBar={this.openSideBarHandler}/>
                <SideBar loggedIn={this.props.loggedIn} open={this.state.showSideBar} close={this.closeSideBarHandler}/>
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
export default withRouter(connect(mapStateToProps)(Layout));
