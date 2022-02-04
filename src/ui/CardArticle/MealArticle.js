import classes from "./CardArticle.module.css"

const MealArticle = props => {

    const clickHandler = () => {
        props.onClick(props.mealId);
    }

    return <article className={classes.article} onClick={clickHandler}>
        <img src={props.articleImage} alt={`${props.articleText}`} className={classes.image}/>
        <div className={classes.layout}><h2 className={classes.mealName}>{props.articleText}</h2></div>
    </article>
}

export default MealArticle;