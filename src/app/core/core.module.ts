import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AnyPageComponent } from './utility/query-params/components/any-page/any-page.component';
import { EventsComponent } from './utility/events/events.component';
import { GettersAndSettersComponent } from './utility/getters-and-setters/getters-and-setters.component';
import { NgClassComponent } from './utility/ng-class/ng-class.component';
import { NgStyleComponent } from './utility/ng-style/ng-style.component';
import { OtherPageComponent } from './utility/query-params/components/other-page/other-page.component';
import { OutputComponent } from './utility/output/output.component';
import { PageParamsComponent } from './utility/query-params/components/page-params/page-params.component';
import { QueryParamsComponent } from './utility/query-params/query-params.component';
import { StringOperatorsComponent } from './utility/string-operators/string-operators.component';
import { CoreComponent } from './core.component';
import { ViewChildComponent } from './utility/view-child/view-child.component';

import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    AnyPageComponent,
    CoreComponent,
    EventsComponent,
    GettersAndSettersComponent,
    NgClassComponent,
    NgStyleComponent,
    OtherPageComponent,
    OutputComponent,
    PageParamsComponent,
    QueryParamsComponent,
    StringOperatorsComponent,
    ViewChildComponent,
  ],
  imports: [CommonModule, FormsModule, CoreRoutingModule],
})
export class CoreModule {}
