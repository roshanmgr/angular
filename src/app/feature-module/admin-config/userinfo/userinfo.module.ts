import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserinfoRoutingModule } from './userinfo-routing.module';
import { UserinfoComponent } from './userinfo.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    UserinfoComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    UserinfoRoutingModule
  ]
})
export class UserinfoModule { }
