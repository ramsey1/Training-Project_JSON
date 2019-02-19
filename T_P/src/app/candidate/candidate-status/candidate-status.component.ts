import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-candidate-status',
  templateUrl: './candidate-status.component.html',
  styleUrls: ['./candidate-status.component.css']
})
export class CandidateStatusComponent implements OnInit {

  interviewStatus:any;
candidate:any;
marks:any;
email:string;
name:string;
istatus:string;
msg:boolean;
pend:boolean;

  constructor(private globalService:DataService,private router:Router,private cookieService:CookieService) {
    if(this.cookieService.check('email')){
      this.email=this.cookieService.get('email');
    }
    else{
    this.email = this.router.getCurrentNavigation().extras.state.email;
   }
  }

  async ngOnInit() {
    this.candidate = await this.globalService.getCandidate();
    this.interviewStatus = await this.globalService.getSchedule();
    this.status();
  }


 
  status(){

 
    for (var i=0;i<this.candidate.length;i++){
      if(this.email==this.candidate[i].email){
        this.name=this.candidate[i].fullName;
      }
    }


    for (var i=0;i<this.interviewStatus.length;i++){
      // console.log(this.marks);
      // console.log(this.interviewStatus[i].marks);
      
      // console.log(this.name);
      // console.log(this.interviewStatus[i].candidateName);
      
      
      if(this.name==this.interviewStatus[i].candidateName){
        this.marks=this.interviewStatus[i].marks;
        break;
      }

    }
    if(this.marks<5&&this.marks!=''){
      this.istatus="Rejected";
      this.pend=true;
    }
    else if(this.marks>5){
      this.istatus="Accepted";
      this.msg=true;
    }
    else{
      this.istatus="Pending";

    }
  

  }

}