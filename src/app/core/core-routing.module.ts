import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnyPageComponent } from './components/query-params/components/any-page/any-page.component';
import { EventsComponent } from './components/events/events.component';
import { GettersAndSettersComponent } from './components/getters-and-setters/getters-and-setters.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { OtherPageComponent } from './components/query-params/components/other-page/other-page.component';
import { OutputComponent } from './components/output/output.component';
import { PageParamsComponent } from './components/query-params/components/page-params/page-params.component';
import { QueryParamsComponent } from './components/query-params/query-params.component';
import { StringOperatorsComponent } from './components/string-operators/string-operators.component';
import { TasksComponent } from './core.component';
import { ViewChildComponent } from './components/view-child/view-child.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'any-page', component: AnyPageComponent },
  { path: 'events', component: EventsComponent },
  { path: 'getters-and-setters', component: GettersAndSettersComponent },
  { path: 'ng-class', component: NgClassComponent },
  { path: 'ng-style', component: NgStyleComponent },
  { path: 'other-page', component: OtherPageComponent },
  { path: 'output', component: OutputComponent },
  { path: 'page-params/:id', component: PageParamsComponent },
  { path: 'query-params', component: QueryParamsComponent },
  { path: 'string-operators', component: StringOperatorsComponent },
  { path: 'view-child', component: ViewChildComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
