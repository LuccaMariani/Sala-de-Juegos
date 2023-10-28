import { Component, OnInit } from '@angular/core';
import { AutenticarService } from 'src/app/services/autenticar.service';

import { ChatService } from 'src/app/services/chat.service';
import { Chat } from 'src/app/interfaces/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    
  mensaje =  {
    nuevo:''
  }

  usuarioLogeado: any = 'null';

  chats: Chat[] =[
    {
      autor:'Cargando',
      mensaje:'buscando chats...',
      horario: ''
    },
  ];

  constructor(private autentService:AutenticarService, private chatService: ChatService) { }

  ngOnInit(): void {
    this.autentService.getUserLogged().subscribe(usuario => {
      this.usuarioLogeado = usuario;
    });

    this.chatService.getChats().subscribe( chats => {
      this.chats = chats
    })
    
  }


  enviarMensaje(){
    //const{nuevo} = this.mensaje;
    console.log(this.mensaje.nuevo);
    console.log(this.usuarioLogeado.email);
    const horarioMensaje = new Date('shortTime')
    
    let nuevoMensaje = {
      autor: this.usuarioLogeado.email,
      mensaje: this.mensaje.nuevo,
      horario: horarioMensaje.toLocaleTimeString()
    }

    let id = this.chats.length
    this.chatService.guardarChat(nuevoMensaje, id);

    this.mensaje.nuevo = '';
  }

  scrollUltimoMensaje(){
    let listaMsj=document.getElementsByClassName('mensaje');
    let ultimoMsj:any=listaMsj[(listaMsj.length -1)];
    let toppos = ultimoMsj.offsetTop;

    //@ts-ignore
    document.getElementsByClassName('contenedorMensajes')?.scrollTop = toppos;

  }

}
