import { Component, OnInit } from '@angular/core';
import { Spending } from '../spending';
import { SPENDINGS } from '../mock-spendings';

@Component({
  selector: 'app-spendings',
  templateUrl: './spendings.component.html',
  styleUrls: ['./spendings.component.css']
})
export class SpendingsComponent implements OnInit {
  spendings = SPENDINGS;
  selectedSpending?: Spending;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(spending: Spending): void {
    this.selectedSpending = spending;
  }

}


