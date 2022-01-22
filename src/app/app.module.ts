import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { MainModule } from './layouts/main/main.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    /** Angular modules */
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    /** Our modules */
    AppRoutingModule,
    DefaultModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
