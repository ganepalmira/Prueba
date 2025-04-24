import { Component, OnInit } from '@angular/core';
import { Activos } from 'src/app/domain/activos';
import { ActivosService } from 'src/app/services/activos.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-list-activos',
  templateUrl: './list-activos.component.html',
  styleUrls: ['./list-activos.component.css']
})
export class ListActivosComponent implements OnInit {
  activos: Activos[] = [];
  selectedActivo: Activos | null = null;

  
  displayDialog: boolean = false;
  isEdit: boolean = false;
  currentActivo: Activos = new Activos();

  constructor(
    private activosService: ActivosService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadActivos();
  }

  loadActivos(): void {
    this.activosService.getActivos().subscribe(data => {
      this.activos = data;
    });
  }

  saveActivo(activo: Activos) {
    if (this.isEdit) {
      this.activosService.actualizarActivo(activo).subscribe(updated => {
        const index = this.activos.findIndex(a => a.codigo === updated.codigo);
        if (index !== -1) this.activos[index] = updated;
        this.displayDialog = false;
      });
    } else {
      this.activosService.crearActivo(activo).subscribe(created => {
        this.activos.push(created);
        this.displayDialog = false;
      });
    }
  }
  

  openNew() {
    this.currentActivo = new Activos();
    this.isEdit = false;
    this.displayDialog = true;
  }

  editActivo(activo: Activos) {
    this.currentActivo = { ...activo }; // Clonamos para evitar mutar la lista
    this.isEdit = true;
    this.displayDialog = true;
  }

  deleteActivo(activo: Activos) {
    this.confirmationService.confirm({
      message: `¿Seguro que deseas eliminar el activo "${activo.nombre}"?`,
      accept: () => {
        this.activosService.eliminarActivo(activo.codigo).subscribe(() => {
          this.activos = this.activos.filter(a => a.codigo !== activo.codigo);
        });
      }
    });
  }

}
