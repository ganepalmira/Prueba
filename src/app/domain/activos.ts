import { Marca } from './marca.model';
import { Ubicacion } from './ubicacion.model';

export class Activos {

    id?: number;
    codigo: string;
    nombre: string;
    referencia: string;
    marca: Marca;  
    estado: string;
    ubicacionActual: Ubicacion;

}
