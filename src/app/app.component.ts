import { Component } from '@angular/core';
import { LocalStorageServicoService } from'./services/local-storage-servico.service';
import { LocalStorageClienteService } from'./services/local-storage-cliente.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'care-petz';
  titleRoute: string = '';
  year: number = new Date().getFullYear();
  
  constructor(private localStorageServicoService : LocalStorageServicoService,
              private localStorageClienteService : LocalStorageClienteService ) {
   
    if(this.localStorageServicoService.hasRecords()){
    console.log(this.localStorageServicoService.getData());
   } else {
    console.log('Sem dados para Mostrar, criando Serviços Padrão.');
    localStorageServicoService.startServiceDefault();
   }

   if(this.localStorageClienteService.hasRecords()){
    console.log(this.localStorageClienteService.getData());
   } else {
    console.log('Sem dados para Mostrar, criando Clientes Padrão.');
    localStorageClienteService.startClientDefault();
   }
  }
  

  ngOnInit():void{
    console.log('starting Care-Petz... 🐾🐾🐾😻');
  }

  onActivate(event : any){
    this.titleRoute = event.title; 
  }

}
