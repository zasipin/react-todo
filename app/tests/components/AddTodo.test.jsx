import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import AddTodo from 'AddTodo';

describe('AddTodo', () => {
   it('should exist', () => {
      expect(AddTodo).toExist();
   });

   it('should call onAddButtonClick if valid text entered', () => {
     var spy = expect.createSpy();
     var todoForm = TestUtils.renderIntoDocument(<AddTodo onAddButtonClick={spy}/>);
     var $el = $(ReactDOM.findDOMNode(todoForm));
     todoForm.refs.todoText.value = '1';
     TestUtils.Simulate.submit($el.find('form')[0]);
     expect(spy).toHaveBeenCalledWith('1');
   });

   it('should not call onAddButtonClick if empty text entered', () => {
     var spy = expect.createSpy();
     var todoForm = TestUtils.renderIntoDocument(<AddTodo onAddButtonClick={spy}/>);
     var $el = $(ReactDOM.findDOMNode(todoForm));
     todoForm.refs.todoText.value = '';
     TestUtils.Simulate.submit($el.find('form')[0]);
     expect(spy).toNotHaveBeenCalled();
   });
});
