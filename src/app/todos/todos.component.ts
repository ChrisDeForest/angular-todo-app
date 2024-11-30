import { Component, OnInit} from '@angular/core';
import { Todo } from '../todo';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [ CommonModule , FormsModule , TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{
  todos: Todo[] = [];
  showValidationErrors: boolean = false;
  
  constructor(private readonly dataService: DataService, private readonly dialog: MatDialog) {
  }
  
  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  onFormSubmit(form: NgForm): any { 
    if (form.invalid) return this.showValidationErrors = true;

    this.dataService.addTodo({ text: form.value.text, completed: false });
    this.showValidationErrors = false;
    form.reset("");
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  editTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '800px',
      data: todo,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateTodo(index, result);
      }
    });
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.dataService.deleteTodo(index);
  }
}
