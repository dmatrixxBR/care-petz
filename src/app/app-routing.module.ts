import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyPageComponent } from './components/body-page/body-page.component';
import { FormServicosPageComponent } from './components/form-servicos-page/form-servicos-page.component';
import { FormServicosListPageComponent } from './components/form-servicos-list-page/form-servicos-list-page.component';
import { FormClientesPageComponent } from './components/form-clientes-page/form-clientes-page.component';
import { FormClientesListPageComponent } from './components/form-clientes-list-page/form-clientes-list-page.component';
import { FormAgendaPageComponent } from './components/form-agenda-page/form-agenda-page.component';
import { FormAgendaListPageComponent } from './components/form-agenda-list-page/form-agenda-list-page.component';


const routes: Routes = [
  {path: "", component: BodyPageComponent},  
  {path: "petz", component: BodyPageComponent},
  {path: "petz/servicos", component: FormServicosPageComponent},
  {path: "petz/servicos/lista", component:FormServicosListPageComponent},
  {path: "petz/clientes", component: FormClientesPageComponent},
  {path: "petz/clientes/lista", component:FormClientesListPageComponent},
  {path: "petz/agenda", component: FormAgendaPageComponent},
  {path: "petz/agenda/lista", component:FormAgendaListPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
