import classes from "./NavBar.module.css"
import {useReducer} from "react";
import ArrowButton from "../ArrowButton/ArrowButton";

const defaultNavbarState = {
    currentIndex: 0,
}

const navBarReducer = (state, action) => {
    let newIndex
    let decreasedLength = --action.length;
    if(action.type === "RIGHT") {
        newIndex = state.currentIndex === decreasedLength ? 0 : ++state.currentIndex;
        console.log(newIndex)
        return {
            currentIndex: newIndex,
        }
    }
    if (action.type === "LEFT") {
        newIndex = state.currentIndex === 0 ? decreasedLength : --state.currentIndex;
        console.log(newIndex)
        return {
            currentIndex: newIndex,
        }
    }
}


const NavBar = props => {
    const navBarStyle = props.navBarStyle;
    const {arrowSize, arrowDivSize} = props.arrowStyle;

    const [navBarState, dispatchNavbarReducer] = useReducer(navBarReducer, defaultNavbarState);
    const dataSet = props.dataSet;

    const rightArrowHandler = () => {
        dispatchNavbarReducer({type: "RIGHT", length: dataSet.length})
    }

    const leftArrowHandler = () => {
        dispatchNavbarReducer({type: "LEFT", length: dataSet.length})
    }

    return <div className={navBarStyle}>
        <ArrowButton direction="left" iconSize={arrowSize} onClick={leftArrowHandler} className={arrowDivSize}/>
        <h1>{dataSet[navBarState.currentIndex]}</h1>
        <ArrowButton iconSize={arrowSize} onClick={rightArrowHandler} className={arrowDivSize}/>
    </div>
}

export default NavBar;