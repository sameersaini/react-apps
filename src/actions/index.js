import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
    const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
    const key = 'PAPERCLIP1234';
    const URL = `${ROOT_URL}?key=${key}`;

    const request = axios.get(URL);

    return {
        type: FETCH_POSTS,
        payload: request,
    };
}
