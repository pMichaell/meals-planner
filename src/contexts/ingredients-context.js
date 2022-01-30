import {createContext} from "react";

const IngredientsContext = createContext( {
    ingredients: [],
    setIngredients: ingredients => {},
    clearIngredients: () => {}
})

export default IngredientsContext;