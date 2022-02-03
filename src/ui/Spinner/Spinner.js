import classes from "./Spinner.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'
import Icon from "../Icon/Icon";

const Spinner = () => {
    return <Icon iconData={{
        iconName: 'circle-notch',
        iconSize: "5x",
        isInverse: true,
        className: classes.spinner,
        isSpin: true
    }}/>
}

export default Spinner;