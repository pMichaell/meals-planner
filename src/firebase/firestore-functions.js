import {collection, getDocs, doc, setDoc, deleteDoc, runTransaction} from "firebase/firestore";
import {database} from "./firebase";

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

export const getPickedIngredients = async () => {
    let pickedIngredients;
    const querySnapshot = await getDocs(collection(database, "pickedIngredients"));
    querySnapshot.docs.forEach(doc => {
        pickedIngredients = doc.data().pickedIngredients
    })
    return pickedIngredients
}

export const submitPickedIngredients = async (pickedIngredients) => {
    await deleteDoc(doc(database, "pickedIngredients", "0"));
    await setDoc(doc(database, "pickedIngredients", "0"), {
        pickedIngredients
    });
}

export const createUser = async (userUid) => {
    const userDocRef = doc(database, "users", userUid);

    await runTransaction(database, async (transaction) => {
        const userDoc = await transaction.get(userDocRef);
        if (userDoc.exists()) return Promise.reject("User exists");
        await setDoc(userDocRef, {});
    })
}

export const assignPlanToUser = async (userId) => {

}

export const createPlan = () => {

}

export const setMeal = async (day, dayTime, mealId) => {

}

export const setCurrentlyEditedPlan = async () => {

}

export const getCurrentlyEditedPlan = async () => {

}

export const deleteCurrentlyEditedPlan = async() => {

}