import { Component, OnInit } from '@angular/core';
import { AutenticarService } from 'src/app/services/autenticar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  usuario = {
    password: '',
    email: ''
  }

  constructor(private authService: AutenticarService) { }

  Login() {
    console.log(this.usuario)
    const { email, password } = this.usuario;
    this.authService.login(email, password).then(res => {
      console.log("se logeo", res)
    })
  }

  Register() {
    console.log(this.usuario)
    const { email, password } = this.usuario;
    this.authService.register(email, password).then(res => {
      console.log("se registro", res)
    })
  }

  ObtenerUsuariologeado() {
    /*
    this.authService.getUserLogged().subscribe(res=>{
      console.log(res?.email);
    })*/
  }

  accesoRapido() {
    this.usuario.email = 'empleado@gmail.com';
    this.usuario.password = '123456';
  }

  LogOut() {
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}
