import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from 'src/app/models/servico';
import { ServicoPromiseService } from 'src/app/services/servico-promise.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-servicos-list-page',
  templateUrl: './form-servicos-list-page.component.html',
  styleUrls: ['./form-servicos-list-page.component.css']
})
export class FormServicosListPageComponent implements OnInit {
  servicos!: Servico[];
  servicosCounter:number=0;
  title ='Lista Serviços';
  servico$! : Observable<Servico>;
  @Output() activate = new EventEmitter<any>();
  
  constructor(private router: Router,              
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
    
    this.servico$ = this.apiServico.deleteObs(servico);

    this.servico$.subscribe({
      next: (serv) =>{
        M.toast({html: `Registro Excluido com sucesso ` ,displayLength: 1500, classes:'green'});
        this.getData();
      },
      error:(error) => {
        alert (error);
      } 
    });   
  }
  

  getData() {
    this.apiServico.allObs().subscribe({
      next:(servs) => {
        this.servicos = servs;
        this.servicosCounter = servs.length;
      },
      error:(error) =>{
        alert (error);
      }

  });  

  }

}
