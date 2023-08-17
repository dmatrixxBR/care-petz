import { Component, OnInit,Output,ViewChild,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from './../../models/cliente';
import * as M from 'materialize-css';

@Component({
  selector: 'app-form-clientes-page',
  templateUrl: './form-clientes-page.component.html',
  styleUrls: ['./form-clientes-page.component.css']
})
export class FormClientesPageComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  cliente!:Cliente;

  @Output() messageEvent = new EventEmitter<number>();
  
  constructor(private router: Router){}

    ngOnInit():void{
      this.setEmptyCliente();
      M.AutoInit();
    }

    setEmptyCliente() {
      this.cliente = new Cliente();
    }
    
    onSubmit():void{}

    onMenuClick(event:Event) {
      this.router.navigate(['/petz/clientes/lista']);
    }

}
