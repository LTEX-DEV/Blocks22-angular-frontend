import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(
    private dashboardService: DashboardService,
    public auth: AuthService
  ) { }

  searchValue = '';
  
  clients = [];
tableData = [];




  ngOnInit() {

    this.dashboardService.myProfile().subscribe(res => {

      console.log(res);

    this.tableData = res['clients'];
     this.clients = res['clients'];

    });




  }

  search(): void {

    const filterFunc = (item) => {
      return (item.email.indexOf(this.searchValue) !== -1);
    };
    
    const data = this.clients.filter((item) => filterFunc(item)) as Number[];
    
    
    this.tableData = data;
    
    }





}
