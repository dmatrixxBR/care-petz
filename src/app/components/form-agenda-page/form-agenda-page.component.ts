import { Component, OnInit,Output,ViewChild,EventEmitter,AfterViewInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageAgendaService } from 'src/app/services/local-storage-agenda.service';
import { LocalStorageClienteService } from 'src/app/services/local-storage-cliente.service';
import { LocalStorageServicoService } from 'src/app/services/local-storage-servico.service';
import { Agenda } from 'src/app/models/agenda';
import { Cliente } from 'src/app/models/cliente';
import { Servico } from 'src/app/models/servico';
import * as M from 'materialize-css';
import { ServicoPromiseService } from 'src/app/services/servico-promise.service';
import { ClientePromiseService } from 'src/app/services/cliente-promise.service';
import { AgendaPromiseService } from 'src/app/services/agenda-promise.service';


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

  title ='Agenda';

  @Output() activate = new EventEmitter<any>();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private localStorageAgenda : LocalStorageAgendaService,
              private localStorageCliente: LocalStorageClienteService,
              private localStorageServico: LocalStorageServicoService,
              private apiServico : ServicoPromiseService,
              private apiCliente : ClientePromiseService,
              private apiAgenda : AgendaPromiseService){
    
                this.activate.emit(this.title);

  }

  ngOnInit():void{
    
    this.setEmptyAgenda();
    this.loadClientList();
    this.loadServiceList();
    this.loadAgendaList();
    let idParam: string = this.route.snapshot.paramMap.get('id')!;
      if(idParam){
        M.toast({html: `Parametro Passado na Agenda ` + idParam,displayLength: 1500, classes:'green'});
        //this.agenda = this.localStorageAgenda.getById(idParam);
        this.apiAgenda.getByID(idParam)
       .then((agd:Agenda) => {
        this.agenda = agd;
       }); 
        
      }
     // M.AutoInit(); 

      const servicoSelect = document.getElementById('servicoAgenda') as HTMLSelectElement;
      servicoSelect.addEventListener('change', () => {
      this.updateValorServico();
    });

  }

  ngAfterViewInit(){
    var elements = document.querySelectorAll('select');
    M.FormSelect.init(elements,{});
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
  //  this.clientes = this.localStorageCliente.getData();
  this.apiCliente.all().then((clis: Cliente[]) =>{
    this.clientes = clis; 
  });
  
    console.log(this.clientes);
  
    setTimeout(()=> {
    M.FormSelect.init(this.clientSelect.nativeElement);
   },100);

  }
  
 async loadServiceList(){
  //  this.servicos = this.localStorageServico.getData();
    this.apiServico.all().then((servs: Servico[]) =>{
      this.servicos = servs; 
    });
    
    console.log(this.servicos);
    setTimeout(()=> {
      M.FormSelect.init(this.serviceSelect.nativeElement);
     },100);
  }

  async loadAgendaList(){
    //this.agendas = this.localStorageAgenda.getData();
    this.apiAgenda.all().then((agds: Agenda[]) =>{
      this.agendas = agds; 
    });    
    console.log(this.agendas);
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

//saveAgenda(){
//  if (!this.localStorageAgenda.isExistAgenda(this.agenda.codigoAgenda)) {
//      this.agenda.id = this.localStorageAgenda.generateAndStoreSequentialValue();
//      this.localStorageAgenda.create(this.agenda);      
//  }  else {
//    this.localStorageAgenda.update(this.agenda);
//  } 
//  M.toast({html: `Agendamento Salvo com sucesso!`,displayLength: 1500, classes:'green'});
//  this.form.reset();
//}

saveAgenda() {
  if (!this.agenda.id) {
    // Novo, usar o método save
    this.apiAgenda.save(this.agenda)
      .then(savedAgenda => {
        M.toast({ html: `Registro Salvo com sucesso!`, displayLength: 1500, classes: 'green' });
        this.form.reset();
      })
      .catch(error => {
        console.error('Erro ao salvar o registro:', error);
      });
  } else {
    //  existente, usar o método update
    this.apiAgenda.update(this.agenda)
      .then(updatedAgenda => {
        M.toast({ html: `Registro Atualizado com sucesso!`, displayLength: 1500, classes: 'green' });
        this.form.reset();
      })
      .catch(error => {
        console.error('Erro ao atualizar o registro:', error);
        console.log(this.agenda);
      });
  }
}


}
