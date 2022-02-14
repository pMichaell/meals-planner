import classes from "./UserCard.module.css"
import {Fragment} from "react";
import Spinner from "../../../ui/Spinner/Spinner";

const UserCard = props => {

    let style =  props.loading ? `${classes.card} ${classes.loading}` : classes.card;

    const contents = props.loading ? <Spinner/> : props.photoURL ?
    <Fragment>
        <img src={props.photoURL} alt={props.photoURL} className={classes.userImg}/>
        <h3 className={classes.header}>{props.displayName}</h3>
    </Fragment> :
    <Fragment>

    </Fragment>

    return <article className={style}>
        {contents}
    </article>
}

export default UserCard;