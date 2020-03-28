import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }


myProfile() {

 return this.http.get('/api/user/me')
                .pipe(
                   shareReplay()
                 );


}


assignCode(email, codeCount) {

  return this.http.post('/api/user/assign', { email: email, count: codeCount })
                  .pipe(
                    shareReplay()
                  );
}

generateCodes() {

  return this.http.post('/api/user/generatecodes', {})
                  .pipe(
                    shareReplay()
                  );
}


}
