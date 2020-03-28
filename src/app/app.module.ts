
import { NgModule } from '@angular/core';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';

import { NZ_I18N, en_US } from 'ng-zorro-antd';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { WelcomeComponent } from './welcome/welcome.component';

import { AuthInterceptor } from './interceptors/auth-interceptor';
import { AuthService } from './services/auth/auth.service';
import { NavbarComponent } from './navbar/navbar.component';



import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';

import { DashboardService } from './services/dashboard/dashboard.service';

import { AssesmentService } from './services/assement/assesment.service';
import { AssesmentModule } from './assesment/assesment.module';
import { RequestInterceptor } from './interceptors/request-interceptor';
import { HistoryService } from './services/history/history.service';
import { ReportsComponent } from './reports/reports.component';





registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
   LoginComponent,
   SignupComponent,
   WelcomeComponent,
   NavbarComponent,
   ReportsComponent,
  
  ],
  imports: [
    DashboardModule,
    AssesmentModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
  AuthService,
  DashboardService,
  AssesmentService,
  HistoryService,

    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  },
  { provide: NZ_I18N, useValue: en_US }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
