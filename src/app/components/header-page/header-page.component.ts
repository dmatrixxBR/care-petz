import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {
@Input() titlePage: string;
constructor(){
  this.titlePage = '';
}

ngOnInit(): void {}   

onTitleEvent(event: string){
  this.titlePage = event;
}

}




