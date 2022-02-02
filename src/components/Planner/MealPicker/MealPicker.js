import classes from "./MealPicker.module.css"
import {useEffect, useState} from "react";
import axios from "axios";
import CardArticle from "../../../ui/CardArticle/CardArticle";
import {getPickedIngredients} from "../../../firebase/firestore-functions";
import Spinner from "../../../ui/Spinner/Spinner";
import Header from "../../../ui/Header/Header";
import PageHeader from "../../../ui/PageHeader/PageHeader";


const MealPicker = () => {
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
        return retrievedMeals.map(meal => {
            return <ul className={classes.mealsList} key={meal.idMeal}>
                <li>
                    <CardArticle articleText={meal.strMeal} articleImage={meal.strMealThumb}/>
                </li>
            </ul>
        })
    }




    const contents = isLoading ?
        <Spinner/> : mapMeals();


    return <div className={classes.div}>
        {contents}
    </div>
}

export default MealPicker;

const createIngrString = fetchedIngredients => {
    let ingredientsString = ""
    fetchedIngredients.forEach(ingredient => {
        ingredientsString = ingredientsString.concat(ingredient.strIngredient.replaceAll(" ", "_").toLowerCase());
        ingredientsString = ingredientsString.concat(" ");
    })
    ingredientsString = ingredientsString.trim().replaceAll(" ", ",");
    return ingredientsString;
}




