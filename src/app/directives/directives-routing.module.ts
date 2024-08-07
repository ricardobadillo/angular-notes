// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes.
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'add', component: AddComponent },
      { path: '**', redirectTo: 'add' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivesRoutingModule {}
