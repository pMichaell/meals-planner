import classes from "./PickedIngredients.module.css"
import useWindowDimensions from "../../../hooks/use-window-dimensions";
import Icon from "../../../ui/Icon/Icon";
import useIconSize from "../../../hooks/use-icon-size";

const PickedIngredients = props => {
    const iconSize = useIconSize("2x", "4x");

    return <div className={classes.div}>
        <div className={classes.headerContainer}><h2>Picked ingredients:</h2></div>
        <div className={classes.contentContainer}>
            <div className={classes.ingredientsContainer}>
                {props.getIngredients(props.ingredients)}
            </div>
            <div className={classes.arrowContainer}>
                <div className={classes.arrowDiv} onClick={props.navigateToMeal}>
                    <Icon iconData={{iconName: 'arrow-right', iconSize: iconSize, isInverse: true, className: classes.arrow, isSpin: false}}/>
                </div>
            </div>
        </div>
    </div>
}

export default PickedIngredients;

/*
<FontAwesomeIcon icon={solid('arrow-right')} size={iconSize} inverse className={classes.arrow}/>*/
