import classes from "./BasicCard.module.css"

const BasicCard = props => {
    const styles = `${classes.basicCard} ${props.className} `

    return <div className={styles} onClick={props.onClick}>
        {props.children}
    </div>
}

export default BasicCard