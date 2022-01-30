import {useState} from "react";
import IngredientsContext from "./ingredients-context";

const IngredientsContextProvider = props => {
    const [ingredientsState, setIngredientsState] = useState(null);

    const setIngredients = ingredients => {
        setIngredientsState(ingredients);
    }

    const clearIngredients = () => {
        setIngredientsState(null);
    }

    const ingredientsContext = {
        ingredients: ingredientsState,
        setIngredients,
        clearIngredients
    }

    return <IngredientsContext.Provider value={ingredientsContext}>
        {props.children}
    </IngredientsContext.Provider>

}

export default IngredientsContextProvider;