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

  update(index: number, newItem: Cliente): void {
    const data = this.getData();
    data[index] = newItem;
    this.setData(data);
  }

  delete(index: number): void {
    const data = this.getData();
    data.splice(index, 1);
    this.setData(data);
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
