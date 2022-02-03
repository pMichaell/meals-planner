import classes from "./DayTimePicker.module.css";
import {useParams} from "react-router-dom";
import NavigationBar from "../../ui/NavigationBar/NavigationBar";
import BasicCard from "../../ui/BasicCard/BasicCard";
import Icon from "../../ui/Icon/Icon";

const DayTimePicker = () => {
    const params = useParams();

    return <div className={classes.div}>
        <div className={classes.headerContainer}><h1>Pick meal for each part of {params.day}</h1></div>
        <div className={classes.mealPickContainer}>
            <BasicCard className={classes.basicCard}>
                <div className={classes.iconsDiv}>
                    <Icon
                        iconData={{iconName: 'bacon', iconSize: "3x", isInverse: true, className: "", isSpin: false}}/>
                    <Icon iconData={{iconName: 'egg', iconSize: "3x", isInverse: true, className: "", isSpin: false}}/>
                    <Icon
                        iconData={{iconName: 'coffee', iconSize: "3x", isInverse: true, className: "", isSpin: false}}/>
                </div>
                <NavigationBar name="breakfast" path="./breakfast/ingredients" className={classes.card}/>
            </BasicCard>
            <BasicCard className={classes.basicCard}>
                <div className={classes.iconsDiv}><Icon iconData={{
                    iconName: 'pizza-slice',
                    iconSize: "3x",
                    isInverse: true,
                    className: "",
                    isSpin: false
                }}/>
                    <Icon iconData={{
                        iconName: 'hamburger',
                        iconSize: "3x",
                        isInverse: true,
                        className: "",
                        isSpin: false
                    }}/>
                    <Icon iconData={{iconName: 'fish', iconSize: "3x", isInverse: true, className: "", isSpin: false}}/>
                </div>
                <NavigationBar name="dinner" path="./dinner/ingredients" className={classes.card}/>
            </BasicCard>
            <BasicCard className={classes.basicCard}>
                <div className={classes.iconsDiv}><Icon iconData={{
                    iconName: 'cheese',
                    iconSize: "3x",
                    isInverse: true,
                    className: "",
                    isSpin: false
                }}/>
                    <Icon iconData={{
                        iconName: 'wine-bottle',
                        iconSize: "3x",
                        isInverse: true,
                        className: "",
                        isSpin: false
                    }}/>
                    <Icon iconData={{iconName: 'grin-beam', iconSize: "3x", isInverse: true, className: "", isSpin: false}}/>
                </div>
                <NavigationBar name="supper" path="./supper/ingredients" className={classes.card}/>
            </BasicCard>
        </div>
    </div>
}

export default DayTimePicker;