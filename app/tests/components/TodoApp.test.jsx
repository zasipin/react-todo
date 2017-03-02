import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
   it('should exist', () => {
      expect(TodoApp).toExist();
   });

   it('should add todo to the todos state on handleAddTodo', () => {
     var todoText = 'test text';
     var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

     todoApp.setState({todos: []});
     todoApp.handleAddTodo(todoText);

     expect(todoApp.state.todos.length).toBe(1);
     expect(todoApp.state.todos[0].text).toBe(todoText);
   });
});
