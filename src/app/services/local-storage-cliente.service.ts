import { Cliente } from './../models/cliente';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageClienteService {

  private storageKey = 'clientes';

  constructor() {}

  getData(): Cliente[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? (JSON.parse(data) as Cliente[]) : [];
  }

  setData(data: Cliente[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  create(item: Cliente): void {
    const data = this.getData();
    data.push(item);
    this.setData(data);
  }

  getById(index: string): Cliente {
    const data = this.getData();
    let registroFiltered = data.filter((cliente) => cliente.codigoCliente === index);
    return registroFiltered[0] ?? [];
  }

  update(newItem: Cliente): void {
    const data = this.getData();
    const existingIndex = data.findIndex(cliente => cliente.codigoCliente === newItem.codigoCliente);
    
    if (existingIndex !== -1) {
      data[existingIndex] = newItem;
      this.setData(data);
    } else {
      console.error('Cliente not found for update:', newItem.codigoCliente);
    }
  }


  delete(item:Cliente): boolean {
    const data = this.getData();
    const existingIndex = data.findIndex( cliente => cliente.codigoCliente === item.codigoCliente);
    if (existingIndex !== -1){
      data.splice(existingIndex, 1);
      this.setData(data);
      return true;
    } else {
      console.error('Cliente not found for delete:', item.codigoCliente);
      return false;
    }    
  }

  hasRecords(): boolean {
    const data = localStorage.getItem('clientes');
    if(data && (JSON.parse(data).length > 0)) 
    return true
    else return false;   
  }

  startClientDefault(){
    const clientes : Cliente[] =[
      { codigoCliente: uuid(),
        nomeCliente:'John Foo',
        celularCliente :'13996786109',
        emailCliente:'johnfoo@foo.com.br'},
      { codigoCliente: uuid(),
        nomeCliente:'Mary Jane',
        celularCliente :'11995679900',
        emailCliente:'jane@gmail.com'},
      { codigoCliente: uuid(),
        nomeCliente:'Nencil Blanco',
        celularCliente :'21997896789',
        emailCliente:'nencil.blanco@gmail.com'},    
      
    ];
    this.setData(clientes);
    
  }

  isExistCliente(id: string): boolean {
    const data = this.getData();
    const existingCliente = data.find(cliente => cliente.codigoCliente === id);
    return !!existingCliente;
  }
  
}
