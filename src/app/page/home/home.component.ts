import { Component, OnInit } from '@angular/core';
import { AutenticarService } from 'src/app/services/autenticar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userLogged=this.authService.getUserLogged();

  constructor(private authService: AutenticarService) { }

  ngOnInit(): void {
  }

}
