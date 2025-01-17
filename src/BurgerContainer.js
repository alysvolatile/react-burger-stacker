import React, { Component } from 'react';
import Ingredients from './Ingredients';
import BurgerStacker from './BurgerStacker';

const filteredIngredientList = []

class BurgerContainer extends Component {
    state = {
        ingredientsToDisplay: [],
        // we want to click a button which will add that ingredient to the display Array
    }
    // handle ingredientChange function which we will pass down to ingredients
    handleIngredientChange = (e) => {
        // we want to use the button VALUE as the includes function
        const filterValue = e.target.value;
        this.props.ingredients.map(ingredient => {
            if (ingredient.name === filterValue) {
                filteredIngredientList.push(ingredient)
                return
            } else {
                return
            }
        })
        this.setState(() => {
            return {
                ingredientsToDisplay: filteredIngredientList
            }
        })
    }
    // handle remove ingredients
    handleRemoveIngredients = (e) => {
        // remove ALL
        while (filteredIngredientList[0]) {
            filteredIngredientList.pop()
        }
        this.setState(() => {
            return {
                ingredientsToDisplay: filteredIngredientList
            }
        })
    }
    handleRemoveLastIngredient = (e) => {
        if (filteredIngredientList[0]) {
                filteredIngredientList.pop()
            }
        this.setState(() => {
            return {
                ingredientsToDisplay: filteredIngredientList
            }
        })
    }
    // render
    render() {
        return (
            <div className="App">
                <Ingredients 
                    ingredients={this.props.ingredients} 
                    onChange={this.handleIngredientChange}
                />
                <BurgerStacker 
                    displayIngredients={this.state.ingredientsToDisplay}
                    onChange={this.handleRemoveIngredients}
                    removeLast={this.handleRemoveLastIngredient}
                />
            </div>
        );
    }
}

export default BurgerContainer;
