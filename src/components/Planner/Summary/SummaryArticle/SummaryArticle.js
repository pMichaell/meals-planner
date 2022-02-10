import classes from "./SummaryArticle.module.css"
import BasicCard from "../../../../ui/BasicComponents/BasicCard/BasicCard";
import useFetchMealId from "../../../../hooks/use-fetch-meal-id";
import Spinner from "../../../../ui/Spinner/Spinner";
import {Fragment} from "react";

const SummaryArticle = props => {
    const [mealData, loading] = useFetchMealId(props.mealID);

    let style = loading ? `${classes.loading} ${classes.article}` : classes.article;

    const contents = loading ?
        <Spinner/>
        :
        <div className={classes.div}>
            <img src={mealData.strMealThumb} alt={mealData.strMealThumb} className={classes.mealImg}/>
            <div className={classes.headersDiv}>
                <h1>{props.dayTime}</h1>
                <div className={classes.headersBreak}/>
                <h1>{mealData.strMeal}</h1>
            </div>
        </div>

    return <div id='articleDiv' className={{backgroundImage:`url(${mealData.strMealThumb})`}}>
        <img src={mealData.strMealThumb} alt={mealData.strMealThumb} className={classes.mealImg}/>
            <div className={classes.headersDiv}>
                <h1>{props.dayTime}</h1>
                <div className={classes.headersBreak}/>
                <h1>{mealData.strMeal}</h1>
            </div>

    </div>

}

export default SummaryArticle;