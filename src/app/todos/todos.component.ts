import { Component, OnInit} from '@angular/core';
import { Todo } from '../todo';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [ CommonModule , FormsModule ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{
  todos: Todo[] = [];
  
  constructor(private readonly dataService: DataService) {
  }
  
  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  getText(todo: Todo) {
    return todo.text;
  }

  getCompleted(todo: Todo) {
    return todo.completed;
  }

  onFormSubmit(form: NgForm): void {
    console.log(form);
  }
}
