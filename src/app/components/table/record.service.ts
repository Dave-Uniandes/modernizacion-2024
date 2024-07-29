import { Injectable } from '@angular/core';
import { Record } from './record';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  private url = 'http://34.111.248.124/conmebol/table';
  constructor(private http: HttpClient) {}

  records : Observable<Record[]> = new BehaviorSubject([]).asObservable()

  getRecords() {
    this.records = this.http
      .get<Record[]>(this.url)
      .pipe(catchError(this.handleError<Record[]>('getRecords', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

  deleteRecords(){
    this.records = new BehaviorSubject([]).asObservable()
  }
}
