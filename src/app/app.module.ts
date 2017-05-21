import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import * as moment from "moment";	//Should be global, but needs to be imported in to each TS file used.

import { RestService } from '../assets/rest.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WeatherComponent } from './weather/weather.component';

import { WeatherService } from './weather/Weather.service'

//loadChildren for best practice, https://www.youtube.com/watch?v=C8KcW1Nj3Mw
//								https://github.com/alxhub/io17
//{ path: 'weather', component: WeatherComponent , loadChildren: 'app/weather/WeatherModule#module' },

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'weather', component: WeatherComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
	AboutUsComponent,
	HomeComponent,
	WeatherComponent
  ],
  imports: [
	RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserModule,
    FormsModule,
    HttpModule,
	NgbModule.forRoot()
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
