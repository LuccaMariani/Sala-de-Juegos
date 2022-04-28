import { Component, OnInit } from '@angular/core';
import { AutenticarService } from 'src/app/services/autenticar.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userLogged=this.authService.getUserLogged();

  constructor(private authService: AutenticarService) { }

  ngOnInit(): void {
  }

  LogOut(){
    this.authService.logout();
  }
}
