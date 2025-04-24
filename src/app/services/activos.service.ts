import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activos } from '../domain/activos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivosService {

  urlActivos:string=`http://localhost:1001/api/v1/activos/findAll`

  constructor(public httpClient:HttpClient) { }

  getActivos(): Observable<Activos[]> {
    return this.httpClient.get<Activos[]>(this.urlActivos).pipe();
  }

  crearActivo(activo: Activos): Observable<Activos> {
    return this.httpClient.post<Activos>(`${this.urlActivos}/crear`, activo);
  }

  actualizarActivo(activo: Activos): Observable<Activos> {
    return this.httpClient.put<Activos>(`${this.urlActivos}/actualizar/${activo.codigo}`, activo);
  }

  eliminarActivo(codigo: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.urlActivos}/eliminar/${codigo}`);
  }

}
