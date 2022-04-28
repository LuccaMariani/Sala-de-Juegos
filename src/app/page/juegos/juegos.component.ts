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

  abrirJuego()
  {
    this.ruteo.navigateByUrl("juegos/tateti")
    
  }
  cerrarJuego()
  {
    this.ruteo.navigateByUrl("juegos")
  }
  
}
