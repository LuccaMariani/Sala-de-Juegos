import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule} from '@angular/fire/compat';



import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { JuegosComponent } from './page/juegos/juegos.component';
import { TatetiComponent } from './page/tateti/tateti.component';
import { MenuComponent } from './page/menu/menu.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { RegistroComponent } from './page/registro/registro.component';
import { PerfilComponent } from './page/perfil/perfil.component';
import { InformacionUsuarioComponent } from './page/informacion-usuario/informacion-usuario.component';
import { ChatComponent } from './page/chat/chat.component';
import { AhorcadoComponent } from './page/juegos/ahorcado/ahorcado.component';
import { MayormenorComponent } from './page/juegos/mayormenor/mayormenor.component';
import { PreguntadosComponent } from './page/juegos/preguntados/preguntados.component';
import { PropioComponent } from './page/juegos/propio/propio.component';
import { HttpClientModule,  HttpClient} from '@angular/common/http';
import { EncuestaComponent } from './page/encuesta/encuesta.component';
import { AdminComponent } from './page/admin/admin.component';

import { ToastService, AngularToastifyModule } from 'angular-toastify';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';

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
    PerfilComponent,
    InformacionUsuarioComponent,
    ChatComponent,
    AhorcadoComponent,
    MayormenorComponent,
    PreguntadosComponent,
    PropioComponent,
    EncuestaComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    AngularToastifyModule,
    //BrowserAnimationsModule, // required animations module
    //ToastrModule.forRoot()
    
  ],
  providers: [
    DatePipe,
    HttpClient,
    ToastService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
