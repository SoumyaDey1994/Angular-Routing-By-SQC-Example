import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyzabilityComponent } from './analyzability/analyzability.component';
import { ChangeabilityComponent } from './changeability/changeability.component';
import { StabilityComponent } from './stability/stability.component';
import { TestabilityComponent } from './testability/testability.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AnalyzabilityComponent, 
    ChangeabilityComponent, 
    StabilityComponent, 
    TestabilityComponent
  ],
  exports: [
      AnalyzabilityComponent, 
      ChangeabilityComponent, 
      StabilityComponent, 
      TestabilityComponent
  ]
})
export class MaintainabilityModule { }
