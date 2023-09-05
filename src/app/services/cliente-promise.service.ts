import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, lastValueFrom, Observable, throwError } from 'rxjs';
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
    return lastValueFrom(this.httpClient.get<Cliente[]>(`${this.url}`));
  }

  allObs(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.url}`).pipe(
      catchError((error: any) =>{
        return throwError(error);
      })
    )
  }

  getByID(id: string): Promise<Cliente> {
    return lastValueFrom(this.httpClient.get<Cliente>(`${this.url}/${id}`));
  }


  getByIDObs(id: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.url}/${id}`).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
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
        catchError((error: any) => {
          return throwError(error);
        })
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
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }

  delete(cliente: Cliente) {
    return lastValueFrom(this.httpClient.delete(`${this.url}/${cliente.id}`));
  }

  deleteObs(cliente: Cliente): Observable<any> {
    return this.httpClient.delete(
      `${this.url}/${cliente.id}`)
      .pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

}
