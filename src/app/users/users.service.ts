import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

export interface User {
  id: number|null;
  firstname: string;
  lastname: string;
  email: string;
  age: number;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.apiUri}/users`).pipe(
      tap(data => console.log(data))
    );
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiUri}/users/${id}`).pipe(
      tap(data => console.log(data))
    );
  }

  saveUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${environment.apiUri}/users`, user);
  }

  getInitUser(): User {
    return {
      id: null,
      firstname: '',
      lastname: '',
      age: 0,
      email: ''
    } as User
  }
}

