import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
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
import { GymnasticsComponent } from './components/gymnastics/gymnastics.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { CampComponent } from './components/camp/camp.component';
import { FaqComponent } from './components/faq/faq.component';
import { RecreationalComponent } from './components/recreational/recreational.component';
import { GirlsTeamComponent } from './components/girls-team/girls-team.component';
import { BoysTeamComponent } from './components/boys-team/boys-team.component';
import { TeamFaqComponent } from './components/team-faq/team-faq.component';
import { OpengymComponent } from './components/opengym/opengym.component';
import { RecruitableComponent } from './components/recruitable/recruitable.component';
import { FieldTripsComponent } from './components/field-trips/field-trips.component';
import { FormerAthletesComponent } from './components/former-athletes/former-athletes.component';
import { PreCompetitiveComponent } from './components/pre-competitive/pre-competitive.component';

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
    ContactComponent,
    GymnasticsComponent,
    EmploymentComponent,
    CampComponent,
    FaqComponent,
    RecreationalComponent,
    GirlsTeamComponent,
    BoysTeamComponent,
    TeamFaqComponent,
    OpengymComponent,
    RecruitableComponent,
    FieldTripsComponent,
    FormerAthletesComponent,
    PreCompetitiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
