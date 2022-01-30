import classes from "./MealPlanner.module.css"
import {useContext} from "react";
import IngredientsContext from "../../contexts/ingredients-context";

const MealPlanner = () => {
    const context = useContext(IngredientsContext);
    console.log(context.ingredients);

    return <div style={{color: "white"}}>
        <ul style={{color: "white"}}>
            {context.ingredients.map(ingredient => {
                return <li key={ingredient.idIngredient}>{ingredient.strIngredient}</li>
            })}
        </ul></div>
}

export default MealPlanner;