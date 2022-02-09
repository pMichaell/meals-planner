import classes from "./PickedIngredients.module.css"
import useWindowDimensions from "../../../hooks/use-window-dimensions";
import Icon from "../../../ui/Icon/Icon";
import useIconSize from "../../../hooks/use-icon-size";
import ArrowButton from "../../../ui/ArrowButton/ArrowButton";

const PickedIngredients = props => {
    const iconSize = useIconSize("2x", "4x");

    return <div className={classes.div}>
        <div className={classes.headerContainer}><h2>Picked ingredients:</h2></div>
        <div className={classes.contentContainer}>
            <div className={classes.ingredientsContainer}>
                {props.getIngredients(props.ingredients)}
            </div>
            <div className={classes.arrowContainer}>
                <ArrowButton onClick={props.navigateToMeal} iconSize={iconSize}/>
            </div>
        </div>
    </div>
}

export default PickedIngredients;

/*
<FontAwesomeIcon icon={solid('arrow-right')} size={iconSize} inverse className={classes.arrow}/>*/
