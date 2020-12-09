import { Injectable } from '@angular/core';
import { Project } from '../shared/project';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(baseURL + 'projects')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getProject(id: string): Observable<Project> {
    return this.http.get<Project>(baseURL + 'projects/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedProject(): Observable<Project> {
    return this.http.get<Project[]>(baseURL + 'projects?featured=true').pipe(map(projects => projects[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
