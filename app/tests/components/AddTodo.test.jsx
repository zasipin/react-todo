import React from 'react';
import ReactDOM from 'react-dom';

import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import {AddTodo} from 'AddTodo';

describe('AddTodo', () => {
   it('should exist', () => {
      expect(AddTodo).toExist();
   });

   it('should dispatch ADD_TODO when valid todo text ', () => {
     var spy = expect.createSpy();
     var todoText = 'some text';
     var action = {
       type: 'ADD_TODO',
       text: todoText
     };
     var todoForm = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
     var $el = $(ReactDOM.findDOMNode(todoForm));
     todoForm.refs.todoText.value = todoText;
     TestUtils.Simulate.submit($el.find('form')[0]);
     expect(spy).toHaveBeenCalledWith(action);
   });

   it('should not dispatch ADD_TODO if empty text entered', () => {
     var todoText = '';
     var spy = expect.createSpy();
     var todoForm = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
     var $el = $(ReactDOM.findDOMNode(todoForm));
     todoForm.refs.todoText.value = todoText;
     TestUtils.Simulate.submit($el.find('form')[0]);
     expect(spy).toNotHaveBeenCalled();
   });
});
