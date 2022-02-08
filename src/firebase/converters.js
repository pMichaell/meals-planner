import MealPlan from "../classes/MealPlan";

export const mealPlanConverter = {
    toFirestore: (mealPlan) => {
        return {
            userId: mealPlan.userId,
            name: mealPlan.name,
            meals: mealPlan.meals
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new MealPlan(data.userId, data.name, data.meals);
    }
};