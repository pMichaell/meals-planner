import classes from "../../components/Planner/DayTimePicker/DayTimePicker.module.css";
import Icon from "../Icon/Icon";

const ArrowButton = props => {
    let styles = `${classes.arrowDiv} ${props.className}`

    return <button onClick={props.onClick} className={styles}>
        <Icon iconData={{
            iconName: 'arrow-right',
            iconSize: props.iconSize,
            isInverse: true,
            className: classes.arrow,
            isSpin: false
        }}/>
    </button>
}

export default ArrowButton;