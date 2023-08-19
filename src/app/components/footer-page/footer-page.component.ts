import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.css'],
})
export class FooterPageComponent implements OnInit {
  @Input() year: number = 1972;
  constructor(){}

  ngOnInit(): void {}      

}
