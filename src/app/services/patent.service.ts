import { Injectable } from '@angular/core';
import { Patent } from '../shared/patent';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class PatentService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService,
    private auth: AuthService) { }

  getPatents(): Observable<Patent[]> {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.get<Patent[]>(baseURL + 'patents')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getPatent(id: string): Observable<Patent> {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.get<Patent>(baseURL + 'patents/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedPatent(): Observable<Patent> {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.get<Patent[]>(baseURL + 'patents?featured=true').pipe(map(patents => patents[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
