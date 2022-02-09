import classes from "./DayTimePicker.module.css";
import {useNavigate, useParams} from "react-router-dom";
import NavigationBar from "../../../ui/NavigationBar/NavigationBar";
import BasicCard from "../../../ui/BasicComponents/BasicCard/BasicCard";
import IconContainer from "../../../ui/Icon/IconContainer";
import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";
import useChosenMeals from "../../../hooks/use-chosen-meals";
import Icon from "../../../ui/Icon/Icon";
import useIconSize from "../../../hooks/use-icon-size";

const DayTimePicker = () => {
    const params = useParams();
    const [cookies] = useCookies(['plan']);
    const [chosenMeals] = useChosenMeals(params.day);
    const iconSize = useIconSize("2x", "4x");
    const navigate = useNavigate();

    const getActiveStyle = (dayTime) => {
        console.log(chosenMeals)
        return chosenMeals[dayTime] ? classes.chosen : "";
    }

    let allMealsChosen = !Object.values(chosenMeals).includes(false);

    const arrowClickHandler = () => {
        navigate("/planner", {replace: true})
    }

    return <div className={classes.div}>
        <div className={classes.headerContainer}><h1>Pick meal for each part of {params.day}</h1></div>
        <div className={classes.mealPickContainer}>
            <BasicCard className={classes.basicCard}>
                <IconContainer icons={['bacon', 'egg', 'coffee']} iconSize="3x" isInverse={true}
                               classNames={{
                                   containerClass: classes.iconsDiv,
                                   iconClass: `${getActiveStyle("breakfast")}`
                               }}
                               isSpin={false}/>
                <NavigationBar name="breakfast" path="./breakfast/ingredients" className={classes.navigationBar}/>
            </BasicCard>
            <BasicCard className={classes.basicCard}>
                <IconContainer icons={['pizza-slice', 'hamburger', 'fish']} iconSize="3x" isInverse={true}
                               classNames={{
                                   containerClass: classes.iconsDiv,
                                   iconClass: `${getActiveStyle("dinner")}`
                               }}
                               isSpin={false}/>
                <NavigationBar name="dinner" path="./dinner/ingredients" className={classes.navigationBar}/>
            </BasicCard>
            <BasicCard className={classes.basicCard}>
                <IconContainer icons={['cheese', 'wine-bottle', 'grin-beam']} iconSize="3x" isInverse={true}
                               classNames={{
                                   containerClass: classes.iconsDiv,
                                   iconClass: `${getActiveStyle("supper")}`
                               }}
                               isSpin={false}/>
                <NavigationBar name="supper" path="./supper/ingredients" className={classes.navigationBar}/>
            </BasicCard>
            {allMealsChosen &&
            <button onClick={arrowClickHandler} className={classes.arrowDiv}>
                <Icon iconData={{
                iconName: 'arrow-right',
                iconSize: iconSize,
                isInverse: true,
                className: classes.arrow,
                isSpin: false
            }}/>
            </button>
            }
        </div>
    </div>
}

export default DayTimePicker;