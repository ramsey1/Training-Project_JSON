import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin=false;

  state=true;

  private navStateSource = new Subject<boolean>();
  navState$ = this.navStateSource.asObservable();

  
  constructor() {
    this.navState$.subscribe( (state)=> this.state = state ); 
    this.loginNav();
  }

  ngOnInit() {
    this.logoutNav();
  }

  loginNav(){
    console.log(this.isLogin);
  }

  logoutNav(){
    console.log(this.isLogin);
  }


}