import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  registre(data: any) {
    return this.http.post("http://localhost:3000/users", data)

  }

  login(username: any, password: any) {
    return this.http.get(`http://localhost:3000/users?username=${username}&password=${password}`)
  }

  
}
