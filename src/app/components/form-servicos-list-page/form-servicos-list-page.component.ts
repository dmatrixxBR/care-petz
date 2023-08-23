import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from 'src/app/models/servico';
import { LocalStorageServicoService } from 'src/app/services/local-storage-servico.service';

@Component({
  selector: 'app-form-servicos-list-page',
  templateUrl: './form-servicos-list-page.component.html',
  styleUrls: ['./form-servicos-list-page.component.css']
})
export class FormServicosListPageComponent implements OnInit {
  servicos: Servico[];
  title ='Lista Serviços';
  @Output() activate = new EventEmitter<any>();
  
  constructor(private router: Router,
              private localStorageServicosService: LocalStorageServicoService){
    this.servicos = this.localStorageServicosService.getData();            
    this.activate.emit(this.title);
  }
  ngOnInit(): void {}

  onButtonMenuClick(event: Event) {
    /*M.toast({html: `Bem vindo ao Cadastro de Serviços`,displayLength: 1500, classes:'green'});*/
    this.router.navigate(['/petz']);
  }

  onButtonServiceClick(event: Event) {
    this.router.navigate(['/petz/servicos']);
  }

  onClickItem(servico:Servico){
    this.router.navigate(['/petz/servicos',servico.codigoServico]);    
  }

  onClickItemDelete(servico:Servico){
    let confirmation = window.confirm('Excluir Registro?' + servico.codigoServico);
    if (!confirmation) {
      return
    }
    let response : boolean = this.localStorageServicosService.delete(servico);
    if (response) {
      M.toast({html: `Registro Excluido!`,displayLength: 1500, classes:'green'});
      this.servicos = this.localStorageServicosService.getData();
    }

    
  }

}
