import axios from 'axios';


const GET = url => {
    return axios.get(url);
};


const POST = (url, payload) => {
    return axios.post(url, payload);
};

export {
    GET,
    POST
}
