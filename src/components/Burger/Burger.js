import React from 'react'
import Ingredient from './Ingredient/Ingredient'
import classes from './Burger.css'


const burger = props => {
    const {ingredients} = props;
    const noIngredients = Object.values(ingredients).every(qty => qty === 0); //true or false
    let ingrComponents = Object.keys(ingredients).map(ingrKey => {
        
        //Per ogni ingrKey ritorna un sub-array vuoto. Trasformo gli elementi di questo sub-array vuoto in Components. Avrò quindi una serie di sub-arrays con all'interno Components a seconda di quanto è lungo questo sub-array 
        return [...Array(ingredients[ingrKey])].map((_, idx) => (
            <Ingredient key={ingrKey + idx} type={ingrKey}/>
        ));
    }); //Array di sub-arrays di object component
    
    if(noIngredients) {
        ingrComponents = <p>Start adding some ingredients!</p>;
    } 
    
    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top"/>
              {ingrComponents} 
            <Ingredient type="bread-bottom"/>
        </div>
    );
}

export default burger;