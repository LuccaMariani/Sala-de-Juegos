import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Usuario } from '../class/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  private ruta = 'usuarios';
  constructor(private firestore: AngularFirestore) {

  }

  getUsuarios() {
    let collection = this.firestore.collection<any>(this.ruta)
    return collection.valueChanges();
  }

  getUsuario(usuario: Usuario) {
    return this.firestore.collection(this.ruta).doc(usuario.email).valueChanges();
  }

  getUsuarioEmail(email: string) {
    return this.firestore.collection(this.ruta).doc(email).valueChanges();
  }

  /*
  guardarFechaLoginUsuario(email:string) {
    console.log("se guardo un registro de login del usuario:", email);
    let fechaRegistro = new Date();
    
    return this.firestore.collection("registroLogin").doc(email).set({
      email: email,
      fechaRegistro: fechaRegistro.toDateString()
    });
  }
*/

  registrarInicioSesionUsuario(email: string) {
    const fechaHora = new Date();
    const registroLogin = {
      fechaHora: fechaHora
    };

    // Agrega el documento a la colección 'registroLogins' de Firestore
    return this.firestore.collection('registroLogins').doc(email).collection('sesiones').add(registroLogin)
    .then(docRef => {
        console.log('Inicio de sesión registrado con éxito.');
      })
      .catch(error => {
        console.error('Error al registrar el inicio de sesión:', error);
      });
  }


  
  guardarUsuario(usuario: Usuario) {
    console.log("usuario a guardar:", usuario);
    let fechaRegistro = new Date();
    
    return this.firestore.collection(this.ruta).doc(usuario.email).set({
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      email: usuario.email,
      sexo: usuario.sexo,
      MayorMenor: 0,
      Propio: 0,
      Preguntados: 0,
      Ahorcado: 0,
      FechaIngreso: fechaRegistro.toDateString(),
      UltimaSesion: fechaRegistro.toDateString()
    });
  }

  sumarUltimaSesion(email: string) {
    const fechaHora = new Date();
    console.log('Service Usuarios > ',email," se modifico su ultima sesion a ", fechaHora);
    return this.firestore.collection(this.ruta).doc(email).update({
      UltimaSesion: fechaHora.toDateString(),
    });
  }

  sumarPuntosMayorMenor(email: string, puntos: number) {
    console.log('Service Usuarios > ',email," sumo ", puntos, ' puntos en el juego Mayor Menor');
    return this.firestore.collection(this.ruta).doc(email).update({
      MayorMenor: puntos,
    });
  }

  
  sumarPuntosPropio(email: string, puntos: number) {
    console.log('Service Usuarios > ',email," sumo ", puntos, ' puntos en el juego Propio');
    return this.firestore.collection(this.ruta).doc(email).update({
      Propio: puntos,
    });
  }

  sumarPuntosPreguntados(email: string, puntos: number) {
    console.log('Service Usuarios > ',email," sumo ", puntos, ' puntos en el juego Preguntados');
    return this.firestore.collection(this.ruta).doc(email).update({
      Preguntados: puntos,
    });
  }

  sumarPuntosAhorcado(email: string, puntos: number) {
    console.log('Service Usuarios > ',email," sumo ", puntos, ' puntos en el juego Ahorcado');
    return this.firestore.collection(this.ruta).doc(email).update({
      Ahorcado: puntos,
    });
  }

  async borrarUsuario(usuario: Usuario) {
    try {
      return await this.firestore.collection(this.ruta).doc(usuario.email).delete();
    } catch (error) {
      console.log("error en delete usuario ", error)
    }
  }

  async modificarUsuario(usuario: Usuario, dato: any) {
    try {
      return await this.firestore.collection(this.ruta).doc(usuario.email).update(dato);
    } catch (error) {
      console.log("error en update isuario ", error)
    }
  }
}
