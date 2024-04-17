import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import { TemplatePageComponent } from './views/template-page/template-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import { CalendarComponent } from './views/calendar/calendar.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {MissionData} from "./shared/api/mission.data";

@NgModule({
  declarations: [
    AppComponent,
    TemplatePageComponent,
    HeaderComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forFeature(MissionData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
