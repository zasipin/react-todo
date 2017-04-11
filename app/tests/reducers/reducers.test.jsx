import expect from 'expect';

var df =  require('deep-freeze-strict');

import * as reducers from 'reducers';

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should return search text on action searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'Some search text'
            }

            var res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should return opposite meaning on action ToggleShowCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED',
            }

            var res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);

            var res = reducers.showCompletedReducer(df(true), df(action));
            expect(res).toEqual(false);
        });
    });

    describe('todosReducer', ()=>{
        it('should add new todo', ()=>{
            var action = {
                type: 'ADD_TODO',
                todo: {
                  id: 1, //uuid(),
                  text: '1',
                  completed: false,
                  createdAt: 123, //moment().unix(),
                  completedAt: undefined   
                }
            }

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });
        
        it('should toggle todo', ()=>{
            var todos = [
            {
                id: 1, //uuid(),
                text: '1',
                completed: false,
                createdAt: 123, //moment().unix(),
                completedAt: undefined
            }, 
            {
                id: 2, //uuid(),
                text: '123',
                completed: true,
                createdAt: 123,//moment().unix(),
                completedAt: 123
            }];
            
            var updates = {
                completed: false,
                completedAt: null
            }

            var action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            }
            var res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(updates.completed);
            // expect(res[0].completedAt).toNotBe(undefined);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(todos[0].text);

            // var action2 = {
            //     type: 'UPDATE_TODO',
            //     id: todos[1].id,
            //     updates
            // }
            // var res = reducers.todosReducer(df(todos), df(action2));
            // expect(res[0].completed).toEqual(todos[0].completed);
            // expect(res[1].completed).toEqual(!todos[1].completed);
            // expect(res[1].completedAt).toEqual(undefined);

        });

    });

    describe('authReducer', () => {
        it('should return uid on action Login', () => {
            var action = {
                type: 'LOGIN',
                uid: 'some uid'
            }

            var res = reducers.authReducer(df({}), df(action));

            expect(res).toEqual({ uid: action.uid });
        });
    });

    describe('authReducer', () => {
        it('should return empty object on action Logout', () => {
            const authData = {
                uid: '123321'
            };    

            var action = {
                type: 'LOGOUT'
            }

            var res = reducers.authReducer(df(authData), df(action));

            expect(res).toEqual({});
        });
    });
});