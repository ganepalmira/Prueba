export interface Movimiento {
    id: number;
    activoCodigo: number;
    fecha: Date;
    tipo: string; 
    descripcion: string;
    ubicacionOrigen?: number;
    ubicacionDestino?: number;
  }
  