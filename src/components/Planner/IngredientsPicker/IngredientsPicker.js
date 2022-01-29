import classes from "./IngredientsPicker.module.css"
import data from "../../../assets/ingredients"
import Ingredient from "./Ingredient";
import {useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import PickedIngredients from "./PickedIngredients";
import SearchBar from "../../SearchBar/SearchBar";


const IngredientsPicker = () => {
    const [pickedIngredients, setPickedIngredients] = useState([]);
    const params = useParams();
    const [searchParams] = useSearchParams();
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

    const getIngredients = (input, isFiltered) => {
        let filtered = [...input];
        if (isFiltered) {
            filtered = input.filter(ingredient => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = ingredient.strIngredient.toLowerCase().replace(/\s/g, "");
                    return name.includes(filter.toLowerCase());
        })
        }

        return filtered.map(ingredient => {
            return <Ingredient key={ingredient.idIngredient} ingredient={ingredient}
                               func={{addIngredient, deleteIngredient}}
                                pickedIngredients={pickedIngredients}
            />
        })
    }

    const headerContents = pickedIngredients.length > 0 ?
        <PickedIngredients ingredients={pickedIngredients} getIngredients={getIngredients}/> :
        <div className={classes.headerContainer}>
            <h2>Pick up to 3 ingredients and see great {params.meal} proposals!</h2>
        </div>



    return <div className={classes.div}>
        {headerContents}
        <SearchBar searchParamName="filter"/>
        <div className={classes.ingredientsContainer}>
            {getIngredients(ingredients, true)}
        </div>
    </div>
}


export default IngredientsPicker;