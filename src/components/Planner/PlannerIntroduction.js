import classes from "./PlannerIntroduction.module.css"
import NavigationBar from "./NavigationBar";

const PlannerIntroduction = () => {
    return <div className={classes.container}>
        <div className={classes.headerContainer}>
            <h2>Pick a day!</h2>
        </div>
        <div className={classes.daysContainer}>
            <NavigationBar name="Monday" path="monday" style={{cardStyling: classes.card}}/>
            <NavigationBar name="Tuesday" path="tuesday" style={{cardStyling: classes.card}}/>
            <NavigationBar name="Wednesday" path="wednesday" style={{cardStyling: classes.card}}/>
            <NavigationBar name="Thursday" path="thursday" style={{cardStyling: classes.card}}/>
            <NavigationBar name="Friday" path="friday" style={{cardStyling: classes.card}}/>
            <NavigationBar name="Saturday" path="saturday" style={{cardStyling: classes.card}}/>
            <NavigationBar name="Sunday" path="sunday" style={{cardStyling: classes.card}}/>
        </div>
    </div>
}

export default PlannerIntroduction;