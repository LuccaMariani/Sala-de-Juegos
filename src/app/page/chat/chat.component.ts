import { Component, OnInit } from '@angular/core';
import { AutenticarService } from 'src/app/services/autenticar.service';
import { DatePipe } from '@angular/common';
import { ChatService } from 'src/app/services/chat.service';
import { Chat } from 'src/app/interfaces/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    
  public mensaje =  {
    nuevo:''
  }
  //private horarioMensaje: Date = new Date();
  usuarioLogeado: any = 'null';

  public chats: Chat[] =[
    {
      autor:'Cargando',
      mensaje:'buscando chats...',
      horario: ''
    },
  ];

  constructor(private autentService:AutenticarService, private chatService: ChatService, private datePipe: DatePipe) { }

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

    const horarioMensaje = new Date()

    let nuevoHorarioMensaje = this.datePipe.transform(horarioMensaje, 'h:mm a');

    let nuevoMensaje = {
      autor: this.usuarioLogeado.email,
      mensaje: this.mensaje.nuevo,
      horario: nuevoHorarioMensaje
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
