import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/class/usuario';
import { AutenticarService } from 'src/app/services/autenticar.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { interval, timer } from 'rxjs';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-propio',
  templateUrl: './propio.component.html',
  styleUrls: ['./propio.component.css']
})
export class PropioComponent implements OnInit {

  public puntos: number = 0;
  public pelota: any;
  public tiempo: number = 0;
  estaJugando: boolean = false;
  mensajeJugador: string = '';
  termino: boolean = false;


  randNum: number = 0;
  randNum2: number = 0;
  gano: boolean = false;

  usuarioLog: any = {
    email: '',
    id: 0
  }
  //juego
  //public contador = { min: 100, sec: 0 }

  public jugando = true;

  ///jugador
  public nombreSprite: number = 0; // 0 = idle  / 1 = attack 1 /  2 = attack2 / 3 = daño Recibido / 4 = muerte

  public puntosJuego = 1;
  constructor(private authSV: AutenticarService, private usuarioSV: UsuariosService) { }

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

    this.comenzarJuego()
  }

  comenzarJuego() {
    if (this.jugando) {
      this.jugando = false;
    } else {
      this.jugando = true;
    }
    this.estaJugando = true;
    this.tiempo = 20;
    this.puntos = 0;
  }

  sumarPuntos() {
    if (this.estaJugando) {
      this.puntos++;
      this.pelota = document.getElementById("player");
      this.pelota.style.marginLeft = Math.round(Math.random() * 600) + "px";
      this.pelota.style.marginTop = Math.round(Math.random() * 200) + "px";
      console.log('pelota marginLeft', this.pelota.style.marginLeft);
      console.log('pelota marginTop', this.pelota.style.marginTop);
    }
  }

  contador: any = interval(1000).subscribe((n) => {
    if (this.tiempo > 0) {
      this.tiempo--;
      this.pelota.style.marginLeft = Math.round(Math.random() * 600) + "px";
      this.pelota.style.marginTop = Math.round(Math.random() * 200) + "px";
      console.log('pelota marginLeft', this.pelota.style.marginLeft);
      console.log('pelota marginTop', this.pelota.style.marginTop);
      if (this.tiempo == 0) {
        this.mensajeJugador = 'Perdiste😞, se mandaron los resultados!';
        //this.obtenerYCrearResultado();
  
        this.pelota.style.backgroundColor = 'rgba(174, 14, 54, 0.3)';
        this.pelota.style.border = '3px solid rgba(98, 2, 26, 0.3)';
        this.termino = true;
        this.tiempo = 0;
        this.puntos = 0;
        this.estaJugando = false;
      }
    }
  });

  /*
  obtenerYCrearResultado() {
    let fecha = new Date();
    let hoy = fecha.toLocaleDateString();
    let resultado = {
      juego: 'truchoOsu',
      user: this.usuarioLog,
      fechaActual: hoy,
      puntaje: this.puntos,
      gano: this.gano
    }
    console.log(resultado);
    this.firebase.sendUserResultado('truchOsuResultados', resultado).then(res => {
      console.log('se mandaron(?');
      this.mensajeJugador = 'Se mandaron los resultados!👌';
    }).catch(err => {
      console.log('no se mando nada xd')
    })
  }*/



}
