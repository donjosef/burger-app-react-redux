import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideBar.css'

const sidebar = props => {
    
    return (
        <div className={classes.SideBar}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
            
        </div>
    );
};

export default sidebar;