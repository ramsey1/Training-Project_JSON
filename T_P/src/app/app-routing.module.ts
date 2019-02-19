import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalLoginComponent } from './login/portal-login/portal-login.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { AddInterviewerComponent } from './admin/add-interviewer/add-interviewer.component';
import { AssignInterviewerComponent } from './admin/assign-interviewer/assign-interviewer.component';
import { InterviewStatusComponent } from './admin/interview-status/interview-status.component';
import { CandidateDetailsComponent } from './admin/candidate-details/candidate-details.component';
import { CandidateRegisterComponent } from './candidate/candidate-register/candidate-register.component';
import { CandidateStatusComponent } from './candidate/candidate-status/candidate-status.component';
import { ScheduledInterviewsComponent } from './interviewer/scheduled-interviews/scheduled-interviews.component';

const routes: Routes = [{path:'',component:PortalLoginComponent},
{path:'admin-homepage',component:AdminHomepageComponent,children:[
  {path:'add-interviewer',component:AddInterviewerComponent},
  {path:'assign-interviewer',component:AssignInterviewerComponent},
  {path:'interview-status',component:InterviewStatusComponent},
  {path:'candidate-details',component:CandidateDetailsComponent}
]},
{path:'logout',component:PortalLoginComponent},
{path:'candidate-homepage',component:CandidateRegisterComponent},
{path:'candidate-status',component:CandidateStatusComponent},
{path:'interviewer-homepage',component:ScheduledInterviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }