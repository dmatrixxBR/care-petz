import { Component, OnInit,Output,ViewChild,EventEmitter } from '@angular/core';
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
    let idParam: string = this.route.snapshot.paramMap.get('id')!;
      if(idParam){
        alert('tem parametro agenda - '+  idParam);
        this.agenda = this.localStorageAgenda.getById(idParam);
        
      }
      M.AutoInit(); 
      M.FormSelect.init(document.querySelectorAll('select'));
      
  }

  setEmptyAgenda() {
    this.agenda = new Agenda();
  }
  
  onSubmit():void{}

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

  compareWith(object1: any, object2: any): boolean {
    return object1?.id === object2?.id;
}

}
