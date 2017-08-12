import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

const apiBaseURL: string = 'api/';

@Injectable()
export class WebApiService {

  constructor(private http: Http) { }

  getRequest(api: string): Observable<Response> {
    return this.http.get(apiBaseURL + api)
  }

  checkApi(): Observable<string> {
    return this.getRequest('check')
      .map((res: Response) => res.text());
  }

}
