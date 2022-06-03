import axios from "axios";

export default class CoversService {
    getAll() {
        return axios.get("/json/Covers.json").then((res) => res.data);
    }
    getCovers(i, n) {
        return axios
            .get("/json/Covers.json")
            .then((res) =>
                res.data.filter((val) => val.id >= i && val.id <= n)
            );
    }
    get(id) {
        return axios
            .get("/json/Covers.json")
            .then((res) => res.data.filter((val) => val.id === id));
    }
}
