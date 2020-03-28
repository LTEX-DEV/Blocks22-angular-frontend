import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard/dashboard.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

me: any;


  tabs = [
    {
      active: true,
      name  : 'Clients',
      icon  : 'apple'
    },
    {
      active: false,
      name  : 'History',
      icon  : 'android'
    }
  ];



  constructor(private dashboardService:DashboardService) { }

  ngOnInit() {
this.dashboardService.myProfile().subscribe(me => {
this.me = me;
});



  }

 

}
