import { ErrorUtils } from './../util/error-utils';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable,catchError,throwError } from 'rxjs';
import { Servico } from '../models/servico';
import { Constants } from '../util/constants';

@Injectable({
  providedIn: 'root'
})

export class ServicoPromiseService {

  url = Constants.SERVICO_SERVICE_URL;

  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};




  constructor(private httpClient: HttpClient) {

   }

   all(): Promise<Servico[]> {
    return lastValueFrom(this.httpClient.get<Servico[]>(`${this.url}`));
  }

  allObs(): Observable<Servico[]>{
    return this.httpClient.get<Servico[]>(`${this.url}`).pipe(
      catchError(ErrorUtils.handleError)
    );
  }

  getByID(id: string): Promise<Servico> {
    return lastValueFrom(this.httpClient.get<Servico>(`${this.url}/${id}`));
  }

  getByIDObs(id: string): Observable<Servico> {
    return this.httpClient.get<Servico>(`${this.url}/${id}`).pipe(
      catchError(ErrorUtils.handleError)
    );
  }


  save(servico: Servico): Promise<Servico> {
    return lastValueFrom(
      this.httpClient.post<Servico>(
        this.url,
        JSON.stringify(servico),
        this.httpOptions
      )
    );
  }

  saveObs(servico: Servico): Observable<Servico> {
    return this.httpClient
      .post<Servico>(this.url, 
        JSON.stringify(servico), 
        this.httpOptions)
      .pipe(
        catchError(ErrorUtils.handleError)
      );
  }



  update(servico: Servico): Promise<Servico> {
    return lastValueFrom(
      this.httpClient.put<Servico>(
        `${this.url}/${servico.id}`,
        JSON.stringify(servico),
        this.httpOptions
      )
    );
  }

  updateObs(servico: Servico): Observable<Servico> {
    return this.httpClient
      .put<Servico>(`${this.url}/${servico.id}`, 
        JSON.stringify(servico), 
        this.httpOptions)
      .pipe(
        catchError(ErrorUtils.handleError)
      );
  }


  delete(servico: Servico) {
    return lastValueFrom(this.httpClient.delete(`${this.url}/${servico.id}`));
  }

  deleteObs(servico: Servico): Observable<any> {
    return this.httpClient.delete(
      `${this.url}/${servico.id}`)
      .pipe(
        catchError(ErrorUtils.handleError)
    );
  }


}
