import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DateFnsModule } from 'ngx-date-fns';

// import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HeaderComponent } from './components/header/header.component';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayerComponent,
    // HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    DateFnsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
