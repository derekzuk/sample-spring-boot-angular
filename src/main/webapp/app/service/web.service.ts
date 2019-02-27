import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  readonly endpoint = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  httpServletResponse(): Observable<any> {
    return this.http.get(this.endpoint + 'http-servlet-response');
  }

  postHttpServletResponse(): Observable<any> {
    return this.http.post(this.endpoint + 'post-http-servlet-response', {}, {headers: null, responseType: 'text'});
  }

  takeTime(): Observable<any> {
    return this.http.get(this.endpoint + 'takeTime');
  }

  changeSize(): Observable<any> {
      return this.http.post(this.endpoint + 'changeSize', {}, {headers: null, responseType: 'text'});
  }
}
