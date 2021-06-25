import axios from 'axios';

const KEY = 'AIzaSyA79HaLrcZpdl5TOmsOoxQmQ3P_iN5N1v4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

