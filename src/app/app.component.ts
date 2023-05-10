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
        this.submitted = false;
        this.activoDialog = true;

        this.messageService.add({severity:'error', summary: 'Error', detail: "Ups, debes desarrollar esto"});
    }

    editProduct(activo: Activos) {
        this.messageService.add({severity:'error', summary: 'Error', detail: "Ups, debes desarrollar esto"});
    }

    deleteProduct(activo: Activos) {
        this.messageService.add({severity:'error', summary: 'Error', detail: "Ups, debes desarrollar esto"});
    }

    hideDialog() {
        this.activoDialog = false;
        this.submitted = false;
    }
    
    saveProduct() {
        this.submitted = true;
        this.messageService.add({severity:'error', summary: 'Error', detail: "Ups, debes desarrollar esto"});
    }

}
