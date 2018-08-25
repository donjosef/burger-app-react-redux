import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideBar.css'
import Backdrop from '../../Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliary/Auxiliary'

const sidebar = props => {
    let dynamicClasses = [classes.SideBar, classes.Close];
    if(props.open) {
        dynamicClasses = [classes.SideBar, classes.Open];
    }
    
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.close}/>
            <div className={dynamicClasses.join(" ")}>
                <Logo />
                <nav>
                    <NavigationItems type="Mobile"/>
                </nav>
                
            </div>
        </Aux>
    );
};

export default sidebar;