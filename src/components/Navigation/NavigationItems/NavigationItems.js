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
            <NavigationItem link="/" closeSideBar={props.closeSideBar}>Burger Builder</NavigationItem>
            {props.loggedIn && <NavigationItem link="/orders" closeSideBar={props.closeSideBar}>Orders</NavigationItem>}
            {props.loggedIn ? <NavigationItem link="/logout" closeSideBar={props.closeSideBar}>Logout</NavigationItem> : (
              <NavigationItem link="/auth" closeSideBar={props.closeSideBar}>Authenticate</NavigationItem>
            )}

        </ul>
    )

}

export default navigationItems;
