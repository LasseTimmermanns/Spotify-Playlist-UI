import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {RouterModule, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {CookieService} from "./cookie.service";
import { LoggingInComponent } from './logging-in/logging-in.component';
import { ResultDisplayComponent } from './result-display/result-display.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SongComponent } from './song/song.component';

const allRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoggingInComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    HomeComponent,
    LoggingInComponent,
    ResultDisplayComponent,
    PlaylistComponent,
    SongComponent
  ],
  imports: [
    RouterModule.forRoot(allRoutes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
