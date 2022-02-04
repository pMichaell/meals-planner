 export class MealPlan {
    constructor(userId, name, meals) {
        this.userId = userId;
        this.name = name;
        this.meals = meals;
    }

    toString() {
        return this.userId + ', ' + this.name + ', ' + this.meals;
    }
}

 export const cityConverter = {
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