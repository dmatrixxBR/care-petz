import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import ptBr from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { BodyPageComponent } from './components/body-page/body-page.component';
import { ButtonMenuComponent } from './components/button-menu/button-menu.component';
import { FormServicosPageComponent } from './components/form-servicos-page/form-servicos-page.component';
import { FormServicosListPageComponent } from './components/form-servicos-list-page/form-servicos-list-page.component';
import { FormClientesPageComponent } from './components/form-clientes-page/form-clientes-page.component';
import { FormClientesListPageComponent } from './components/form-clientes-list-page/form-clientes-list-page.component';
import { FormAgendaPageComponent } from './components/form-agenda-page/form-agenda-page.component';
import { FormAgendaListPageComponent } from './components/form-agenda-list-page/form-agenda-list-page.component';
//import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

//registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    FooterPageComponent,
    HeaderPageComponent,
    BodyPageComponent,
    ButtonMenuComponent,
    FormServicosPageComponent,
    FormServicosListPageComponent,
    FormClientesPageComponent,
    FormClientesListPageComponent,
    FormAgendaPageComponent,
    FormAgendaListPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
