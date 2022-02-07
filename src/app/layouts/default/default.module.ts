import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { DefaultComponent } from './default.component';

@NgModule({
  declarations: [DefaultComponent],
  imports: [CommonModule, SharedModule],
})
export class DefaultModule {}
