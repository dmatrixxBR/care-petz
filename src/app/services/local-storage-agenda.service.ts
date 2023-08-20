import { Agenda } from './../models/agenda';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageAgendaService {

  private storageKey = 'agendas';

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

  update(index: number, newItem: Agenda): void {
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
    const data = localStorage.getItem('agendas');
    if(data && (JSON.parse(data).length > 0)) 
    return true
    else return false;
      
  }

}
