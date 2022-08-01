import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    let url = "http://localhost:8080/api/getUsers";
    return this.http.get<any>(url);
  }

  addUser(user :Partial<{ firstname: string | null; lastname: string | null; email: string | null; phone: string | null; password: string | null; checkPassword: string | null; }>): Observable<Object>{
    return this.http.post("http://localhost:8080/api/addUser",user);
  }

  logUser(user: User): Observable<any>{
    return this.http.post("http://localhost:8080/api/logUser",user);
  }
  updateUser(userid : number, user :Partial<{ firstname: string | null; lastname: string | null; phone: string | null;} >): Observable<Object>{
    let url = "http://localhost:8080/api/updateUser" + "/" + userid;
    return this.http.put(url,user);
  }
}
