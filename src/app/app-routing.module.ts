import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TemplatePageComponent} from "./views/template-page/template-page.component";
import {CalendarComponent} from "./views/calendar/calendar.component";

const routes: Routes = [
  {path: '',  redirectTo: '/home', pathMatch: 'full'},
  {path: '', component: TemplatePageComponent, children: [
      {path: 'home', component: CalendarComponent}
    ]},
  {path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
