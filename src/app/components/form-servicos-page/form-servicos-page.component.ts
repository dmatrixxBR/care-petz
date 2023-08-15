import { Component, OnInit,Output,ViewChild,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Servico } from 'src/app/models/servico';
import * as M from 'materialize-css';


@Component({
  selector: 'app-form-servicos-page',
  templateUrl: './form-servicos-page.component.html',
  styleUrls: ['./form-servicos-page.component.css']
})
export class FormServicosPageComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  servico!:Servico;
  @Output() messageEvent = new EventEmitter<number>();
  constructor(){}

    ngOnInit():void{
      this.setEmptyServico();
    }

    setEmptyServico() {
      this.servico = new Servico();
    }
    
    onSubmit():void{}

}
