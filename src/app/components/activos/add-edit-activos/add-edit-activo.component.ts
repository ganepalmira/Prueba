import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Activos } from 'src/app/domain/activos';
import { Marca } from 'src/app/domain/marca.model';
import { Ubicacion } from 'src/app/domain/ubicacion.model';
import { ActivosService } from 'src/app/services/activos.service';
import { MarcaService } from 'src/app/services/marca.service';
import { UbicacionService } from 'src/app/services/ubicacion.service';

@Component({
  selector: 'app-add-edit-activo',
  templateUrl: './add-edit-activo.component.html',
  styleUrls: ['./add-edit-activo.component.css']
})
export class AddEditActivoComponent implements OnInit {

  @Input() displayDialog: boolean = false;
  @Input() activo: Activos = new Activos(); 
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<Activos>();

  marcas: Marca[] = [];
  ubicaciones: Ubicacion[] = [];

  estadoOptions = [
    { label: 'ACTIVO', value: 'ACTIVO' },
    { label: 'INACTIVO', value: 'INACTIVO' }
  ];

  constructor(
    private marcaService: MarcaService,
    private ubicacionService: UbicacionService,
    private activoService: ActivosService,
  ) {}

  ngOnInit(): void {
    this.marcaService.getMarcas().subscribe({
      next: (data) => {
        console.log('Marcas cargadas:', data);
        this.marcas = data;
      },
      error: (err) => {
        console.error('Error al obtener marcas:', err);
      }
    });

    this.ubicacionService.getAllUbicaciones().subscribe({
      next: (data) => {
        console.log('Ubicaciones cargadas:', data);
        this.ubicaciones = data;
      },
      error: (err) => {
        console.error('Error al obtener ubicaciones:', err);
      }
    });
  }

  guardarActivo(activo: Activos) {
    this.activoService.crearActivo(this.activo).subscribe({
      next: (nuevoActivo) => {
        this.onSave.emit(nuevoActivo); 
        this.displayDialog = false;
        this.cerrar();
      },
      error: (err) => {
        console.error('Error al guardar activo', err);
      }
    });
  }

  cerrar() {
    this.onClose.emit();
  }
}
