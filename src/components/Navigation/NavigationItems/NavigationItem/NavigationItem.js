import React from 'react'
import classes from './NavigationItem.css'
import { NavLink } from 'react-router-dom'

/* activeClassName={classes.active} viene utilizzata per via dei css modules che stiamo usando. Se usassimo semplicemente la classe active fornitaci automaticamente da NavLink, dato che usiamo i css modules come classes.something, le classi vengono fuori con un nome diverso da active, quindi nessuna classe active verrebbe applicata*/
const navigationItem = props => (
    <li className={classes.NavigationItem}>
        <NavLink exact to={props.link} activeClassName={classes.active}>{props.children}</NavLink>
    </li>
);

export default navigationItem;