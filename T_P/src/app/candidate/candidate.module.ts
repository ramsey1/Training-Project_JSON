import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateStatusComponent } from './candidate-status/candidate-status.component';
import { CandidateRegisterComponent } from './candidate-register/candidate-register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxUploaderModule } from 'ngx-uploader';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [CandidateStatusComponent, CandidateRegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxUploaderModule,
    FileUploadModule,
    BrowserAnimationsModule
  ],
  exports:[CandidateRegisterComponent,CandidateStatusComponent],
  providers:[CookieService]
})
export class CandidateModule { }