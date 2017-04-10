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
                action.todo
            ];
        case 'ADD_TODOS':
            return [
                ...state,
                ...action.todos
            ];    
        case 'UPDATE_TODO':
            return state.map(item => {
                if(item.id === action.id)
                {
                      return {
                          ...item,
                          ...action.updates
                      }
                }
                return item;
            });    
        default: return state; 
    }
}

export function authReducer(state = {}, action){
    switch(action.type){
        case 'LOGIN':
            return {
                uid: action.uid
            }
        case 'LOGOUT':
            return {
                
            }
        default:
            return state;        
    }
}