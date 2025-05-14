import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }

  getPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  getPostsByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts?userId=${userId}`);
  }

  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts/${id}`);
  }

  getCommentsByPostId(postId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/comments?postId=${postId}`);
  }
}