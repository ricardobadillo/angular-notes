import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { AddComponent } from './add/add.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AddComponent, DirectivesComponent],
  imports: [CommonModule, DirectivesRoutingModule, ReactiveFormsModule, SharedModule],
})
export class DirectivesModule {}
