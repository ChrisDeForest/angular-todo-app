import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Todo } from '../todo';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent{
  @Input() todo?: Todo;

  constructor(private readonly dataService: DataService) { }
}
