import { NgModule } from '@angular/core';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth/auth.guard';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  imports: [
SharedModule,
RouterModule.forRoot([
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},

])
  ],
  declarations: [
    DashboardComponent,
   ]
})
export class DashboardModule { }
