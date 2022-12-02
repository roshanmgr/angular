import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminConfigRoutingModule } from './admin-config-routing.module';
import { AdminConfigComponent } from './admin-config.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  declarations: [
    AdminConfigComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    AdminConfigRoutingModule
  ]
})
export class AdminConfigModule { }
