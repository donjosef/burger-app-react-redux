import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css';

const navigationItems = props => {
    let dynamicClasses = [];
    
    if(props.type === "Mobile") {
        dynamicClasses.push(classes.Mobile) 
    } else {
        dynamicClasses.push(classes.Desktop)
    }
    
    return (
        <ul className={dynamicClasses.join(" ")}>
            <NavigationItem active link="/">Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    )
    
}

export default navigationItems;