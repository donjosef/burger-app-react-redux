import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'

const toolbar = props => (
    <header className={classes.Toolbar}>
        <div>Menu Button</div>
        <Logo />
    </header>
)

export default toolbar;