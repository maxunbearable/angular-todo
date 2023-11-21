import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { toSignal } from "@angular/core/rxjs-interop";

import { TodoService } from "../shared/data-access/todo.service";
import { TodoFormComponent } from "../home/ui/todo-form.component";

@Component({
  standalone: true,
  selector: 'app-detail',
  template: `
    @if (isEditing) {
      <app-todo-form [todo]="todo()" (todoEdited)="todoService.editTodo($event)"/>
    } @else {
      @if (todo(); as todo) {
      <div class="border rounded p-5 d-flex align-items-center">
        <div>
          <h2>{{ todo.title }}</h2>
          <p>{{ todo.description }}</p>
        </div>
        <button class="m-5" (click)="isEditing = true" class="m-3">Edit</button>
      </div>
      } @else {
      <p>Could not find todo...</p>
      }
    }
  `,
  imports: [TodoFormComponent],
})
export default class DetailComponent {
  private route = inject(ActivatedRoute);
  todoService = inject(TodoService);
  isEditing = false;

  private paramMap = toSignal(this.route.paramMap);

  todo = computed(() =>
    this.todoService
      .todos()
      .find((todo) => todo.id === this.paramMap()?.get('id'))
  );
}
