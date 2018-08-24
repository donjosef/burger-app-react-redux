import React, { Component } from 'react'
import classes from './BurgerIngredient.css'
import PropTypes from 'prop-types'

class Ingredient extends Component {
    render() {
        let myIngredient = null;

        switch(this.props.type) {
            case "bread-bottom": 
                myIngredient = <div className={classes.BreadBottom}></div>
                break;
            case "bread-top":
                myIngredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case "meat": 
                myIngredient = <div className={classes.Meat}></div>
                break;
            case "salad": 
                myIngredient = <div className={classes.Salad}></div>
                break;
            case "bacon": 
                myIngredient = <div className={classes.Bacon}></div>
                break;
            case "cheese": 
                myIngredient = <div className={classes.Cheese}></div>
                break;
            default: 
                myIngredient = null;

        }

        return myIngredient;  
    }
} 

Ingredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default Ingredient