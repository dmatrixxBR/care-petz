import { Component, OnInit,Output,ViewChild,EventEmitter,AfterViewInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Agenda } from 'src/app/models/agenda';
import { Cliente } from 'src/app/models/cliente';
import { Servico } from 'src/app/models/servico';
import * as M from 'materialize-css';
import { ServicoPromiseService } from 'src/app/services/servico-promise.service';
import { ClientePromiseService } from 'src/app/services/cliente-promise.service';
import { AgendaPromiseService } from 'src/app/services/agenda-promise.service';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/util/constants';


@Component({
  selector: 'app-form-agenda-page',
  templateUrl: './form-agenda-page.component.html',
  styleUrls: ['./form-agenda-page.component.css']
})
export class FormAgendaPageComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  @ViewChild('clientSelect') clientSelect!: ElementRef;
  @ViewChild('serviceSelect') serviceSelect!: ElementRef;

  agenda!:Agenda;
  clientes!:Cliente[];
  servicos!:Servico[];
  agendas!:Agenda[];
  agenda$!: Observable<Agenda>;

  title ='Agenda';

  @Output() activate = new EventEmitter<any>();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private apiServico : ServicoPromiseService,
              private apiCliente : ClientePromiseService,
              private apiAgenda : AgendaPromiseService){
    
                this.activate.emit(this.title);

  }

  ngOnInit():void{
    
    this.setEmptyAgenda();
    this.loadClientList();
    this.loadServiceList();
    let idParam: string = this.route.snapshot.paramMap.get('id')!;
      if(idParam){
        M.toast({html: `Parametro Passado na Agenda ` + idParam,displayLength: Constants.TIME_INTERVAL_MESSAGE, classes:'green'});
        this.getAgenda(idParam); 
       
        
      }
    

      const servicoSelect = document.getElementById('servicoAgenda') as HTMLSelectElement;
      /*servicoSelect.addEventListener('change', () => {
      this.updateValorServico();
    });*/

  }


  ngAfterViewInit(){
    var elements = document.querySelectorAll('select');
    M.FormSelect.init(elements,{});
    
  }

  getAgenda(id:string){
    this.agenda$ = this.apiAgenda.getByIDObs(id);
      this.agenda$.subscribe({
        next:(agd) => {
          this.agenda = agd;
        },
        error: (error) =>{
          M.toast({html: `Erro ocorrido => ` + error.message ,displayLength: Constants.TIME_INTERVAL_MESSAGE, classes:'red'});
        }
      }); 
  }

  setEmptyAgenda() {
    this.agenda = new Agenda();
  }
  
  onSubmit():void{
    this.saveAgenda(); 
    this.router.navigate(['/petz/agenda/lista']);
  }

  onMenuClick(event:Event) {
    this.router.navigate(['/petz/agenda/lista']);
  }

  async loadClientList(){

  this.apiCliente.allObs().subscribe({
    next:(clis) => {
      this.clientes = clis;  
    },
    error:(error) =>{
      alert (error);
    }

}); 
  
    console.log(this.clientes);
  
    setTimeout(()=> {
    M.FormSelect.init(this.clientSelect.nativeElement);
   },100);

  }
  
 async loadServiceList(){
  //  this.servicos = this.localStorageServico.getData();
     this.apiServico.allObs().subscribe({
      next:(servs) => {
        this.servicos = servs;
      },
      error:(error) =>{
        M.toast({html: `Erro ocorrido => ` + error.message ,displayLength: Constants.TIME_INTERVAL_MESSAGE, classes:'red'});
      }
  });  

    console.log(this.servicos);
    setTimeout(()=> {
      M.FormSelect.init(this.serviceSelect.nativeElement);
     },100);
  }

  

  compareWithClients(object1: Cliente, object2: Cliente): boolean {
    return object1 && object2 ?  object1.codigoCliente === object2.codigoCliente : object1 === object2 ;
           
  }

  compareWithServices(object1: Servico, object2: Servico): boolean {
    return object1 && object2 ?  object1.codigoServico === object2.codigoServico : object1 === object2 ;
           
  }

 updateValorServico() {
  const servicoSelecionado = this.agenda.servicoId;

  if (servicoSelecionado) {
    this.agenda.valorServico = servicoSelecionado.valorServico;
  }
}



saveAgenda() {
  if (!this.agenda.id) {
    // Novo serviço, usar o método save
   this.agenda$ = this.apiAgenda.saveObs(this.agenda);
   
   this.agenda$.subscribe({
    next:(agd) => {
      M.toast({ html: `Registro Salvo com sucesso! - ` + agd.id, displayLength: Constants.TIME_INTERVAL_MESSAGE, classes: 'green' });
    },
    error:(error) => {
      M.toast({html: `Erro ocorrido => ` + error.message ,displayLength: Constants.TIME_INTERVAL_MESSAGE, classes:'red'});
    }
   });     
   
  } else {
    this.agenda$ = this.apiAgenda.updateObs(this.agenda);     
    this.agenda$.subscribe({
      next:(agd) => {
       M.toast({ html: `Registro alterado com sucesso! - ` + agd.id , displayLength: Constants.TIME_INTERVAL_MESSAGE, classes: 'green' });
    },
      error:(error) => {
        M.toast({html: `Erro ocorrido => ` + error.message ,displayLength: Constants.TIME_INTERVAL_MESSAGE, classes:'red'});
    }
   });
  }
  this.form.reset();
}


}
