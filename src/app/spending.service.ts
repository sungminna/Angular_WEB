import { Injectable } from '@angular/core';
import { Spending } from './spending';
import { Observable, of  } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpendingService {

  constructor(
    private http : HttpClient,
    private messageService: MessageService) { }

  getSpendings(): Observable<Spending[]> {
    return this.http.get<Spending[]>(this.spendingsUrl)
    .pipe(
      tap(_ => this.log('fetched spendings')),
      catchError(this.handleError<Spending[]>('getSpendings', []))
      );
  }

  getSpending(id: number): Observable<Spending>{
    const url = `${this.spendingsUrl}/${id}`;
    return this.http.get<Spending>(url).pipe(
      tap(_ => this.log(`fetched spending id=${id}`)), 
      catchError(this.handleError<Spending>(`getSpending id=${id}`))
    );

  }

  private log(message: string){
    this.messageService.add(`SpendingService: ${message}`);
  }

  private spendingsUrl = 'api/spendings';

  private handleError<T>(operation = 'operations', result?: T){
    return(error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  updateSpending(spending: Spending): Observable<any>{
    return this.http.put(this.spendingsUrl, spending, this.httpOptions).pipe(
      tap(_ => this.log(`updated spending id=${spending.id}`)), 
      catchError(this.handleError<any>('UpdatedSpending'))
    )
  }

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  };

  addSpending(spending: Spending): Observable<Spending>{
    return this.http.post<Spending>(this.spendingsUrl, spending, this.httpOptions).pipe(
      tap((newSpending: Spending) => this.log(`added spending x/ id=${newSpending.id}`)), 
      catchError(this.handleError<Spending>('addSpending'))
    );
  }

  deleteSpending(id: number): Observable<Spending>{
    const url = `${this.spendingsUrl}/${id}`;
    return this.http.delete<Spending>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted spending id=${id}`)), 
      catchError(this.handleError<Spending>('deleteSpending'))
    );
  }

  searchSpendings(term: string): Observable<Spending[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Spending[]>(`${this.spendingsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found spendings matching "${term}"`) :
        this.log(`no spendings matching "${term}"`)), 
        catchError(this.handleError<Spending[]>('searchSpendings', []))
    );
  }

}
