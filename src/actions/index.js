import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const SAVE_POSTS = 'SAVE_POSTS';
export const DELETE_POST = 'DELETE_POST';

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

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/${id}?key=${key}`);

    return {
        type: FETCH_POST,
        payload: request,
    };
}

export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/${id}?key=${key}`).then(() => {
        callback();
    });

    return {
        type: DELETE_POST,
        payload: id,
    };
}
