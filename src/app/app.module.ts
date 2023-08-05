import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterPageComponent,
    HeaderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
