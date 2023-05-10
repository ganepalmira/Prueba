import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activos } from '../domain/activos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivosService {

  urlActivos:string=`http://127.0.0.1:1001/api/v1/activos/findAll`

  constructor(public httpClient:HttpClient) { }

  getActivos(): Observable<Activos[]> {
    return this.httpClient.get<Activos[]>(this.urlActivos).pipe();
  }

}
