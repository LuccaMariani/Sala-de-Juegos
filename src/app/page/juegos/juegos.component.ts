import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  constructor(public ruteo:Router) { }

  ngOnInit(): void {
  }

  redirigir()
    {
      this.ruteo.navigateByUrl("juegos/tateti")
    }
  
}
