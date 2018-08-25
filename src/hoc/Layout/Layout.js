import React, { Component } from 'react'
import Aux from '../Auxiliary/Auxiliary'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import classes from './Layout.css'
import SideBar from '../../components/Navigation/SideBar/SideBar'

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
                <Toolbar openSideBar={this.openSideBarHandler}/>
                <SideBar open={this.state.showSideBar} close={this.closeSideBarHandler}/>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
    
}
    
    
export default Layout;