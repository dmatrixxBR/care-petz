import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
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
    return lastValueFrom(this.httpClient.get<Agenda[]>(`${this.url}`));
  }

  getByID(id: string): Promise<Agenda> {
    return lastValueFrom(this.httpClient.get<Agenda>(`${this.url}/${id}`));
  }

  save(agenda: Agenda): Promise<Agenda> {
    return lastValueFrom(
      this.httpClient.post<Agenda>(
        this.url,
        JSON.stringify(agenda),
        this.httpOptions
      )
    );
  }

  update(agenda: Agenda): Promise<Agenda> {
    return lastValueFrom(
      this.httpClient.put<Agenda>(
        `${this.url}/${agenda.id}`,
        JSON.stringify(agenda),
        this.httpOptions
      )
    );
  }

  delete(agenda: Agenda) {
    return lastValueFrom(this.httpClient.delete(`${this.url}/${agenda.id}`));
  }

}
