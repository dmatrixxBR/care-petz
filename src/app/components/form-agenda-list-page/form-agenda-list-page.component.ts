import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Agenda } from 'src/app/models/agenda';
import { AgendaPromiseService } from 'src/app/services/agenda-promise.service';
import { Constants } from 'src/app/util/constants';

@Component({
  selector: 'app-form-agenda-list-page',
  templateUrl: './form-agenda-list-page.component.html',
  styleUrls: ['./form-agenda-list-page.component.css']
})
export class FormAgendaListPageComponent implements OnInit {

  agendas! :Agenda[];
  agendasCounter: number = 0;
  title ='Lista Agenda';
  agenda$ !: Observable<Agenda>;
  @Output() activate = new EventEmitter<any>();
  constructor( private route: ActivatedRoute,
               private router: Router,
               private apiAgenda : AgendaPromiseService ){
    
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
    this.router.navigate(['/petz/agenda',agenda.id]);    
  }

   onClickItemDelete(agenda:Agenda) {
    const confirmation = window.confirm('Excluir Registro?' + agenda.codigoAgenda);
    if (!confirmation) {
      return;
    }
    
    this.agenda$ = this.apiAgenda.deleteObs(agenda);


    this.agenda$.subscribe({
      next: (agd) =>{
        M.toast({html: `Registro Excluido com sucesso`,displayLength: Constants.TIME_INTERVAL_MESSAGE, classes:'green'});
        this.getData();
      },
      error:(error) => {
        M.toast({html: `Erro ocorrido => ` + error.message ,displayLength: Constants.TIME_INTERVAL_MESSAGE, classes:'red'});
        this.getData();
        
      } 
    });   
  }

    getData(){
      
      this.apiAgenda.allObs().subscribe({
        next:(agds) => {
          this.agendas = agds;
          this.agendasCounter = agds.length;
        },
        error:(error) =>{
          M.toast({html: `Erro ocorrido => ` + error.message ,displayLength: Constants.TIME_INTERVAL_MESSAGE, classes:'red'});
        }
  
    });  

  }


}
