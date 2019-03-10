import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeBehaviorComponent } from './time-behavior/time-behavior.component';
import { ResourceBehaviorComponent } from './resource-behavior/resource-behavior.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimeBehaviorComponent, 
    ResourceBehaviorComponent
  ],
  exports: [
    TimeBehaviorComponent, 
    ResourceBehaviorComponent
  ]
})
export class EfficiencyModule { }
