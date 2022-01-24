import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyModule } from './layouts/empty/empty.module';
import { DefaultModule } from './layouts/default/default.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    /** Angular modules */
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    /** Our modules */
    AppRoutingModule,
    EmptyModule,
    DefaultModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
