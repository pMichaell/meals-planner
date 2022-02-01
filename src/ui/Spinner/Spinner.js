import classes from "./Spinner.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'

const Spinner = () => {
    return <FontAwesomeIcon icon={solid('circle-notch')} size="5x" spin inverse className={classes.spinner}/>
}

export default Spinner;