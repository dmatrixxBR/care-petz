import { Component, OnInit,Output,ViewChild,EventEmitter,AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageAgendaService } from 'src/app/services/local-storage-agenda.service';
import { LocalStorageClienteService } from 'src/app/services/local-storage-cliente.service';
import { LocalStorageServicoService } from 'src/app/services/local-storage-servico.service';
import { Agenda } from 'src/app/models/agenda';
import { Cliente } from 'src/app/models/cliente';
import { Servico } from 'src/app/models/servico';
import * as M from 'materialize-css';

@Component({
  selector: 'app-form-agenda-page',
  templateUrl: './form-agenda-page.component.html',
  styleUrls: ['./form-agenda-page.component.css']
})
export class FormAgendaPageComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
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
              private localStorageServico: LocalStorageServicoService){
    
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
        this.agenda = this.localStorageAgenda.getById(idParam);
        
      }
      M.AutoInit(); 

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

  loadClientList(){
   this.clientes = this.localStorageCliente.getData();
   console.log(this.clientes);
  }
  
  loadServiceList(){
    this.servicos = this.localStorageServico.getData();
    //.then(data => this.servicos = data);
    console.log(this.servicos);
  }

  loadAgendaList(){
    this.agendas = this.localStorageAgenda.getData();
    //.then(data => this.servicos = data);
    console.log(this.agendas);
  }

  compareWith(object1: any, object2: any): boolean {
    return object1 && object2 ?  object1.id === object2.id : object1 === object2 ;
           
  }
 updateValorServico() {
  const servicoSelecionado = this.agenda.servicoAgenda;

  if (servicoSelecionado) {
    this.agenda.valorServico = servicoSelecionado.valorServico;
  }
}

saveAgenda(){
  if (!this.localStorageAgenda.isExistAgenda(this.agenda.codigoAgenda)) {
      this.localStorageAgenda.create(this.agenda);      
  }  else {
    this.localStorageAgenda.update(this.agenda);
  } 
  M.toast({html: `Agendamento Salvo com sucesso!`,displayLength: 1500, classes:'green'});
  this.form.reset();
}

}
