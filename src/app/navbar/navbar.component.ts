import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { HistoryService } from '../services/history/history.service';
import { NzModalService } from 'ng-zorro-antd';
import { NotificationsComponent } from '../shared/notifications/notifications.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(public auth: AuthService, 
    private router: Router, 
    private historyService: HistoryService,
    private modalService: NzModalService) { }


notifications = [];
notificationCount = 0;

  ngOnInit(): void {
    this.getNotifications();
    setInterval(() => {
      this.auth.isLoggedIn.subscribe(result => {

        if (result) {

        this.getNotifications();
      }
      });

  }, 10000);

  }
 

  createComponentModal(): void {
    const modal = this.modalService.create({
      nzTitle: 'Notifications',
      nzWidth: 550,
      nzContent: NotificationsComponent,
      nzComponentParams: {
        notifications: this.notifications
      },
      nzFooter: [
        {
          label: 'Close',
          shape: 'default',
          onClick: () => modal.destroy()
        }]
    });

    modal.afterOpen.subscribe(() =>{
      const ids = this.notifications.map(function(n) { return n['_id']; });

      this.historyService.updateNotifications(ids).subscribe(res => {
        this.notificationCount = 0;
      });

      this.notificationCount = 0;

    });



  }

    getNotifications(): void
    {
      this.historyService.getNotifications(30).subscribe(res => {
        console.log(res);
     this.notifications = res as any;

     this.notificationCount = this.notifications.filter((n, index, arr) => n.read === false).length;

      });
    }



  logout()
  {
  this.auth.logout();
  this.router.navigateByUrl('');
  }
    


}
