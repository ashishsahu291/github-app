import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Users } from './users.model';
import { Repos } from './repos.model';

@Injectable({
  providedIn: 'root',
})
export class GithubapiService {
  userSelected = new Subject<any>();
  searchedResult = new BehaviorSubject<any>('');

  constructor(private http: HttpClient) {}

  // Define API
  apiUrl = 'https://api.github.com';

  // Get all github users
  getUsers(): Observable<any> {
    return this.http.get<Users[]>(`${this.apiUrl}/users`);
  }

  // Get all selected user repos
  getUserRepo(username: string) {
    let endPoint = `users/${username}/repos`;
    return this.http.get<Repos[]>(`${this.apiUrl}/${endPoint}`);
  }

  // Search users
  searchingUsers(q: string) {
    let endPoint = `search/users?q=${q}`;
    return this.http.get<Users[]>(`${this.apiUrl}/${endPoint}`);
  }

  // return searched results
  getSearchedUser(): Observable<any> {
    return this.searchedResult;
  }
}
