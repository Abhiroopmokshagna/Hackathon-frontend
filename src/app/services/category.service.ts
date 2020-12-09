import { Injectable } from '@angular/core';
import { Category } from '../shared/category';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService,
    private auth: AuthService) { }

  getCategories(): Observable<Category[]> {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.get<Category[]>(baseURL + 'category')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getCategory(id: string): Observable<Category> {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.get<Category>(baseURL + 'category/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedCategory(): Observable<Category> {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.get<Category[]>(baseURL + 'category?featured=true').pipe(map(categories => categories[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getCategoryIds(): Observable<number[] | any> {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.getCategories().pipe(map(categories => categories.map(category => category._id)))
      .pipe(catchError(error => error));
  }

  postComment(categoryId: string, comment: any) {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.post(baseURL + 'category/' + categoryId + '/comments', comment)
    .pipe(catchError(this.processHTTPMsgService.handleError));

  }
}
