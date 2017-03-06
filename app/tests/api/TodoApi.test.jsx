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

  describe('filterTodos', () => {
    var todos = [{ id: 1, text: 'qwerty dsf', completed: true },
                 { id: 2, text: 'ds qwerty', completed: false },
                 { id: 3, text: 'qw er ty', completed: false }];

    it('should return all items if showCOmpleted is true', () => {
      var filterTodos = TodoApi.filterTodos(todos, true, '');

      expect(filterTodos.length).toBe(3);
    });

    it('should return only non-completed items if showCOmpleted is false', () => {

      var filterTodos = TodoApi.filterTodos(todos, false, '');

      expect(filterTodos.length).toBe(2);
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoApi.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should return all items if search text is empty', () => {
      var filteredTodos = TodoApi.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(todos.length);
    });

    it('should return only filtered items if search text is not empty', () => {
      var filteredTodos = TodoApi.filterTodos(todos, true, 'ds');
      expect(filteredTodos.length).toBe(2);
    });
  });
});
