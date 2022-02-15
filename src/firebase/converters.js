import MealPlan from "../classes/MealPlan";

export const mealPlanConverter = {
    toFirestore: (mealPlan) => {
        return {
            userID: mealPlan.userID,
            name: mealPlan.name,
            meals: mealPlan.meals,
            isPublic: mealPlan.isPublic,
            lastEdited: mealPlan.lastEdited
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new MealPlan(data.name, data.userID, data.meals, data.isPublic, data.lastEdited);
    }
};