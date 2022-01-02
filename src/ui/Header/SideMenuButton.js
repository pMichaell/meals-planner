import classes from "./SideMenuButton.module.css"

const SideMenuButton = props => {
    return (
        <div className={classes.burgerMenu} onClick={props.onClick}>
            <div/>
            <div/>
            <div/>
        </div>
    )
}

export default SideMenuButton;