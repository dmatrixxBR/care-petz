import { Component, OnInit,Output,ViewChild,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from './../../models/cliente';
import { ClientePromiseService } from 'src/app/services/cliente-promise.service';
import * as M from 'materialize-css';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-clientes-page',
  templateUrl: './form-clientes-page.component.html',
  styleUrls: ['./form-clientes-page.component.css']
})
export class FormClientesPageComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  cliente!:Cliente;
  title ='Clientes';
  cliente$!: Observable<Cliente>;
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
        this.getCliente(idParam);
      }
    }

    getCliente(id:string){
      this.cliente$ = this.apiCliente.getByIDObs(id);

      this.cliente$.subscribe({
        next:(cli) => {
          this.cliente = cli;
        },
        error: (error) =>{
          M.toast({html: `Erro ocorrido => ` + error ,displayLength: 1500, classes:'red'});
        }
      })
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

   
   saveCliente() {
    if (!this.cliente.id) {
      // Novo serviço, usar o método save
     this.cliente$ = this.apiCliente.saveObs(this.cliente);
     
     this.cliente$.subscribe({
      next:(cli) => {
        M.toast({ html: `Registro Salvo com sucesso!`, displayLength: 1500, classes: 'green' });
      },
      error:(error) => {
        M.toast({html: `Erro ocorrido => ` + error ,displayLength: 1500, classes:'red'});
      }
     });     
     
    } else {
      this.cliente$ = this.apiCliente.updateObs(this.cliente);     
      this.cliente$.subscribe({
        next:(cli) => {
         M.toast({ html: `Registro alterado com sucesso!`, displayLength: 1500, classes: 'green' });
      },
        error:(error) => {
          M.toast({html: `Erro ocorrido => ` + error ,displayLength: 1500, classes:'red'});
      }
     });
    }
    this.form.reset();

   
 }

   
}
