import classes from "./MainPage.module.css"
import bowl from "../../assets/bowl_icon.png"
import pepper from "../../assets/pepper_icon.png"
import happy from "../../assets/happy_icon.png"
import plan from "../../assets/plan_icon.png"
import {Link} from "react-router-dom";
import BasicContainer from "../../ui/BasicComponents/BasicContainer/BasicContainer";

const MainPage = () => {
    //TODO change cta to be button as a whole

    return (
        <div className={classes.container}>
                <div className={classes.descriptionsContainer}>
                    <div className={classes.prosContainer}><img src={plan} className={classes.icon} alt="plan icon"/>
                        <h3 className={classes.header}>Create a meals plan neatly fitting your requirements in 3
                            easy
                            steps!</h3>
                    </div>
                    <div className={classes.prosContainer}><img src={pepper} className={classes.icon}
                                                                alt="pepper icon"/>
                        <h3 className={classes.header}>Pick ingredient/s of your choice!</h3>
                    </div>
                    <div className={classes.prosContainer}><img src={bowl} className={classes.icon} alt="bowl icon"/>
                        <h3 className={classes.header}>Pick meals chosen exactly for your ingredient
                            preferences!</h3>
                    </div>
                    <div className={classes.prosContainer}><img src={happy} className={classes.icon} alt="happy icon"/>
                        <h3 className={classes.header}>Start using your new meal plan<br/>
                            and enjoy eating like never before!</h3>
                    </div>
                </div>

            <button className={classes.cta}><Link to="/planner">Get Started</Link></button>
        </div>
    )
}

export default MainPage;