import {Component, inject} from '@angular/core';
import {TodoFormComponent} from "./ui/todo-form.component";
import {Todo} from "../shared/interfaces/todo";
import {TodoService} from "../shared/data-access/todo.service";
import {TodoListComponent} from "./ui/todo-list.component";

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: `./home.component.html`,
  imports: [
    TodoFormComponent,
    TodoListComponent
  ]
})
export default class HomeComponent {
  todoService = inject(TodoService);
}
