import { Component, OnInit } from '@angular/core';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { Encuesta } from 'src/app/interfaces/encuesta';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public encuestas: any;

  constructor(private encuestaSV: EncuestaService ) {

  }

  ngOnInit(): void {
    this.encuestaSV.getEncuestas().subscribe( encuestas => {
      this.encuestas = encuestas
    })
  }

  ver(){

    console.log('Encuestas:' + this.encuestas)
  }
}
