import { Component, OnInit } from '@angular/core';
import { Spending } from '../spending';
import { SpendingService } from '../spending.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  spendings: Spending[] = [];

  constructor(private spendingService: SpendingService) { }

  ngOnInit(): void {
    this.getSpendings();
  }

  getSpendings(): void {
    this.spendingService.getSpendings().subscribe(spendings => this.spendings.slice(1, 5));
  }
}
