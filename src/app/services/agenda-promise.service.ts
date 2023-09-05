import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, lastValueFrom, throwError } from 'rxjs';
import { Agenda } from '../models/agenda';
import { ErrorUtils } from '../util/error-utils';

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

  allObs(): Observable<Agenda[]>{
    return this.httpClient.get<Agenda[]>(`${this.url}`).pipe(
      catchError(ErrorUtils.handleError)
    );
  }

  getByID(id: string): Promise<Agenda> {
    return lastValueFrom(this.httpClient.get<Agenda>(`${this.url}/${id}`));
  }

  getByIDObs(id: string): Observable<Agenda> {
    return this.httpClient.get<Agenda>(`${this.url}/${id}`).pipe(
      catchError(ErrorUtils.handleError)
    );
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

  saveObs(agenda: Agenda): Observable<Agenda> {
    return this.httpClient
      .post<Agenda>(this.url, 
        JSON.stringify(agenda), 
        this.httpOptions)
      .pipe(
        catchError(ErrorUtils.handleError)
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

  updateObs(agenda: Agenda): Observable<Agenda> {
    return this.httpClient
      .put<Agenda>(`${this.url}/${agenda.id}`, 
        JSON.stringify(agenda), 
        this.httpOptions)
      .pipe(
        catchError(ErrorUtils.handleError)
      );
  }

  delete(agenda: Agenda) {
    return lastValueFrom(this.httpClient.delete(`${this.url}/${agenda.id}`));
  }

  deleteObs(agenda: Agenda): Observable<any> {
    return this.httpClient.delete(
      `${this.url}/${agenda.id}`)
      .pipe(
        catchError(ErrorUtils.handleError)
    );
  }

}
