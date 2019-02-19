import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-assign-interviewer',
  templateUrl: './assign-interviewer.component.html',
  styleUrls: ['./assign-interviewer.component.css']
})
export class AssignInterviewerComponent implements OnInit {

  candidates:any;
  serverCandidates:any;

  interviewers:any;
  serverInterviewwers:any;

  schedule:any;
  serverSchedule:any;

  assignInterviewer:FormGroup;

  
  initializeform(){
    this.assignInterviewer = new FormGroup({
      interviewerName:new FormControl('',[Validators.required]),
      candidateName:new FormControl('',[Validators.required]),
      interviewerEmail:new FormControl(''),
      candidateEmail:new FormControl(''),
      date:new FormControl('',[Validators.required]),
      time:new FormControl('',[Validators.required]),
      marks:new FormControl('')
    });
  }


  constructor(private assignService:DataService) { }

  async ngOnInit() {
    this.initializeform();

    this.candidates = await this.assignService.getCandidate();
    this.interviewers = await this.assignService.getInterviewer();
    this.schedule = await this.assignService.getSchedule();
  }

  onSubmit(){
    console.warn(this.assignInterviewer.value.interviewerName);

    for (var i=0;i<this.interviewers.length;i++){
      if(this.assignInterviewer.value.interviewerName==this.interviewers[i].fullName){
        this.assignInterviewer.value.interviewerEmail=this.interviewers[i].email;
        break;
      }
    }


    for (var i=0;i<this.candidates.length;i++){
      if(this.assignInterviewer.value.candidateName==this.candidates[i].fullName){
        this.assignInterviewer.value.candidateEmail=this.candidates[i].email;
        break;
    }
  }

    this.assignInterviewer.value.marks="";
    this.schedule.push(this.assignInterviewer.value);
    this.assignService.setServerSchedule(this.schedule).subscribe(res=>{
      console.log(res);
    })
    this.assignInterviewer.reset();
  }

}