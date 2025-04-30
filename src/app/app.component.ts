import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Product } from './domain/product';
import { ProductService } from './services/productservice';
import { Activos } from './domain/activos';
import { ActivosService } from './services/activos.service';
import { ViewChild } from '@angular/core';
import { Table } from 'primeng/table';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ConfirmationService,MessageService,ProductService]
})
export class AppComponent implements OnInit {

    activoDialog: boolean;
    activos: Activos[];
    activo: Activos;
    submitted: boolean;
    selectedActivo: Activos = new Activos();
    showAddEditDialog: boolean = false;
    esEdicion: boolean = false; 

    @ViewChild('dt') table: Table;

    constructor(
      private activosService: ActivosService, 
      private messageService: MessageService, 
      private confirmationService: ConfirmationService) { }

    ngOnInit() {
        this.cargarActivos();
    }

    cargarActivos() {
        this.activosService.getActivos().subscribe({
          next: data => {
            this.activos = [...data];
          },
          error: err => console.error('Error al cargar activos:', err)
        });
    }

    trackByCodigo(index: number, item: Activos): string {
        return item.codigo!;
      }
     
    openNew() {
        this.selectedActivo = new Activos(); 
        this.esEdicion = false;
        this.showAddEditDialog = true;
    }

       
    hideAddEditDialog() {
        this.showAddEditDialog = false;
    }

    editProduct(activo: Activos) {
        this.selectedActivo = { ...activo };
        this.esEdicion = true;
        this.showAddEditDialog = true;
    }

    handleSave(activo: Activos) {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: this.esEdicion ? 'Activo actualizado correctamente' : 'Activo creado correctamente'
      });
      this.showAddEditDialog = false;
      this.cargarActivos();
      this.table.reset();
    }

    deleteProduct(activo: Activos) {
      console.log('Se aceptó la eliminación'); 
      this.confirmationService.confirm({
        message: '¿Estás seguro de que deseas eliminar este activo?',
        header: 'Confirmar eliminación',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.activosService.eliminarActivo(activo.codigo!).subscribe({
            next: () => {
              this.messageService.add({
                severity: 'success',
                summary: 'Eliminado',
                detail: 'Activo eliminado correctamente'
              });
              this.cargarActivos();       
              setTimeout(() => this.table.reset());        
            },
            error: err => console.error('Error al eliminar activo', err)
          });
        }
      });
      }
}
