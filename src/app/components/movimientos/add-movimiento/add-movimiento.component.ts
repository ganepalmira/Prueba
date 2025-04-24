import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movimiento } from 'src/app/domain/movimiento.model';
import { MovimientoService } from 'src/app/services/movimiento.service';
import { Activos } from 'src/app/domain/activos';
import { Ubicacion } from 'src/app/domain/ubicacion.model';
import { ActivosService } from 'src/app/services/activos.service';
import { UbicacionService } from 'src/app/services/ubicacion.service';

@Component({
  selector: 'app-add-movimiento',
  templateUrl: './add-movimiento.component.html',
  styleUrls: ['./add-movimiento.component.css']
})
export class AddMovimientoComponent implements OnInit {

  @Input() displayDialog: boolean = false;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
  @Output() onSave: EventEmitter<Movimiento> = new EventEmitter<Movimiento>();

  movimiento: Movimiento = {
    id: 0,
    activoCodigo: undefined!,
    fecha: undefined!,
    tipo: undefined!,
    descripcion: undefined!,
    ubicacionOrigen: undefined!,
    ubicacionDestino: undefined!,
  };

  activos: Activos[] = [];
  ubicaciones: Ubicacion[] = [];

  constructor(
    private movimientoService: MovimientoService,
    private activosService: ActivosService,
    private ubicacionService: UbicacionService
  ) {}

  ngOnInit(): void {
    this.loadActivos();
    this.loadUbicaciones();
  }

  loadActivos() {
    this.activosService.getActivos().subscribe(data => {
      this.activos = data;
    });
  }

  loadUbicaciones() {
    this.ubicacionService.getAllUbicaciones().subscribe(data => {
      this.ubicaciones = data;
    });
  }

  saveMovimiento() {
    this.movimiento.fecha = new Date(); // asigna la fecha actual

    this.movimientoService.crearMovimiento(this.movimiento).subscribe(data => {
      this.onSave.emit(data); // notifica al padre
      this.closeDialog(); // cierra el modal
    });
  }

  closeDialog() {
    this.onClose.emit();
  }
}
