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

            var res = reducers.showCompletedReducer(true, action);
            expect(res).toEqual(false);
        });
    });
});