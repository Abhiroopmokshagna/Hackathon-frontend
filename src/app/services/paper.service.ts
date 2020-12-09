import { Injectable } from '@angular/core';
import { Paper } from '../shared/paper';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class PaperService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService,
    private auth: AuthService) { }

  getPapers(): Observable<Paper[]> {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.get<Paper[]>(baseURL + 'papers')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getPaper(id: string): Observable<Paper> {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.get<Paper>(baseURL + 'papers/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedPaper(): Observable<Paper> {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.get<Paper[]>(baseURL + 'papers?featured=true').pipe(map(papers => papers[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
