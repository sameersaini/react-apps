import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const SAVE_POSTS = 'SAVE_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const key = 'sameersaini';
const URL = `${ROOT_URL}?key=${key}`;

export function fetchPosts() {
    const request = axios.get(URL);

    return {
        type: FETCH_POSTS,
        payload: request,
    };
}

export function savePost(values, callback) {
    const request = axios.post(URL, values).then(() => {
        callback();
    });

    return {
        type: SAVE_POSTS,
        payload: request,
    };
}
