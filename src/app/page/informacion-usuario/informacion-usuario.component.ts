import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/class/usuario';
import { UsuariosService} from 'src/app/services/usuarios.service';
import { AutenticarService } from 'src/app/services/autenticar.service';

@Component({
  selector: 'app-informacion-usuario',
  templateUrl: './informacion-usuario.component.html',
  styleUrls: ['./informacion-usuario.component.css']
})
export class InformacionUsuarioComponent implements OnInit {

  private usuarioLogeado:any;
  public usuarioDatos:Usuario|any;

  constructor(private usuarioSV: UsuariosService, private authService: AutenticarService) { 
    
  }

  ngOnInit(): void {

    this.authService.getUserLogged().subscribe(usuario => {
      this.usuarioLogeado = usuario;

      this.usuarioSV.getUsuarioEmail(this.usuarioLogeado.email).subscribe( usuarioDatos => {
        this.usuarioDatos = usuarioDatos
      })
    });

  }

  

}
