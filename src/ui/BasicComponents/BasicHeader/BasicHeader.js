import classes from "./BasicHeader.module.css"

const BasicHeader = props => {
    const className = `${props.className} ${classes.basic}`

    return <h1 className={className}>
        {props.children}
    </h1>
}

export default BasicHeader;