import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    {text: "FINISH TESTING TODO APP", completed: true}, 
    {text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas incidunt expedita dicta nobis autem neque sed. Vero, sequi quos! Nulla exercitationem consectetur praesentium. Quis libero magni fuga consequatur, ipsum cum.", completed: false}
  ];

  constructor() { }

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
