import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';


@NgModule({
  declarations: [
    FeatureModuleComponent
  ],
  imports: [
    CommonModule,
    FeatureModuleRoutingModule
  ]
})
export class FeatureModuleModule { }
