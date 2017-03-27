import expect from 'expect';
import * as actions from 'actions';

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

    it('should generate toggle show completed action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED',
        }

        var res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

        it('should generate toggle todo action', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: 12
        }

        var res = actions.toggleTodo(action.id);

        expect(res).toEqual(action);
    });

});

