import { Injectable } from '@angular/core';
import { Member } from '../shared/member';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService,
    private auth: AuthService) { }

  getMembers(): Observable<Member[]> {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.get<Member[]>(baseURL + 'members')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getMember(id: string): Observable<Member> {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.get<Member>(baseURL + 'members/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedMember(): Observable<Member> {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.get<Member[]>(baseURL + 'members?featured=true').pipe(map(members => members[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
