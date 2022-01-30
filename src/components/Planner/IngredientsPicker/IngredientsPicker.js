import classes from "./IngredientsPicker.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'
import Ingredient from "./Ingredient";
import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import PickedIngredients from "./PickedIngredients";
import SearchBar from "../../SearchBar/SearchBar";
import {getAllIngredients} from "../../../firebase/firestore-functions";
import {database} from "../../../firebase/firebase";
import IngredientsContext from "../../../contexts/ingredients-context";


const IngredientsPicker = () => {
    const [pickedIngredients, setPickedIngredients] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const ingredientsContext = useContext(IngredientsContext);
    const navigate = useNavigate();
    const params = useParams();


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const fetchedIngredients = await getAllIngredients(database, "ingredients")
            setIngredients(fetchedIngredients);
            setIsLoading(false);
        }

         fetchData();
    }, [])

    const submitIngredients = () => {
        ingredientsContext.setIngredients(pickedIngredients);
        console.log(ingredientsContext.ingredients);
        navigate('..');
    }

    const addIngredient = ingredient => {
        if (pickedIngredients.length >= 3) {
            let updatedPickedIngredients = [...pickedIngredients];
            updatedPickedIngredients = updatedPickedIngredients.fill(ingredient, updatedPickedIngredients.length - 1);
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
        <PickedIngredients ingredients={pickedIngredients} getIngredients={getIngredients} navigateToMeal={submitIngredients}/> :
        <div className={classes.headerContainer}>
            <h2>Pick up to 3 ingredients and see great {params.meal} proposals!</h2>
        </div>

    const bodyContents = isLoading ?
        <FontAwesomeIcon icon={solid('circle-notch')} size="5x" spin inverse className={classes.spinner}/> :
        getIngredients(ingredients, true);



    return <div className={classes.div}>
        {headerContents}
        <SearchBar searchParamName="filter"/>
        <div className={classes.ingredientsContainer}>
            {bodyContents}
        </div>
    </div>
}


export default IngredientsPicker;