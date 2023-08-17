import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.css']
})
export class ButtonMenuComponent implements OnInit {

@Input() buttonLabel:string;

constructor(){
  this.buttonLabel = '';
}

ngOnInit(): void {}

setButtonLabel(label:string) {
  this.buttonLabel = label;
}

}

