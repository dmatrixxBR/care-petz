import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agenda } from 'src/app/models/agenda';
import { LocalStorageAgendaService } from 'src/app/services/local-storage-agenda.service';

@Component({
  selector: 'app-form-agenda-list-page',
  templateUrl: './form-agenda-list-page.component.html',
  styleUrls: ['./form-agenda-list-page.component.css']
})
export class FormAgendaListPageComponent implements OnInit {

  agendas :Agenda[];
  title ='Lista Agenda';
  @Output() activate = new EventEmitter<any>();
  constructor( private route: ActivatedRoute,
               private router: Router,
               private localStorageAgenda: LocalStorageAgendaService ){
    
                this.activate.emit(this.title);
                this.agendas = localStorageAgenda.getData();
  }

  ngOnInit(): void {}

  onButtonMenuClick(event: Event) {
    /*M.toast({html: `Bem vindo ao Cadastro de Serviços`,displayLength: 1500, classes:'green'});*/
    this.router.navigate(['/petz']);
  }

  onButtonAgendaClick(event: Event) {
    this.router.navigate(['/petz/agenda']);
  }

  onClickItem(agenda:Agenda){
    this.router.navigate(['/petz/agenda',agenda.codigoAgenda]);    
  }

}
