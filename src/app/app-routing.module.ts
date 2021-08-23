import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpendingsComponent } from './spendings/spendings.component';
import { DashboardComponent  } from './dashboard/dashboard.component';
import { SpendingDetailComponent } from './spending-detail/spending-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, 
  {path: 'spendings', component: SpendingsComponent}, 
  {path: 'dashboard', component: DashboardComponent}, 
  {path: 'detail/:id', component: SpendingDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
