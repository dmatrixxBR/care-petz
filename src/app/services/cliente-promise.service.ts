import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientePromiseService {

  url = 'http://localhost:3000/clientes';

  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};




  constructor(private httpClient: HttpClient) {

   }

   all(): Promise<Cliente[]> {
    return firstValueFrom(this.httpClient.get<Cliente[]>(`${this.url}`));
  }

  getByID(id: string): Promise<Cliente> {
    return firstValueFrom(this.httpClient.get<Cliente>(`${this.url}/${id}`));
  }

  save(cliente: Cliente): Promise<Cliente> {
    return firstValueFrom(
      this.httpClient.post<Cliente>(
        this.url,
        JSON.stringify(cliente),
        this.httpOptions
      )
    );
  }

  update(cliente: Cliente): Promise<Cliente> {
    return firstValueFrom(
      this.httpClient.put<Cliente>(
        `${this.url}/${cliente.id}`,
        JSON.stringify(cliente),
        this.httpOptions
      )
    );
  }

  delete(cliente: Cliente) {
    return firstValueFrom(this.httpClient.delete(`${this.url}/${cliente.id}`));
  }

}
