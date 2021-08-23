import { Injectable } from '@angular/core';
import { Spending } from './spending';
import { SPENDINGS } from './mock-spendings';
import { Observable, of  } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SpendingService {

  constructor(private messageService: MessageService) { }

  getSpendings(): Observable<Spending[]> {
    const spendings = of(SPENDINGS);
    this.messageService.add('SpendingService: fetched spendings');
    return spendings;

  }

  getSpending(id: number): Observable<Spending>{
    const spending = SPENDINGS.find(h => h.id === id)!;
    this.messageService.add(`SpendingService: fetched spending id=${id}`);
    return of(spending);
  }
}
