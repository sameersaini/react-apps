import firebase from 'firebase/app';
import 'firebase/database';

import {
    FETCH_POSTS,
    CREATE_POSTS,
    DELETE_POSTS,
} from './types';


const config = {
    apiKey: 'AIzaSyDOXLsEm_HtdEf3NegqWELryiahQECn6j0',
    authDomain: 'react-apps-214019.firebaseapp.com',
    databaseURL: 'https://react-apps-214019.firebaseio.com',
    projectId: 'react-apps-214019',
    storageBucket: 'react-apps-214019.appspot.com',
    messagingSenderId: '753704266945',
};
firebase.initializeApp(config);


const database = firebase.database().ref('/posts');

export function fetchPosts() {
    return (dispatch) => {
        database.on('value', (snapshot) => {
            dispatch({
                type: FETCH_POSTS,
                payload: snapshot.val(),
            });
        });
    };
}

export function createPosts(post) {
    return dispatch => database.push(post);
}

export function deletePosts(key) {
    return dispatch => database.child(key).remove();
}
