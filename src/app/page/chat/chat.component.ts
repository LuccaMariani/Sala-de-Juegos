import { Component, OnInit } from '@angular/core';
import { AutenticarService } from 'src/app/services/autenticar.service';
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

  mensajes: any =[
    {
      emisor:'dpxw0fo9kpTV3wyWx7Di4SnOlzE2',
      mensaje:'hola',
      nombre:'Pepe'
    },
    {
      emisor:'2',
      mensaje:'hola, como estas?',
      nombre:'aaa'
    }
  ];

  constructor(private autentService:AutenticarService) { }

  ngOnInit(): void {
    this.autentService.getUserLogged().subscribe(usuario => {
      this.usuarioLogeado = usuario;
    });
  }


  enviarMensaje(){
    const{nuevo} =this.mensaje;
    console.log(this.mensaje.nuevo);
    console.log(this.usuarioLogeado);
    let nuevoMensaje = {
      emisor: this.usuarioLogeado.uid,
      mensaje: this.mensaje.nuevo,
      nombre:'Pepe'
    }
    this.mensajes.push(nuevoMensaje);
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
