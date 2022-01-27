import classes from "./IngredientsPicker.module.css"
import data from "../../../assets/ingredients"
import Ingredient from "./Ingredient";
import {useState} from "react";
import {useParams} from "react-router-dom";
import PickedIngredients from "./PickedIngredients";


const IngredientsPicker = () => {
    const [pickedIngredients, setPickedIngredients] = useState([]);
    const params = useParams();
    let ingredients = data;

    const addIngredient = ingredient => {
        if (pickedIngredients.length >= 3) {
            let updatedPickedIngredients = [...pickedIngredients];
            updatedPickedIngredients = updatedPickedIngredients.fill(ingredient, updatedPickedIngredients.length-1);
            updatedPickedIngredients.pop();
            setPickedIngredients(updatedPickedIngredients);
        }
        setPickedIngredients(prevState => [...prevState, ingredient])
    }

    const deleteIngredient = ingredientId => {
        let updatedPickedIngredients = pickedIngredients.filter(ingredient => ingredient.idIngredient !== ingredientId)
        setPickedIngredients(updatedPickedIngredients);
    }

    const getIngredients = input => {
        return input.map(ingredient => {
            return <Ingredient key={ingredient.idIngredient} ingredient={ingredient}
                               func={{addIngredient, deleteIngredient}}
                                pickedIngredients={pickedIngredients}
            />
        })
    }

    const headerContents = pickedIngredients.length > 0 ?
        <PickedIngredients ingredients={getIngredients(pickedIngredients)}/> :
        <div className={classes.headerContainer}>
            <h2>Pick up to 3 ingredients and see great {params.meal} proposals!</h2>
        </div>




    return <div className={classes.div}>
        {headerContents}
        <div className={classes.ingredientsContainer}>
            {getIngredients(ingredients)}
        </div>
    </div>
}


export default IngredientsPicker;