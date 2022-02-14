import {useSelector} from "react-redux";
import {selectUserId} from "../store/userSlice";
import MealPlan from "../classes/MealPlan";
import {
    collection,
    doc,
    setDoc,
    Timestamp,
    query,
    where,
    getDocs,
    getDoc
} from "firebase/firestore";
import {database} from "../firebase/firebase";
import {mealPlanConverter} from "../firebase/converters";
import {mockMeals} from "../components/Planner/Summary/Summary";

const useFirestore = () => {
    const userID = useSelector(selectUserId);
    // const currentMealPlan = JSON.parse(localStorage.getItem("meals"));
    const currentMealPlan = mockMeals;
    console.log(currentMealPlan);

    const createMealPlan = async (name, isPublic) => {
        const mealPlan = new MealPlan(name, userID, currentMealPlan, isPublic, Timestamp.now());
        const newMealPlanRef = doc(collection(database, "mealPlans")).withConverter(mealPlanConverter);
        await setDoc(newMealPlanRef, mealPlan);
        localStorage.removeItem("meals");
    }

    const fetchUserPlans = async () => {
        const q = query(collection(database, "mealPlans"), where("userId", "==", userID))
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);
    }

    const fetchUserData = async () => {
        const userRef = doc(database, "users", userID);
        const userSnap = await getDoc(userRef);
        if(!userSnap.exists()) return;
        return userSnap.data();
    }

    return {
        createMealPlan,
        fetchUserPlans,
        fetchUserData
    }
}

export default useFirestore;