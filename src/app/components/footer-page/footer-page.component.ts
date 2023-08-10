import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.css'],
})
export class FooterPageComponent implements OnInit {
  year: number;
  constructor(){
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {}      
  
}
