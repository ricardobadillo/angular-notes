import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { OutputComponent } from './components/output/output.component';
import { StringOperatorsComponent } from './components/string-operators/string-operators.component';
import { TasksComponent } from './tasks.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { GettersAndSettersComponent } from './components/getters-and-setters/getters-and-setters.component';
import { EventsComponent } from './components/events/events.component';
import { QueryParamsComponent } from './components/query-params/query-params.component';
import { OtherPageComponent } from './components/query-params/components/other-page/other-page.component';
import { PageComponent } from './components/query-params/components/page/page.component';
import { PageParamsComponent } from './components/query-params/components/page-params/page-params.component';


@NgModule({
  declarations: [
    NgClassComponent,
    NgStyleComponent,
    NgSwitchComponent,
    OutputComponent,
    StringOperatorsComponent,
    TasksComponent,
    ViewChildComponent,
    GettersAndSettersComponent,
    EventsComponent,
    QueryParamsComponent,
    OtherPageComponent,
    PageComponent,
    PageParamsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule,
  ]
})
export class TasksModule { }
