import Icon from "./Icon";
import {useState} from "react";

const IconContainer = props => {
    const {icons, iconSize, isInverse, classNames, isSpin} = props
    const {containerClass, iconClass} = classNames;



    return <div className={containerClass}>
        {icons.map(icon => {
            const id = Math.random();
            return <Icon key={id} iconData={{iconName: icon, iconSize, isInverse, className: iconClass, isSpin}}/>
        })}
    </div>
}

export default IconContainer;