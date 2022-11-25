import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl: string = environment.baseUrl;
  registerApiEndPoint:string ='/register';
  loginApiEndPoint:string ='/login';

constructor(private httpClient:HttpClient){}

  addRegister(register:any):Observable<any>{
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.registerApiEndPoint),
      register
    )
  }

  addLogin(login:any):Observable<any>{
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.loginApiEndPoint),
      login
    )
  }

}