import { Servico } from './../models/servico';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServicoService {

  private storageKey = 'servicos';

  constructor() {}

  getData(): Servico[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? (JSON.parse(data) as Servico[]) : [];
  }

  getDataAssinc(): Promise<Servico[]> {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      try {
        const parsedData = JSON.parse(data) as Servico[];
        return Promise.resolve(parsedData);
      } catch (error) {
        return Promise.reject(new Error('Erro ao fazer parse dos dados armazenados.'));
      }
    } else {
      return Promise.resolve([]);
    }
  }
  

  setData(data: Servico[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  create(item: Servico): void {
    const data = this.getData();
    data.push(item);
    this.setData(data);
  }

  getById(index: string): Servico {
    const data = this.getData();
    let registroFiltered = data.filter((servico) => servico.codigoServico === index);
    return registroFiltered[0] ?? [];
  }

  update(index: number, newItem: Servico): void {
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
    const data = localStorage.getItem('servicos');
    if(data && (JSON.parse(data).length > 0)) 
    return true
    else return false;   
  }

  startServiceDefault(){
    const servicos : Servico[] =[
      {codigoServico: uuid(),
       descricaoServico:'PETZ CARE',
      valorServico:25.00},
      {codigoServico: uuid(),
        descricaoServico:'PETZ DELIVERY',
       valorServico:40.00},
       {codigoServico: uuid(),
        descricaoServico:'PETZ HOTEL',
       valorServico:50.00},
       {codigoServico: uuid(),
        descricaoServico:'PETZ VETZ',
       valorServico:150.00}
    ];
    this.setData(servicos);
    
  }

}
