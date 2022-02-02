import classes from "./PickedIngredients.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import IconPicker from "../../../ui/IconPicker/IconPicker";

const PickedIngredients = props => {
    const {width} = useWindowDimensions();

    const iconSize = width > 700 ? "4x" : "2x";

    return <div className={classes.div}>
        <div className={classes.headerContainer}><h2>Picked ingredients:</h2></div>
        <div className={classes.contentContainer}>
            <div className={classes.ingredientsContainer}>
                {props.getIngredients(props.ingredients)}
            </div>
            <div className={classes.arrowContainer}>
                <div className={classes.arrowDiv} onClick={props.navigateToMeal}>
                    <IconPicker iconData={{iconName: 'arrow-right', iconSize: iconSize, isInverse: true, className: classes.arrow, isSpin: false}}/>
                </div>
            </div>
        </div>
    </div>
}

export default PickedIngredients;

/*
<FontAwesomeIcon icon={solid('arrow-right')} size={iconSize} inverse className={classes.arrow}/>*/
