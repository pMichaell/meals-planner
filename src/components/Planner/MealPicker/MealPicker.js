import classes from "./MealPicker.module.css"
import {Fragment, useEffect, useState} from "react";
import CardArticle from "../../../ui/CardArticle/CardArticle";
import Spinner from "../../../ui/Spinner/Spinner";
import Icon from "../../../ui/IconPicker/Icon";
import useFetchMeals from "../../../hooks/use-fetch-meals";
import FallbackContent from "./FallbackContent";


const MealPicker = () => {
    const {isLoading, fetchedMeals} = useFetchMeals();
    const [delayed, setDelayed] = useState(false);

    useEffect(() => {
      setTimeout(() => {
          setDelayed(true);
      }, 500)
    }, [])


    const mapMeals = () => {
        return fetchedMeals.map(meal => {
            return <ul className={classes.mealsList} key={meal.idMeal}>
                <li>
                    <CardArticle articleText={meal.strMeal} articleImage={meal.strMealThumb}/>
                </li>
            </ul>
        })
    }

    const getNotFoundHeader = () => {
            return <Fragment>
                <h1 className={classes.header}>Sorry we haven't found matching meals</h1>
                <Icon iconData={{
                    iconName: 'frown-open',
                    iconSize: "4x",
                    isInverse: true,
                    className: classes.icon,
                    isSpin: true
                }}/>
            </Fragment>

    }

    const getNotFoundBody = () => {
        return <FallbackContent/>
    }

    const headerContents = !delayed ? <Fragment/> :
        fetchedMeals.length === 0 && delayed ?
        getNotFoundHeader()
        :
        <h2 className={classes.header}>We found {fetchedMeals.length} meals matching picked ingredients</h2>



    const bodyContents = isLoading ?
        <Spinner/> :
        fetchedMeals.length === 0 && delayed ?
            getNotFoundBody() :
            mapMeals();


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






