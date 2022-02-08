import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faCircleNotch,
    faFrownOpen,
    faEgg,
    faCoffee,
    faBacon,
    faPizzaSlice,
    faHamburger,
    faFish,
    faCheese,
    faWineBottle,
    faGrinBeam,
    faQuestion
} from '@fortawesome/free-solid-svg-icons'

const Icon = props => {
    let {iconName, iconSize, isInverse, className, isSpin} = props.iconData;

    const myIcons = {
        'arrow-right': faArrowRight,
        'circle-notch': faCircleNotch,
        'frown-open': faFrownOpen,
        'egg': faEgg,
        'coffee': faCoffee,
        'bacon': faBacon,
        'pizza-slice': faPizzaSlice,
        'hamburger': faHamburger,
        'fish': faFish,
        'cheese': faCheese,
        'wine-bottle': faWineBottle,
        'grin-beam': faGrinBeam,
        'question-mark': faQuestion
    }

    const icon = myIcons[iconName];

    return <FontAwesomeIcon icon={icon} size={iconSize} inverse={isInverse} className={className} spin={isSpin}/>
}

export default Icon;