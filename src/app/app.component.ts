import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaProductoComponent } from './tarjeta-producto/tarjeta-producto.component';
import { first, last } from 'rxjs';
import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';
import { ReplicadorComponent } from './replicador/replicador.component';
import { Replicador2Component } from './replicador/replicador2/replicador2.component';
import { ForComponent } from './for/for.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TarjetaProductoComponent,MostrarMensajeComponent,ReplicadorComponent,Replicador2Component,ForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo= 'Orgullo UTS';
  usuario={
    firstName: "Harol Adrian",
    lastName: "Cisneros Bojorquez",
    edad:21,
    descripcion: "Soy alguien que le gusta los videojugos"
  };

  saludar(){
    return `Hola, ${this.usuario.firstName} ${this.usuario.lastName} con la edad de ${this.usuario.edad} años`;
  }
}
