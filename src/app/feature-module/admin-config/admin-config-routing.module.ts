import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminConfigComponent } from './admin-config.component';

const routes: Routes = [{ path: '', component: AdminConfigComponent }, { path: 'userinfo', loadChildren: () => import('./userinfo/userinfo.module').then(m => m.UserinfoModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminConfigRoutingModule { }
