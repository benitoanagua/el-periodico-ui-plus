import axios from "axios";

export default class PostsService {
    getAll() {
        return axios.get("/json/Posts.json").then((res) => res.data);
    }
    getPosts(i, n) {
        return axios
            .get("/json/Posts.json")
            .then((res) =>
                res.data.filter((val) => val.id >= i && val.id <= n)
            );
    }
    get(id) {
        return axios
            .get("/json/Posts.json")
            .then((res) => res.data.filter((val) => val.id === id));
    }
}
