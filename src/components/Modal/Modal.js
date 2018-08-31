import React, { Component } from 'react';
import classes from './Modal.css'

class Modal extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || (this.props.show && nextProps.children !== this.props.children);
    } //improve performance. So for example if i click on more or less buttons, avoid to update the modal. The second check is important for the spinner to display
    
    
    render() {
        console.log("[updating modal...]")
        let modalClasses = [];
        if(this.props.show) {
            modalClasses.push(classes.Show);
        } else {
            modalClasses.push(classes.Show, classes.Offscreen)
        }
    
        return (
            <div className={modalClasses.join(" ")}>
                {this.props.children}
            </div>
        )
    }
    
} 
    
export default Modal;