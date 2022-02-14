import {useCookies} from "react-cookie";
import MealPlan from "../classes/MealPlan";
import {useSelector} from "react-redux";
import {selectUserId} from "../store/userSlice";
import Meals from "../classes/Meals";
import {useEffect, useReducer, useState} from "react";

const defaultMealsState = {
    chosenMeals: {
        breakfast: false,
        dinner: false,
        supper: false
    },
    allChosen: false
}


const mealsReducer = (state, action) => {
    if (action.type === "CHECK_CHOSEN") {
        let plan = {...action.plan};
        for (let [day, meals] of Object.entries(plan)) {
            if (day === action.dayToCheck) {
                for (let daytime of Object.keys(meals)) {
                    if (meals[daytime].length !== 0) {
                        let tmp = state.chosenMeals;
                        console.log("tmp in reducer " + tmp)
                        Object.assign(tmp, meals[daytime])
                        let allChosen = false;
                        if (!Object.values(tmp).includes(false)) {
                            allChosen = true;
                        }
                        return {
                            tmp,
                            allChosen
                        };
                    }
                }
            }
        }
    }
}


const useChosenMeals = (dayToCheck = "monday") => {
    const [chosenMeals, setChosenMeals] = useState({breakfast: false, dinner: false, supper: false})
    const [allChosen, setAllChosen] = useState(true);

    useEffect(() => {
        const localStorageMeals = JSON.parse(localStorage.getItem("meals"));
        const checkIfChosen = () => {
            let plan = {...localStorageMeals};
            for (let [day, meals] of Object.entries(plan)) {
                if (day === dayToCheck) {
                    for (let daytime of Object.keys(meals)) {
                        if (meals[daytime].length !== 0) {
                            let updatedValue = {[daytime]: true}
                            setChosenMeals(prevState => ({
                                ...prevState,
                                ...updatedValue
                            }))
                        }
                        if (Object.values(meals).includes("")) {
                            setAllChosen(false);
                        }
                    }
                }
            }
        }

        const checkIfAllChosen = () => {
            let plan = {...localStorageMeals};
            for (let meals of Object.values(plan)) {
                if (Object.values(meals).includes("")) {
                        setAllChosen(false);
                }
            }
        }

            checkIfChosen();
            checkIfAllChosen();

        }, [dayToCheck]
    )


        return [chosenMeals, allChosen];

    }

    export default useChosenMeals;