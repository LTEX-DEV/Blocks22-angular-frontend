import { Component, OnInit } from '@angular/core';
import { AssesmentService } from 'src/app/services/assement/assesment.service';
import { ActivatedRoute } from '@angular/router';


import { switchMap, map} from 'rxjs/operators';






@Component({
  selector: 'app-assesments',
  templateUrl: './assesments.component.html',
  styleUrls: ['./assesments.component.scss']
})
export class AssesmentsComponent implements OnInit {

 chartDatas;

  constructor(private service: AssesmentService,private route:ActivatedRoute) { }

  ngOnInit() {



    this.route.paramMap.pipe(
      switchMap((params) => {
         const userId = params.get('userId') || '';

         return this.service.getAssesments(userId);
      })
      ).subscribe(res => {

this.chartDatas = res;
      });


  }

}
