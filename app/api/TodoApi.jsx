import $ from 'jquery';

export default {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (err) {
    }
    return $.isArray(todos) ? todos : [];
  },

  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filter completed
    filteredTodos = filteredTodos.filter((item) => {
      return !item.completed || showCompleted;
    });
    // filter search text
    if (searchText) {
      var text = searchText.toLowerCase();
      filteredTodos = filteredTodos.filter((item) => {
        return item.text.toLowerCase().indexOf(text) >= 0;
      });
    }
    // sort - first incompleted then completed

    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
          return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
}
