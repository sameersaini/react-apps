import _ from 'lodash';
import {
    FETCH_POSTS,
    CREATE_POSTS,
    DELETE_POSTS,
} from '../actions/types';

export default function fetchPosts(state = {}, action) {
    switch (action.type) {
    case FETCH_POSTS:
        return action.payload;
    case CREATE_POSTS:
        return { ...state, ...action.payload };
    case DELETE_POSTS:
        return _.omit(state, action.payload);
    default:
        return state;
    }
}
