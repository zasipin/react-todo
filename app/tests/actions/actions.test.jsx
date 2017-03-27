import expect from 'expect';
import * as actions from 'actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import firebase, {firebaseRef} from 'app/firebase/';

var createMockStore = configureMockStore([thunk]);

describe('Actions', function(){
    it('should generate search text action', ()=>{
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'some search text'
        }

        var res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
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

        var res = actions.addTodo(action.todo);

        expect(res).toEqual(action);
    });

    it('should create new todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({});
        const todoText = 'my todo item';

        store.dispatch(actions.startAddTodo(todoText)).then(() => {
            const actionsArr = store.getActions();
            expect(actionsArr[0]).toInclude({
                type: 'ADD_TODO'
            });

            expect(actionsArr[0].todo).toInclude({
                text: todoText
            });
            done();
        }).catch(done);
    });

    it('should generate toggle show completed action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED',
        }

        var res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

    it('should generate UPDATE_TODO action', () => {
        var action = {
            type: 'UPDATE_TODO',
            id: 12,
            updates: {completed: false}
        }

        var res = actions.updateTodo(action.id, action.updates);

        expect(res).toEqual(action);
    });

    describe('Tests with firebase todos', () => {
        var testTodoRef;

        beforeEach((done) => {
            // insert data to firebase
            testTodoRef = firebaseRef.child('todos').push();
            testTodoRef.set({
                text: 'Something to do',
                completed: false,
                createdAt: 123
            }).then(() => done());
        });

        afterEach((done) => {
            // remove data from firebase after test
            testTodoRef.remove().then(() => done());
        });

        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({});
            const action = actions.startToggleTodo(testTodoRef.key, true);

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();
                expect(mockActions[0]).toInclude({
                    type:'UPDATE_TODO',
                    id: testTodoRef.key
                });

                expect(mockActions[0].updates).toInclude({
                    completed: true                    
                });

                expect(mockActions[0].updates.completedAt).toExist();

                done();
            }).catch(() => done());
        });
    });

});

