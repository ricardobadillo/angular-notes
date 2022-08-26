import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DownloadComponent } from './components/download/download.component';
import { RxjsComponent } from './rxjs.component';

const routes: Routes = [
  { path: '', component: RxjsComponent },
  { path: 'download', component: DownloadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
