import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch component', ()=>{
    it('should exist', ()=>{
        expect(TodoSearch).toExist();
    });

    it('should dispatch setSearchText on input change', ()=> {
        var searchText = 'Tree';
        var spy = expect.createSpy();
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText
        };
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(action);

    });

    it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', ()=>{
        var searchText = 'Tree';
        var spy = expect.createSpy();
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(action);

    });
});