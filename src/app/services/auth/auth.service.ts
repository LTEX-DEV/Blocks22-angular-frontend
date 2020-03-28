import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';

import { tap ,shareReplay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    this.loggedIn.next(moment().isBefore(this.getExpiration()));

  }


  private loggedIn = new BehaviorSubject<boolean>(false);
  

  login(username: string, password: string) {
return this.http.post('/api/auth/signin', {username: username, password: password})
         .pipe(
          tap(res => console.log(res)),
           tap(res => this.setSession(res)),
            shareReplay()
            );

  }

signup(username:string, email:string, password:string, role:string){

return this.http.post('/api/user/',{username:username, email:email, password:password, role:role})
                .pipe(
                  tap(res => this.setSession(res)),
                  shareReplay()
                  );

}



private setSession(authResult){

  const expireAt = moment().add(authResult.expiresIn, 'second');

  localStorage.setItem('id_token', authResult.idToken);
  localStorage.setItem('expires_at', JSON.stringify(expireAt.valueOf()));
  localStorage.setItem('user', JSON.stringify(authResult.user));

 
  this.loggedIn.next(moment().isBefore(this.getExpiration()));

  
}

logout(){

  localStorage.removeItem('id_token');
  localStorage.removeItem('expires_at');
  localStorage.removeItem('user');
  this.loggedIn.next(false);
}

get isLoggedIn()
{
return this.loggedIn.asObservable();
}

get User()
{
  
  return JSON.parse(localStorage.getItem('user'));
  
}


private getExpiration()
  {

    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);

  }


}
