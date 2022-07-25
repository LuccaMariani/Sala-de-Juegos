export class Pais {
    
    nombre: string;
    bandera: string;
    nombreNativo:string;
    capital:string;
    poblacion:number;
  
    constructor(nombre: string, bandera: string, nombreNativo:string, capital:string, poblacion:number) {
        this.nombre = nombre;
        this.bandera = bandera;
        this.nombreNativo=nombreNativo;
        this.capital=capital;
        this.poblacion=poblacion;
    }
  }