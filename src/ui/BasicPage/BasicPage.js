import classes from "./BasicPage.module.css"

const BasicPage = props => {
    const className = `${classes.basic} ${props.className}`

    return <div className={className}>
        return {props.children}
    </div>
}

export default BasicPage;