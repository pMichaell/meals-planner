import classes from "./BasicContainer.module.css"

const BasicContainer = props => {
    const className = `${props.className} ${classes.basic}`

    return <div className={className}>
        return {props.children}
    </div>
}

export default BasicContainer;