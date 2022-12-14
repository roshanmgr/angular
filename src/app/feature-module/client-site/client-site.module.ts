import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSiteRoutingModule } from './client-site-routing.module';
import { ClientSiteComponent } from './client-site.component';


@NgModule({
  declarations: [
    ClientSiteComponent
  ],
  imports: [
    CommonModule,
    ClientSiteRoutingModule
  ]
})
export class ClientSiteModule { }
