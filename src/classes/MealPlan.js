import Meals from "./Meals";

export default class MealPlan {
    constructor(userId, name) {
        this.userId = userId;
        this.name = name;
        this.meals = new Meals();
        this.finished = false;
    }

    toString() {
        return this.userId + ', ' + this.name + ', ' + this.meals;
    }
}