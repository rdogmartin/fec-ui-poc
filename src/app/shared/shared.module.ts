import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
  imports: [CommonModule, MatButtonModule, MatSidenavModule, RouterModule],
  exports: [
    /** Angular modules */
    MatButtonModule,
    MatSidenavModule,
    /** Our modules */
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    RouterModule,
  ],
})
export class SharedModule {}
