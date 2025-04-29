import { Marca } from './marca.model';
import { Ubicacion } from './ubicacion.model';

export class Activos {

    codigo: string;
    nombre: string;
    referencia: string;
    marca: Marca;  
    estado: string;
    ubicacion: Ubicacion

}
