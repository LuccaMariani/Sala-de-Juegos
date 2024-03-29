import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { textChangeRangeIsUnchanged } from 'typescript';
import { UsuariosService } from './usuarios.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  public estaLogeado:boolean=false;

  constructor(private afauth: AngularFireAuth, private usuariosService: UsuariosService) { }

  async login(email: string, password: string) {
    try {

      let respuesta = await this.afauth.signInWithEmailAndPassword(email, password)

      //arma un registro de la fecha de los Logins de los usuarios
      await this.usuariosService.registrarInicioSesionUsuario(email);

      //guarda ultima sesion en el registro del usuario
      await this.usuariosService.sumarUltimaSesion(email);
      
      this.setLocalEmail(email);
      
      return respuesta;

    } catch (error) {
      console.log('error en login: ', error);
      return null;
    }
    
  }

  async register(email: string, password: string) {
    try {
      let respuesta = await this.afauth.createUserWithEmailAndPassword(email, password);
      this.setLocalEmail(email);
      
      return respuesta;
    } catch (error) {
      console.log('error en register: ', error);
       
      Swal.fire({
        icon: 'error',
        title: 'Intente otra vez',
        text: 'El email ya se encuentra en uso, utilice uno distinto',
      })
      return null;
    }
  }

  setLocalEmail(email:string){
    localStorage.setItem('email', email);
  }

  deleteLocalEmail(){
    localStorage.setItem('email', '');
  }

  getLocalEmail(){
    return localStorage.getItem('email');
  }


  getUserLogged(){
    return this.afauth.authState;
  }

  /*
  getUsuario(){
    return this.afauth.currentUser;
  }*/

  /*

  getMail()
  {
    console.log('ACAA',this.afauth.idToken);
    
    let respuesta = undefined;
    this.getUserLogged().subscribe(res=>{

      console.log('ACAA', res?.email)

      respuesta = res?.email;
    })

    return respuesta;
  }*/


  logout(){
    this.deleteLocalEmail();
    this.afauth.signOut();
  }
}
