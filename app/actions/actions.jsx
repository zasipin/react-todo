import firebase, { firebaseRef } from 'app/firebase';
import moment from 'moment';

export function setSearchText(searchText) {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    }
}

export function addTodo(todo) {
    return {
        type: 'ADD_TODO',
        todo
    }
}

// thunk middleware lets us return functions from action generators
// export function startAddTodo(text) {
//     return (dispatch, getState) => {

//     }
// }

export function startAddTodo(text) {
    return (dispatch, getState) => {
        var todo = {
                    // id: uuid(),
                    text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: null
                };
         // store new todo to db       
         var todoRef = firebaseRef.child('todos').push(todo);

         // rerender component
         return todoRef.then(() => {
             dispatch(addTodo({
                 ...todo,
                 id: todoRef.key
             }));
         })       
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

export function startToggleTodo(id, completed) {
    return (dispatch, getState) => {
        var todoRef = firebaseRef.child(`todos/${id}`);
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null 
        }

        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates));
        });
    };
}

// updateTodo
export function updateTodo(id, updates) {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    }
}

export function addTodos(todos) {
    return {
        type: 'ADD_TODOS',
        todos
    }
}

export function startAddTodos(){
    return (dispatch, getState) => {
        var todosRef = firebaseRef.child('todos');
        return todosRef.once('value').then((snapshot) => {
            var todosReturned = snapshot.val() || {};
            var ids = Object.keys(todosReturned);
            var todos = ids.map((item) => {
                return {
                    id: item,
                    ...todosReturned[item]
                }
            });
            // console.log("todos: ", todos);
            dispatch(addTodos(todos));
        });
    }
}