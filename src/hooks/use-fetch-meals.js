import {useEffect, useState} from "react";
import axios from "axios";
import {useCookies} from "react-cookie";

const useFetchMeals = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedMeals, setFetchedMeals] = useState([]);
    const [cookies] = useCookies();


    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            let ingredientsString = getIngrFromCookies();
            fetchMeals(ingredientsString);
            setIsLoading(false);
        };

        getData();
    }, [])

    const getIngrFromCookies = () => {
        const ingredients = cookies.ingredients;
        let data = []
        ingredients.forEach(ingredient => {
            data = [...data, ingredient.strIngredient.replaceAll(" ", "_").toLowerCase()]
        })
        return data.join(",");
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