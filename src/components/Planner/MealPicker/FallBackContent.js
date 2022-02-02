import {Fragment} from "react";
import {Link, useNavigate} from "react-router-dom";

const FallBackContent = props => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate("../")
    }

    return <Fragment>
        <Link to="../">Pick other ingredients</Link>
        <h1>Or</h1>
        <button onClick={clickHandler}/>
    </Fragment>
}

export default FallBackContent;