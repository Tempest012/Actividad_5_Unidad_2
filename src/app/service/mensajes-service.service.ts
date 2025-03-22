import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesServiceService {

  private mensaje : string ="Hola desde el servicio de mensajes";

  mostraMensaje(): string{
    return this.mensaje;
  }
  constructor() { }
}
