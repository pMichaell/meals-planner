import classes from "./DayPicker.module.css"
import NavigationBar from "../../../ui/NavigationBar/NavigationBar";
import BasicContainer from "../../../ui/BasicComponents/BasicContainer/BasicContainer";

const DayPicker = () => {

    return <BasicContainer className={classes.container}>
        <div className={classes.headerContainer}>
            <h2>Pick a day!</h2>
        </div>
        <div className={classes.daysContainer}>
            <NavigationBar name="Monday" path="./monday" className={{cardStyling: classes.card}}/>
            <NavigationBar name="Tuesday" path="./tuesday" className={{cardStyling: classes.card}}/>
            <NavigationBar name="Wednesday" path="./wednesday" className={{cardStyling: classes.card}}/>
            <NavigationBar name="Thursday" path="./thursday" className={{cardStyling: classes.card}}/>
            <NavigationBar name="Friday" path="./friday" className={{cardStyling: classes.card}}/>
            <NavigationBar name="Saturday" path="./saturday" className={{cardStyling: classes.card}}/>
            <NavigationBar name="Sunday" path="./sunday" className={{cardStyling: classes.card}}/>
        </div>
    </BasicContainer>
}

export default DayPicker;