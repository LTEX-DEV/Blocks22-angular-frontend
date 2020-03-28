import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ClientsComponent } from './clients/clients.component';
import { HistoryComponent } from './history/history.component';
import { RouterModule } from '@angular/router';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    RouterModule.forRoot([]),
  
  ],
  exports:[
    FormsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    RouterModule.forRoot([]).ngModule,
    ClientsComponent,
    HistoryComponent,
    NotificationsComponent
  ],
  declarations: [
    ClientsComponent,
    HistoryComponent,
    NotificationsComponent

  ],
  entryComponents:[NotificationsComponent]
})
export class SharedModule { }
