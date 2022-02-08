import {collection, getDocs, doc, setDoc, deleteDoc, runTransaction, addDoc} from "firebase/firestore";
import {database} from "./firebase";
import {mealPlanConverter} from "./converters";
import MealPlan from "../classes/MealPlan";

export const getAllIngredients = async () => {
    const ingredientsCol = collection(database, "ingredients");
    const ingredientSnapshot = await getDocs(ingredientsCol);
    let ingredients = [];
    ingredientSnapshot.docs.forEach(doc => {
        ingredients.push(
            {
                idIngredient: doc.id,
                strIngredient: doc.data().strIngredient,
                strDescription: doc.data().strDescription,
                strType: doc.data().strType
            })
    })

    return ingredients;
}

export const createUser = async (user) => {
    const userDocRef = doc(database, "users", user.uid);
    await runTransaction(database, async (transaction) => {
        const userDoc = await transaction.get(userDocRef);
        if (userDoc.exists()) return;
        await setDoc(userDocRef, { email: user.email, displayName: user.displayName, photoURL: user.photoURL});
    })
}

export const createPlan = async (userID) => {
    const ref = doc(database, "mealPlans").withConverter(mealPlanConverter);
    await addDoc(ref, new MealPlan(userID, ""));
}

export const setMeal = async (day, dayTime, mealID) => {

}

export const setCurrentlyEditedPlan = async () => {

}

export const getCurrentlyEditedPlan = async () => {

}

export const deleteCurrentlyEditedPlan = async() => {

}