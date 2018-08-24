import React from 'react'
import Aux from '../../hoc/Auxiliary'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.css'
import SideBar from '../Navigation/SideBar/SideBar'
const layout = props => {
    return (
        <Aux>
            <Toolbar />
            <SideBar />
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
    )
    
    
    
}
    
export default layout;