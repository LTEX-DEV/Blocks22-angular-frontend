import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

form : FormGroup;

  constructor(private authService:AuthService,private router:Router, private fb:FormBuilder,private message: NzMessageService) { }

 


  ngOnInit() {

    this.form = this.fb.group({
      username: new FormControl('', [Validators.required , Validators.minLength(3), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required , Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      role: new FormControl('', Validators.required),
        });
  
  }

submitForm()
{



  for (const i in this.form.controls) {
    if (this.form.controls.hasOwnProperty(i)) {

    this.form.controls[ i ].markAsDirty();

    this.form.controls[ i ].updateValueAndValidity();
    }

  }

  if(this.form.valid)
  {
  
  const values= this.form.value;


  this.authService.signup(values.username,values.email,values.password,values.role)
                .subscribe(res=>{
this.message.success('Account has been created.');
this.router.navigateByUrl('dashboard');
                });

  
              }


}



}
