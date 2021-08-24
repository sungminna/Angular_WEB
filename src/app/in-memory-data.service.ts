import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Spending } from './spending';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const spendings = [
      { id: 11, name: 'pizza' },
      { id: 12, name: 'coke' },
      { id: 13, name: 'beer' },
      { id: 14, name: 'apple' },
      { id: 15, name: 'wallet' },
      { id: 16, name: 'book' },
      { id: 17, name: 'soap' },
      { id: 18, name: 'table' },
      { id: 19, name: 'desk' },
      { id: 20, name: 'pillow' }
    ];
    return {spendings};
  }
  constructor() { }

  genId(spendings: Spending[]): number{
    return spendings.length > 0 ? Math.max(...spendings.map(spending => spending.id)) + 1 : 11;
  }
}
