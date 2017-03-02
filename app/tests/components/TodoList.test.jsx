import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
   it('should exist', () => {
      expect(TodoList).toExist();
   });

   it('should render one Todo for each todo item', () => {
     var todos = [{id:1, text:"t1"}, {id:2, text:"t2"}];
     var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
     var todosComponents = TestUtils.scryRenderedDOMComponentsWithClass(todoList, 'todo');

      expect(todosComponents.length).toBe(todos.length);
   });
});
