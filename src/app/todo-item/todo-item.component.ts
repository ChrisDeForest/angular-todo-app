import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Todo } from '../todo';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from '../tooltip.directive';
import { TooltipSingletonDirective } from '../tooltip-singleton.directive';


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [ CommonModule, TooltipDirective, TooltipSingletonDirective ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent implements OnInit{
  @Input() todo?: Todo;

  @Output() todoClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void { }

  onTodoClicked(): void {
    this.todoClicked.emit();
  }

  onEditClicked(): void {
    this.editClicked.emit();
  }

  onDeleteClicked(): void {
    this.deleteClicked.emit();
  }
}
