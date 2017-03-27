import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import {Todo} from 'Todo';
import * as actions from 'actions';

describe('Todo', () => {
   it('should exist', () => {
      expect(Todo).toExist();
   });

   it('should dispatch UPDATE_TODO action on click', () => {
     var todoData = {
       id: 11,
       text: 'test',
       completed: false
     }

     var action = actions.startToggleTodo(todoData.id, todoData.completed);

     var spy = expect.createSpy()
     var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);
     var $el = $(ReactDOM.findDOMNode(todo));

     TestUtils.Simulate.click($el[0]);

     expect(spy).toHaveBeenCalledWith(action);
   });
});
