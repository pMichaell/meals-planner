import classes from "./ArrowButton.module.css";
import Icon from "../Icon/Icon";

const ArrowButton = props => {
    let styles = `${classes.arrowDiv} ${props.className}`

    let iconName = 'arrow-right';

    if(props.direction === "left") iconName = 'arrow-left';

    return <button onClick={props.onClick} className={styles}>
        <Icon iconData={{
            iconName: iconName,
            iconSize: props.iconSize,
            isInverse: true,
            className: classes.arrow,
            isSpin: false
        }}/>
    </button>
}

export default ArrowButton;