import {Injectable, Signal, signal} from '@angular/core';
import {CreateTodo, Todo} from '../interfaces/todo';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  #todos = signal<Todo[]>([]);

  todos: Signal<Todo[]> = this.#todos.asReadonly();

  addTodo(todo: CreateTodo) {
    this.#todos.update((todos) => [...todos, { ...todo, id: uuid.v4() }]);
  }

  editTodo(todo: Todo) {
    this.#todos.update((todos) => [...todos.filter(item => item.id !== todo.id), todo]);
  }

  deleteTodo(id: string) {
    this.#todos.update((todos) => [...todos.filter(item => item.id !== id)]);
  }
}
