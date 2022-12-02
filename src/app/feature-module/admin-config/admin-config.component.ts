import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/auth/service/admin.service';

@Component({
  selector: 'app-admin-config',
  templateUrl: './admin-config.component.html',
  styleUrls: ['./admin-config.component.scss']
})
export class AdminConfigComponent implements OnInit {

  admin:any;
  adminDetail: Array<any> = new Array<any>();

  constructor(private adminService:AdminService) {

   }

  ngOnInit(): void {

    this.listAdmin();
  }

  public listAdmin(){
    this.adminService.getAll(this.admin).subscribe(
      (response:any)=>{
        this.adminDetail = response?.users;
        console.log(response)

      },(error:any)=>{
        console.error('error is: ',error)
      }
    )
  }

}
