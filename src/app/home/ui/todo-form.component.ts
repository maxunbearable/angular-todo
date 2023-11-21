import {Component, inject, Output, EventEmitter, Input} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {CreateTodo, Todo} from "../../shared/interfaces/todo";
import {Router, RouterModule} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-todo-form',
  template: `
    <form [formGroup]="todoForm">
      <input type="text" formControlName="title" placeholder="title..." />
      <input
        type="text"
        formControlName="description"
        placeholder="description..."
      />
      @if (isEditing) {
        <button [disabled]="!todoForm.valid" (click)="onEditApply()" type="submit">Edit todo</button>
      } @else {
        <button class="bg-success" [disabled]="!todoForm.valid" (click)="onTodoSubmit()" type="submit">Add todo</button>
      }
    </form>
  `,
  imports: [ReactiveFormsModule, RouterModule],
})
export class TodoFormComponent {
  @Input() todo!: Todo | undefined;
  @Output() todoSubmitted = new EventEmitter<CreateTodo>();
  @Output() todoEdited = new EventEmitter<Todo>();

  isEditing: boolean = false;

  private fb = inject(FormBuilder);
  private router = inject(Router);

  todoForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
  });

  ngOnChanges() {
    if (this.todo) {
      this.isEditing = true;
      this.todoForm.controls.title.patchValue(this.todo?.title as string);
      this.todoForm.controls.description.patchValue(this.todo?.description as string);
    }
  }

  onTodoSubmit() {
    this.todoSubmitted.emit({ ...this.todoForm.getRawValue(), completed: false });
  }

  onEditApply() {
    this.todoEdited.emit({ ...this.todo, ...this.todoForm.getRawValue() } as Todo);
    this.router.navigate(['./home']);
  }
}
