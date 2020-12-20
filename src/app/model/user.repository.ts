import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from './constant.model';
import { User } from './user.model';
@Injectable()
export class UserRepository {
  constructor(private http: HttpClient, private constant: Constant) {}
  getRawData(userInput: string): Observable<User> {
    console.log(userInput)
    return this.http.post<User>(`${this.constant.v1BaseUrl}parse`, {data: userInput});
  }
  getFormatedData(userInput: string): Observable<User> {
    return this.http.post<User>(`${this.constant.v2BaseUrl}parse`, {data: userInput});
  }
}
