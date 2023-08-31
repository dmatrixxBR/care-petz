import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Agenda } from '../models/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaPromiseService {

 
  url = 'http://localhost:3000/agendas';

  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};




  constructor(private httpClient: HttpClient) {

   }

   all(): Promise<Agenda[]> {
    return firstValueFrom(this.httpClient.get<Agenda[]>(`${this.url}`));
  }

  getByID(id: string): Promise<Agenda> {
    return firstValueFrom(this.httpClient.get<Agenda>(`${this.url}/${id}`));
  }

  save(agenda: Agenda): Promise<Agenda> {
    return firstValueFrom(
      this.httpClient.post<Agenda>(
        this.url,
        JSON.stringify(agenda),
        this.httpOptions
      )
    );
  }

  update(agenda: Agenda): Promise<Agenda> {
    return firstValueFrom(
      this.httpClient.put<Agenda>(
        this.url,
        JSON.stringify(agenda),
        this.httpOptions
      )
    );
  }

  delete(agenda: Agenda) {
    return firstValueFrom(this.httpClient.delete(`${this.url}/${agenda.id}`));
  }

}
