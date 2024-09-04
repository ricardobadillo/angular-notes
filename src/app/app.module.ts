// Angular.
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

// Componentes.
import { AppComponent } from './app.component';

// Interceptors.
import { TimeInterceptor } from './rxjs/interceptor/time.interceptor';

// Módulos.
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimeInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
