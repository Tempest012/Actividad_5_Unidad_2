import { Component } from '@angular/core';
import { MensajesServiceService } from '../service/mensajes-service.service';

@Component({
  selector: 'app-mensajes',
  imports: [],
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css'
})
export class MENSAJESComponent {

  titulo="Servicios en Angular";
  mensaje !: string;

  constructor(private mostra : MensajesServiceService){
    this.mensaje = this.mostra.mostraMensaje();
  }
  

}
