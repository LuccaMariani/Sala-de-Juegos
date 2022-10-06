import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/class/usuario';
import { AutenticarService } from 'src/app/services/autenticar.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-propio',
  templateUrl: './propio.component.html',
  styleUrls: ['./propio.component.css']
})
export class PropioComponent implements OnInit {

  //juego
  public contador = { min: 100, sec: 0 } 
  public enemigo:string = '';
  public jugando = false;

  ///jugador
  public nombreSprite: number = 0; // 0 = idle  / 1 = attack 1 /  2 = attack2 / 3 = daño Recibido / 4 = muerte

  //enemigo
  constructor(private authSV: AutenticarService, private usuarioSV: UsuariosService) { }

  //
  private timeLeft: number = 60;
  private animAtaque1: any;

  //usuario
  private usuarioLogeado: any;
  public usuarioDatos: Usuario | any;


  ngOnInit(): void {

    this.authSV.getUserLogged().subscribe(usuario => {
      this.usuarioLogeado = usuario;

      this.usuarioSV.getUsuarioEmail(this.usuarioLogeado.email).subscribe(usuarioDatos => {
        this.usuarioDatos = usuarioDatos;
      })
    });

    this.iniciarJuego()
  }

  reiniciarJuego(){
    this.jugando = true;
  }

  reiniciarEnemigo(){
    this.dibujarEnemigoRandom();
    this.startTimer();
  }

  iniciarJuego(){
    this.dibujarEnemigoRandom();
    this.startTimer();
  }


  hola() {
    if (this.nombreSprite == 4) {
      this.nombreSprite = 0;
    }
    else {
      this.nombreSprite = this.nombreSprite + 1
    }

  }


  espada() {
    this.animacionAtaque1();
  }

  dibujarEnemigoRandom(){
    //let numeroRandom =  Math.floor(Math.random() * (max - min + 1)) + min;
    //max is the highest number you want it to generate
    //min is the lowest number you want it to generate

    let numeroRandom =  Math.floor(Math.random() * (2 - 1 + 1)) + 1;
  }



  startTimer() {
    this.contador = { min: 0, sec: 10 } // choose whatever you want
    let intervalId = setInterval(() => {
      if (this.contador.sec - 1 == -1) {
        this.contador.min -= 1;
        this.contador.sec = 59
      } 
      else this.contador.sec -= 1
      if (this.contador.min === 0 && this.contador.sec == 0) clearInterval(intervalId)
      console.log(this.contador);
    }, 1000)
  }


  escudo() {
   
  }

  animacionAtaque1() {
    animate
    console.log(this.animAtaque1);
    let tiempo = 0;
    this.nombreSprite = 1;
    this.animAtaque1 = setInterval(() => {
      tiempo++
      this.nombreSprite = 0;
      if (tiempo > 0) {
        clearInterval(this.animAtaque1);
        tiempo = 0;
      }
    }, 1000);
  }


  /*
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }*/
}
