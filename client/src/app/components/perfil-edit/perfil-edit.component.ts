import { Component, OnInit, HostBinding } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { Padre } from 'src/app/models/Padre';
import { Hijo } from 'src/app/models/Hijo';
import { Municipio } from 'src/app/models/Municipio';
import { Departamento } from 'src/app/models/Departamento';
import { Router, ActivatedRoute } from '@angular/router';
import { CursoAprobado } from 'src/app/models/CursoAprobado';
@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.component.html',
  styleUrls: ['./perfil-edit.component.css']
})
export class PerfilEditComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  perfils: any = [];
  perfil: Padre = {
    idPadre: 0,
    Nombre: 'nombre5',
    email: 'email5',
    contra: 'contra5',
    telefono:'55',
    bastones:'55',
    direccion:'direccion5'
  }
  perfilHijo: Hijo = {
    idHijo: 0,
    nombre: 'nombre5',
    sexo: 'sexo5',
    edad: '5',
    email: 'email5',
    contra: 'contra5',
    bastones: '55',
    bastonesG: '5',
    idPadre: 1
  }
  muni: Municipio = {
    idMunicipio: 0,
    Municipio: 'municipio5',
    idDepartamento: 1
    
  }
  depa: Departamento = {
    idDepartamento: 0,
    departamento: 'departamento7'
    
    
  }
  suma: any = {
    Creditos: 0
  }
  cursos: any=[]; 

  //edit: boolean = false;

  constructor(private perfilService: PerfilService, private router: Router, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
   // this.saveNewGame();
    
    //const params = this.activatedRoute.snapshot.params;
   /* if (params.carnet) {
      this.perfilService.getGame(params.carnet)
        .subscribe(
          res => {
            console.log(res);
            this.perfilss = res;
           // console.log(this.perfilss);
           // this.edit = true;
          },
          err => console.log(err)
        )
    }*/
    //this.getCursos(params.carnet);
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
  getDepa(id: string) {
    this.perfilService.getDepa(id)
      .subscribe(
        res => {
          console.log(res);
          this.depa = res;
          this.muni.idDepartamento=this.depa.idDepartamento;

        },
        err => console.error(err)
      );
  }
  /*updateGame() {
    //delete this.game.created_at;
    this.perfilService.updateGame(this.perfilss.Carnet, this.perfilss)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/perfil/myperfil', this.perfilss.Carnet]);
        },
        err => console.error(err)
      )
  }*/
  saveNewGame() {
    //delete this.perfilss.CursoP;
    //delete this.perfilss.NotaAprobada;
    //delete this.perfilss.CarnetU;
    this.saveNewDepa()
    this.perfilService.saveGame(this.perfil)
      .subscribe(
        res => {
          console.log(res);
          this.getDepa(this.depa.departamento)
          
          this.saveNewMuni()
          this.saveNewHijo()
          //this.router.navigate(['/perfil/myperfil', this.perfil.Carnet]);
        },
        err => console.error(err)
      )
  }
  saveNewMuni() {
    //delete this.perfilss.CursoP;
    //delete this.perfilss.NotaAprobada;
    //delete this.perfilss.CarnetU;
    
    this.perfilService.saveMuni(this.muni)
      .subscribe(
        res => {
          console.log(res);
         // this.getDepa(this.depa.Nombre)
          //this.router.navigate(['/perfil/myperfil', this.perfil.Carnet]);
        },
        err => console.error(err)
      )
  }
  saveNewDepa() {
    this.perfilService.saveDepa(this.depa)
      .subscribe(
        res => {
          console.log(res);
         
        },
        err => console.error(err)
      )
  }
  saveNewHijo() {
    //delete this.perfilss.CursoP;
    //delete this.perfilss.NotaAprobada;
    //delete this.perfilss.CarnetU;
    
    this.perfilService.saveHijo(this.perfilHijo)
      .subscribe(
        res => {
          console.log(res);
         // this.getDepa(this.depa.Nombre)
          //this.router.navigate(['/perfil/myperfil', this.perfil.Carnet]);
        },
        err => console.error(err)
      )
  }
}
