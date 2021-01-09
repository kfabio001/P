import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Game';

import { GamesService } from 'src/app/services/games.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PerfilService } from '../../services/perfil.service';
import { Padre } from 'src/app/models/Padre';
import { Hijo } from 'src/app/models/Hijo';


import { CursoAprobado } from 'src/app/models/CursoAprobado';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  perfils: any = [];
  /*perfilss: Padre = {
    idPadre: 0,
    Nombre: '',
    email: '',
    contra: '',
    telefono:'',
    bastones:'',
    direccion:''
  }*/
  
  perfilss: Hijo = {
    idHijo: 0,
    nombre: '',
    sexo: '',
    edad: '',
    email: '',
    contra: '',
    bastones: '',
    bastonesG: '',
    idPadre: 0
  }
  suma: any = {
    Creditos: 0
  }
  cursos: any=[];

  //edit: boolean = false;

  constructor(private perfilService: PerfilService, private router: Router, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.getGames();
    
   /* const params = this.activatedRoute.snapshot.params;
    if (params.carnet) {
      this.perfilService.getGame(params.carnet)
        .subscribe(
          res => {
           // console.log(res);
            this.perfilss = res;
           // console.log(this.perfilss);
           // this.edit = true;
          },
          err => console.log(err)
        )
    }*/
   // this.getCursos(params.carnet);
    //this.getSuma(params.carnet);
  }
/*getCursos(id: string){
  this.perfilService.getcursosA(id)
      .subscribe(
        res => {
          console.log(res);
          this.cursos = res;
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
}*/
getSuma(id: string){
  this.perfilService.getCreditos(id)
      .subscribe(
        res => {
          console.log(res);
          this.suma = res;
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
}
  getGames() {
    this.perfilService.getGames() 
      .subscribe(
        res => {
          console.log(res);
          this.perfils = res;
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
  }

}
