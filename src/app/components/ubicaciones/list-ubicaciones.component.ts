import { Component, OnInit } from '@angular/core';
import { UbicacionService } from 'src/app/services/ubicacion.service';
import { Ubicacion } from 'src/app/domain/ubicacion.model';

@Component({
  selector: 'app-list-ubicaciones',
  templateUrl: './list-ubicaciones.component.html',
  styleUrls: ['./list-ubicaciones.component.css']
})
export class ListUbicacionesComponent implements OnInit {

  ubicaciones: Ubicacion[] = [];

  constructor(private ubicacionService: UbicacionService) { }

  ngOnInit(): void {
    this.loadUbicaciones();
  }

  loadUbicaciones(): void {
    this.ubicacionService.getAllUbicaciones().subscribe(
      (data: Ubicacion[]) => {
        this.ubicaciones = data;
      },
      error => {
        console.error('Error fetching ubicaciones', error);
      }
    );
  }
}
