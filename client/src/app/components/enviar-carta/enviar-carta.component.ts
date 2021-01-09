import { Component, OnInit, HostBinding } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { Padre } from 'src/app/models/Padre';
import { Hijo } from 'src/app/models/Hijo';
import { Municipio } from 'src/app/models/Municipio';
import { Departamento } from 'src/app/models/Departamento';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enviar-carta', 
  templateUrl: './enviar-carta.component.html',
  styleUrls: ['./enviar-carta.component.css']
})
export class EnviarCartaComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  perfils: any = [];
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
  }
  cursos: any=[]; 
  padre:Padre={
    idPadre: 0,
    Nombre: '',
    email: '',
    contra: '',
    telefono: '',
    bastones:'',
    direccion: ''
  }
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
          console.log(this.muni.Municipio);
          this.saveNewMuni()
          //this.saveNewMuni();
        },
        err => console.error(err)
      );
  }
  getPadre(id: string) {
    //this.getRegistrarPadre()
    this.perfilService.getPadre(id)
      .subscribe(
        res => {
          //console.log(res);
          this.padre = res;
          this.perfilHijo.idPadre=this.padre.idPadre;
         console.log(this.perfilHijo);
         this.saveNewHijo(this.perfilHijo)
          //this.perfilService.saveGame(this.perfil)
          //this.saveNewMuni();
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
          
          
          this.getPadre(this.perfil.email)
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
    //delete this.perfilss.CursoP;
    //delete this.perfilss.NotaAprobada;
    //delete this.perfilss.CarnetU;
    
    this.perfilService.saveDepa(this.depa)
      .subscribe(
        res => {
          console.log(res);
         // this.getDepa(this.depa.Nombre)
          //this.router.navigate(['/perfil/myperfil', this.perfil.Carnet]);
        },
        err => console.error(err)
      )
  }
  saveNewHijo(perfilHijo:Hijo) {
    //delete this.perfilss.CursoP;
    //delete this.perfilss.NotaAprobada;
    //delete this.perfilss.CarnetU;
    this.perfilHijo.contra=this.perfil.contra
    this.perfilHijo.bastonesG='0'
    this.perfilHijo.bastones=this.perfil.bastones
    this.perfilService.saveHijo(perfilHijo)
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

