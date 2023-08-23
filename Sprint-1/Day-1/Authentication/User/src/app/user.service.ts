import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/user.interface';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  appurl = `http://localhost:3000/users`;
  registerRoute(user: User): Observable<User> {
    return this.http.post<User>(this.appurl, user);
  }
}
