import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubicacion } from '../domain/ubicacion.model';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  private apiUrl = 'http://localhost:1001/api/v1/ubicaciones';

  constructor(private http: HttpClient) {}

  getAllUbicaciones(): Observable<Ubicacion[]> {
    return this.http.get<Ubicacion[]>(`${this.apiUrl}/findAll`);
  }

  saveUbicacion(ubicacion: Ubicacion): Observable<Ubicacion> {
    return this.http.post<Ubicacion>(`${this.apiUrl}/save`, ubicacion);
  }

  deleteUbicacion(codUbicacion: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${codUbicacion}`);
  }
}
