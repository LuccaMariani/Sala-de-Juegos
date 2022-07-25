import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticarService } from 'src/app/services/autenticar.service';

import { Juegos} from 'src/app/interfaces/juegos';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  
  public userLogged=this.authService.getUserLogged();
  public juegoSeleccionado:Juegos
 

  constructor(public ruteo:Router, private authService: AutenticarService) {
    this.juegoSeleccionado = Juegos.Ninguno;
   }

  ngOnInit(): void {
    this.juegoSeleccionado = Juegos.Ninguno;
  }

  abrirAhorcado()
  {
    this.juegoSeleccionado = Juegos.Ahorcado;
    console.log(this.juegoSeleccionado);
    this.ruteo.navigateByUrl("juegos/ahorcado");
  }
  abrirMayorMenor(){
    this.juegoSeleccionado = Juegos.MayorMenor;
    console.log(this.juegoSeleccionado);
    this.ruteo.navigateByUrl("juegos/mayor-o-menor");
  }
  abrirPreguntados(){
    this.juegoSeleccionado = Juegos.Preguntados;
    console.log(this.juegoSeleccionado);
    this.ruteo.navigateByUrl("juegos/preguntados");
  }
  abrirPropio(){
    this.juegoSeleccionado = Juegos.Propio;
    console.log(this.juegoSeleccionado);
    this.ruteo.navigateByUrl("juegos/propio");
  }
  
  cerrarJuego()
  {
    this.juegoSeleccionado = Juegos.Ninguno;
    console.log(this.juegoSeleccionado);
    this.ruteo.navigateByUrl("juegos");
  }
  
}
