import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface User {
  id: number;
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
    return this.httpClient.get<User[]>('http://localhost:4200/api/users').pipe(
      tap(data => console.log(data))
    );
  }
}

