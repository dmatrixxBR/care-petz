import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { LocalStorageClienteService } from 'src/app/services/local-storage-cliente.service';

@Component({
  selector: 'app-form-clientes-list-page',
  templateUrl: './form-clientes-list-page.component.html',
  styleUrls: ['./form-clientes-list-page.component.css']
})
export class FormClientesListPageComponent implements OnInit {

  clientes!: Cliente[];
  clientesCounter:number = 0;
  title : string = 'Lista Clientes';
  @Output() activate = new EventEmitter<string>();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private localStorageCliente:LocalStorageClienteService){
    this.activate.emit(this.title);
    this.getData();
  }

  ngOnInit(): void {}

  onButtonMenuClick(event: Event) {
    /*M.toast({html: `Bem vindo ao Cadastro de Serviços`,displayLength: 1500, classes:'green'});*/
    this.router.navigate(['/petz']);
  }

  onButtonClientClick(event: Event) {
    this.router.navigate(['/petz/clientes']);
  }

  onClickItem(cliente:Cliente){
    this.router.navigate(['/petz/clientes',cliente.codigoCliente]);    
  }

  onClickItemDelete(cliente:Cliente){
    let confirmation = window.confirm('Excluir Registro?' + cliente.codigoCliente);
    if (!confirmation) {
      return
    }
    let response : boolean = this.localStorageCliente.delete(cliente);
    if (response) {
      M.toast({html: `Registro Excluido!`,displayLength: 1500, classes:'green'});
      this.getData();
    }    
  }

  getData(){
    this.clientes = this.localStorageCliente.getData();
    this.clientesCounter = this.clientes.length;
  }


}
