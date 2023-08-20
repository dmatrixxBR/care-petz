import { Component, OnInit,Output,ViewChild,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from './../../models/cliente';
import { LocalStorageClienteService } from 'src/app/services/local-storage-cliente.service';
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
              private localStorageClienteService : LocalStorageClienteService ){
    this.activate.emit(this.title);    
  }

    ngOnInit():void{
      M.AutoInit();
      this.setEmptyCliente();
      let idParam: string = this.route.snapshot.paramMap.get('id')!;
      if(idParam){
        alert('tem parametro - '+  idParam);
        this.cliente = this.localStorageClienteService.getById(idParam);
      }
    }

    setEmptyCliente() {
      this.cliente = new Cliente();
    }
    
    onSubmit():void{}

    onMenuClick(event:Event) {
      this.router.navigate(['/petz/clientes/lista']);
    }

}
