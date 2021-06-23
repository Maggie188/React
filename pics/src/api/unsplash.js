import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Nw40E0iFR4pmR6wRSy61EM-XWcOfNhGT7F7Pi7WY7wg'
    }
});