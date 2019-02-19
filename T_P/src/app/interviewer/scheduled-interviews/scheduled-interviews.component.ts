import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-scheduled-interviews',
  templateUrl: './scheduled-interviews.component.html',
  styleUrls: ['./scheduled-interviews.component.css']
})
export class ScheduledInterviewsComponent implements OnInit {

  candidate: any;
  interview: any;
  schedule: any;
  feedbackList: any;
  resList = [];
  wrongCredentialsMsg = "";
  success: boolean;
  marks: number;
  interName = "";
  interEmail = "";
  resPath: any;
  vidPath: any;
  resCheck = false;
  vidCheck = false;
  email: string = "";
  password: string = "";
  interviewerName: any;



  constructor(private router: Router, private dataService: DataService, private cookieService: CookieService) {
    if(this.cookieService.check('email')){
      this.email=this.cookieService.get('email');
    }
    else{
    this.email = this.router.getCurrentNavigation().extras.state.email;
   }
}

  async ngOnInit() {
    this.resPath = null;
    this.vidPath = null;
    this.candidate = await this.dataService.getCandidate();
    this.interview = await this.dataService.getInterviewer();
    this.schedule = await this.dataService.getSchedule();
    this.feedbackList = await this.dataService.getFeedback();
    this.showStatus();
  }

  feedback() {
    for (var i = 0; i < this.resList.length; i++) {
      this.feedbackList.push(this.resList[i]);
    }
    this.dataService.setServerFeedback(this.feedbackList).subscribe(res=>{
      console.log(res);
    })
    alert("You have sucessfully submitted your feedback");
  }

  showStatus() {
    this.interEmail = this.email;

    for (var i = 0; i < this.interview.length; i++) {

      if (this.interview[i].email == this.email) {
        for (var j = 0; j < this.schedule.length; j++) {
          if (this.schedule[j].interviewerName == this.interview[i].fullName && this.schedule[j].marks != "undefined") {

            this.interviewerName = this.interview[i].fullName;
            if(typeof(this.schedule[j].marks)!="number")
            this.resList.push({ 'candidateName': this.schedule[j].candidateName, 'date': this.schedule[j].date, 'time': this.schedule[j].time, 'interviewerName': this.interview[i].fullName });

          }
        }
        this.wrongCredentialsMsg = "Success!";
        this.success = true;
        break;
      }
      else {
        this.wrongCredentialsMsg = "Wrong login credentials!";
        this.success = false;
      }
    }
  }

  resume(resFile) {
    console.log(resFile);
    for (var i = 0; i < this.candidate.length; i++) {
      console.log(this.candidate[i].fullName);
      console.log(this.resCheck);
      if (resFile == this.candidate[i].fullName) {
        this.resPath = "assets/" + this.candidate[i].resume;
        this.resCheck = true;
        console.log(this.resCheck + " " + this.resPath);
        break;
      }
    }
  }

  intro(vidFile) {
    for (var i = 0; i < this.candidate.length; i++) {
      if (vidFile == this.candidate[i].fullName) {
        this.vidPath = "assets/" + this.candidate[i].video;
        console.log(this.vidPath);

        this.vidCheck = true;
        break;
      }
    }

  }
  @ViewChild('videoPlayer') videoplayer: any;

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

}
