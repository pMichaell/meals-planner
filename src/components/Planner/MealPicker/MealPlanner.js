import classes from "./MealPlanner.module.css"
import {useEffect, useState} from "react";
import axios from "axios";
import CardArticle from "../../../ui/CardArticle/CardArticle";
import {getPickedIngredients} from "../../../firebase/firestore-functions";
import Spinner from "../../../ui/Spinner/Spinner";


const MealPlanner = () => {
    const [retrievedMeals, setRetrievedMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const collectIngredients = async () => {
                const fetchedIngredients = await getPickedIngredients();
                return createIngrString(fetchedIngredients);
            }
            let ingredientsString = await collectIngredients();
            fetchMeals(ingredientsString);
            setIsLoading(false);
        };

        getData();
    }, [])

    const fetchMeals = ingredientsString => {
        axios.request({
            method: 'GET',
            url: 'https://themealdb.p.rapidapi.com/filter.php',
            params: {i: ingredientsString},
            headers: {
                'x-rapidapi-host': 'themealdb.p.rapidapi.com',
                'x-rapidapi-key': '2b78b914femshec0f550e8473fcbp16e5e3jsncbe85eca22c6'
            }
        }).then(response => {
            if (response.data.meals) {
                setRetrievedMeals(response.data.meals);
                return;
            }
            setRetrievedMeals([]);
        }).catch(error => {
            console.error(error);
        });
    }

    const mapMeals = () => {
        if(retrievedMeals.length > 0) {
            return retrievedMeals.map(meal => {
                return <ul className={classes.mealsList} key={meal.idMeal}>
                    <li>
                        <CardArticle articleText={meal.strMeal} articleImage={meal.strMealThumb}/>
                    </li>
                </ul>
            })
        }
        return <h1>We did not find meals matching ingredients you have picked</h1>
    }

    const contents = isLoading ?
        <Spinner/> : mapMeals();


    return <div className={classes.div}>
        {contents}
    </div>
}

export default MealPlanner;

const createIngrString = fetchedIngredients => {
    let ingredientsString = ""
    fetchedIngredients.forEach(ingredient => {
        ingredientsString = ingredientsString.concat(ingredient.strIngredient.replaceAll(" ", "_").toLowerCase());
        ingredientsString = ingredientsString.concat(" ");
    })
    ingredientsString = ingredientsString.trim().replaceAll(" ", ",");
    return ingredientsString;
}




