import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule} from '@angular/fire/compat';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JuegosComponent } from './page/juegos/juegos.component';
import { TatetiComponent } from './page/tateti/tateti.component';
import { MenuComponent } from './page/menu/menu.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { environment } from 'src/environments/environment';
import { RegistroComponent } from './page/registro/registro.component';
import { PerfilComponent } from './page/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    JuegosComponent,
    TatetiComponent,
    MenuComponent,
    QuienSoyComponent,
    RegistroComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
