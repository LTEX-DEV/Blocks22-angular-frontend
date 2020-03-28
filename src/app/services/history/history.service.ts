import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  getHistories(count) {

    return this.http.get(`/api/history/histories/${count}`)
                   .pipe(
                      shareReplay()
                    );

   }


   getNotifications(count) {

    return this.http.get(`/api/history/notifications/${count}`)
                   .pipe(
                      shareReplay()
                    );

   }

updateNotifications(ids) {
  return this.http.post('/api/history/notifications/update', { notificationIds: ids})
  .pipe(
     shareReplay()
   );
}


}
