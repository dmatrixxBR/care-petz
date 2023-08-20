import { Component, OnInit,Output,ViewChild,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageAgendaService } from 'src/app/services/local-storage-agenda.service';
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

  constructor(private router: Router,
              private route: ActivatedRoute,
              private localStorageAgenda : LocalStorageAgendaService){
    this.activate.emit(this.title);
  }

  ngOnInit():void{
    M.AutoInit();
    this.setEmptyAgenda();
    let idParam: string = this.route.snapshot.paramMap.get('id')!;
      if(idParam){
        alert('tem parametro agenda - '+  idParam);
        this.agenda = this.localStorageAgenda.getById(idParam);
      }
    
  }

  setEmptyAgenda() {
    this.agenda = new Agenda();
  }
  
  onSubmit():void{}

  onMenuClick(event:Event) {
    this.router.navigate(['/petz/agenda/lista']);
  }

}
