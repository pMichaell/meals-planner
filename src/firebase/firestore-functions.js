import {addDoc, collection, doc, getDoc, getDocs, runTransaction, setDoc} from "firebase/firestore";
import {database} from "./firebase";
import {mealPlanConverter} from "./converters";

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

export const fetchUserData = async (userID) => {
    const userRef = doc(database, "users", `${userID}`);
    const userSnap = await getDoc(userRef);
    if(!userSnap.exists()) return;
    return userSnap.data();
}



export const savePlan = async (mealPlan) => {
    const ref = doc(database, "mealPlans").withConverter(mealPlanConverter);
    await addDoc(ref, {...mealPlan});
}

