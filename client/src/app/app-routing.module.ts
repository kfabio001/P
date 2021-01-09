import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesListComponent } from './components/games-list/games-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { TablaCursoComponent } from './components/tabla-curso/tabla-curso.component';
import { MyperfilComponent  } from './components/myperfil/myperfil.component';
import { PerfilEditComponent } from './components/perfil-edit/perfil-edit.component';
import { CargarDatosComponent } from './components/cargar-datos/cargar-datos.component';
import { TablaPensumComponent} from './components/tabla-pensum/tabla-pensum.component';
import { AdminComponent} from './components/admin/admin.component';
import { LoginComponent} from './components/login/login.component';
import { PerfilPadreComponent} from './components/perfil-padre/perfil-padre.component';
import { EnviarCartaComponent} from './components/enviar-carta/enviar-carta.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'perfil',
    pathMatch: 'full'
  },
  { //perfil al que se le pasa un carnet como parametro y muestra cursos aprobados y datos de estudiante
    path: 'perfil',
    component: GameFormComponent
  },

  { //perfil al que se le pasa un carnet como parametro y muestra cursos aprobados y datos de estudiante
    path: 'cartas/:id',
    component: TablaCursoComponent
  },
  {// perfil del usuaario logueado con el parametro y muestra cursos aprobados y datos de estudiante
    path: 'perfil/myperfil/:id',
    component: MyperfilComponent 
  }
  ,
  {// perfil del usuaario logueado con el parametro y muestra cursos aprobados y datos de estudiante
    path: 'perfilPadre/:id', 
    component: PerfilPadreComponent  
  }
  ,
  {//editar perfil del usuaario logueado con el parametro y muestra cursos aprobados y datos de estudiante
    path: 'edit', 
    component: PerfilEditComponent 
  }
  ,
  {//editar perfil del usuaario logueado con el parametro y muestra cursos aprobados y datos de estudiante
    path: 'admin/:id', 
    component: AdminComponent 
  }
  ,
  {// carga curos aprobados
    path: 'login',
    component: LoginComponent
  }
  ,
  {// carga curos aprobados
    path: 'registro',
    component: EnviarCartaComponent
  }
  ,
  {  // muestra los cursos faltantes de aprobar
    path: 'cartasPadre/:id',
    component: TablaPensumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
