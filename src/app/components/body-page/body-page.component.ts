import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as M from 'materialize-css';
@Component({
  selector: 'app-body-page',
  templateUrl: './body-page.component.html',
  styleUrls: ['./body-page.component.css']
})
export class BodyPageComponent implements OnInit {
  isHideMenu = false;

  constructor(private router: Router){}

  ngOnInit(): void {}

  onButtonServiceClick(event: Event) {
    /*M.toast({html: `Bem vindo ao Cadastro de Serviços`,displayLength: 1500, classes:'green'});*/
    this.router.navigate(['/petz/servicos/lista']);
  }

  onButtonClientClick(event: Event) {
    M.toast({html: `Bem vindo ao Cadastro de Clientes `,displayLength: 1500, classes:'green'});

  }

  onButtonAgendaClick(event: Event) {
    M.toast({html: `Bem vindo ao Agendamento de Serviços`,displayLength: 1500, classes:'green'});

  }

}
