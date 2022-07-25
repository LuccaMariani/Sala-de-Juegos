import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public ObtenerPaises() {
    return this.http.get("https://restcountries.com/v3.1/all");
  }

  public ObtenerPaisPorNombre(nombrePais: string) {
    return this.http.get("https://restcountries.com/v3.1/name/" + nombrePais);
  }
}
