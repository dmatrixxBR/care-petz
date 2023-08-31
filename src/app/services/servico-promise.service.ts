import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Servico } from '../models/servico';

@Injectable({
  providedIn: 'root'
})

export class ServicoPromiseService {

  url = 'http://localhost:3000/servicos';

  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};




  constructor(private httpClient: HttpClient) {

   }

   all(): Promise<Servico[]> {
    return firstValueFrom(this.httpClient.get<Servico[]>(`${this.url}`));
  }

  getByID(id: string): Promise<Servico> {
    return firstValueFrom(this.httpClient.get<Servico>(`${this.url}/${id}`));
  }

  save(servico: Servico): Promise<Servico> {
    return firstValueFrom(
      this.httpClient.post<Servico>(
        this.url,
        JSON.stringify(servico),
        this.httpOptions
      )
    );
  }

  update(servico: Servico): Promise<Servico> {
    return firstValueFrom(
      this.httpClient.put<Servico>(
        `${this.url}/${servico.id}`,
        JSON.stringify(servico),
        this.httpOptions
      )
    );
  }

  delete(servico: Servico) {
    return firstValueFrom(this.httpClient.delete(`${this.url}/${servico.id}`));
  }

}
