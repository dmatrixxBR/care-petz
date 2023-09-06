import { Servico } from './../models/servico';
import { Injectable } from '@angular/core';
import { Constants } from '../util/constants';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServicoService {

  private storageKey = Constants.SERVICO_STORAGE_KEY;
  private storageKeyID = Constants.SERVICO_STORAGE_KEY_ID;

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

  update(newItem: Servico): void {
    const data = this.getData();
    const existingIndex = data.findIndex(servico => servico.codigoServico === newItem.codigoServico);
    
    if (existingIndex !== -1) {
      data[existingIndex] = newItem;
      this.setData(data);
    } else {
      console.error('Serviço not found for update:', newItem.codigoServico);
    }
  }

  delete(item:Servico): boolean {
    const data = this.getData();
    const existingIndex = data.findIndex( servico => servico.codigoServico === item.codigoServico);
    if (existingIndex !== -1){
      data.splice(existingIndex, 1);
      this.setData(data);
      return true;
    } else {
      console.error('Serviço not found for delete:', item.codigoServico);
      return false;
    }    
  }

  hasRecords(): boolean {
    const data = localStorage.getItem('servicos');
    if(data && (JSON.parse(data).length > 0)) 
    return true
    else return false;   
  }

  startServiceDefault(){
    const servico01 : Servico = new Servico();
    servico01.id = this.generateAndStoreSequentialValue();
    servico01.descricaoServico = 'PETZ CARE';
    servico01.valorServico = 30.00;
    

    const servico02 : Servico = new Servico();
    servico02.id = this.generateAndStoreSequentialValue();
    servico02.descricaoServico = 'PETZ VETZ';
    servico02.valorServico = 100.00;

    const servico03 : Servico = new Servico();
    servico03.id = this.generateAndStoreSequentialValue();
    servico03.descricaoServico = 'PETZ DELIVERY';
    servico03.valorServico = 20.00;

    const servico04 : Servico = new Servico();
    servico04.id = this.generateAndStoreSequentialValue();
    servico04.descricaoServico = 'PETZ HOTEL';
    servico04.valorServico = 80.00;


    const servicos = [];
    servicos.push(servico01);
    servicos.push(servico02);    
    servicos.push(servico03);    
    servicos.push(servico04);
    
    this.setData(servicos);  


    
  }

  

  isExistServico(id: string): boolean {
    const data = this.getData();
    const existingServico = data.find(servico => servico.codigoServico === id);
    return !!existingServico;
  }

  generateAndStoreSequentialValue() : number {
    
    const currentValue = localStorage.getItem(this.storageKeyID) ||'0';
    const newValue = parseInt(currentValue) + 1;
    localStorage.setItem(this.storageKeyID, newValue.toString());  
    return newValue;
  }

}
