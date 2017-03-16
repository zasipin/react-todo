import expect from 'expect';

import * as reducers from 'reducers';

describe('Reducers', () => {
    it('shuold return search text on action searchText', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        }

        var res = reducers.searchTextReducer('', action);

        expect(res).toEqual(action.searchText);
    });
});