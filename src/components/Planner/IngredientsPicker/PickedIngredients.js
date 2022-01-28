import classes from "./PickedIngredients.module.css"
import Ingredient from "./Ingredient";

const PickedIngredients = props => {
    return <div className={classes.div}>
        <div className={classes.headerContainer}><h2>Picked ingredients:</h2></div>
        <div className={classes.pickedIngredientsContainer}>{props.getIngredients(props.ingredients)}</div>
    </div>
}

export default PickedIngredients;