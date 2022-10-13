import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


import { Encuesta } from '../interfaces/encuesta';


@Injectable({
  providedIn: 'root'
})
export class EncuestaService {


  private ruta = 'encuestas';

  constructor(private firestore: AngularFirestore) {

  }

  getEncuestas() {
    let collection = this.firestore.collection<Encuesta>(this.ruta)
    return collection.valueChanges();
  }

  guardarEncuesta(encuesta: Encuesta) {

    console.log("Encuesta a guardar:", encuesta);
    return this.firestore.collection(this.ruta).doc().set({
      autor: encuesta.autor,
      nombre: encuesta.nombre,
      apellido: encuesta.apellido,
      edad: encuesta.edad,
      numero: encuesta.numero,
      favorito: encuesta.favorito,
      feos: encuesta.feos,
      cambios: encuesta.cambios,
    });

  }
}
