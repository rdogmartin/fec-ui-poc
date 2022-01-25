import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ReportsComponent } from './container/reports.component';
import { ReportsRoutingModule } from './reports-routing.module';

@NgModule({
  declarations: [ReportsComponent],
  imports: [CommonModule, ReportsRoutingModule, SharedModule],
})
export class RepoortsModule {}
