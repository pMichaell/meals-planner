import classes from "./SummaryArticle.module.css"
import BasicCard from "../../../../ui/BasicComponents/BasicCard/BasicCard";
import useFetchMealId from "../../../../hooks/use-fetch-meal-id";
import Spinner from "../../../../ui/Spinner/Spinner";
import {Fragment} from "react";

const SummaryArticle = props => {
    const [mealData, loading] = useFetchMealId(props.mealID);
    console.log(props.mealID);

    const contents = loading ?
        <Spinner/>
        :
        <Fragment>
            <h3></h3>
            <img src="" alt=""/>
            <h2></h2>
        </Fragment>

    return <BasicCard className={classes.article}>

    </BasicCard>

}

export default SummaryArticle;