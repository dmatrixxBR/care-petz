import { Component, OnInit,Output,ViewChild,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Agenda } from 'src/app/models/agenda';
import * as M from 'materialize-css';

@Component({
  selector: 'app-form-agenda-page',
  templateUrl: './form-agenda-page.component.html',
  styleUrls: ['./form-agenda-page.component.css']
})
export class FormAgendaPageComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  agenda!:Agenda;

  title ='Agenda';
  @Output() activate = new EventEmitter<any>();
  constructor(private router: Router){
    this.activate.emit(this.title);
  }

  ngOnInit():void{
    this.setEmptyAgenda();
    M.AutoInit();
  }

  setEmptyAgenda() {
    this.agenda = new Agenda();
  }
  
  onSubmit():void{}

  onMenuClick(event:Event) {
    this.router.navigate(['/petz/agenda/lista']);
  }

}
