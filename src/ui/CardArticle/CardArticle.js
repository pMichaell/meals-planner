import classes from "./CardArticle.module.css"

const CardArticle = props => {
    return <article className={classes.article} onClick={props.onClick}>
        <img src={props.articleImage} alt={`${props.articleText}`} className={classes.image}/>
        <div className={classes.layout}><h2 className={classes.mealName}>{props.articleText}</h2></div>
    </article>
}

export default CardArticle;