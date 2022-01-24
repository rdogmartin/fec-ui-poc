import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { EmptyComponent } from './empty.component';

@NgModule({
  declarations: [EmptyComponent],
  imports: [CommonModule, SharedModule],
})
export class EmptyModule {}
