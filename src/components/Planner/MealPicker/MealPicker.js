import classes from "./MealPicker.module.css"
import {Fragment} from "react";
import CardArticle from "../../../ui/CardArticle/CardArticle";
import Spinner from "../../../ui/Spinner/Spinner";
import Icon from "../../../ui/IconPicker/Icon";
import useFetchMeals from "../../../hooks/use-fetch-meals";
import FallBackContent from "./FallBackContent";


const MealPicker = () => {
    const {isLoading, fetchedMeals} = useFetchMeals();

    const mapMeals = () => {
        return fetchedMeals.map(meal => {
            return <ul className={classes.mealsList} key={meal.idMeal}>
                <li>
                    <CardArticle articleText={meal.strMeal} articleImage={meal.strMealThumb}/>
                </li>
            </ul>
        })
    }

    const getHeader = () => {
        setTimeout(() => {
            return <Fragment>
                <h1 className={classes.header}>Sorry we haven't found matching meals</h1>
                <Icon iconData={{
                    iconName: 'frown-open',
                    iconSize: "5x",
                    isInverse: true,
                    className: classes.icon,
                    isSpin: true
                }}/>
            </Fragment>
        }, 500);
    }

    const headerContents = fetchedMeals.length > 0 ?
        <h2 className={classes.header}>We found {fetchedMeals.length} meals matching picked ingredients</h2>
        :
        getHeader();


    const bodyContents = isLoading ?
        <Spinner/> :
        fetchedMeals.length > 0 ?
            mapMeals() :
            <FallBackContent/>;


    return <div className={classes.div}>
        <div className={classes.headerDiv}>
            {headerContents}
        </div>
        <div className={classes.bodyDiv}>
            {bodyContents}
        </div>
    </div>
}

export default MealPicker;






