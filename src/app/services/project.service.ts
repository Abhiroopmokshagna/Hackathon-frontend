import { Injectable } from '@angular/core';
import { Project } from '../shared/project';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService,
    private auth: AuthService) { }

  getProjects(): Observable<Project[]> {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.get<Project[]>(baseURL + 'projects')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getProject(id: string): Observable<Project> {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.get<Project>(baseURL + 'projects/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedProject(): Observable<Project> {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.get<Project[]>(baseURL + 'projects?featured=true').pipe(map(projects => projects[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
