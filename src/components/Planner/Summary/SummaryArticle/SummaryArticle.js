import classes from "./SummaryArticle.module.css"
import BasicCard from "../../../../ui/BasicComponents/BasicCard/BasicCard";
import useFetchMealId from "../../../../hooks/use-fetch-meal-id";
import Spinner from "../../../../ui/Spinner/Spinner";
import {Fragment} from "react";

const SummaryArticle = props => {
    const [mealData, loading] = useFetchMealId(props.mealID);

    const contents = loading ?
        <Spinner/>
        :
        <Fragment>
            <img src={mealData.strMealThumb} alt={mealData.strMealThumb}/>
            <div className={classes.headersDiv}>
                <h1>{props.dayTime}</h1>
                <h1>{mealData.strMeal}</h1>
            </div>
        </Fragment>

    return <BasicCard className={classes.article}>
        {contents}
    </BasicCard>

}

export default SummaryArticle;