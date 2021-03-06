import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>("http://localhost:49557/api/user");
  }

  getUser(): Observable <User> {
    return this._http.get<User>("http://localhost:49557/api/user");
  }

  addUser(result: User) {
    console.log(result);
    return this._http.post<User>("http://localhost:49557/api/user", result);
  }

  userAuthentication(userName, password) {
    // var data = "userName="+userName+"&password="+password;
    var formData = new FormData();
    formData.append("userName", userName);
    formData.append("password", password)
  // var reqHeader = new HttpHeaders({'Content-Type' : 'application/json'});
    return this._http.post("http://localhost:49557/api/login", {userName, password})
}


}
