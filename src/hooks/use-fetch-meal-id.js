import {useEffect, useState} from "react";
import axios from "axios";

const useFetchMealId = (ID) => {
    const [loading, setLoading] = useState(false);
    const [mealData, setMealData] = useState({});

    useEffect(() => {
        let options = {
            method: 'GET',
            url: 'https://themealdb.p.rapidapi.com/lookup.php',
            params: {i: `${ID}`},
            headers: {
                'x-rapidapi-host': 'themealdb.p.rapidapi.com',
                'x-rapidapi-key': '2b78b914femshec0f550e8473fcbp16e5e3jsncbe85eca22c6'
            }
        };

        const getData = async () => {
            setLoading(true);
            try {
                const response = await axios.request(options);
                let meal = {};
                meal.strMeal = response.data[0].strMeal;
                meal.strMealThumb = response.data[0].strMealThumb;
                setMealData(meal);
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false);
            }
        }

        getData();
    }, [ID])

    return [mealData, loading]
}

export default useFetchMealId;