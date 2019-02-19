import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduledInterviewsComponent } from './scheduled-interviews/scheduled-interviews.component';
import { SafePipe } from '../safe.pipe';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [ScheduledInterviewsComponent,SafePipe],
  imports: [
    CommonModule,
    FormsModule
  ],providers: [ CookieService ],
  exports:[ScheduledInterviewsComponent]
})
export class InterviewerModule { }