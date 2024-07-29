import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Calendar } from './calendar';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private deleteUrl = 'http://34.111.248.124/conmebol/delete';
  private calendarUrl = 'http://34.111.248.124/conmebol/calendar';

  constructor(private http: HttpClient) {}

  deleteData(): Observable<string> {
    return this.http
      .delete<string>(this.deleteUrl)
      .pipe(catchError(this.handleError<string>('deleteData', "")));
  }

  getCalendar() {
    return this.http
      .get<Calendar>(this.calendarUrl)
      .pipe(catchError(this.handleError<Calendar>('getCalendar')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
