import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { roles } from '../role-lists';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-add-interviewer',
  templateUrl: './add-interviewer.component.html',
  styleUrls: ['./add-interviewer.component.css']
})
export class AddInterviewerComponent implements OnInit {

  interviewRole = roles;

  addInterviewer: FormGroup;

  interviewer: any;
  serverInterviewers: any;

  serverRes=[];

  initializeform() {
    this.addInterviewer = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      role: new FormControl('', [Validators.required])
    });
  }


  constructor(private interviewerService: DataService) { }

  async ngOnInit() {
    this.initializeform();
   this.interviewer = await this.interviewerService.getInterviewer();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.addInterviewer.value);
    this.interviewer.push(this.addInterviewer.value);
    this.interviewerService.setServerInterviewer(this.addInterviewer.value).subscribe(res=>{
      console.log(res);
    })

    this.addInterviewer.reset();
  }

}