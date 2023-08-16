import { Component,OnInit } from '@angular/core';
import * as M from 'materialize-css';
@Component({
  selector: 'app-body-page',
  templateUrl: './body-page.component.html',
  styleUrls: ['./body-page.component.css']
})
export class BodyPageComponent implements OnInit {
  isHideMenu = false;


  ngOnInit(): void {}

  onButtonServiceClick(event: Event) {
    M.toast({html: `Bem vindo ao Cadastro de Serviços`,displayLength: 1500, classes:'green'});
  }

  onButtonClientClick(event: Event) {
    M.toast({html: `Bem vindo ao Cadastro de Clientes `,displayLength: 1500, classes:'green'});

  }

  onButtonAgendaClick(event: Event) {
    M.toast({html: `Bem vindo ao Agendamento de Serviços`,displayLength: 1500, classes:'green'});

  }

}
