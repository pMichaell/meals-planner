import classes from "./IngredientsPicker.module.css"
import Ingredient from "./Ingredient";
import {useEffect, useState} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import PickedIngredients from "./PickedIngredients";
import SearchBar from "../../SearchBar/SearchBar";
import {getAllIngredients} from "../../../firebase/firestore-functions";
import Spinner from "../../../ui/Spinner/Spinner";


const IngredientsPicker = () => {
    const [pickedIngredients, setPickedIngredients] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const params = useParams();


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const fetchedIngredients = await getAllIngredients();
            setIngredients(fetchedIngredients);
            setIsLoading(false);
        }

         fetchData();
    }, [])

    const submitIngredients = async() => {
        localStorage.setItem("ingredients", JSON.stringify(pickedIngredients));
        navigate('..', { replace: true });
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
        <Spinner/> :
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