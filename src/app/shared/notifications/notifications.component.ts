import { Component, OnInit, Input } from '@angular/core';
import { HistoryService } from 'src/app/services/history/history.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  @Input() notifications = [];

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    
  }


  


}
