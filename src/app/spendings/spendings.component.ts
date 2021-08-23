import { Component, OnInit } from '@angular/core';

import { Spending } from '../spending';
import { SpendingService } from '../spending.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-spendings',
  templateUrl: './spendings.component.html',
  styleUrls: ['./spendings.component.css']
})
export class SpendingsComponent implements OnInit {

  selectedSpending?: Spending;

  spendings: Spending[] = [];

  constructor(private spendingService: SpendingService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getSpendings();
  }

  onSelect(spending: Spending): void {
    this.selectedSpending = spending;
    this.messageService.add(`SpendingsComponent: Selected spending id=${spending.id}`);

  }

  getSpendings(): void{
    this.spendingService.getSpendings().subscribe(spendings => this.spendings = spendings);
  }
}


