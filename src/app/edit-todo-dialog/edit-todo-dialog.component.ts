import { Component, Inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-todo-dialog',
  standalone: true,
  imports: [ FormsModule, MatDialogModule, CommonModule ],
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss'
})
export class EditTodoDialogComponent {
  showValidationErrors: boolean = false;

  constructor(private readonly dialogRef: MatDialogRef<EditTodoDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public todo: Todo){

  }

  onFormSubmit(form: NgForm): any {
    if (form.invalid) return this.showValidationErrors = true;
    this.showValidationErrors = false;
    const updatedTodo = {
      ...this.todo,
      ...form.value
    }
    this.dialogRef.close(updatedTodo);
  }

  close(): void {
    this.dialogRef.close();
  }
}
