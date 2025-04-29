import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from '../domain/marca.model';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  private apiUrl = 'https://zany-succotash-q76r4p5gq6c4rqv-8080.app.github.dev/api/v1/marcas';

  constructor(private http: HttpClient) {}

  getMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${this.apiUrl}/findAll`);
  }

  createMarca(marca: Marca): Observable<Marca> {
    return this.http.post<Marca>(`${this.apiUrl}/save`, marca);
  }

  deleteMarca(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
