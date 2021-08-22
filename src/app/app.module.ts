import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SpendingsComponent } from './spendings/spendings.component';
import { SpendingDetailComponent } from './spending-detail/spending-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SpendingsComponent,
    SpendingDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
