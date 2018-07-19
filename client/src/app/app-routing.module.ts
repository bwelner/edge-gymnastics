import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { AboutComponent } from './components/about/about.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ClassesComponent } from './components/classes/classes.component';
import { CoachesComponent } from './components/coaches/coaches.component';
import { ContactComponent } from './components/contact/contact.component';
import { PartiesComponent } from './components/parties/parties.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { TeamComponent } from './components/team/team.component';
import { FacilityComponent } from './components/facility/facility.component';
import { GymnasticsComponent } from './components/gymnastics/gymnastics.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { CampComponent } from './components/camp/camp.component';
import { FaqComponent } from './components/faq/faq.component';
import { TeamFaqComponent } from './components/team-faq/team-faq.component';
import { BoysTeamComponent } from './components/boys-team/boys-team.component';
import { GirlsTeamComponent } from './components/girls-team/girls-team.component';
import { RecreationalComponent } from './components/recreational/recreational.component';
import { OpengymComponent } from './components/opengym/opengym.component';
import { RecruitableComponent } from './components/recruitable/recruitable.component';
import { FieldTripsComponent } from './components/field-trips/field-trips.component';
import { FormerAthletesComponent } from './components/former-athletes/former-athletes.component';

const routes: Routes = [
  {
    path: '',
      component: HomeComponent,
    pathMatch: 'full'
    },
    {
    path: 'calendar',
      component: CalendarComponent
    },
    {
      path: 'classes',
        component: ClassesComponent
    },
    {
      path: 'coaches',
          component: CoachesComponent
    },
    {
      path: 'contact',
        component: ContactComponent
      },
    {
        path: 'parties',
          component: PartiesComponent
    },
    {
      path: 'sessions',
        component: SessionsComponent
      },
      {
        path: 'team',
          component: TeamComponent
        },
    {
      path: 'about',
        component: AboutComponent
      },
    {
      path: 'facility',
        component: FacilityComponent
      },
    {
      path: 'gymnastics',
        component: GymnasticsComponent
      },
    {
      path: 'employment',
        component: EmploymentComponent
      },  
    {
      path: 'camp',
        component: CampComponent
      },  
    {
      path: 'faq',
        component: FaqComponent
      },  
    {
      path: 'recreational',
        component: RecreationalComponent
      },  
    {
      path: 'girls-team',
        component: GirlsTeamComponent
      },  
    {
      path: 'boys-team',
        component: BoysTeamComponent
      },
  {
    path: 'team-faq',
      component: TeamFaqComponent
    },
    {
      path: 'opengym',
        component: OpengymComponent
      },
      {
        path: 'recruitable',
          component: RecruitableComponent
        },
        {
          path: 'field-trips',
            component: FieldTripsComponent
          },
          {
            path: 'former-athletes',
              component: FormerAthletesComponent
            },
    {
    path: '**', redirectTo: ''
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
