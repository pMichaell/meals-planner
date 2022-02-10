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
    const [cookies] = useCookies();
    const [mealsState, dispatchMealsReducer] = useReducer(mealsReducer, defaultMealsState);
    const iconSize = useIconSize("3x", "4x");

    console.log(mealsState.currentIndex)

    const mealsArray = Object.entries(cookies.plan[days[mealsState.currentIndex]]);


    const rightArrowHandler = () => {
        dispatchMealsReducer({type: "RIGHT"})
    }

    const leftArrowHandler = () => {
        dispatchMealsReducer({type: "LEFT"})
    }

    return <BasicContainer>
        <div className={classes.navigationBar}>
            <ArrowButton direction="left" iconSize={iconSize} onClick={leftArrowHandler} className={classes.arrowDiv}/>
            <h1>{days[mealsState.currentIndex]}</h1>
            <ArrowButton iconSize={iconSize} onClick={rightArrowHandler} className={classes.arrowDiv}/>
        </div>
        <ul className={classes.mealsContainer}>
            {mealsArray.map(meal => {
                return <li key={meal[0]}><SummaryArticle mealID={meal[1]} dayTime={meal[0]}/></li>
            })
            })
        </ul>
    </BasicContainer>
}

export default Summary;