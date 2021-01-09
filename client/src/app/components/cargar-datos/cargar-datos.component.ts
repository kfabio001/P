import { Component, OnInit, HostBinding } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { Padre } from 'src/app/models/Padre';
import { Hijo } from 'src/app/models/Hijo';
import { Municipio } from 'src/app/models/Municipio';
import { Departamento } from 'src/app/models/Departamento';
import { Router, ActivatedRoute } from '@angular/router';
import { CursoAprobado } from 'src/app/models/CursoAprobado';
@Component({
  selector: 'app-cargar-datos',
  templateUrl: './cargar-datos.component.html',
  styleUrls: ['./cargar-datos.component.css']
})
export class CargarDatosComponent implements OnInit {
  @HostBinding('class') clases = 'row';
   paramss = this.activatedRoute.snapshot.params;
  perfils: any = [];
  perfilss: CursoAprobado = {
    CarnetU: this.paramss.carnet,
    CursoP: 0,
    NotaAprobada: 0
  };

  perfil: Padre = {
    idPadre: 0,
    Nombre: '',
    email: '',
    contra: '',
    telefono:'',
    bastones:'',
    direccion:''
  }
  perfilHijo: Hijo = {
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
  muni: Municipio = {
    idMunicipio: 0,
    Municipio: '',
    idDepartamento: 0
    
  }
  depa: Departamento = {
    idDepartamento: 0,
    departamento: ''
    
    
  }
  suma: any = {
    Creditos: 0
  };
  cursos: any=[];

  edit: boolean = false;

  constructor(private perfilService: PerfilService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    //this.getSuma();
    const params = this.activatedRoute.snapshot.params;
    if (params.carnet) {
      this.perfilService.getGame(params.carnet)
        .subscribe(
          res => {
            console.log(res);
            this.perfil = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
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
  this.perfilService.getSuma(id)
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
          //console.log(res);
          this.perfils = res;
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
  }
  
getPerfil(){
 
}
 /* saveNewGame() {
    //delete this.perfilss.CursoP;
    //delete this.perfilss.NotaAprobada;
    //delete this.perfilss.CarnetU;
    this.perfilService.saveGame(this.perfilss)
      .subscribe(
        res => {
          console.log(res);
          //this.router.navigate(['/perfil/myperfil', this.perfil.Carnet]);
        },
        err => console.error(err)
      )
  }*/




}
