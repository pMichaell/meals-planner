import classes from "./MealPicker.module.css"
import {Fragment, useEffect, useState} from "react";
import MealArticle from "../../../ui/CardArticle/MealArticle";
import Spinner from "../../../ui/Spinner/Spinner";
import Icon from "../../../ui/Icon/Icon";
import useFetchMeals from "../../../hooks/use-fetch-meals";
import FallbackContent from "./FallbackContent";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import Modal from "../../../ui/Modal/Modal";
import {Link, useParams} from "react-router-dom";
import BasicCard from "../../../ui/BasicComponents/BasicCard/BasicCard";
import {useCookies} from "react-cookie";
import BasicButton from "../../../ui/BasicComponents/BasicButton/BasicButton";
import Meals from "../../../classes/Meals";


const MealPicker = () => {
    const {isLoading, fetchedMeals} = useFetchMeals();
    const [delayed, setDelayed] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [chosenMealId, setChosenMealId] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies();
    const {width} = useWindowDimensions();
    const params = useParams();


    useEffect(() => {
        setTimeout(() => {
            setDelayed(true);
        }, 650)
    }, [])


    const articleClickHandler = mealId => {
        //TODO add clicked meal to current meal plan
        setChosenMealId(mealId);
        setModalVisible(true);
    }

    const backDropClickHandler = () => {
        setModalVisible(false);
    }

    const modalButtonClickHandler = () => {
        let plan = cookies.plan;
        for (let [day, meals] of Object.entries(plan)) {
            if (day === params.day) {
                for (let mealName of Object.keys(meals)) {
                    if(mealName === params.meal) {
                        meals[params.meal] = chosenMealId;
                    }
                }
            }
        }
        console.log(plan);
        setCookie('plan', plan, {sameSite: "lax"});
    }


    const mapMeals = () => {
        return fetchedMeals.map(meal => {
            return <ul className={classes.mealsList} key={meal.idMeal}>
                <li>
                    <MealArticle
                        mealId={meal.idMeal}
                        articleText={meal.strMeal}
                        articleImage={meal.strMealThumb}
                        onClick={articleClickHandler}
                    />
                </li>
            </ul>
        })
    }

    const getNotFoundHeader = () => {
        return <Fragment>
            <h1 className={classes.header}>Sorry we haven't found matching meals</h1>
            <Icon iconData={{
                iconName: 'frown-open',
                iconSize: width > 700 ? "9x" : "7x",
                isInverse: true,
                className: classes.icon,
                isSpin: true
            }}/>
        </Fragment>

    }

    const getNotFoundBody = () => {
        return <FallbackContent/>
    }

    const headerContents = !delayed ? <Spinner/> :
        fetchedMeals.length === 0 && delayed ?
            getNotFoundHeader()
            :
            <h2 className={classes.header}>We found {fetchedMeals.length} meals matching picked ingredients</h2>


    const bodyContents = isLoading ?
        <Fragment/> :
        fetchedMeals.length === 0 && delayed ?
            getNotFoundBody() :
            mapMeals();

    const modalContents =
        <Modal onBackdropClick={backDropClickHandler}>
            <BasicCard className={classes.modal}>
                <h2 className={classes.modalHeader}>
                    Are you sure you would like to pick this meal for your {params.meal}?
                </h2>
                <Icon iconData={{
                    iconName: 'question-mark',
                    iconSize: width > 700 ? "4x" : "2x",
                    isInverse: true
                }}/>
                <BasicButton className={classes.modalButton} onClick={modalButtonClickHandler}>
                <Link to={`/planner/${params.day}`} className={classes.modalLink}>Yes</Link>
                </BasicButton>
            </BasicCard>
        </Modal>


    return <div className={classes.div}>
        {modalVisible &&
        modalContents}
        <div className={classes.headerDiv}>
            {headerContents}
        </div>
        <div className={classes.bodyDiv}>
            {bodyContents}
        </div>
    </div>
}

export default MealPicker;






