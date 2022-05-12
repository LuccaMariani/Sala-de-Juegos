import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  registerForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.initForm();
  }

  onSubmit():void{
    console.log('Form:');
  }

  initForm():FormGroup{
    //declarar las propiedades del form con FormBuilder
    return this.fb.group({
      nombre:['', [Validators.required, Validators.minLength(3)]],
      apellido:['', [Validators.required, Validators.minLength(3)]],
      edad:['', [Validators.required, Validators.min(5)]],
      sexo:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]]
    })
  }
/*

  get NombreInput(){
    return this.registerForm.get('nombre');
  }

  get EmailInput(){
    return this.registerForm.get('email');
  }

  get PasswordInput(){
    return this.registerForm.get('password');
  }
*/

/*
  Registrar() {
    const nombre = this.registerForm.get('nombre');
    const email = this.registerForm.get('email');
    const password = this.registerForm.get('password');
    //
    this.dao.crear(nombre, email, password).then(data => {
      this.ayuda.MostrarMensajeRegistro();
    }).catch(
      data=>{
        this.ayuda.MostrarError('Ocurrio un error al intentar registrar');
      }
    );
  }

  LlevarALogin() {
    this.router.navigate(['/Login']);
  }  
*/


}
