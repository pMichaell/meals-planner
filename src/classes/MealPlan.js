export default class MealPlan {
    constructor(name, userID, meals, isPublic, lastEdited) {
        this.name = name;
        this.userID = userID;
        this.meals = meals;
        this.isPublic = isPublic;
        this.lastEdited = lastEdited;
    }
}