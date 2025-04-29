import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubicacion } from '../domain/ubicacion.model';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  private apiUrl = 'https://zany-succotash-q76r4p5gq6c4rqv-8080.app.github.dev/api/v1/ubicaciones';

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
