import {useEffect, useState} from "react";
import axios from "axios";
import {getPickedIngredients} from "../firebase/firestore-functions";

const useFetchMeals = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedMeals, setFetchedMeals] = useState([]);

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



    const createIngrString = fetchedIngredients => {
        let ingredientsString = ""
        fetchedIngredients.forEach(ingredient => {
            ingredientsString = ingredientsString.concat(ingredient.strIngredient.replaceAll(" ", "_").toLowerCase());
            ingredientsString = ingredientsString.concat(" ");
        })
        ingredientsString = ingredientsString.trim().replaceAll(" ", ",");
        return ingredientsString;
    }

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
                setFetchedMeals(response.data.meals);
                return;
            }
            setFetchedMeals([]);
        }).catch(error => {
            console.error(error);
        });
    }

    return {
        isLoading,
        fetchedMeals,
    }
}

export default useFetchMeals;