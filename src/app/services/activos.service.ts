import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activos } from '../domain/activos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivosService {

  urlActivos:string=`https://zany-succotash-q76r4p5gq6c4rqv-8080.app.github.dev/api/v1/activos`

  constructor(public httpClient:HttpClient) { }

  getActivos(): Observable<Activos[]> {
    return this.httpClient.get<Activos[]>(`${this.urlActivos}/findAll`);
  }

  crearActivo(activo: Activos): Observable<Activos> {
    return this.httpClient.post<Activos>(`${this.urlActivos}/create`, activo);
  }

  actualizarActivo(activo: Activos): Observable<Activos> {
    return this.httpClient.put<Activos>(`${this.urlActivos}/actualizar/${activo.codigo}`, activo);
  }

  eliminarActivo(codigo: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.urlActivos}/eliminar/${codigo}`);
  }

}
