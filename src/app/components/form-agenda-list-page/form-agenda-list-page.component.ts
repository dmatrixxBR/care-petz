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

  agendas! :Agenda[];
  agendasCounter: number = 0;
  title ='Lista Agenda';
  @Output() activate = new EventEmitter<any>();
  constructor( private route: ActivatedRoute,
               private router: Router,
               private localStorageAgenda: LocalStorageAgendaService ){
    
                this.activate.emit(this.title);
                this.getData();
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

  onClickItemDelete(agenda:Agenda){
    let confirmation = window.confirm('Excluir Registro?' + agenda.codigoAgenda);
    if (!confirmation) {
      return
    }
    let response : boolean = this.localStorageAgenda.delete(agenda);
    if (response) {
      M.toast({html: `Registro Excluido!`,displayLength: 1500, classes:'green'});
      this.getData();
    }   
    
  }

    getData(){
    this.agendas = this.localStorageAgenda.getData();
    this.agendasCounter = this.agendas.length;
  }


}
