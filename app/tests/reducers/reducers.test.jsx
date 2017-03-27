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
        it('should return oppsite meaning on action ToggleShowCompleted', () => {
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
            
            var action = {
                type: 'TOGGLE_TODO',
                id: todos[0].id
            }
            var res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(!todos[0].completed);
            expect(res[0].completedAt).toNotBe(undefined);
            
            var action2 = {
                type: 'TOGGLE_TODO',
                id: todos[1].id
            }
            var res = reducers.todosReducer(df(todos), df(action2));
            expect(res[0].completed).toEqual(todos[0].completed);
            expect(res[1].completed).toEqual(!todos[1].completed);
            expect(res[1].completedAt).toEqual(undefined);

        });

    });

});