export class MealPlan {
    constructor(userId, name) {
        this.userId = userId;
        this.name = name;
        this.meals =
            {
                monday: {
                    breakfast: "",
                    dinner: "",
                    supper: ""
                },
                tuesday: {
                    breakfast: "",
                    dinner: "",
                    supper: ""
                },
                wednesday: {
                    breakfast: "",
                    dinner: "",
                    supper: ""
                },
                thursday: {
                    breakfast: "",
                    dinner: "",
                    supper: ""
                },
                friday: {
                    breakfast: "",
                    dinner: "",
                    supper: ""
                },
                saturday: {
                    breakfast: "",
                    dinner: "",
                    supper: ""
                },
                sunday: {
                    breakfast: "",
                    dinner: "",
                    supper: ""
                }

            }
    }

    toString() {
        return this.userId + ', ' + this.name + ', ' + this.meals;
    }
}

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