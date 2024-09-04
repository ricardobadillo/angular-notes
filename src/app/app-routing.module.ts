// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then((m) => m.DirectivesModule),
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then((m) => m.RxjsModule),
  },
  {
    path: 'testing',
    loadChildren: () => import('./testing/testing.module').then((m) => m.TestingModule),
  },
  { path: '**', redirectTo: 'tasks' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
