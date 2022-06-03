import axios from "axios";

export default class CategoriesService {
    getAll() {
        return axios.get("/json/Categories.json").then((res) => res.data);
    }
}
