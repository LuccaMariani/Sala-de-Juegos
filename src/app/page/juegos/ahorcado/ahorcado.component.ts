import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  public listaLetras: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z"];
  public listaLetrasSeleccioandas: string[] = []

  public vidasRestantes: number = 5;

  public palabra_a_adivinar: string = '';
  public palablaMostrada: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  iniciarJuego() {

  }

  reiniciarJuego() {

  }

  dibujarPalabra() {

  }

  elegirLetra(letra: string) {

    this.listaLetrasSeleccioandas.push(letra);
    

    console.log('letra elegida', letra);

  }
}
