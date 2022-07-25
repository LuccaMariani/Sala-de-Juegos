import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/class/usuario';
import { AutenticarService } from 'src/app/services/autenticar.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.css']
})
export class MayormenorComponent implements OnInit {

  public mostrarNumero: number;
  public puntosJuego: number;
  public jugando: boolean;
  private usuarioLogeado: any;
  private puntosTotales: any;
  public usuarioDatos: Usuario | any;

  constructor(private authSV: AutenticarService, private usuarioSV: UsuariosService) {
    this.mostrarNumero = 0;
    this.puntosJuego = 0;
    this.jugando = true;
  }

  ngOnInit(): void {
    this.authSV.getUserLogged().subscribe(usuario => {
      this.usuarioLogeado = usuario;

      this.usuarioSV.getUsuarioEmail(this.usuarioLogeado.email).subscribe(usuarioDatos => {
        this.usuarioDatos = usuarioDatos
      })
    });


  }

  Mayor() {
    let numeroSiguiente = this.random();
    console.log(numeroSiguiente);
    if (numeroSiguiente >= this.mostrarNumero) {
      //correcto
      this.puntosJuego = this.puntosJuego + 1;
      this.mostrarNumero = numeroSiguiente;
    }
    else {
      //incorrecto
      let puntosAnteriores = 0 + this.usuarioDatos.MayorMenor;
      this.usuarioSV.sumarPuntosMayorMenor(this.usuarioLogeado.email, puntosAnteriores + this.puntosJuego);
      this.jugando = false;
    }
  }

  Menor() {
    let numeroSiguiente = this.random();
    console.log(numeroSiguiente);
    if (numeroSiguiente <= this.mostrarNumero) {
      //ganaste 1 punto
      this.puntosJuego = this.puntosJuego + 1;
      this.mostrarNumero = numeroSiguiente;
    }
    else {
      //perdiste
      let puntosAnteriores = 0 + this.usuarioDatos.MayorMenor;
      this.usuarioSV.sumarPuntosMayorMenor(this.usuarioLogeado.email, puntosAnteriores + this.puntosJuego);
      this.jugando = false;
    }
  }

  reiniciarJuego() {

    this.puntosJuego = 0;
    this.mostrarNumero = 0;
    this.jugando = true;
  }

  random() {
    return Math.floor(Math.random() * (10 - 0 + 1) + 0)
  }
}
