import { combineReducers } from 'redux';
import fetchPosts from './fetch_posts';

const rootReducer = combineReducers({
    posts: fetchPosts,
});

export default rootReducer;
