import classes from "./DayTimePicker.module.css";
import {useParams} from "react-router-dom";
import NavigationBar from "../../../ui/NavigationBar/NavigationBar";
import BasicCard from "../../../ui/BasicComponents/BasicCard/BasicCard";
import IconContainer from "../../../ui/Icon/IconContainer";
import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";

const DayTimePicker = () => {
    const params = useParams();
    const [cookies] = useCookies(['plan']);
    const [chosenMeals, setChosenMeals] = useState({breakfast: false, dinner: false, supper: false})

    useEffect(() => {
        const checkIfChosen = () => {
            let plan = cookies.plan;
            for (let [day, meals] of Object.entries(plan)) {
                if (day === params.day) {
                    for (let mealName of Object.keys(meals)) {
                        if (meals[mealName].length !== 0)
                            setChosenMeals(chosenMeals[mealName] = true)
                    }
                }
            }
        }
        checkIfChosen();
        console.log(chosenMeals);
    }, [params, cookies])

    //TODO assign green color conditionally
    return <div className={classes.div}>
        <div className={classes.headerContainer}><h1>Pick meal for each part of {params.day}</h1></div>
        <div className={classes.mealPickContainer}>
            <BasicCard className={classes.basicCard}>
                <IconContainer icons={['bacon', 'egg', 'coffee']} iconSize="3x" isInverse={true}
                               classNames={{containerClass: classes.iconsDiv}} isSpin={false}/>
                <NavigationBar name="breakfast" path="./breakfast/ingredients" className={classes.navigationBar}/>
            </BasicCard>
            <BasicCard className={classes.basicCard}>
                <IconContainer icons={['pizza-slice', 'hamburger', 'fish']} iconSize="3x" isInverse={true}
                               classNames={{containerClass: classes.iconsDiv}} isSpin={false}/>
                <NavigationBar name="dinner" path="./dinner/ingredients" className={classes.navigationBar}/>
            </BasicCard>
            <BasicCard className={classes.basicCard}>
                <IconContainer icons={['cheese', 'wine-bottle', 'grin-beam']} iconSize="3x" isInverse={true}
                               classNames={{containerClass: classes.iconsDiv}} isSpin={false}/>
                <NavigationBar name="supper" path="./supper/ingredients" className={classes.navigationBar}/>
            </BasicCard>
        </div>
    </div>
}

export default DayTimePicker;