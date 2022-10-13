import { ConsoleLogger } from '@angular/compiler-cli';
import { Component, OnInit } from '@angular/core';
import { AutenticarService } from 'src/app/services/autenticar.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userLogged = this.authService.getUserLogged();

  constructor(public authService: AutenticarService) { }

  ngOnInit(): void {
  }

  LogOut(){
    this.authService.logout();
  }

  test(){
    //console.log(this.authService.getUserLogged());
    console.log('test: '+ this.authService.estaLogeado);
  }

}
