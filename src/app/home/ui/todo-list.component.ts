import {Component, inject, Input} from '@angular/core';
import { Todo } from '../../shared/interfaces/todo';
import {RouterModule} from "@angular/router";
import {TodoService} from "../../shared/data-access/todo.service";

@Component({
  standalone: true,
  selector: 'app-todo-list',
  template: `
    <ol class="m-3">
    @for (todo of todos; track todo.id) {
      <li class="border rounded p-3">
        @if (todo.completed) {
          <span class="m-3 text-success">&#10003;</span>
        }
        <a routerLink="/detail/{{ todo.id }}" [class.text-decoration-line-through]="todo.completed">{{ todo.title }}</a>
        @if (!todo.completed) {
         <button class="m-3 bg-success" (click)="onCompleteTodo(todo)">Complete</button>
        }
        <button class="bg-danger m-3" (click)="onDeleteTodo(todo)">Delete</button>
      </li>
      } @empty {
         <i>Nothing to do!</i>
      }
    </ol>
  `,
  imports: [RouterModule],
})
export class TodoListComponent {
  todoService = inject(TodoService);

  @Input({ required: true }) todos!: Todo[];

  onCompleteTodo(todo: Todo) {
    this.todoService.editTodo({ ...todo, completed: true });
  }

  onDeleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.id);
  }
}
