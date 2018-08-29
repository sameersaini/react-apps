export default function (state = null, action) {
    switch (action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
    default:
        return state;
    }
    /*
     * State is not the redux's complete application state
     * but the state this reducer is responsible for.
     */
}
