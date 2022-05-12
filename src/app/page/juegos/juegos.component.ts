import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticarService } from 'src/app/services/autenticar.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  
  userLogged=this.authService.getUserLogged();

  

  constructor(public ruteo:Router, private authService: AutenticarService) { }

  ngOnInit(): void {
  }

  abrirAhorcado()
  {
    this.ruteo.navigateByUrl("juegos/ahorcado");
  }
  abrirMayorMenor(){
    this.ruteo.navigateByUrl("juegos/mayor-o-menor");
  }
  abrirPreguntados(){
    this.ruteo.navigateByUrl("juegos/preguntados");
  }
  abrirPropio(){
    this.ruteo.navigateByUrl("juegos/propio");
  }
  cerrarJuego()
  {
    this.ruteo.navigateByUrl("juegos");
  }
  
}
