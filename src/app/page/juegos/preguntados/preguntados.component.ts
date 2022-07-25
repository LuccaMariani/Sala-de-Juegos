
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Pais } from 'src/app/class/pais';

import { HttpClient } from '@angular/common/http';
import { AutenticarService } from 'src/app/services/autenticar.service';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  public mostrar: boolean = false;

  public listaPaises: any[] = [];
  public bandera: string = '';

  public paisSeleccionado?: Pais;
  public pais1?: Pais;
  public pais2?: Pais;
  public pais3?: Pais;
  public pais4?: Pais;

  public puntosJuego: number = 0;
  public jugando: boolean = true;

  public usuarioLogeado: any;
  public usuarioDatos: any;

  constructor(private apiService: ApiService, private http: HttpClient, private authSV: AutenticarService, private usuarioSV: UsuariosService) { }

  ngOnInit(): void {

    let name: string;
    let bandera: string;
    let capital: string;
    let poblacion: number;
    let nombreNativo: string;

    this.authSV.getUserLogged().subscribe(usuario => {
      this.usuarioLogeado = usuario;

      this.usuarioSV.getUsuarioEmail(this.usuarioLogeado.email).subscribe(usuarioDatos => {
        this.usuarioDatos = usuarioDatos
      })
    });

    this.apiService.ObtenerPaises().subscribe((paises: any) => {

      for (let index = 0; index < 250; index++) {
        if (paises != undefined) {

          console.log(paises[index]);
          name = paises[index].name.common;
          bandera = paises[index].flags.png;
          capital = paises[index].capital;
          poblacion = paises[index].population;
          nombreNativo = paises[index].name.official;
          this.listaPaises.push(new Pais(name, bandera, nombreNativo, capital, poblacion));
        }
      }

      this.setjuego()
    });

    this.setjuego();
  }

  ver() {
    this.setjuego();
    console.log(this.listaPaises.length);
  }

  adivinar(nomberPais: string | undefined) {

    if (nomberPais == this.paisSeleccionado?.nombre) {
      //ganaste 1 punto
      this.puntosJuego = this.puntosJuego + 1;
    }
    else {
      //perdiste
      let puntosAnteriores = 0 + this.usuarioDatos.Preguntados;
      this.usuarioSV.sumarPuntosPreguntados(this.usuarioLogeado.email, puntosAnteriores + this.puntosJuego);
      this.jugando = false;
    }

    this.setjuego();
  }

  jugarDevuelta() {
    this.puntosJuego = 0;
    this.jugando = true;
    this.setjuego();
  }

  setjuego() {
    this.pais1 = undefined;
    this.pais2 = undefined;
    this.pais3 = undefined;
    this.pais4 = undefined;

    this.paisSeleccionado = this.encontrarPaisRandom();

    switch (this.random4()) {
      case 1: {
        this.pais1 = this.paisSeleccionado;
        this.pais2 = this.encontrarPaisRandom();
        this.pais3 = this.encontrarPaisRandom();
        this.pais4 = this.encontrarPaisRandom();
        break;
      }
      case 2: {
        this.pais1 = this.encontrarPaisRandom();
        this.pais2 = this.paisSeleccionado;
        this.pais3 = this.encontrarPaisRandom();
        this.pais4 = this.encontrarPaisRandom();
        break;
      }
      case 3: {
        this.pais1 = this.encontrarPaisRandom();
        this.pais2 = this.encontrarPaisRandom();
        this.pais3 = this.paisSeleccionado;
        this.pais4 = this.encontrarPaisRandom();
        break;
      }
      case 4: {
        this.pais1 = this.encontrarPaisRandom();
        this.pais2 = this.encontrarPaisRandom();
        this.pais3 = this.encontrarPaisRandom();
        this.pais4 = this.paisSeleccionado;
        break;
      }
    }
    console.log('respuesta', this.paisSeleccionado.nombre);
  }

  encontrarPaisRandom(): Pais {
    return this.listaPaises[Math.floor(Math.random() * (250 - 0 + 1) + 1)]
  }

  random250() {
    return Math.floor(Math.random() * (250 - 0 + 1) + 1)
  }

  random4() {
    return Math.floor(Math.random() * (4 - 1 + 1) + 1)
  }



}
