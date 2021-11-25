import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable()
export class SearchService {
  heroesUrl = 'https://jsonmock.hackerrank.com/api/stocks?date={input}'; // URL to web api

  constructor(private http: HttpClient) {}

  search(term: string): void {
    console.log(term);
  }

}
