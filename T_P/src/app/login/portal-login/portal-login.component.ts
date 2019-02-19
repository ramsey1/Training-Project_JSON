import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-portal-login',
  templateUrl: './portal-login.component.html',
  styleUrls: ['./portal-login.component.css']
})
export class PortalLoginComponent implements OnInit {

  loginForm:FormGroup;
  interviewers:any;
  candidates:any;
  loggedin=false;

  email: string = "";
  password: string = "";

  loginPortal() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  constructor(private router:Router,private loginService:DataService,private cookieService:CookieService) {
    this.loginPortal();
   }

  async ngOnInit() {
    this.candidates =await this.loginService.getCandidate();
    this.interviewers =await this.loginService.getInterviewer();
   
    this.loginService.isLogin(this.loggedin);
    this.cookieService.deleteAll(); 
  }

  onSubmit(data){
    this.email = data.email;
    this.password = data.password;
       
    this.cookieService.set('email',this.email);

    if (this.email == "admin@gmail.com" && this.password == "admin") {
      console.log('admin');

      this.router.navigate(['admin-homepage'], { state: { email: this.email, password: this.password } });
    }


    for (var i = 0; i < this.candidates.length; i++) {
      if (this.email == this.candidates[i].email && this.password == this.candidates[i].password) {
          this.router.navigate(['candidate-status'], { state: { email: this.email, password: this.password } });
        break;
      }
    }
   
    for (var i = 0; i < this.interviewers.length; i++) {
      if (this.email == this.interviewers[i].email && this.password == this.interviewers[i].password) {
        this.router.navigate(['interviewer-homepage'], { state: { email: this.email, password: this.password } });
        break;
      }
    }

    this.loggedin=true;
    console.log(this.loggedin);
    this.loginService.isLogin(this.loggedin);
    this.loginForm.reset();

  }

}