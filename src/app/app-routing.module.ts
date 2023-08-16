import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyPageComponent } from './components/body-page/body-page.component';
import { FormServicosPageComponent } from './components/form-servicos-page/form-servicos-page.component';
import { FormServicosListPageComponent } from './components/form-servicos-list-page/form-servicos-list-page.component';

const routes: Routes = [
  {path: "", component: BodyPageComponent},  
  {path: "petz", component: BodyPageComponent},
  {path: "petz/servicos", component: FormServicosPageComponent},
  {path: "petz/servicos/lista", component:FormServicosListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
