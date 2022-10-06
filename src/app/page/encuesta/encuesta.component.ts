import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/class/usuario';
import { AutenticarService } from 'src/app/services/autenticar.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {


  /*
  - Incorporar una encuesta
    ● Tiene que pedir los siguientes datos:
      ○ Nombre y apellido.
      ○ Edad, validar que sean mayores de 18 años y menores de 99 años.
      ○ Número de teléfono, validar que sean solo números y no más de 10
      caracteres.
    ● Mínimo 3 preguntas.
      ○ Utilizar distintos controles, textbox, checkbox, radiobutton, etc.
      ○ No se pueden repetir.
    ● Tiene que contar con validaciones.
    ● Todos los campos son requeridos.
    ● Guardar las respuestas en Firebase identificando el usuario.
  */

  /*
  
  Radio
  Pregunta 1, cual es tu juego favorito

  Checkbox
  Pregunta 2, cuales juegos son los que menos te gustaron

  Input text
  Pregunta 3, que le cambiarias a los juegos para mejorarlos
  
  
  
  */
  encuestaForm!: FormGroup;

  private usuarioLogeado:any;
  public usuarioDatos:Usuario|any;

  
  constructor(private readonly fb: FormBuilder, private ruteo: Router, private usuarioSV: UsuariosService, private authService: AutenticarService) { }
  
  ngOnInit(): void {

    this.authService.getUserLogged().subscribe(usuario => {
      this.usuarioLogeado = usuario;

      this.usuarioSV.getUsuarioEmail(this.usuarioLogeado.email).subscribe( usuarioDatos => {
        this.usuarioDatos = usuarioDatos
      })
    });

    this.encuestaForm = this.initForm();

  }

  onSubmit(): void {
    console.log('Form:', this.encuestaForm);
    this.Register();
  }

  initForm(): FormGroup { 
    //declarar las propiedades del form con FormBuilder
    return this.fb.group({
      nombre: [this.usuarioDatos?.nombre, [Validators.required, Validators.minLength(3)]],
      apellido: [this.usuarioDatos?.apellido, [Validators.required, Validators.minLength(3)]],
      edad: [this.usuarioDatos?.edad, [Validators.required, Validators.min(18), Validators.max(99)]],
      numero: ['', [Validators.required, Validators.maxLength(10)]],
      pregunta1: ['', [Validators.required]],
      pregunta2: ['', [Validators.required]],
      pregunta3: ['', [Validators.required]],
    })
  }

  Register() {
    /*
    let encuesta = new Array(
      this.encuestaForm.get('nombre')?.value,
      this.encuestaForm.get('apellido')?.value,
      this.encuestaForm.get('edad')?.value,
      this.encuestaForm.get('email')?.value,
      this.encuestaForm.get('sexo')?.value,
    );
    */

  }


}
