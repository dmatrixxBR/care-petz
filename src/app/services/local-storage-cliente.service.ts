import { Cliente } from './../models/cliente';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Constants } from '../util/constants';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageClienteService {

  private storageKey = Constants.CLIENTE_STORAGE_KEY;
  private storageKeyID = Constants.CLIENTE_STORAGE_KEY_ID;

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
    const clientes = [];
       const cliente01 : Cliente = new Cliente();
        cliente01.id = this.generateAndStoreSequentialValue(); 
        cliente01.codigoCliente =  uuid();
        cliente01.nomeCliente = 'John Foo';
        cliente01.celularCliente = '13996786109';
        cliente01.emailCliente = 'johnfoo@foo.com.br';
        const cliente02 : Cliente = new Cliente();
        cliente02.id = this.generateAndStoreSequentialValue();
        cliente02.codigoCliente = uuid();
        cliente02.nomeCliente = 'Mary Jane';
        cliente02.celularCliente = '11995679900';
        cliente02.emailCliente = 'jane@gmail.com';
        const cliente03 : Cliente = new Cliente();
        cliente03.id = this.generateAndStoreSequentialValue();
        cliente03.codigoCliente =  uuid();
        cliente03.nomeCliente = 'Nencil Blanco';
        cliente03.celularCliente ='21997896789';
        cliente03.emailCliente = 'nencil.blanco@gmail.com';  

        clientes.push(cliente01);
        clientes.push(cliente02);
        clientes.push(cliente03);
      
        this.setData(clientes);
    
  }

  isExistCliente(id: string): boolean {
    const data = this.getData();
    const existingCliente = data.find(cliente => cliente.codigoCliente === id);
    return !!existingCliente;
  }

  generateAndStoreSequentialValue() : number {
    
    const currentValue = localStorage.getItem(this.storageKeyID) ||'0';
    const newValue = parseInt(currentValue) + 1;
    localStorage.setItem(this.storageKeyID, newValue.toString());  
    return newValue;
  }

  
}
