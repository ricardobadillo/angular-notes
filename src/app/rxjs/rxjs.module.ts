import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NinjaComponent } from './components/ninja/ninja.component';
import { DownloadComponent } from './components/download/download.component';
import { ShareReplayComponent } from './utility/share-replay/share-replay.component';
import { ReplaySubjectComponent } from './utility/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './utility/async-subject/async-subject.component';

@NgModule({
  declarations: [RxjsComponent, NavbarComponent, NinjaComponent, DownloadComponent, ShareReplayComponent, ReplaySubjectComponent, AsyncSubjectComponent],
  imports: [CommonModule, RxjsRoutingModule],
})
export class RxjsModule {}
