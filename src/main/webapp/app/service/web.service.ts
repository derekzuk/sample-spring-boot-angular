import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  readonly endpoint = 'http://localhost:8080/';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  httpServletResponse(): Observable<any> {
    return this.http.get(this.endpoint + 'http-servlet-response').pipe(
      map(this.extractData));
  }

  postHttpServletResponse(): Observable<any> {
    return this.http.post(this.endpoint + 'post-http-servlet-response', {}, { observe: 'response' });
  }
}
