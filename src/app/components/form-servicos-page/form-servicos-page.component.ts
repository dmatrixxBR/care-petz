import { Component, OnInit,Output,ViewChild,EventEmitter,AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Servico } from 'src/app/models/servico';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageServicoService } from 'src/app/services/local-storage-servico.service';

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
              private localStorageServico: LocalStorageServicoService ){
    this.activate.emit(this.title);
  }

    ngOnInit():void{

      this.setEmptyServico();
      this.title = 'Serviços';
      let idParam: string = this.route.snapshot.paramMap.get('id')!;
      if(idParam){
        alert('tem parametro - '+  idParam);
        this.servico = this.localStorageServico.getById(idParam);
      }
    }

    setEmptyServico() {
      this.servico = new Servico();
    }
    
    onSubmit():void{}

    onMenuClick(event:Event) {
      this.router.navigate(['/petz/servicos/lista']);
    }

}
