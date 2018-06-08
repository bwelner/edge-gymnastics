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
    path: '**', redirectTo: ''
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
