import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccuratenessComponent } from './accurateness/accurateness.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { InteroperabilityComponent } from './interoperability/interoperability.component';
import { SecurityComponent } from './security/security.component';
import { SuitabilityComponent } from './suitability/suitability.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AccuratenessComponent,
    ComplianceComponent,
    InteroperabilityComponent,
    SecurityComponent,
    SuitabilityComponent
  ],
  exports: [
    AccuratenessComponent,
    ComplianceComponent,
    InteroperabilityComponent,
    SecurityComponent,
    SuitabilityComponent
  ]
})
export class FuntionalityModule { }
