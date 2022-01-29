import classes from "./PickedIngredients.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import {useNavigate, useParams} from "react-router-dom";

const PickedIngredients = props => {
    const navigate = useNavigate();
    const params = useParams();

    const goToMeal = () => {
        navigate('..');
    }

    return <div className={classes.div}>
        <div className={classes.headerContainer}><h2>Picked ingredients:</h2></div>
        <div className={classes.contentContainer}>
            <div className={classes.ingredientsContainer}>
                {props.getIngredients(props.ingredients)}
            </div>
            <div className={classes.arrowContainer}>
                <div className={classes.arrowDiv} onClick={goToMeal}>
                    <FontAwesomeIcon icon={solid('arrow-right')} size="2x" inverse className={classes.arrow}/>
                </div>
            </div>
        </div>
    </div>
}

export default PickedIngredients;