import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-servicos-list-page',
  templateUrl: './form-servicos-list-page.component.html',
  styleUrls: ['./form-servicos-list-page.component.css']
})
export class FormServicosListPageComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {}

  onButtonMenuClick(event: Event) {
    /*M.toast({html: `Bem vindo ao Cadastro de Serviços`,displayLength: 1500, classes:'green'});*/
    this.router.navigate(['/petz']);
  }

  onButtonServiceClick(event: Event) {
    this.router.navigate(['/petz/servicos']);
  }


}
