import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReportsComponent } from 'src/app/modules/reports/reports.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent, ReportsComponent],
  imports: [CommonModule, SharedModule],
})
export class MainModule {}
