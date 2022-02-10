import classes from "./Summary.module.css"
import {useCookies} from "react-cookie";
import BasicContainer from "../../../ui/BasicComponents/BasicContainer/BasicContainer";
import ArrowButton from "../../../ui/ArrowButton/ArrowButton";
import {useReducer} from "react";
import useIconSize from "../../../hooks/use-icon-size";
import SummaryArticle from "./SummaryArticle/SummaryArticle";


const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const defaultMealsState = {
    currentIndex: 0,
    mealsForCurrentDay: {breakfast: "", dinner: "", supper: ""}
}

const mealsReducer = (state, action) => {
    let newIndex
    switch (action.type) {
        case "RIGHT":
            newIndex = state.currentIndex === 7 ? 0 : state.currentIndex++;
            return {
                currentIndex: newIndex,
                mealsForCurrentDay: state.mealsForCurrentDay
            }
        case 'LEFT':
            newIndex = state.currentIndex === 0 ? 6 : state.currentIndex--;
            return {
                currentIndex: newIndex,
                mealsForCurrentDay: state.mealsForCurrentDay
            }
    }
}


const Summary = () => {
    const [cookies] = useCookies();
    const [mealsState, dispatchMealsReducer] = useReducer(mealsReducer, defaultMealsState);
    const iconSize = useIconSize("3x", "4x");

    console.log(cookies.plan[days[mealsState.currentIndex]])


    const mealsArray = Object.entries(cookies.plan[days[mealsState.currentIndex]]);

    const rightArrowHandler = () => {
        dispatchMealsReducer({type: "RIGHT"})
    }

    const leftArrowHandler = () => {
        dispatchMealsReducer({type: "LEFT"})
    }

    return <BasicContainer>
        <div className={classes.navigationBar}>
            <ArrowButton direction="left" iconSize={iconSize} onClick={leftArrowHandler}/>
            <h1>{days[mealsState.currentIndex]}</h1>
            <ArrowButton iconSize={iconSize} onClick={rightArrowHandler}/>
        </div>
        <div className={classes.mealsContainer}>
            <ul>
            {mealsArray.map(meal => {
                return <li key={meal[0]}><SummaryArticle mealID={meal[1]}/></li>
            })
            })
            </ul>
        </div>

    </BasicContainer>
}

export default Summary;