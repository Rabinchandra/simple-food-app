export default class FoodItem {
    constructor(id, title, uri, rating=4) {
        this.id = id;
        this.title = title;
        this.uri = uri;
        this.rating = rating
    }
}