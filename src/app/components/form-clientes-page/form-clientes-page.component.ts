import { Component, OnInit,Output,ViewChild,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from './../../models/cliente';
import { ClientePromiseService } from 'src/app/services/cliente-promise.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-form-clientes-page',
  templateUrl: './form-clientes-page.component.html',
  styleUrls: ['./form-clientes-page.component.css']
})
export class FormClientesPageComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  cliente!:Cliente;
  title ='Clientes';
  @Output() activate = new EventEmitter<string>();
  
  constructor(private router: Router,
              private route :ActivatedRoute,              
              private apiCliente : ClientePromiseService ){
    this.activate.emit(this.title);    
  }

    ngOnInit():void {
      M.AutoInit();
      this.setEmptyCliente();
      let idParam: string = this.route.snapshot.paramMap.get('id')!;
      if(idParam){
        M.toast({html: `Parametro Passado no Cliente ` + idParam,displayLength: 1500, classes:'green'});
        //this.cliente = this.localStorageClienteService.getById(idParam);
        this.apiCliente.getByID(idParam)
        .then((cli:Cliente) => {
         this.cliente = cli;
        });
      }
    }

    setEmptyCliente() {
      this.cliente = new Cliente();
    }
    
    onSubmit():void{
      this.saveCliente();
      this.router.navigate(['/petz/clientes/lista']);
    }

    onMenuClick(event:Event) {
      this.router.navigate(['/petz/clientes/lista']);
    }

   // saveCliente(){
   //   if (!this.localStorageClienteService.isExistCliente(this.cliente.codigoCliente)) {
   //       this.cliente.id = this.localStorageClienteService.generateAndStoreSequentialValue();
   //       this.localStorageClienteService.create(this.cliente);      
   //   }  else {
   //     this.localStorageClienteService.update(this.cliente);
   //   } 
   //   M.toast({html: `Registro Salvo com sucesso!`,displayLength: 1500, classes:'green'});
   //   this.form.reset();
   // }

   saveCliente() {
    if (!this.cliente.id) {
      // Novo serviço, usar o método save
      this.apiCliente.save(this.cliente)
        .then(savedCliente => {
          M.toast({ html: `Registro Salvo com sucesso!`, displayLength: 1500, classes: 'green' });
          this.form.reset();
        })
        .catch(error => {
          console.error('Erro ao salvar o registro:', error);
        });
    } else {
      // Serviço existente, usar o método update
      this.apiCliente.update(this.cliente)
        .then(updatedCliente => {
          M.toast({ html: `Registro Atualizado com sucesso!`, displayLength: 1500, classes: 'green' });
          this.form.reset();
        })
        .catch(error => {
          console.error('Erro ao atualizar o registro:', error);
          console.log(this.cliente);
        });
    }
  }

   
}
