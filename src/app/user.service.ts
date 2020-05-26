import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
};

// dependency injection
@Injectable()
export class UserService {

  private usersUrl = 'http://localhost:8080/web_war_exploded/Controller?action=GetUsersJSON';
  private updateUrl = 'http://localhost:8080/web_war_exploded/Controller?action=UpdateUser';
  // dependency injection
  constructor(private http: HttpClient) {
  }

  // Observables provide support for passing messages between
  // publishers and subscribers in your application
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  updateUser(user: User){
    const body = new URLSearchParams({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        status: user.status,
        gender: user.gender,
        age: user.age
      }
    );

    this.http.post(this.updateUrl, body.toString(), httpOptions)
      .subscribe(response =>
        console.log(response));
  }
}
