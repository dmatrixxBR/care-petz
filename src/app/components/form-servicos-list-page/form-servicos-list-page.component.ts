import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from 'src/app/models/servico';
import { LocalStorageServicoService } from 'src/app/services/local-storage-servico.service';
import { ServicoPromiseService } from 'src/app/services/servico-promise.service';

@Component({
  selector: 'app-form-servicos-list-page',
  templateUrl: './form-servicos-list-page.component.html',
  styleUrls: ['./form-servicos-list-page.component.css']
})
export class FormServicosListPageComponent implements OnInit {
  servicos!: Servico[];
  servicosCounter:number=0;
  title ='Lista Serviços';
  @Output() activate = new EventEmitter<any>();
  
  constructor(private router: Router,
              private localStorageServicosService: LocalStorageServicoService,
              private apiServico : ServicoPromiseService){                
    this.activate.emit(this.title);
    this.getData();
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
    this.router.navigate(['/petz/servicos',servico.id]);    
  }

  async onClickItemDelete(servico:Servico) {
    const confirmation = window.confirm('Excluir Registro?' + servico.codigoServico);
    if (!confirmation) {
      return;
    }
  
    try {
      await this.apiServico.delete(servico);
      M.toast({html: `Registro Excluido!`, displayLength: 1500, classes: 'green'});
      this.getData();
      return true;
    } catch (error) {
      console.error('Erro ao excluir o registro:', error);
      return false;
    }
  }
  

  getData(){
    //this.servicos = this.localStorageServicosService.getData();
    //this.servicosCounter = this.servicos.length;
    this.apiServico.all().then((servs: Servico[]) =>{
      this.servicos = servs;
      this.servicosCounter = servs.length;
    })

  }

}
