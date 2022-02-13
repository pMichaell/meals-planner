import classes from "./Summary.module.css"
import {useCookies} from "react-cookie";
import BasicContainer from "../../../ui/BasicComponents/BasicContainer/BasicContainer";
import ArrowButton from "../../../ui/ArrowButton/ArrowButton";
import {useReducer} from "react";
import useIconSize from "../../../hooks/use-icon-size";
import SummaryArticle from "./SummaryArticle/SummaryArticle";
import BasicButton from "../../../ui/BasicComponents/BasicButton/BasicButton";
import {useNavigate} from "react-router-dom";

const mockMeals = {
    "monday": {
        "breakfast": "52818",
        "dinner": "52765",
        "supper": "52805"
    },
    "tuesday": {
        "breakfast": "52805",
        "dinner": "52764",
        "supper": "52769"
    },
    "wednesday": {
        "breakfast": "52782",
        "dinner": "52869",
        "supper": "52993"
    },
    "thursday": {
        "breakfast": "52805",
        "dinner": "53056",
        "supper": "52812"
    },
    "friday": {
        "breakfast": "52785",
        "dinner": "52830",
        "supper": "52772"
    },
    "saturday": {
        "breakfast": "52827",
        "dinner": "52936",
        "supper": "52805"
    },
    "sunday": {
        "breakfast": "53018",
        "dinner": "52777",
        "supper": "52782"
    }
}

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const defaultMealsState = {
    currentIndex: 0,
}

const mealsReducer = (state, action) => {
    let newIndex
    if(action.type === "RIGHT") {
        newIndex = state.currentIndex === 6 ? 0 : ++state.currentIndex;
        console.log(newIndex)
        return {
            currentIndex: newIndex,
        }
    }
    if (action.type === "LEFT") {
        newIndex = state.currentIndex === 0 ? 6 : --state.currentIndex;
        console.log(newIndex)
        return {
            currentIndex: newIndex,
        }
    }
}



const Summary = () => {
    const [mealsState, dispatchMealsReducer] = useReducer(mealsReducer, defaultMealsState);
    const iconSize = useIconSize("3x", "4x");
    const navigate = useNavigate();

    // const mealsArray = Object.entries(cookies.plan[days[mealsState.currentIndex]]);
    const mealsFromLocalStorage = JSON.parse(localStorage.getItem("plan"));
    console.log(mealsFromLocalStorage);
    const mealsArray = Object.entries(mockMeals[days[mealsState.currentIndex]]);
    // const mealsArray = Object.entries(mealsFromLocalStorage[days[mealsState.currentIndex]]);

    const rightArrowHandler = () => {
        dispatchMealsReducer({type: "RIGHT"})
    }

    const leftArrowHandler = () => {
        dispatchMealsReducer({type: "LEFT"})
    }

    const submitButtonHandler = () => {
        navigate("/planner/name")
    }

    return <div className={classes.container}>
        <div className={classes.navigationBar}>
            <ArrowButton direction="left" iconSize={iconSize} onClick={leftArrowHandler} className={classes.arrowDiv}/>
            <h1>{days[mealsState.currentIndex]}</h1>
            <ArrowButton iconSize={iconSize} onClick={rightArrowHandler} className={classes.arrowDiv}/>
        </div>
        <div className={classes.mealsContainer}>
            {mealsArray.map(meal => {
                return <SummaryArticle key={meal[0]} mealID={meal[1]} dayTime={meal[0]}/>
            })
            })
        </div>
        <BasicButton onClick={submitButtonHandler} className={classes.submitButton}>Submit</BasicButton>
    </div>
}

export default Summary;