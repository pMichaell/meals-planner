import classes from "./Ingredient.module.css"

const Ingredient = props => {
    const {addIngredient, deleteIngredient} = props.func;
    const {idIngredient, strIngredient} = props.ingredient;
    const pickedIngredients = props.pickedIngredients;

    const clickHandler = () => {
        if (pickedIngredients.includes(props.ingredient)) {
            deleteIngredient(idIngredient);
        } else {
            addIngredient(props.ingredient);
        }
        window.scrollTo(0, 0);
    }


    let styles;

    if (pickedIngredients.includes(props.ingredient)) {
        styles = `${classes.div} ${classes.divChecked}`
    } else styles = classes.div;

    return <div className={styles} onClick={clickHandler}>
        <h4>{strIngredient}</h4>
    </div>
}

export default Ingredient;