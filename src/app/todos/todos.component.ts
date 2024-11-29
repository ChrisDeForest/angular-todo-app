import { Component, OnInit} from '@angular/core';
import { Todo } from '../todo';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component';

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
  
  constructor(private readonly dataService: DataService) {
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

  toggleCompleted(todo: Todo){
    todo.completed = !todo.completed;
  }
}
