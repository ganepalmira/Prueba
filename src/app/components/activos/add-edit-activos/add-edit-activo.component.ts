import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Activos } from 'src/app/domain/activos';
import { Marca } from 'src/app/domain/marca.model';
import { MarcaService } from 'src/app/services/marca.service';

@Component({
  selector: 'app-add-edit-activo',
  templateUrl: './add-edit-activo.component.html',
  styleUrls: ['./add-edit-activo.component.css']
})
export class AddEditActivoComponent implements OnInit {

  @Input() displayDialog: boolean = false;
  @Input() activo: Activos = new Activos(); // se reutiliza para crear o editar
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<Activos>();

  marcas: Marca[] = [];

  constructor(private marcaService: MarcaService) {}

  ngOnInit(): void {
    this.marcaService.getMarcas().subscribe(data => {
      this.marcas = data;
    });
  }

  guardarActivo() {
    this.onSave.emit(this.activo); // Envía el activo al componente padre
    this.cerrar();
  }

  cerrar() {
    this.onClose.emit();
  }
}
