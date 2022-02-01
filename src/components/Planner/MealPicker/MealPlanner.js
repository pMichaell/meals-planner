import classes from "./MealPlanner.module.css"
import {useContext, useEffect, useState} from "react";
import IngredientsContext from "../../../contexts/ingredients-context";
import axios from "axios";
import CardArticle from "../../../ui/CardArticle/CardArticle";

const MealPlanner = () => {
    const context = useContext(IngredientsContext);
    const [retrievedMeals, setRetrievedMeals] = useState([]);

    useEffect(() => {
        let ingredientsString = "";
        console.log(context.ingredients);
        const collectIngredients = () => {
            context.ingredients.forEach(ingredient => {
                ingredientsString = ingredientsString.concat(ingredient.strIngredient.replaceAll(" ", "_").toLowerCase());
                ingredientsString = ingredientsString.concat(" ");
            })
            ingredientsString = ingredientsString.trim().replaceAll(" ", ",");
        }
        collectIngredients();
        axios.request({
            method: 'GET',
            url: 'https://themealdb.p.rapidapi.com/filter.php',
            params: {i: ingredientsString},
            headers: {
                'x-rapidapi-host': 'themealdb.p.rapidapi.com',
                'x-rapidapi-key': '2b78b914femshec0f550e8473fcbp16e5e3jsncbe85eca22c6'
            }
        }).then(response => {
            setRetrievedMeals(response.data.meals);
            console.log(response.data.meals)
        }).catch(error => {
            console.error(error);
        });

    }, [context.ingredients])


    const mapMeals = () => {
        return retrievedMeals.map(meal => {
            return <li key={meal.idMeal}><CardArticle articleText={meal.strMeal} articleImage={meal.strMealThumb}/></li>
        })
    }

    return <div>
        <ul className={classes.mealsList}>{mapMeals()}</ul>
    </div>
}

export default MealPlanner;


let options = {
    method: 'GET',
    url: 'https://themealdb.p.rapidapi.com/filter.php',
    params: {i: 'chicken_breast,garlic,salt'},
    headers: {
        'x-rapidapi-host': 'themealdb.p.rapidapi.com',
        'x-rapidapi-key': '2b78b914femshec0f550e8473fcbp16e5e3jsncbe85eca22c6'
    }
};


