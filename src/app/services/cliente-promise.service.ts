import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, lastValueFrom, Observable, throwError } from 'rxjs';
import { Cliente } from '../models/cliente';
import { ErrorUtils } from '../util/error-utils';
import { Constants } from '../util/constants';

@Injectable({
  providedIn: 'root'
})
export class ClientePromiseService {

  url = Constants.CLIENTE_SERVICE_URL;

  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};




  constructor(private httpClient: HttpClient) {

   }

   all(): Promise<Cliente[]> {
    return lastValueFrom(this.httpClient.get<Cliente[]>(`${this.url}`));
  }

  allObs(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.url}`).pipe(
      catchError(ErrorUtils.handleError)
    );
  }

  getByID(id: string): Promise<Cliente> {
    return lastValueFrom(this.httpClient.get<Cliente>(`${this.url}/${id}`));
  }


  getByIDObs(id: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.url}/${id}`).pipe(
      catchError(ErrorUtils.handleError)
    );
  }

  save(cliente: Cliente): Promise<Cliente> {
    return lastValueFrom(
      this.httpClient.post<Cliente>(
        this.url,
        JSON.stringify(cliente),
        this.httpOptions
      )
    );
  }

  saveObs(cliente: Cliente): Observable<Cliente> {
    return this.httpClient
      .post<Cliente>(this.url, 
        JSON.stringify(cliente), 
        this.httpOptions)
      .pipe(
        catchError(ErrorUtils.handleError)
      );
  }

  update(cliente: Cliente): Promise<Cliente> {
    return lastValueFrom(
      this.httpClient.put<Cliente>(
        `${this.url}/${cliente.id}`,
        JSON.stringify(cliente),
        this.httpOptions
      )
    );
  }

  updateObs(cliente: Cliente): Observable<Cliente> {
    return this.httpClient
      .put<Cliente>(`${this.url}/${cliente.id}`, 
        JSON.stringify(cliente), 
        this.httpOptions)
      .pipe(
        catchError(ErrorUtils.handleError)
      );
  }

  delete(cliente: Cliente) {
    return lastValueFrom(this.httpClient.delete(`${this.url}/${cliente.id}`));
  }

  deleteObs(cliente: Cliente): Observable<any> {
    return this.httpClient.delete(
      `${this.url}/${cliente.id}`)
      .pipe(
        catchError(ErrorUtils.handleError)
    );
  }

}
