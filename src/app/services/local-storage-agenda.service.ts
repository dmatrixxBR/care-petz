import { Agenda } from './../models/agenda';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageAgendaService {

  private storageKey = 'agendas';
  private storageKeyID = 'agendaid';

  constructor() {}

  getData(): Agenda[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? (JSON.parse(data) as Agenda[]) : [];
  }

  setData(data: Agenda[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  create(item: Agenda): void {
    const data = this.getData();
    data.push(item);
    this.setData(data);
  }

  getById(index: string): Agenda {
    const data = this.getData();
    let registroFiltered = data.filter((agenda) => agenda.codigoAgenda  === index);
    return registroFiltered[0] ?? [];
  }

  update(newItem: Agenda): void {
    const data = this.getData();
    const existingIndex = data.findIndex(agenda => agenda.codigoAgenda === newItem.codigoAgenda);
    
    if (existingIndex !== -1) {
      data[existingIndex] = newItem;
      this.setData(data);
    } else {
      console.error('Agenda not found for update:', newItem.codigoAgenda);
    }
  }

  delete(item:Agenda): boolean {
    const data = this.getData();
    const existingIndex = data.findIndex( agenda => agenda.codigoAgenda  === item.codigoAgenda);
    if (existingIndex !== -1){
      data.splice(existingIndex, 1);
      this.setData(data);
      return true;
    } else {
      console.error('Agenda not found for delete:', item.codigoAgenda);
      return false;
    }    
  }

  hasRecords(): boolean {
    const data = localStorage.getItem('agendas');
    if(data && (JSON.parse(data).length > 0)) 
    return true
    else return false;
      
  }

  isExistAgenda(id: string): boolean {
    const data = this.getData();
    const existingAgenda = data.find(agenda => agenda.codigoAgenda === id);
    return !!existingAgenda;
  }

  generateAndStoreSequentialValue() : number {
    
    const currentValue = localStorage.getItem(this.storageKeyID) ||'0';
    const newValue = parseInt(currentValue) + 1;
    localStorage.setItem(this.storageKeyID, newValue.toString());  
    return newValue;
  }


}

