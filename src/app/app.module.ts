import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {RouterModule, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './pages/home/search/search.component';
import { LoginComponent } from './pages/home/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {CookieService} from "./services/cookie/cookie.service";
import { LoggingInComponent } from './pages/logging-in/logging-in.component';
import { ResultDisplayComponent } from './pages/home/result-display/result-display.component';
import { PlaylistComponent } from './pages/home/playlist/playlist.component';
import { SongComponent } from './pages/home/song/song.component';

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
