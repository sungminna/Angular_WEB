import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinct, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Spending } from '../spending';
import { SpendingService } from '../spending.service';

@Component({
  selector: 'app-spending-search',
  templateUrl: './spending-search.component.html',
  styleUrls: ['./spending-search.component.css']
})
export class SpendingSearchComponent implements OnInit {
  spendings$!: Observable<Spending[]>;
  private searchTerms = new Subject<string>();


  constructor(private spendingService, SpendingService) { }

  search(term: string): void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.spendings$ = this.searchTerms.pipe(
      debounceTime(300), 
      distinctUntilChanged(), 
      switchMap((term: string) => this.spendingService.searchSpendings(term)),
    );
  }

}
