import { Component, OnInit } from '@angular/core';
import { AutenticarService } from 'src/app/services/autenticar.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/class/usuario';
import { BooleanLiteral } from 'typescript';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  public listaLetras: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  public listaLetrasSeleccionadas: string[] = []

  public vidasRestantes: number = 6;

  public arrayPalabras: string[] = [
    'AVION', 'AEROPUERTO', 'JET', 'ESCALERA', 'JIRAFA', 'LEON', 'LAMPARA',
    'TECLADO', 'MESA', 'TAZA', 'MICROFONO', 'COMPUTADORA', 'JUGO', 'AGUA',
    'MONITOR', 'PANTALLA', 'TELEVISOR', 'AEROSOL', 'SILLON', 'NUTRIA', 'ZEBRA', 'ANTEOJOS' 
  ];

  public palabra_a_adivinar: string = '';
  public palabraMostrada: string[] = [];  

  private usuarioLogeado: any;
  private puntosTotales: any;
  public usuarioDatos: Usuario | any;

  public perdiste: boolean = false;
  public ganaste: boolean = false;

  public puntosJuego: number = 0;

  constructor(private authSV: AutenticarService, private usuarioSV: UsuariosService) { }

  ngOnInit(): void {
    this.authSV.getUserLogged().subscribe(usuario => {
      this.usuarioLogeado = usuario;

      this.usuarioSV.getUsuarioEmail(this.usuarioLogeado.email).subscribe(usuarioDatos => {
        this.usuarioDatos = usuarioDatos;
      })
    });

    this.dibujarPalabra()
  }

  iniciarJuego() {

  }

  reiniciarJuego() {
    this.puntosJuego = 0;
    this.vidasRestantes = 6;
    this.palabra_a_adivinar = '';
    this.listaLetrasSeleccionadas = []
    this.listaLetras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    this.perdiste = false;
    this.ganaste = true;
    this.dibujarPalabra();
  }

  elejirPalabraRandom() {

    let numeroRandom = Math.floor(Math.random() * (this.arrayPalabras.length - 0 + 1) + 0)
    //console.log('random', numeroRandom)
    let i = 0;
    this.arrayPalabras.forEach( palabra => {
      ///console.log('no entro', i , palabra, numeroRandom);
      if(i == numeroRandom){
        //console.log('entro', i , palabra);
        this.palabra_a_adivinar = palabra;
      }
      i = i +1;
    })
    
    ///console.log('palabra elejida', this.palabra_a_adivinar)
  }

  dibujarPalabra() {
    this.palabraMostrada = [];
    
    if(this.palabra_a_adivinar == ''){
      this.elejirPalabraRandom()
    }

    let arrayPalabra_a_adivinar = this.palabra_a_adivinar.split('');
    let gano = true;
    arrayPalabra_a_adivinar.forEach(letraPalabra => {
      let banderaAdivino = false;

      this.listaLetrasSeleccionadas.forEach(letraAdivinada => {
        if (letraAdivinada == letraPalabra) {
          this.palabraMostrada.push(letraAdivinada);
          banderaAdivino = true;
        }

      })
      if (!banderaAdivino) {
        this.palabraMostrada.push('_')
        gano = false;
      }


    })
    if(gano){
      console.log('GANASTE');
      this.ganaste = true;
      this.usuarioSV.sumarPuntosAhorcado(this.usuarioLogeado.email, this.usuarioDatos?.Ahorcado + this.puntosJuego);
      this.reiniciarJuego();
    }
    //console.log(this.palabraMostrada)
  }



  elegirLetra(letra: string) {

    //elimina la letra del teclado una vez seleccionada
    this.listaLetras = this.listaLetras.filter(word => word != letra);

    //añade la letra seleccionda, a la lista de letras usadas
    this.listaLetrasSeleccionadas.push(letra);

    let arrayPalabra_a_adivinar = this.palabra_a_adivinar.split('');

    //si no encuentra una letra igual a la elegida, no cambia la bandera y pierde una vida.
    let banderaPierdeVida = true;
    arrayPalabra_a_adivinar.forEach(letraN =>{
      if(letraN == letra){
        this.puntosJuego = this.puntosJuego +1;
        banderaPierdeVida = false;
      }
    })
    if(banderaPierdeVida){
      this.vidasRestantes = this.vidasRestantes - 1
    }
    //-------------------
    console.log('vidas restantes: ', this.vidasRestantes)
    if(this.vidasRestantes == 0 ){
      //perdiste
      this.usuarioSV.sumarPuntosAhorcado(this.usuarioLogeado.email, this.usuarioDatos?.Ahorcado + this.puntosJuego);
      
      this.perdiste = true;
      console.log('PERDISTE');
    }else{
      this.dibujarPalabra();
    }
  }
}
