import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faCircleNotch, faFrownOpen} from '@fortawesome/free-solid-svg-icons'

const Icon = props => {
    let {iconName, iconSize, isInverse, className, isSpin} = props.iconData;

    const myIcons = {
        'arrow-right': faArrowRight,
        'circle-notch': faCircleNotch,
        'frown-open': faFrownOpen
    }

    const icon = myIcons[iconName];

    return <FontAwesomeIcon icon={icon} size={iconSize} inverse={isInverse} className={className} spin={isSpin}/>
}

export default Icon;