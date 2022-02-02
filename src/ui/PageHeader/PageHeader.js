import classes from "./PageHeader.module.css"

const PageHeader = props => {
    return <div className={classes.headerDiv}>
        {props.children}
    </div>
}

export default PageHeader;