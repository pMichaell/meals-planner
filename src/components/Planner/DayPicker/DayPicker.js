import classes from "./DayPicker.module.css"
import BasicContainer from "../../../ui/BasicComponents/BasicContainer/BasicContainer";
import DayContainer from "./DayContainer";
import useChosenMeals from "../../../hooks/use-chosen-meals";

const DayPicker = () => {
    const [chosenMeals, allChosen] = useChosenMeals()
    return <BasicContainer className={classes.container}>
        <div className={classes.headerContainer}>
            <h1>Pick a day!</h1>
        </div>
        <div className={classes.daysContainer}>
            <DayContainer day="monday" path="./monday" className={classes.card}/>
            <DayContainer day="tuesday" path="./tuesday" className={classes.card}/>
            <DayContainer day="wednesday" path="./wednesday" className={classes.card}/>
            <DayContainer day="thursday" path="./thursday" className={classes.card}/>
            <DayContainer day="friday" path="./friday" className={classes.card}/>
            <DayContainer day="saturday" path="./saturday" className={classes.card}/>
            <DayContainer day="sunday" path="./sunday" className={classes.card}/>
        </div>
        {allChosen && <div style={{color: "white"}}>All Chosen</div>}
    </BasicContainer>
}

export default DayPicker;