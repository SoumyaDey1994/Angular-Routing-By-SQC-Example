import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdaptibilityComponent } from './adaptibility/adaptibility.component';
import { InstallabilityComponent } from './installability/installability.component';
import { ConformanceComponent } from './conformance/conformance.component';
import { ReplaceabilityComponent } from './replaceability/replaceability.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdaptibilityComponent, 
    InstallabilityComponent, 
    ConformanceComponent, 
    ReplaceabilityComponent
  ],
  exports: [
    AdaptibilityComponent, 
    InstallabilityComponent, 
    ConformanceComponent, 
    ReplaceabilityComponent
  ]
})
export class PortabilityModule { }
