import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  histories = [];



  constructor(private historyService: HistoryService) { }

  ngOnInit() {

    this.getHistory(null);
  }






  getHistory(count): void {

    this.historyService.getHistories(count).subscribe((res: any) => {
  
      this.histories = res ;
  
      console.log(this.histories);
    
    });




}


}
