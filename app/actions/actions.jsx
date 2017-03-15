export function setSearchText(searchText) {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    }
}

export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text
    }
}

// toggleShowCompleted
export function toggleShowCompleted(){
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    }
}

// toggleTodo
export function toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}