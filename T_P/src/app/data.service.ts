import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';
import { Observable } from 'rxjs';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  logout=false;

  candidateURL = 'http://localhost:3000/candidate';
  interviewerURL = 'http://localhost:3000/interviewer';
  scheduleURL = 'http://localhost:3000/schedule';
  feedbackURL = 'http://localhost:3000/feedback';

  constructor(private http: HttpClient) { }

  getServerCandidate(): Observable<any>{
    return this.http.get<any>(this.candidateURL);
  }

  setServerCandidate(candidate): Observable<any>{
    return this.http.post<any>(this.candidateURL,candidate);
  }
 
  getServerInterviewer(): Observable<any>{
    return this.http.get<any>(this.interviewerURL);
  }

  setServerInterviewer(interviewer): Observable<any>{
    return this.http.post<any>(this.interviewerURL,interviewer);
  }
 
  getServerSchedule(): Observable<any>{
    return this.http.get<any>(this.scheduleURL);
  }

  setServerSchedule(schedule): Observable<any>{
    return this.http.post<any>(this.scheduleURL,schedule);
  }
 
  getServerFeedback(): Observable<any>{
    return this.http.get<any>(this.feedbackURL);
  }

  setServerFeedback(feedback): Observable<any>{
    return this.http.post<any>(this.feedbackURL,feedback);
  }
 

  serverCandidate(){
    return new Promise((resolve,reject)=>{
      this.getServerCandidate().subscribe(res=>{
        resolve(res);
      })
    })
  }

  serverInterviewer(){
    return new Promise((resolve,reject)=>{
      this.getServerInterviewer().subscribe(res=>{
        resolve(res);
      })
    })
  }

  serverSchedule(){
    return new Promise((resolve,reject)=>{
      this.getServerSchedule().subscribe(res=>{
        resolve(res);
      })
    })
  }

  serverFeedback(){
    return new Promise((resolve,reject)=>{
      this.getServerFeedback().subscribe(res=>{
        resolve(res);
      })
    })
  }



  async getCandidate() {
    let candidate = await this.serverCandidate();
    return candidate; 
  }

  async getInterviewer() {
    let interviewer = await this.serverInterviewer();
    return interviewer;
  }

  async getSchedule() {
    let schedule = await this.serverSchedule();
    return schedule;
  }

  async getFeedback() {
    let feedback = await this.serverFeedback();
    return feedback;
  }

  isLogin(loggedin) {
    this.logout = loggedin
  }

}