import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movimiento } from '../domain/movimiento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {
  private apiUrl = 'http://localhost:1001/api/v1/movimientos';

  constructor(private http: HttpClient) {}

  getAllMovimientos(): Observable<Movimiento[]> {
    return this.http.get<Movimiento[]>(this.apiUrl);
  }

  getMovimientosPorActivo(codigoActivo: number): Observable<Movimiento[]> {
    return this.http.get<Movimiento[]>(`${this.apiUrl}/activo/${codigoActivo}`);
  }

  crearMovimiento(movimiento: Movimiento): Observable<Movimiento> {
    return this.http.post<Movimiento>(this.apiUrl, movimiento);
  }
}
