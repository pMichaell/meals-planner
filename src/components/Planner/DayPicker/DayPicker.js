import classes from "./DayPicker.module.css"
import BasicContainer from "../../../ui/BasicComponents/BasicContainer/BasicContainer";
import DayContainer from "./DayContainer";
import useChosenMeals from "../../../hooks/use-chosen-meals";
import Icon from "../../../ui/Icon/Icon";
import useIconSize from "../../../hooks/use-icon-size";
import ArrowButton from "../../../ui/ArrowButton/ArrowButton";
import {useNavigate} from "react-router-dom";

const DayPicker = () => {
    const [chosenMeals, allChosen] = useChosenMeals()
    const iconSize = useIconSize("3x", "4x");
    const navigate = useNavigate();

    const arrowClickHandler = () => {
        navigate("./summary")
    }

    let headerContents = allChosen ? "Submit your new plan!" : "Pick meals for each of the days!"

    return <BasicContainer className={classes.container}>
        <div className={classes.headerContainer}>
            <h2>{headerContents}</h2>
        </div>
        <div className={classes.daysContainer}>
            <DayContainer day="monday" path="./monday" className={classes.dayCard}/>
            <DayContainer day="tuesday" path="./tuesday" className={classes.dayCard}/>
            <DayContainer day="wednesday" path="./wednesday" className={classes.dayCard}/>
            <DayContainer day="thursday" path="./thursday" className={classes.dayCard}/>
            <DayContainer day="friday" path="./friday" className={classes.dayCard}/>
            <DayContainer day="saturday" path="./saturday" className={classes.dayCard}/>
            <DayContainer day="sunday" path="./sunday" className={classes.dayCard}/>
        </div>
        {allChosen &&
        <ArrowButton onClick={arrowClickHandler} iconSize={iconSize} className={classes.arrow}/>}
    </BasicContainer>
}

export default DayPicker;