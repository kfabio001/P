import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GamesListComponent } from './components/games-list/games-list.component';

// Services
import { GamesService } from './services/games.service';
import { GameFormComponent } from './components/game-form/game-form.component';
import { TablaCursoComponent } from './components/tabla-curso/tabla-curso.component';
import { TablaPensumComponent } from './components/tabla-pensum/tabla-pensum.component';
import { PerfilEditComponent } from './components/perfil-edit/perfil-edit.component';
import { MyperfilComponent } from './components/myperfil/myperfil.component';
import { CargarDatosComponent } from './components/cargar-datos/cargar-datos.component';
import { EnviarCartaComponent } from './components/enviar-carta/enviar-carta.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilPadreComponent } from './components/perfil-padre/perfil-padre.component';
import { PadreCartasComponent } from './components/padre-cartas/padre-cartas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GamesListComponent,
    GameFormComponent,
    TablaCursoComponent,
    TablaPensumComponent,
    PerfilEditComponent,
    MyperfilComponent,
    CargarDatosComponent,
    EnviarCartaComponent,
    AdminComponent,
    LoginComponent,
    PerfilPadreComponent,
    PadreCartasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
