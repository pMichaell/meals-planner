import {useNavigate} from "react-router-dom";

const NavigationBar = props => {
    const navigate = useNavigate();

    const {cardStyling} = props.style;

    const redirect = () => {
        navigate(`./${props.path}`);
    }

    return <div className={cardStyling} onClick={redirect}>
        <h2>{props.name}</h2>
    </div>
}

export default  NavigationBar;