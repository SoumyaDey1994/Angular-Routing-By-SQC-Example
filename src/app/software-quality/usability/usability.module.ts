import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderstandabilityComponent } from './understandability/understandability.component';
import { LearnabilityComponent } from './learnability/learnability.component';
import { OperabilityComponent } from './operability/operability.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UnderstandabilityComponent, 
    LearnabilityComponent, 
    OperabilityComponent
  ],
  exports: [
    UnderstandabilityComponent, 
    LearnabilityComponent, 
    OperabilityComponent
  ]
})
export class UsabilityModule { }
