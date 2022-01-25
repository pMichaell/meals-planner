import classes from "./Planer.module.css"
import {Outlet} from "react-router-dom";

const Planner = () => {
    return <div className={classes.container}>
        <Outlet/>
    </div>
}

export default Planner;