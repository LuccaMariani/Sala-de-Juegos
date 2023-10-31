import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { JuegosComponent } from './page/juegos/juegos.component';
import { TatetiComponent } from './page/tateti/tateti.component';
import { HomeComponent } from './page/home/home.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { RegistroComponent } from './page/registro/registro.component';
import { PerfilComponent } from './page/perfil/perfil.component';

import { PreguntadosComponent } from './page/juegos/preguntados/preguntados.component';
import { AhorcadoComponent } from './page/juegos/ahorcado/ahorcado.component';
import { MayormenorComponent } from './page/juegos/mayormenor/mayormenor.component';
import { PropioComponent } from './page/juegos/propio/propio.component';
import { EncuestaComponent } from './page/encuesta/encuesta.component';
import { PerfilesGuard } from 'src/guards/perfiles.guard';
import { AdminComponent } from './page/admin/admin.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'perfil', component: PerfilComponent },
    ]
  },
  {
    path: 'juegos', component: JuegosComponent,canActivate:[PerfilesGuard], children: [
      { path: 'tateti', component: TatetiComponent },
      { path: 'ahorcado', component: AhorcadoComponent },
      { path: 'mayor-o-menor', component: MayormenorComponent },
      { path: 'preguntados', component: PreguntadosComponent },
      { path: 'propio', component: PropioComponent },
    ]
  },
  { path: 'quienSoy', component: QuienSoyComponent },
  { path: 'admin', component: AdminComponent, canActivate:[PerfilesGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'encuesta', component: EncuestaComponent, canActivate:[PerfilesGuard] },
  { path: '**', component: HomeComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
