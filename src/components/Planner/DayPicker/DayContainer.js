import NavigationBar from "../../../ui/NavigationBar/NavigationBar";
import classes from "./DayContainer.module.css";
import useChosenMeals from "../../../hooks/use-chosen-meals";

const DayContainer = props => {
    const [chosenMeals, allChosen] = useChosenMeals(props.day);

    let style = props.className

    if(!Object.values(chosenMeals).includes(false)) {
        style = `${classes.chosen} ${props.className}`
    }

    return <NavigationBar name={props.day} path={props.path} className={style}/>
}

export default DayContainer