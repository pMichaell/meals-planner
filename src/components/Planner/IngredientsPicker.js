import classes from "./IngredientsPicker.module.css"
import ingredients from "../../assets/ingredients"
import Ingredient from "./Ingredient";
import {useParams} from "react-router-dom";

const IngredientsPicker = () => {
    const params = useParams();

    return <div className={classes.div}>
        <div className={classes.headerContainer}><h2>Pick up to 3 ingredients and see great breakfast proposals!</h2></div>
        <div className={classes.ingredientsContainer}>
            {ingredients.map(ingredient => {
                return <Ingredient key={ingredient.idIngredient} {...ingredient}/>
            })
            }
        </div>
    </div>
}



export default IngredientsPicker;