import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminConfigRoutingModule } from './admin-config-routing.module';
import { AdminConfigComponent } from './admin-config.component';


@NgModule({
  declarations: [
    AdminConfigComponent
  ],
  imports: [
    CommonModule,
    AdminConfigRoutingModule
  ]
})
export class AdminConfigModule { }
