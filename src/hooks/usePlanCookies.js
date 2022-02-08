import {useCookies} from "react-cookie";
import MealPlan from "../classes/MealPlan";
import {useSelector} from "react-redux";
import {selectUserId} from "../store/userSlice";
import Meals from "../classes/Meals";

const useCookiesWrapper = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const userId = useSelector(selectUserId);

    const planCookieExists = () => {
        return !!cookies.plan;
    }

    const createNewPlan = () => {
        if(planCookieExists()) {
            setCookie("plan", new Meals());
        }
    }
}

export default useCookiesWrapper;