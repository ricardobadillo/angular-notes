import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { ViewChildComponent } from './components/view-child/view-child.component';

@NgModule({
  declarations: [
    AnyPageComponent,
    EventsComponent,
    GettersAndSettersComponent,
    NgClassComponent,
    NgStyleComponent,
    OtherPageComponent,
    OutputComponent,
    PageParamsComponent,
    QueryParamsComponent,
    StringOperatorsComponent,
    TasksComponent,
    ViewChildComponent,
  ],
  imports: [CommonModule, FormsModule, TasksRoutingModule],
})
export class TasksModule {}
