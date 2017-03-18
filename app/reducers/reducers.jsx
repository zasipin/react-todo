import uuid from 'node-uuid';
import moment from 'moment';

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

export var todosReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: uuid(),
                    text: action.text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(item => {
                if(item.id === action.id)
                {
                      return {
                          ...item,
                          completed: !item.completed,
                          completedAt: !item.completed ? moment().unix() : undefined
                      }
                }
                return item;
            });    
        default: return state; 
    }
}