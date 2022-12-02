import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client-site',
  templateUrl: './client-site.component.html',
  styleUrls: ['./client-site.component.scss']
})
export class ClientSiteComponent implements OnInit {

  client: any;
  clientDetail: Array<any>=new Array<any>();

  constructor(private clientService:ClientService) { 

  }

  ngOnInit(): void {
    this.listClient();
  }

  public listClient(){
    this.clientService.getAll(this.client).subscribe(
      (response:any)=>{
        this.clientDetail = response?.loans;
        console.log(response)

      },(error:any)=>{
        console.error('error is: ',error)
      }
    )
  }

  public deleteById(id:any){
    this.client.deleteById(this.client).subscribe(
      (response:any)=>{
        this.clientDetail = response?. loans;
        console.log(response)
      },
      (error:any)=>{
        console.error('error is:', error)
      }
    )
  }

}
