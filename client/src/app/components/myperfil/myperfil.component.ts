import { Component, OnInit, HostBinding } from '@angular/core';

import { PerfilService } from '../../services/perfil.service';
import { Hijo } from 'src/app/models/Hijo';
import { Juguete } from 'src/app/models/Juguete';
import { listaAcciones } from 'src/app/models/listaAcciones';
import { Router, ActivatedRoute } from '@angular/router';
import { CursoAprobado } from 'src/app/models/CursoAprobado';
import { Acciones } from 'src/app/models/Acciones';
@Component({
  selector: 'app-myperfil',
  templateUrl: './myperfil.component.html',
  styleUrls: ['./myperfil.component.css']
})
export class MyperfilComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  perfils: any = [];
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
  acciones:any=[];
  accioness: Acciones = {
    idAccion: 0,
    nombre: '',
    descripcion: '',
    bastones: '',
    edad: 0
    }
  suma: any = {
    Creditos: 0
  }
   catego="categoria1";
  edad: any
  juguetes: any=[];
  juguetess: Juguete = {
  idJuguete: 0,
  nombre: '',
  categoria: '',
  bastones: '',
  edad: '',
  }
  listaAcciones: listaAcciones = {
  idHijo:0,
    idAccion: 0,
    estado:''
  }
  //edit: boolean = false;

  constructor(private perfilService: PerfilService, private router: Router, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
   // this.getGames();
    
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.perfilService.getGame(params.id) 
        .subscribe(
          res => {
            console.log(res); 
            this.perfilss = res;
            console.log(this.perfilss.edad)
            //this.perfilService.saveAccion(this.juguetess)
            this.getAcciones(this.perfilss.idHijo,this.perfilss.edad);
           // this.edad=this.perfilss.edad;
           // console.log(this.perfilss);
           // this.edit = true; 
          },
          err => console.log(err)
        )
    }
    
    
    //this.getCursos(params.carnet);
    this.getSuma(params.id);
    
  }
/*getCursos(id: string){
  this.perfilService.getcursosA(id)
      .subscribe(
        res => {
          console.log(res);
         // this.cursos = res;
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
}*/
getJuguetes(edad:string,bastones:string){
  this.perfilService.getJuguetes(edad,bastones)
      .subscribe(
        res => {
          console.log(res);
          this.juguetes = res;
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
}
getAcciones(id:number,edad:string){
  this.perfilService.getAccion(id,edad)
      .subscribe(
        res => {
          console.log(res);
          this.acciones = res;
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
}
saveListaAcciones(idHijo:number,idAccion:number){
  this.listaAcciones.idHijo=idHijo;
  this.listaAcciones.idAccion=idAccion;
  this.listaAcciones.estado='No Confirmado';
  console.log(this.listaAcciones)
  this.perfilService.saveListaAcciones(this.listaAcciones)
      .subscribe(
        res => {
          console.log(res);
          //this.acciones = res;
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
}
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
          this.getJuguetes(this.edad,this.suma.creditos);  
          this.getAcciones(this.perfilss.idHijo,this.perfilss.edad);
          console.log('10',this.catego)
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
  }
  getJuguetess() {
    this.perfilService.getGames()
      .subscribe(
        res => {
          //console.log(res);
          //this.perfils = res;
          this.getJuguetes(this.edad,this.suma.creditos);  
          console.log('10',this.catego)
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
  }
  

}
/*<table class="table" *ngFor="let juguet of juguetes">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">id </th>
      <th scope="col">Nombre</th>
      <th scope="col">Categoria</th>
      <th scope="col">Bastones</th>
      <th scope="col">Edad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{{juguet.idJuguete}}</td>
      <td>{{juguet.nombre}}</td>
      <td>{{juguet.categoria}}</td>
      <td>{{juguet.bastones}}</td>
      <td>{{juguet.edad}}</td>
    </tr>
    
</table>
*/