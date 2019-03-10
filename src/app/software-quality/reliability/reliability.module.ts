import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaturityComponent } from './maturity/maturity.component';
import { FaultToleranceComponent } from './fault-tolerance/fault-tolerance.component';
import { RecoverabilityComponent } from './recoverability/recoverability.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MaturityComponent, 
    FaultToleranceComponent, 
    RecoverabilityComponent
  ],
  exports: [
    MaturityComponent, 
    FaultToleranceComponent, 
    RecoverabilityComponent
  ]
})
export class ReliabilityModule { }
