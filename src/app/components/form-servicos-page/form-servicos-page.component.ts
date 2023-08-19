import { Component, OnInit,Output,ViewChild,EventEmitter,AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Servico } from 'src/app/models/servico';
import { Router } from '@angular/router';
import * as M from 'materialize-css';
import { HeaderPageComponent } from '../header-page/header-page.component';


@Component({
  selector: 'app-form-servicos-page',
  templateUrl: './form-servicos-page.component.html',
  styleUrls: ['./form-servicos-page.component.css']
})
export class FormServicosPageComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  servico!:Servico;
  title!:string;
  @Output() titleEvent = new EventEmitter<string>();
  
  constructor(private router: Router){}

    ngOnInit():void{
      this.setEmptyServico();
      this.title = 'Serviços';
      this.titleEvent.emit('Serviços');
    }


    setEmptyServico() {
      this.servico = new Servico();
    }
    
    onSubmit():void{}

    onMenuClick(event:Event) {
      this.router.navigate(['/petz/servicos/lista']);
    }

}
