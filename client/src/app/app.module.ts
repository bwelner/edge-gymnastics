import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CoachesComponent } from './components/coaches/coaches.component';
import { ClassesComponent } from './components/classes/classes.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { TeamComponent } from './components/team/team.component';
import { PartiesComponent } from './components/parties/parties.component';
import { FacilityComponent } from './components/facility/facility.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CalendarComponent,
    CoachesComponent,
    ClassesComponent,
    SessionsComponent,
    TeamComponent,
    PartiesComponent,
    FacilityComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
