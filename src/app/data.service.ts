import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [];
  
  constructor() { }
}
