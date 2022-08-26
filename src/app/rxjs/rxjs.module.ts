import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NinjaComponent } from './components/ninja/ninja.component';
import { SwiperModule } from 'swiper/angular';
import { DownloadComponent } from './components/download/download.component';


@NgModule({
  declarations: [
    RxjsComponent,
    NavbarComponent,
    NinjaComponent,
    DownloadComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,
    SwiperModule,
  ]
})
export class RxjsModule { }
