import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './container/reports.component';

@NgModule({
  declarations: [ReportsComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class ReportsModule {}
