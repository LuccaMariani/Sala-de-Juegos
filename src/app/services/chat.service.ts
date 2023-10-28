import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Chat } from '../interfaces/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  
  private ruta = 'chats';

  constructor(private firestore: AngularFirestore) {

  }

  getChats() {
    let collection = this.firestore.collection<Chat>(this.ruta)
    return collection.valueChanges();
  }

  guardarChat(chat: Chat, id: number) {
    let numero = 1000000 + id
    console.log("chat a guardar:", chat);
    return this.firestore.collection(this.ruta).doc(numero.toString()).set({
      autor: chat.autor,
      mensaje: chat.mensaje,
      horario: chat.horario
    });

  }

}
