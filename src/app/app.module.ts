import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService } from 'primeng/api';

import { AppComponent } from './app.component';
import { CardModule} from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import {ToastModule} from 'primeng/toast';
import { ListMovimientosComponent } from './components/movimientos/list-movimientos/list-movimientos.component';
import { AddMovimientoComponent } from './components/movimientos/add-movimiento/add-movimiento.component';
import { ListUbicacionesComponent  } from './components/ubicaciones/list-ubicaciones.component';
import { ListActivosComponent } from './components/activos/list-activos/list-activos.component';
import { AddEditActivoComponent } from './components/activos/add-edit-activos/add-edit-activo.component';


@NgModule({
    declarations: [
        AppComponent,
        ListMovimientosComponent,
        AddMovimientoComponent, 
        ListUbicacionesComponent,
        ListActivosComponent,
        AddEditActivoComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ToolbarModule,
        ConfirmDialogModule,
        RatingModule,
        InputNumberModule,
        InputTextareaModule,
        RadioButtonModule,
        DropdownModule,
        ButtonModule,
        CardModule,
		TabViewModule,
        ToastModule
    ],
    providers: [ConfirmationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
