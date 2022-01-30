import {collection, getDocs} from "firebase/firestore";

export const getAllIngredients = async (db, collectionName) => {
    const ingredientsCol = collection(db, collectionName);
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