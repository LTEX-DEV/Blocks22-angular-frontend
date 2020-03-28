import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { AssesmentsComponent } from './components/assesments/assesments.component';
import { ChartComponent } from './components/chart/chart.component';
import { AuthGuard } from '../services/auth/auth.guard';
import { AddAssesmentComponent } from './components/add-assesment/add-assesment.component';

@NgModule({
  imports: [
    SharedModule,
    ChartsModule,
    RouterModule.forRoot([
      {path: 'assesments/:userId', component: AssesmentsComponent, canActivate:[AuthGuard]},
      {path: 'assesments', component: AssesmentsComponent, canActivate:[AuthGuard]},
      {path: 'addAssesment', component: AddAssesmentComponent, canActivate:[AuthGuard]}
    ])
  ],
  declarations: [
    AssesmentsComponent,
    ChartComponent,
    AddAssesmentComponent
  ]
})
export class AssesmentModule { }
