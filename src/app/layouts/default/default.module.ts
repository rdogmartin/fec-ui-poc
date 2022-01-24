import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReportsComponent } from 'src/app/modules/reports/reports.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { DefaultComponent } from './default.component';

@NgModule({
  declarations: [DefaultComponent, ReportsComponent],
  imports: [CommonModule, SharedModule],
})
export class DefaultModule {}
