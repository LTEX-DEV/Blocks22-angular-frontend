import { Injectable } from '@angular/core';
import { shareReplay , catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AssesmentService {

  constructor(private http: HttpClient) { }

getAssesments(userid) {
return this.http.get(`/api/assesment/${userid}`)
                .pipe(
                  shareReplay()
                );



}

saveAssesments(answers) {
  return this.http.post('/api/assesment/', {answers: answers})
                .pipe(
                  shareReplay()
                );
}



}
