import classes from "./MealPicker.module.css"
import {Fragment, useEffect, useState} from "react";
import MealArticle from "../../../ui/CardArticle/MealArticle";
import Spinner from "../../../ui/Spinner/Spinner";
import Icon from "../../../ui/Icon/Icon";
import useFetchMeals from "../../../hooks/use-fetch-meals";
import FallbackContent from "./FallbackContent";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import Modal from "../../../ui/Modal/Modal";
import {useParams} from "react-router-dom";
import BasicCard from "../../../ui/BasicComponents/BasicCard/BasicCard";
import NavigationBar from "../../../ui/NavigationBar/NavigationBar";
import {useCookies} from "react-cookie";


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
                <NavigationBar name="Yes" path={`/planner/${params.day}`} className={classes.modalButton}/>
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






