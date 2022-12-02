import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl: string = environment.baseUrl;
  ApiEndPoint:string ='/loan'

  constructor(private httpClient:HttpClient) { }
  getAll(register:any):Observable<any>{
    return this.httpClient.get<any>(
      this.baseUrl.concat(this.ApiEndPoint),
    )
  } 

  deleteById(id:any):Observable<any>{
    return this.httpClient.delete<any>(
      this.baseUrl.concat(this.ApiEndPoint).concat('/',id)
    )


  }
}
