import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, DemoRoutingModule, MatButtonModule],
})
export class DemoModule {}
