import { Component, OnInit } from '@angular/core';
import { Movimiento } from 'src/app/domain/movimiento.model';
import { MovimientoService } from 'src/app/services/movimiento.service';

@Component({
  selector: 'app-list-movimientos',
  templateUrl: './list-movimientos.component.html',
  styleUrls: ['./list-movimientos.component.css'] 
})
export class ListMovimientosComponent implements OnInit {

  movimientos: Movimiento[] = [];

  constructor(private movimientoService: MovimientoService) {}

  ngOnInit(): void {
    this.obtenerMovimientos();
  }

  obtenerMovimientos(): void {
    this.movimientoService.getAllMovimientos().subscribe({
      next: (data) => {
        this.movimientos = data;
      },
      error: (err) => {
        console.error('Error al obtener movimientos', err);
      }
    });
  }

}
