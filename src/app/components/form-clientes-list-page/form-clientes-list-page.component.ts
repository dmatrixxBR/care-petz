import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { LocalStorageClienteService } from 'src/app/services/local-storage-cliente.service';
import { ClientePromiseService } from 'src/app/services/cliente-promise.service';

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
              private localStorageCliente:LocalStorageClienteService,
              private apiCliente : ClientePromiseService){
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
    this.router.navigate(['/petz/clientes',cliente.id]);    
  }

  async onClickItemDelete(cliente:Cliente) {
    const confirmation = window.confirm('Excluir Registro?' + cliente.codigoCliente);
    if (!confirmation) {
      return;
    }
  
    try {
      await this.apiCliente.delete(cliente);
      M.toast({html: `Registro Excluido!`, displayLength: 1500, classes: 'green'});
      this.getData();
      return true;
    } catch (error) {
      console.error('Erro ao excluir o registro:', error);
      return false;
    }
  }

  getData(){
   // this.clientes = this.localStorageCliente.getData();
   // this.clientesCounter = this.clientes.length;
   this.apiCliente.all().then((clis: Cliente[]) =>{
    this.clientes = clis;
    this.clientesCounter = clis.length;
  });
  }


}
