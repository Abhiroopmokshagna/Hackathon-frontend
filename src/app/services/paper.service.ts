import { Injectable } from '@angular/core';
import { Paper } from '../shared/paper';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPapers(): Observable<Paper[]> {
    return this.http.get<Paper[]>(baseURL + 'papers')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getPaper(id: string): Observable<Paper> {
    return this.http.get<Paper>(baseURL + 'papers/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedPaper(): Observable<Paper> {
    return this.http.get<Paper[]>(baseURL + 'papers?featured=true').pipe(map(papers => papers[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
