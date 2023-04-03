// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks-routing.module').then(m => m.TasksRoutingModule)
  },
  {
    path: 'testing',
    loadChildren: () => import('./testing/testing.module').then(m => m.TestingModule)
  },
  { path: '**', redirectTo: 'tasks' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }