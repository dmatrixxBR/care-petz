import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-agenda-list-page',
  templateUrl: './form-agenda-list-page.component.html',
  styleUrls: ['./form-agenda-list-page.component.css']
})
export class FormAgendaListPageComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {}

  onButtonMenuClick(event: Event) {
    /*M.toast({html: `Bem vindo ao Cadastro de Serviços`,displayLength: 1500, classes:'green'});*/
    this.router.navigate(['/petz']);
  }

  onButtonAgendaClick(event: Event) {
    this.router.navigate(['/petz/agenda']);
  }
}