import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSiteComponent } from './client-site.component';

const routes: Routes = [{ path: '', component: ClientSiteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSiteRoutingModule { }
