export function searchTextReducer(state = '', action) {
    switch (action.type){
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        default: return state; 
    }
}

export function showCompletedReducer(state = false, action) {
    switch (action.type){
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;
        default: return state; 
    }
}