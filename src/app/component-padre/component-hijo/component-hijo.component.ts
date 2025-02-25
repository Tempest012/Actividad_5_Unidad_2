import { Component } from '@angular/core';


@Component({
  selector: 'app-component-hijo',
  imports: [],
  templateUrl: './component-hijo.component.html',
  styleUrl: './component-hijo.component.css'
})
export class ComponentHijoComponent {
  hijo="Hola, soy el hijo"
  private titulo="Orgullo UTS"

  //Manera con TypeScript
  get mostrarTitulo(){
    return this.titulo;
  }

  //Manera con JavaScript
  getTitulo(){
    return this.titulo;
  }
}
