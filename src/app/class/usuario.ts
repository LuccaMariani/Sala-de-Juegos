export class Usuario {


    public nombre: string='';
    public apellido: string='';
    public edad: number=0;
    public email: string='';
    public sexo: string='';
    public puntosPropio: number=0;
    public MayorMenor:number = 0;
    public Preguntados:number = 0;
    public Ahorcado:number = 0;
    public Propio:number = 0;

    constructor(nombre: string = '', apellido: string = '', edad: number = 0, email: string = '', sexo: string = '', puntosPropio: number = 0) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.sexo = sexo;
        this.puntosPropio = puntosPropio;
    }
}