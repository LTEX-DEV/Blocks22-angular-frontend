import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
 form : FormGroup;


  constructor(private authService: AuthService, private router: Router, private fb:FormBuilder,private message: NzMessageService) {}

 
  ngOnInit(): void {

    this.form =  this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
        });
    
  }



submitForm() {



  for (const i in this.form.controls) {
    if (this.form.controls.hasOwnProperty(i)) {

    this.form.controls[ i ].markAsDirty();

    this.form.controls[ i ].updateValueAndValidity();
    }

  }

if(this.form.valid)
{

const values = this.form.value;

console.log(values.username);

this.authService.login(values.username, values.password)
                .subscribe(res => {
this.message.success('You have been loggedIn.');

this.router.navigateByUrl('dashboard');
                });


              }

}



}
