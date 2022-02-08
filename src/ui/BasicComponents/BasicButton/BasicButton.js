import classes from "./BasicButton.module.css"

const BasicButton = props => {
    let styles = `${props.className} ${classes.basic}`

    return <button className={styles} onClick={props.onClick}>
        {props.children}
    </button>
}

export default BasicButton;