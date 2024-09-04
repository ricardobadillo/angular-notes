import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnyPageComponent } from './utility/query-params/components/any-page/any-page.component';
import { ComponentProjectedComponent } from './utility/ng-content/components/component-projected/component-projected.component';
import { CoreComponent } from './core.component';
import { EventsComponent } from './utility/events/events.component';
import { GettersAndSettersComponent } from './utility/getters-and-setters/getters-and-setters.component';
import { NgClassComponent } from './utility/ng-class/ng-class.component';
import { NgContentComponent } from './utility/ng-content/ng-content.component';
import { NgStyleComponent } from './utility/ng-style/ng-style.component';
import { NgTemplateOutletComponent } from './utility/ng-template-outlet/ng-template-outlet.component';
import { OtherPageComponent } from './utility/query-params/components/other-page/other-page.component';
import { OutputComponent } from './utility/output/output.component';
import { PageParamsComponent } from './utility/query-params/components/page-params/page-params.component';
import { QueryParamsComponent } from './utility/query-params/query-params.component';
import { StringOperatorsComponent } from './utility/string-operators/string-operators.component';
import { ViewChildComponent } from './utility/view-child/view-child.component';

const routes: Routes = [
  { path: '', component: CoreComponent },
  { path: 'any-page', component: AnyPageComponent },
  { path: 'component-projected', component: ComponentProjectedComponent },
  { path: 'events', component: EventsComponent },
  { path: 'getters-and-setters', component: GettersAndSettersComponent },
  { path: 'ng-class', component: NgClassComponent },
  { path: 'ng-content', component: NgContentComponent },
  { path: 'ng-style', component: NgStyleComponent },
  { path: 'ng-template-outlet', component: NgTemplateOutletComponent },
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
