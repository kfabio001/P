import { Component, OnInit, HostBinding } from '@angular/core';

import { PerfilService } from '../../services/perfil.service';
import { Hijo } from 'src/app/models/Hijo';
import { Juguete } from 'src/app/models/Juguete';
import { listaAcciones } from 'src/app/models/listaAcciones';
import { Router, ActivatedRoute } from '@angular/router';
import { CursoAprobado } from 'src/app/models/CursoAprobado';
import { Acciones } from 'src/app/models/Acciones';
import { Padre } from 'src/app/models/Padre';
@Component({
  selector: 'app-perfil-padre',
  templateUrl: './perfil-padre.component.html',
  styleUrls: ['./perfil-padre.component.css']
})
export class PerfilPadreComponent implements OnInit {
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
  idHijo: any
  viejo:number
  nuevo:number
  accioness: Acciones = {
    idAccion: 0,
    nombre: '',
    descripcion: '',
    bastones: '',
    edad: 0
    }
    accionesss: Acciones = {
      idAccion: 0,
      nombre: '',
      descripcion: '',
      bastones: '',
      edad: 0
      }
  suma: any = {
    Creditos: 0
  }
  padre:Padre={
    idPadre: 0,
    Nombre: '',
    email: '',
    contra: '',
    telefono: '',
    bastones:'',
    direccion: ''
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
      this.perfilService.getPadref(params.id) 
        .subscribe(
          res => {
            console.log(res); 
            this.padre = res;
            this.getHijo(this.padre.idPadre)
            //console.log(this.padre)
          },
          err => console.log(err)
        )
    }
    
    
    //this.getCursos(params.carnet);
   // this.getSuma(params.id);
    
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
getHijo(id:number){
  console.log(id)
  this.perfilService.getHijoId(id)
      .subscribe(
        res => {
          //console.log(res);
          this.perfilss = res;
        this.getAcciones(this.perfilss.idHijo,this.perfilss.edad)
          console.log(this.perfilss);
          this.idHijo=this.perfilss.idHijo
        },
        err => console.error(err)
      );
}
getListaAId(id:number,){
  console.log(id)
  let Hijo=this.perfilss.idHijo
  this.perfilService.getListaAId(id,Hijo)
      .subscribe(
        res => {
          console.log(res);
          this.listaAcciones = res;
          this.updateListaA(this.listaAcciones)
        //this.getAcciones(this.perfilss.idHijo,this.perfilss.edad)
          console.log(this.listaAcciones);
        },
        err => console.error(err)
      );
}

getAcciones(id:number,edad:string){
  //id=this.idHijo
  console.log(id)
  this.perfilService.getAccionesPadre(id,edad)
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
          //this.getAcciones(this.perfilss.idHijo,this.perfilss.edad);
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
  
  updateHijo(sumar:string) {
    var viejo=this.perfilss.bastonesG
    //this.viejo=this.viejo+sumar
    var nuevo=parseInt(viejo)+parseInt(sumar)
    this.perfilss.bastonesG=String(nuevo)
    console.log(nuevo)
   //this.perfilss.nombre='editado'
   console.log(this.perfilss)
   //this.perfilss.bastones='350000'
   //this.perfilss.edad='20'
    this.perfilService.updateHijo(this.perfilss)
      .subscribe(
        res => { 
          console.log(res);
          //this.router.navigate(['/perfil/myperfil', this.perfilss.Carnet]);
        },
        err => console.error(err)
      )
  }
  updateHijo2() {
   console.log(this.perfilss)

    this.perfilService.updateHijo(this.perfilss)
      .subscribe(
        res => { 
          console.log(res);
          //this.router.navigate(['/perfil/myperfil', this.perfilss.Carnet]);
        },
        err => console.error(err)
      )
  }
  updatePadre() {
    this.padre.Nombre='editado'
    console.log(this.padre)
     this.perfilService.updatePadre(this.padre)
       .subscribe(
         res => { 
           console.log(res);
           //this.router.navigate(['/perfil/myperfil', this.perfilss.Carnet]);
         },
         err => console.error(err)
       )
   }
   updateListaA(listaAcciones:listaAcciones) {
    //this.listaAcciones
    console.log(listaAcciones)
    listaAcciones.estado='Confirmado'
     this.perfilService.updateListaA(listaAcciones)
       .subscribe(
         res => { 
           console.log(res);
           console.log(listaAcciones)
           //this.router.navigate(['/perfil/myperfil', this.perfilss.Carnet]);
         },
         err => console.error(err)
       )
   }
   getListaAIdD(id:number,){
    console.log(id)
    let Hijo=this.perfilss.idHijo
    this.perfilService.getListaAId(id,Hijo)
        .subscribe(
          res => {
            console.log(res);
            this.listaAcciones = res;
            this.updateListaAD(this.listaAcciones)
          //this.getAcciones(this.perfilss.idHijo,this.perfilss.edad)
            console.log(this.listaAcciones);
          },
          err => console.error(err)
        );
  }
   updateListaAD(listaAcciones:listaAcciones) {
    //this.listaAcciones
    console.log(listaAcciones)
    listaAcciones.estado='Borrado'
     this.perfilService.updateListaA(listaAcciones)
       .subscribe(
         res => { 
           console.log(res);
           console.log(listaAcciones)
           //this.router.navigate(['/perfil/myperfil', this.perfilss.Carnet]);
         },
         err => console.error(err)
       )
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