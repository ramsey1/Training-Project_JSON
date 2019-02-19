import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';



@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

  vidCheck = false;
  resCheck=false;
  resPath:any;
  vidPath:any;
  candidates:any;
  serverCandidates:any

  

  constructor(private globalService:DataService) { }

  async ngOnInit() {
    this.candidates = await this.globalService.getCandidate();
  }


  intro(vidFile) {
    console.log('hi');
    
    for (var i = 0; i < this.candidates.length; i++) {
      console.log(vidFile);
      console.log(this.candidates[i].fullName);
      
      
      if (vidFile == this.candidates[i].fullName) {
        this.vidPath = "assets/" + this.candidates[i].video;
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

  resume(resFile) {
    console.log(resFile);
    for (var i = 0; i < this.candidates.length; i++) {
      console.log(this.candidates[i].fullName);
      console.log(this.resCheck);
      if (resFile == this.candidates[i].fullName) {
        this.resPath = "assets/" + this.candidates[i].resume;
        this.resCheck = true;
        console.log(this.resCheck + " " + this.resPath);
        break;
      }
    }
  }


}