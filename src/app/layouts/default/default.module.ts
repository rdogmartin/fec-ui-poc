import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponent } from 'src/app/modules/demo/demo.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { DefaultComponent } from './default.component';

@NgModule({
  declarations: [DefaultComponent, DemoComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [],
})
export class DefaultModule {}
