import { Component, EventEmitter, Output,Input} from '@angular/core';


@Component({
  selector: 'app-component-hijo',
  imports: [],
  templateUrl: './component-hijo.component.html',
  styleUrl: './component-hijo.component.css'
})
export class ComponentHijoComponent {
  mensaje:string ="Mensaje desde el componente hijo";

  cambiarMensaje(nuevoMensaje : string){
    this.mensaje = nuevoMensaje;
  }

  @Input() mensajesinput!: string;

  @Output() notificarPadre = new EventEmitter<string>();

  enviarMensaje(){
    this.notificarPadre.emit("Mensaje desde el componente hijo al padre");
  }
}
