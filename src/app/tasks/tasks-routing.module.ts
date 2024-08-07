import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './components/events/events.component';
import { GettersAndSettersComponent } from './components/getters-and-setters/getters-and-setters.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { OutputComponent } from './components/output/output.component';
import { QueryParamsComponent } from './components/query-params/query-params.component';
import { StringOperatorsComponent } from './components/string-operators/string-operators.component';
import { TasksComponent } from './tasks.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { PageComponent } from './components/query-params/components/page/page.component';
import { OtherPageComponent } from './components/query-params/components/other-page/other-page.component';
import { PageParamsComponent } from './components/query-params/components/page-params/page-params.component';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'getters-and-setters',
    component: GettersAndSettersComponent,
  },
  {
    path: 'ng-class',
    component: NgClassComponent,
  },
  {
    path: 'ng-style',
    component: NgStyleComponent,
  },
  {
    path: 'ng-switch',
    component: NgSwitchComponent,
  },
  {
    path: 'output',
    component: OutputComponent,
  },
  {
    path: 'other-page',
    component: OtherPageComponent,
  },
  {
    path: 'page',
    component: PageComponent,
  },
  {
    path: 'page-params/:id',
    component: PageParamsComponent,
  },
  {
    path: 'query-params',
    component: QueryParamsComponent,
  },
  {
    path: 'string-operators',
    component: StringOperatorsComponent,
  },
  {
    path: 'view-child',
    component: ViewChildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
