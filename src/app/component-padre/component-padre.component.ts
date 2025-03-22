import { Component, viewChild,ElementRef, ViewChild} from '@angular/core';
import { ComponentHijoComponent } from './component-hijo/component-hijo.component';


@Component({
  selector: 'app-component-padre',
  imports: [ComponentHijoComponent],
  templateUrl: './component-padre.component.html',
  styleUrl: './component-padre.component.css'
})
export class ComponentPadreComponent {
  mensajePadre: string="Hola desde el Padre"
  mensajeOutput: string='';
  recibirNotificacion(mensajeOutput: string){
    this.mensajeOutput=mensajeOutput;
  }

  @ViewChild(ComponentHijoComponent) componenteHijo !: ComponentHijoComponent;

  cambiarMensajeHijo(){
    this.componenteHijo.cambiarMensaje("Mensaje actualizado desde el componente padre");
  }

  
}