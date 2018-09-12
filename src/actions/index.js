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

    return (dispatch) => {
        request.then((data) => {
            dispatch({
                type: FETCH_POSTS,
                payload: data,
            });
        });
    };
}

export function savePost(values, callback) {
    const request = axios.post(URL, values).then(() => {
        callback();
    });

    return (dispatch) => {
        dispatch({
            type: SAVE_POSTS,
            payload: request,
        });
    };
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/${id}?key=${key}`);

    return (dispatch) => {
        request.then((data) => {
            dispatch({
                type: FETCH_POST,
                payload: data,
            });
        });
    };
}

export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/${id}?key=${key}`).then(() => {
        callback();
    });

    return (dispatch) => {
        dispatch({
            type: DELETE_POST,
            payload: id,
        });
    };
}
