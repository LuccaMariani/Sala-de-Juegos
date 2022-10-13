import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/class/usuario';
import { AutenticarService } from 'src/app/services/autenticar.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

import { Encuesta } from 'src/app/interfaces/encuesta';
import { EncuestaService } from 'src/app/services/encuesta.service';

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



@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  encuestaForm!: FormGroup;

  private usuarioLogeado: any;
  public usuarioDatos: Usuario | any;

  constructor(private readonly fb: FormBuilder, private ruteo: Router, private usuarioSV: UsuariosService, private authService: AutenticarService, private encuestaSV: EncuestaService) {
    //this.usuarioDatos.nombre = ''
    const rememberLoginControl = new FormControl();
  }


  ngOnInit(): void {

    //this.usuarioDatos.nombre = '';

    this.authService.getUserLogged().subscribe(usuario => {
      this.usuarioLogeado = usuario;

      this.usuarioSV.getUsuarioEmail(this.usuarioLogeado.email).subscribe(usuarioDatos => {
        this.usuarioDatos = usuarioDatos;
      })
    });

    this.encuestaForm = this.initForm();

  }

  onSubmit(): void {
    console.log('Form:', this.encuestaForm);
    this.GuardarEncuesta();
  }

  initForm(): FormGroup {
    //declarar las propiedades del form con FormBuilder

    return this.fb.group({
      nombre: [this.usuarioDatos?.nombre, [Validators.required, Validators.minLength(3)]],
      apellido: [this.usuarioDatos?.apellido, [Validators.required, Validators.minLength(3)]],
      edad: [this.usuarioDatos?.edad, [Validators.required, Validators.min(18), Validators.max(99)]],
      numero: ['', [Validators.required, Validators.min(100), Validators.max(9999999999)]],
      pregunta1: ['', [Validators.required]],
      pregunta2A: ['',],
      pregunta2B: ['',],
      pregunta2C: ['',],
      pregunta2D: ['',],
      pregunta3: ['', [Validators.required]],
    })
  }

  GuardarEncuesta() {
    let feosArray = new Array(
      this.encuestaForm.get('pregunta2A')?.value,
      this.encuestaForm.get('pregunta2B')?.value,
      this.encuestaForm.get('pregunta2C')?.value,
      this.encuestaForm.get('pregunta2D')?.value
      )

    let encuesta: Encuesta = {
      autor: this.authService.getLocalEmail(),
      nombre: this.encuestaForm.get('nombre')?.value,
      apellido: this.encuestaForm.get('apellido')?.value,
      edad: this.encuestaForm.get('edad')?.value,
      numero: this.encuestaForm.get('numero')?.value,
      favorito: this.encuestaForm.get('pregunta1')?.value,
      feos: feosArray,
      cambios: this.encuestaForm.get('pregunta3')?.value,
    };

    this.encuestaSV.guardarEncuesta(encuesta);


  }


}
