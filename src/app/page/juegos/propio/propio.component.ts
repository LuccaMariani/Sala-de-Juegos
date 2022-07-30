import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propio',
  templateUrl: './propio.component.html',
  styleUrls: ['./propio.component.css']
})
export class PropioComponent implements OnInit {

  //juego

  ///jugador
  public nombreSprite: number = 0; // 0 = idle  / 1 = attack 1 /  2 = attack2 / 3 = daño Recibido / 4 = muerte

  //enemigo
  constructor() { }

  //
  private timeLeft: number = 60;
  private animAtaque1: any;


  ngOnInit(): void {
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
