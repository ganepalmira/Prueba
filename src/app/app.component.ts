import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Product } from './domain/product';
import { ProductService } from './services/productservice';
import { Activos } from './domain/activos';
import { ActivosService } from './services/activos.service';

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

    constructor(private activosService: ActivosService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

    ngOnInit() {
        this.activosService.getActivos().subscribe({
            next: data => {
              this.activos = data;
            },
            error: error => {
              console.error("Error: " + error);
            }
          });
    }

     
    openNew() {
        this.selectedActivo = new Activos(); 
        this.showAddEditDialog = true;
    }

       
    hideAddEditDialog() {
        this.showAddEditDialog = false;
    }

      
    saveActivo(activo: Activos) {
        this.activos.push({ ...activo });
        this.showAddEditDialog = false;
    }

    editProduct(activo: Activos) {
        this.selectedActivo = { ...activo };
        this.showAddEditDialog = true;
    }

    deleteProduct(activo: Activos) {
        this.activos = this.activos.filter(a => a !== activo);
    }

}
