interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

class TodoList {
  private todos: Todo[] = [];
  addTodo(title: string) {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title: title,
      completed: false,
    };
    this.todos.push(newTodo);
  }
  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  editTodo(id: number, title: string) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.title = title;
    }
  }

  getTodos() {
    return this.todos;
  }
}

const todoList = new TodoList();
todoList.addTodo("Buy milk");
todoList.addTodo("Walk the dog");
console.log(todoList.getTodos());
