import NavigationBar from "../../../ui/NavigationBar/NavigationBar";
import classes from "./DayContainer.module.css";
import useChosenMeals from "../../../hooks/use-chosen-meals";
import Icon from "../../../ui/Icon/Icon";
import useIconSize from "../../../hooks/use-icon-size";
import {useNavigate} from "react-router-dom";

const DayContainer = props => {
    const [chosenMeals, allChosen] = useChosenMeals(props.day);
    const navigate = useNavigate();
    const iconSize = useIconSize("2x", "4x");

    let cardStyle = `${classes.dayContainer} ${props.className}`
    let checkmarkStyle;

    let dayMealsChosen = !Object.values(chosenMeals).includes(false)

    if (dayMealsChosen) {
        checkmarkStyle = classes.checkMarkChecked
        cardStyle = `${cardStyle} ${classes.containerChosen}`
    }

    const onClickHandler = () => {
        navigate(`${props.path}`);
    }

    return <button className={cardStyle} onClick={onClickHandler}>
        <h2 className={classes.header}>{props.day}</h2>
        {dayMealsChosen &&
        <Icon iconData={{iconName: 'checkmark', iconSize, isInverse: true, className: checkmarkStyle}}/>}
    </button>
}

export default DayContainer