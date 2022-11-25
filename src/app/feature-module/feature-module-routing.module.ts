import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminConfigComponent } from './admin-config/admin-config.component';
import { FeatureModuleComponent } from './feature-module.component';

const routes: Routes = [{
  path:'admin-congif',
  component: AdminConfigComponent
},
  { path: '', component: FeatureModuleComponent },
   { path: 'client-site', loadChildren: () => import('./client-site/client-site.module').then(m => m.ClientSiteModule) }, { path: 'admin-config', loadChildren: () => import('./admin-config/admin-config.module').then(m => m.AdminConfigModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModuleRoutingModule { }
