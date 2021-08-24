import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SpendingsComponent } from './spendings/spendings.component';
import { SpendingDetailComponent } from './spending-detail/spending-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { SpendingSearchComponent } from './spending-search/spending-search.component';
@NgModule({
  declarations: [
    AppComponent,
    SpendingsComponent,
    SpendingDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SpendingSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
