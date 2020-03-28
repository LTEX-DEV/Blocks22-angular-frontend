import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators, FormBuilder} from '@angular/forms';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NzMessageService } from 'ng-zorro-antd';
import { HistoryService } from 'src/app/services/history/history.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(
      private dashboardService: DashboardService,
      public auth: AuthService,
       private fb: FormBuilder,
       private message: NzMessageService) { }

  form: FormGroup;

  codeCount: Number = 0;
 


  ngOnInit(): void {


    this.form =  this.fb.group({
      email: new FormControl('', [Validators.required , Validators.email]),
      codeCount: new FormControl('', [Validators.required , Validators.min(1)])
        });



// just for code count
this.dashboardService.myProfile().subscribe(res => {


this.codeCount = res['codes'].length;
 
});





}

generateCodes(): void {

  this.dashboardService.generateCodes().subscribe(res => {

    this.message.success(res['info']);
    this.codeCount = res['data'].codeCount;
    
  });

}


assignCode(): void {

  for (const i in this.form.controls) {
    if (this.form.controls.hasOwnProperty(i)) {

    this.form.controls[ i ].markAsDirty();

    this.form.controls[ i ].updateValueAndValidity();
    }

  }

if(this.form.valid) {

const values = this.form.value;

this.dashboardService.assignCode(values.email,values.codeCount)
                      .subscribe((res) => {
                        this.message.success(res['info']);

                        this.codeCount = res['data'].codeCount;
                        
                        this.form.reset();
                      });


              }
}


}




