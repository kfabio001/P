import { Component, OnInit, HostBinding  } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { Hijo } from 'src/app/models/Hijo';
import { Juguete } from 'src/app/models/Juguete';
import { listaAcciones } from 'src/app/models/listaAcciones';
import { Router, ActivatedRoute } from '@angular/router';
import { CursoAprobado } from 'src/app/models/CursoAprobado';
import { Acciones } from 'src/app/models/Acciones';
import { Lista } from 'src/app/models/Lista';
import { Carta } from 'src/app/models/Carta';
@Component({
  selector: 'app-tabla-pensum',
  templateUrl: './tabla-pensum.component.html',
  styleUrls: ['./tabla-pensum.component.css']
})
export class TablaPensumComponent implements OnInit {
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
   idCarta=0;
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
  lista: Lista = {
    idCarta:0,
    idJuguete: 0,
    idLista:0
  }
  Carta: Carta = {
    idCarta:0,
    idHijo: 0,
    estado:'',
    //contenido:'',
    fecha:''
  }

  constructor(private perfilService: PerfilService, private router: Router, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.perfilService.getGame(params.id) 
        .subscribe(
          res => {
            console.log(res); 
            this.perfilss = res;
            console.log(this.perfilss)
           
            //this.getAcciones('9');
            //this.getJuguetes(this.perfilss.edad,this.suma.creditos);
            this.getJuguetess();
           // this.edad=this.perfilss.edad;
          },
          err => console.log(err)
        )
    }
    this.getSuma(params.id);
    
  }

getJuguetes(id:number){
  this.perfilService.getJuguetesPadres2(id)
      .subscribe(
        res => {
          console.log(res);
          
          this.juguetes = res;
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
        this.getJuguetes(this.perfilss.idHijo);  
        console.log('10',this.suma.creditos)
        //console.log(this.perfils[1]);
      },
      err => console.error(err)
    );
}
updateHijo(restar:string) {
  var viejo=this.perfilss.bastonesG
  //this.viejo=this.viejo+sumar
  var nuevo=parseInt(viejo)-parseInt(restar)
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
/*updatePadre() {
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
 }*/
 getCarta(id:number){
  this.perfilService.getCarta2(id)
      .subscribe(
        res => {
          console.log(res);
          
          this.Carta = res;
          this.updateLista(this.Carta)
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
}
 updateLista(listaAcciones:Carta) {
  //this.listaAcciones
  console.log(listaAcciones)
  listaAcciones.estado='Confirmado'
   this.perfilService.updateLista(listaAcciones)
     .subscribe(
       res => { 
         console.log(res);
         console.log(listaAcciones)
         //this.router.navigate(['/perfil/myperfil', this.perfilss.Carnet]);
       },
       err => console.error(err)
     )
 }
/*getAcciones(edad:string){
  this.perfilService.getAccion(edad)
      .subscribe(
        res => {
          console.log(res);
          this.acciones = res;
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
}*/
saveListaJuguetes(idHijo:number,idAccion:number){
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
saveLista(){
  this.Carta.idHijo=this.perfilss.idHijo;
  this.Carta.estado='No Confirmada';
  //this.Carta.contenido=contenido;
  this.Carta.fecha='fecha';
  console.log(this.Carta)
  this.perfilService.confirmarCartas(this.Carta)
      .subscribe(
        res => {
          console.log(res);
          //this.acciones = res;
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
}
saveListaJ(idJuguete:number,idCarta:number){
  let idHijo=this.perfilss.idHijo
  
  this.lista.idJuguete=idJuguete;
  this.lista.idCarta=idCarta;
  console.log(this.lista)
  this.perfilService.confirmarLista(this.lista)
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
//(click)="saveListaAcciones(perfilss.idHijo,accion.idAccion)"
/*getCarta(idHijo:number,fecha:string,id: number){
  this.perfilService.getCarta(idHijo,fecha)
      .subscribe(
        res => {
          console.log(res);
          this.Carta = res;
          //this.idCarta=this.Carta.idCarta
          this.saveListaJ(id,this.Carta.idCarta)
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
          this.getJuguetes(this.perfilss.idHijo);  
          //this.getAcciones(this.perfilss.edad);
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

<table class="table" *ngFor="let accion of acciones">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">id </th>
        <th scope="col">Nombre</th>
        <th scope="col">Categoria</th>
        <th scope="col">Bastones</th>
        <th scope="col">Edad</th>
        <th scope="col">Confirmar</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>{{accion.idAccion}}</td>
        <td>{{accion.nombre}}</td>
        <td>{{accion.descripcion}}</td>
        <td>{{accion.bastones}}</td>
        <td>{{accion.edad}}</td>
        <td><a (click)="saveListaAcciones(perfilss.idHijo,accion.idAccion)" class="btn btn-info btn-block">
          REALIZADO
        </a>
      </td>
      </tr>
      
  </table>
  
*/