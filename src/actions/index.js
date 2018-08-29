export function selectBook(book) {
    /*
     * actions need to return a type and a payload.
     * action is the purpose.
     * payload is the data to be updated in the state.
     */
    return {
        type: 'BOOK_SELECTED',
        payload: book,
    };
}
