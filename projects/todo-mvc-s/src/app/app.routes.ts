import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  {
    path: 'todo',
    loadChildren: './todo/todo.module#TodoMvcPlusServiceModule',
    data: { title: 'MVC+S Architecture' }
  }
];
