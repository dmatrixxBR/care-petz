import { Component, OnInit,Output,ViewChild,EventEmitter,AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Servico } from 'src/app/models/servico';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicoPromiseService } from 'src/app/services/servico-promise.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-servicos-page',
  templateUrl: './form-servicos-page.component.html',
  styleUrls: ['./form-servicos-page.component.css']
})
export class FormServicosPageComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  servico!:Servico;
  title ='Serviços';
  
  servico$! : Observable<Servico>;

  @Output() activate = new EventEmitter<any>();
  
  constructor(private router: Router,
              private route : ActivatedRoute,
              private apiServico : ServicoPromiseService ){
    this.activate.emit(this.title);
  }

    ngOnInit():void{

      this.setEmptyServico();
      this.title = 'Serviços';
      let idParam: string = this.route.snapshot.paramMap.get('id')!;
      if(idParam){
        M.toast({html: `Parametro Passado no Serviço ` + idParam,displayLength: 1500, classes:'green'});
       this.getServico(idParam);
      }
    }

    getServico(id:string) {
      this.servico$ = this.apiServico.getByIDObs(id);

      this.servico$.subscribe({
        next:(serv) => {
          this.servico = serv;
        },
        error: (error) =>{
          alert(error);
        }
      })
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
     this.servico$ = this.apiServico.saveObs(this.servico);
     
     this.servico$.subscribe({
      next:(serv) => {
        M.toast({ html: `Registro Salvo com sucesso!`, displayLength: 1500, classes: 'green' });
      },
      error:(error) => {
        alert (error);
      }
     });     
     
    } else {
      this.servico$ = this.apiServico.updateObs(this.servico);
     
     this.servico$.subscribe({
      next:(serv) => {
        M.toast({ html: `Registro alterado com sucesso!`, displayLength: 1500, classes: 'green' });
      },
      error:(error) => {
        alert (error);
      }
     });
    }
    this.form.reset();

  }
  

}
