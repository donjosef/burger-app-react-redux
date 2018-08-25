import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = props => (
    <header className={classes.Toolbar}>
        <button onClick={props.openSideBar}>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <Logo />
        <nav>
            <NavigationItems type="Desktop"/>
        </nav>
    </header>
)

export default toolbar;