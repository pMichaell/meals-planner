import classes from "./SummaryArticle.module.css"
import BasicCard from "../../../../ui/BasicComponents/BasicCard/BasicCard";
import useFetchMealId from "../../../../hooks/use-fetch-meal-id";
import Spinner from "../../../../ui/Spinner/Spinner";
import {Fragment} from "react";
import useWindowDimensions from "../../../../hooks/use-window-dimensions";

const SummaryArticle = props => {
    const [mealData, loading] = useFetchMealId(props.mealID);
    const {width} = useWindowDimensions();

    let style = loading ? `${classes.loading} ${classes.container}` : classes.container


    const contents = loading ?
        <Spinner/>
        : width < 700 ?
        <Fragment>
            <img src={mealData.strMealThumb} alt={mealData.strMealThumb} className={classes.mealImg}/>
            <div className={classes.headersDiv}>
                <h1>{props.dayTime}</h1>
                <div className={classes.headersBreak}/>
                <div className={classes.mealNameDiv}><h1>{mealData.strMeal}</h1></div>
            </div>
        </Fragment> :
        <Fragment>
            <div className={classes.dayTimeDiv}><h1 className={classes.header}>{props.dayTime}</h1></div>
            <img src={mealData.strMealThumb} alt={mealData.strMealThumb} className={classes.mealImg}/>
            <div className={classes.mealNameDiv}><h1 className={classes.header}>{mealData.strMeal}</h1></div>
        </Fragment>

    return <div className={classes.container}>
        {contents}
    </div>

}

export default SummaryArticle;