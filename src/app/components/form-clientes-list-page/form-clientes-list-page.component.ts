import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { ClientePromiseService } from 'src/app/services/cliente-promise.service';
import { Constants } from 'src/app/util/constants';

@Component({
  selector: 'app-form-clientes-list-page',
  templateUrl: './form-clientes-list-page.component.html',
  styleUrls: ['./form-clientes-list-page.component.css']
})
export class FormClientesListPageComponent implements OnInit {

  clientes!: Cliente[];
  clientesCounter:number = 0;
  title : string = 'Lista Clientes';
  cliente$ ! : Observable<Cliente>;
  @Output() activate = new EventEmitter<string>();

  constructor(private route: ActivatedRoute,
              private router: Router,              
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
  
    this.cliente$ = this.apiCliente.deleteObs(cliente);

    this.cliente$.subscribe({
      next: (cli) =>{
        M.toast({html: `Registro Excluido com sucesso ` ,displayLength: Constants.TIME_INTERVAL_MESSAGE, classes:'green'});
        this.getData();
      },
      error:(error) => {
        M.toast({html: `Erro ocorrido => ` + error.message ,displayLength: Constants.TIME_INTERVAL_MESSAGE, classes:'red'});
      } 
    }); 
  }
  
  getData(){
    this.apiCliente.allObs().subscribe({
      next:(clis) => {
        this.clientes = clis;
        this.clientesCounter = clis.length;
      },
      error:(error) =>{
        M.toast({html: `Erro ocorrido => ` + error.message ,displayLength: Constants.TIME_INTERVAL_MESSAGE, classes:'red'});
      }

  });  
  }


}
