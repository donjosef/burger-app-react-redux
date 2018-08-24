import React from 'react';
import classes from './Modal.css'

const modal = props => {
    
    let modalClasses = [];
    if(props.show) {
        modalClasses.push(classes.Show);
    } else {
        modalClasses.push(classes.Show, classes.Offscreen)
    }
    
    return (
        <div className={modalClasses.join(" ")}>
            {props.children}
        </div>
    
    )
    
}


export default modal;