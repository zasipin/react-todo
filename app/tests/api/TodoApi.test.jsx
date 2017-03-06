import expect from 'expect';

import TodoApi from 'TodoApi';

describe('TodoApi', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoApi).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{ id: 1, text: 'qwerty', completed: false }];

      TodoApi.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);// check values of arrays
    });

    it('should not set invalid todos array', () => {
      var badTodos = { a: 23 };

      TodoApi.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad local storage data', () => {
      var actualTodos = TodoApi.getTodos();

      expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in local storage', () => {
      var todos = [{ id: 1, text: 'qwerty', completed: false }];
      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoApi.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });
});
