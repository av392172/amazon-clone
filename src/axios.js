import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-78cff.cloudfunctions.net/api'
    // 'http://localhost:5001/clone-78cff/us-central1/api'      //The API (cloud function) URL
});

export default instance;