export default class MealPlan {
    constructor(name, userId, meals, isPublic, lastEdited) {
        this.name = name;
        this.userId = userId;
        this.meals = meals;
        this.isPublic = isPublic;
        this.lastEdited = lastEdited;
    }

    toString() {
        return this.userId + ', ' + this.name + ', ' + this.meals;
    }
}