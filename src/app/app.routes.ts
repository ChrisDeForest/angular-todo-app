import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
 { path: '', component: TodosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }