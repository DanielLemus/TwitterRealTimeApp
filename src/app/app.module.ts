import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitterRealtimeComponent } from '../app/components/twitter-realtime/twitter-realtime.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientJsonpModule }    from '@angular/common/http';

 

@NgModule({
  declarations: [
    AppComponent,
    TwitterRealtimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
