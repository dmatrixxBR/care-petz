import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-body-page',
  templateUrl: './body-page.component.html',
  styleUrls: ['./body-page.component.css']
})
export class BodyPageComponent implements OnInit {
  isHideMenu = false;


  ngOnInit(): void {}

  onButtonServiceClick(event: Event) {
    alert `Clicou no botão de Serviços`;
  }

  onButtonClientClick(event: Event) {
    alert `Clicou no botão de Clientes`;
  }

  onButtonAgendaClick(event: Event) {
    alert `Clicou no botão de Agenda`;
  }

}
