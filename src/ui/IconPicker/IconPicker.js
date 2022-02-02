import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faCircleNotch, faFrownOpen} from '@fortawesome/free-solid-svg-icons'

const IconPicker = props => {
    let {iconName, iconSize, isInverse, className, isSpin} = props.iconData;

    const myIcons = {
        'arrow-right': faArrowRight,
        spinner: faCircleNotch,
        'sad-face': faFrownOpen
    }

    const icon = myIcons[iconName];

    return <FontAwesomeIcon icon={icon} size={iconSize} inverse={isInverse} className={className} spin={isSpin}/>
}

export default IconPicker;