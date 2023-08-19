import { Component, OnInit,Output,ViewChild,EventEmitter,AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Servico } from 'src/app/models/servico';
import { Router } from '@angular/router';


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
  
  constructor(private router: Router){
    this.activate.emit(this.title);
  }

    ngOnInit():void{
      this.setEmptyServico();
      this.title = 'Serviços';
    }

    setEmptyServico() {
      this.servico = new Servico();
    }
    
    onSubmit():void{}

    onMenuClick(event:Event) {
      this.router.navigate(['/petz/servicos/lista']);
    }

}
