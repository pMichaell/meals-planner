import classes from "./Ingredient.module.css"
import {useState} from "react";

const Ingredient = props => {
    const [clicked, setClicked] = useState(false);


    const clickHandler = () => {
        console.log("clicked");
        setClicked(prevState => !prevState);
    }

    let styles;

    if (clicked) {
        styles = `${classes.div} ${classes.divChecked}`
    } else styles = classes.div;

    return <div className={styles} onClick={clickHandler}>
        <h4>{props.strIngredient}</h4>
    </div>
}

export default Ingredient;