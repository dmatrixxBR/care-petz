import { Component, OnInit,Output,ViewChild,EventEmitter,AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Servico } from 'src/app/models/servico';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageServicoService } from 'src/app/services/local-storage-servico.service';
import { ServicoPromiseService } from 'src/app/services/servico-promise.service';

@Component({
  selector: 'app-form-servicos-page',
  templateUrl: './form-servicos-page.component.html',
  styleUrls: ['./form-servicos-page.component.css']
})
export class FormServicosPageComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  servico!:Servico;
  title ='Serviços';
  @Output() activate = new EventEmitter<any>();
  
  constructor(private router: Router,
              private route : ActivatedRoute,
              private localStorageServico: LocalStorageServicoService,
              private apiServico : ServicoPromiseService ){
    this.activate.emit(this.title);
  }

    ngOnInit():void{

      this.setEmptyServico();
      this.title = 'Serviços';
      let idParam: string = this.route.snapshot.paramMap.get('id')!;
      if(idParam){
        M.toast({html: `Parametro Passado no Serviço ` + idParam,displayLength: 1500, classes:'green'});
       this.apiServico.getByID(idParam)
       .then((serv:Servico) => {
        this.servico = serv;
       });    //this.localStorageServico.getById(idParam);
      }
    }

    setEmptyServico() {
      this.servico = new Servico();
    }
    
    onSubmit():void{
      this.saveServico();
      this.router.navigate(['/petz/servicos/lista']);
    }

    onMenuClick(event:Event) {
      this.router.navigate(['/petz/servicos/lista']);
    }

  //  saveServico(){
  //    if (!this.localStorageServico.isExistServico(this.servico.codigoServico)) {
  //        this.servico.id = this.localStorageServico.generateAndStoreSequentialValue();
  //        this.localStorageServico.create(this.servico);      
  //    }  else {
  //      this.localStorageServico.update(this.servico);
  //    } 
  //    M.toast({html: `Registro Salvo com sucesso!`,displayLength: 1500, classes:'green'});
  //    this.form.reset();
  //  }

  saveServico() {
    if (!this.servico.id) {
      // Novo serviço, usar o método save
      this.apiServico.save(this.servico)
        .then(savedServico => {
          M.toast({ html: `Registro Salvo com sucesso!`, displayLength: 1500, classes: 'green' });
          this.form.reset();
        })
        .catch(error => {
          console.error('Erro ao salvar o registro:', error);
        });
    } else {
      // Serviço existente, usar o método update
      this.apiServico.update(this.servico)
        .then(updatedServico => {
          M.toast({ html: `Registro Atualizado com sucesso!`, displayLength: 1500, classes: 'green' });
          this.form.reset();
        })
        .catch(error => {
          console.error('Erro ao atualizar o registro:', error);
          console.log(this.servico);
        });
    }
  }
  

}
