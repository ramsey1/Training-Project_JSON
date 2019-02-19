import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { promise } from 'protractor';

@Component({
  selector: 'app-interview-status',
  templateUrl: './interview-status.component.html',
  styleUrls: ['./interview-status.component.css']
})
export class InterviewStatusComponent implements OnInit {

  interviewStatus: any;
  schedule: any;
  serverSchedule:any;
  test: any;

  constructor(private statusService: DataService) { }


  async ngOnInit() {

    this.schedule = await this.statusService.getSchedule();
    this.interviewStatus = await this.statusService.getFeedback();

    for (var i = 0; i < this.interviewStatus.length; i++) {
      for (var j = 0; j < this.schedule.length; j++) {
        if (this.interviewStatus[i].interviewerName == this.schedule[j].interviewerName &&
          this.interviewStatus[i].candidateName == this.schedule[j].candidateName &&
          this.interviewStatus[i].date == this.schedule[j].date &&
          this.interviewStatus[i].time == this.schedule[j].time) {
          if (this.schedule[j].marks == null || this.schedule[j].marks == "") {
            this.schedule[j].marks = this.interviewStatus[i].marks;
            console.log(this.interviewStatus[i].marks);
          }
        }
      }
    }

    this.statusService.setServerSchedule(this.schedule).subscribe(res=>{
      console.log(res);
      
    })

  }


}