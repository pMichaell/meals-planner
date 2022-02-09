import classes from "./BasicCard.module.css"

const BasicCard = props => {
    const styles = `${props.className} ${classes.basicCard}`

    return <div className={styles} onClick={props.onClick}>
        {props.children}
    </div>
}

export default BasicCard