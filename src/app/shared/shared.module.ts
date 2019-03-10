import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionalityDefComponent } from './functionality-def/functionality-def.component';
import { ReliabilityDefComponent } from './reliability-def/reliability-def.component';
import { EfficiencyDefComponent } from './efficiency-def/efficiency-def.component';
import { UsabilityDefComponent } from './usability-def/usability-def.component';
import { MaintainabilityDefComponent } from './maintainability-def/maintainability-def.component';
import { PortabilityDefComponent } from './portability-def/portability-def.component';
import { Iso9126SqcComponent } from './iso9126-sqc/iso9126-sqc.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FunctionalityDefComponent, ReliabilityDefComponent, EfficiencyDefComponent, UsabilityDefComponent, MaintainabilityDefComponent, PortabilityDefComponent, Iso9126SqcComponent],
  exports: [FunctionalityDefComponent, ReliabilityDefComponent, EfficiencyDefComponent, UsabilityDefComponent, MaintainabilityDefComponent, PortabilityDefComponent]
})
export class SharedModule { }
