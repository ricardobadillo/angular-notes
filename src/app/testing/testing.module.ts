// Angular.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Componentes.
import { TestingComponent } from './testing.component';

// Módulos.
import { TestingRoutingModule } from './testing-routing.module';

@NgModule({
  declarations: [TestingComponent],
  imports: [CommonModule, TestingRoutingModule],
})
export class TestingModule {}
