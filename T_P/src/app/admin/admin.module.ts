import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInterviewerComponent } from './add-interviewer/add-interviewer.component';
import { AssignInterviewerComponent } from './assign-interviewer/assign-interviewer.component';
import { InterviewStatusComponent } from './interview-status/interview-status.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ResumePipe } from './resume.pipe';

@NgModule({
  declarations: [AddInterviewerComponent, AssignInterviewerComponent, InterviewStatusComponent, CandidateDetailsComponent, AdminHomepageComponent, ResumePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports:[AddInterviewerComponent, AssignInterviewerComponent, InterviewStatusComponent, CandidateDetailsComponent,AdminHomepageComponent]
})
export class AdminModule { }