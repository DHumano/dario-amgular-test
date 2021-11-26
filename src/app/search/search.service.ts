import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { List } from './list';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {}

  search(date: string): Observable<Object> {
      console.log(date);
    const baseUrl = 'https://jsonmock.hackerrank.com/api/stocks?date=';

    return this.http.get(baseUrl + date);
  }
}
