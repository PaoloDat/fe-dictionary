import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResult() {
        try {
            const url = "http://localhost:8081/api/word";
            const res = await axios(`${url}?query=${this.query}`)
            this.result = res.data;
        } catch (err) {
            console.log(err);
        }
    }

}