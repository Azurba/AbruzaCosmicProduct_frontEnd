import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, catchError, throwError } from 'rxjs';
import { OrderHistory } from '../models/orderHistory';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _email? : string;

  constructor(private http : HttpClient) {
    //console.log(this._email);
  }

  public getUserByEmail() {
    return this.http.get<User>(`https://localhost:7170/api/User/users?email=${this._email}`);                       
  }

  public login(email: string, password: string): Observable<string> {
    const request = { email, password };
    this._email = request.email;
    return this.http.post(`https://localhost:7170/api/User/login`, request, { responseType: 'text' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  public registration(name : string, email : string, password : string){
    const request = {name, email, password}
    this._email = request.email;
    return this.http.post<string>(`https://localhost:7170/api/User/register`, request);
  }

  public getOrderHistory(){
    return this.http.get<OrderHistory[]>('https://localhost:7170/api/OrderHistory');
  }

  // public postTotal(){
  //   return this.http.post<Number>('https://localhost:7170/api/OrderHistory', )
  // }
}