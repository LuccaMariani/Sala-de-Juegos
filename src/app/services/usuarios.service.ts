import { Injectable } from '@angular/core';
/*
import { MyhttpService } from './myhttp.service';
import { apiConfig } from '../../environments/environment';
*/

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
/*
  private apiUrl: string;

  constructor(private miHttp: MyhttpService) {
    this.apiUrl = apiConfig.host + 'usuarios/';
  }

  public listar(): Promise<Array<any>> {
    return this.miHttp.httpGetP(this.apiUrl);
  }

  public crear(nombre: string, email: string, password: string): Promise<Array<any>> {
    const payload = { 'nombre': nombre, 'email': email, 'clave': password };
    return this.miHttp.httpPostP(this.apiUrl, payload)
      .then(data => { return data; })
      .catch(err => { console.log(err); return null; });
  }*/

  /*
  public httpGetP(url: string) {
    const headers = this.crearHeaders();
    return this.http
      .get(url, { headers: headers })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public httpPostP(url: string, objeto: any) {
    const headers = this.crearHeaders();
    return this.http
      .post(url, objeto, { headers: headers })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  */
}
