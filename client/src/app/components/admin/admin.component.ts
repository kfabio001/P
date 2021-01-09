import { Component, OnInit, HostBinding  } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { Hijo } from 'src/app/models/Hijo';
import { Padre } from 'src/app/models/Padre';
import { Juguete } from 'src/app/models/Juguete';
import { listaAcciones } from 'src/app/models/listaAcciones';
import { Router, ActivatedRoute } from '@angular/router';
import { CursoAprobado } from 'src/app/models/CursoAprobado';
import { Acciones } from 'src/app/models/Acciones';
import { Lista } from 'src/app/models/Lista';
import { Carta } from 'src/app/models/Carta';
import { Temporal } from 'src/app/models/Temporal';
import { Municipio } from 'src/app/models/Municipio';
import { Departamento } from 'src/app/models/Departamento';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
///import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @HostBinding('class') clases = 'row';
//<input type="file" id="archivo"><br>
  perfils: any = [];
  perfil:Padre={
    idPadre: 0,
    Nombre: '',
    email: '',
    contra: '',
    telefono: '',
    bastones:'',
    direccion: ''
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
  hijo: Hijo = {
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
  sumas: any = {
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
  juguete: Juguete = {
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
  muni: Municipio = {
    idMunicipio: 0,
    Municipio: 'municipio5',
    idDepartamento: 1
    
  }
  depa: Departamento = {
    idDepartamento: 0,
    departamento: 'departamento7'
    
    
  }
  depas: Departamento = {
    idDepartamento: 0,
    departamento: 'departamento7'
    
    
  }
  Carta: Carta = {
    idCarta:0,
    idHijo: 0,
    estado:'',
    //contenido:'',
    fecha:''
  }
  Cartas: Carta = {
    idCarta:0,
    idHijo: 0,
    estado:'',
    //contenido:'',
    fecha:''
  }
 
  Temporal: Temporal = {
  correo: '',
    contra: '',
    nombreHijo:'',
    nombrePadre: '',
    nickHijo: '',
    municipio: '',
    departamento: '',
    descripcionDireccion: '',
    latitud: '',
    longitud: '',
    telefono: '',
    fechaCarta: '',
    nombreJuguete: '',
    categoria: '',
    precioJuguete: '',
    edad: ''
  }


  constructor(private perfilService: PerfilService, private router: Router, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    
   /* const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.perfilService.getGame(params.id) 
        .subscribe(
          res => {
            console.log(res); 
            this.perfilss = res;
            console.log(this.perfilss.edad)
            this.getAcciones('9');
            this.getJuguetess();
           // this.edad=this.perfilss.edad;
          },
          err => console.log(err)
        )
    }*/
    //this.getSuma(params.id);
    
  }

getReporte1(){
  this.perfilService.getReporte1()
      .subscribe(
        res => {
          console.log(res);
          this.juguetes = res;
        },
        err => console.error(err)
      );
}
getReporte3(){
  this.perfilService.getReporte3()
      .subscribe(
        res => {
          console.log(res);
          this.juguetes = res;
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
}
getReporte4(){
  this.perfilService.getReporte4()
      .subscribe(
        res => {
          console.log(res);
          this.juguetes = res;
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
}
getReporte6(){
  this.perfilService.getReporte6()
      .subscribe(
        res => {
          console.log(res);
          this.juguetes = res;
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
}
getReporte7(){
  this.perfilService.getReporte7()
      .subscribe(
        res => {
          console.log(res);
          this.juguetes = res;
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
}
getJuguetes(edad:string,categoria:string,bastones:string){
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
  this.listaAcciones.estado='Confirmado';
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
  this.Carta.estado='Confirmado';
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
  console.log(this.lista)
  
  this.lista.idJuguete=idJuguete;
  this.lista.idCarta=idCarta;
 // console.log(this.lista)
  this.perfilService.confirmarLista(this.lista)
      .subscribe(
        res => {
          console.log("res");
          //this.acciones = res;
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
}
getSuma(){
  let id=this.sumas.Creditos
  //console.log(id)
  let arrayFilas
  let arrayFilass=[];
  let icarga=id.split("\n")
  for (var t=1;t<icarga.length;t++) {
    if (icarga[t].length!=0) {
        arrayFilas=icarga[t].split(",");
        
        //console.log(icarga[0])
        //console.log(arrayFilas[0])
       // this.getDepa(arrayFilas[6])
        //this.getHijo(arrayFilas[4])
       
       // this.getJuguete(arrayFilas[12])
    }
    
this.perfil.email=arrayFilas[0]
this.perfil.contra=arrayFilas[1]
this.perfilss.contra=arrayFilas[1]
this.perfilss.nombre=arrayFilas[2]
this.perfil.Nombre=arrayFilas[3]
this.perfil.bastones='0'
this.perfilss.bastones='0'
this.perfilss.bastonesG='0'
this.perfilss.email=arrayFilas[4]
this.perfilss.sexo='sexo1'
this.perfilss.edad='5'
this.muni.Municipio=arrayFilas[5]
//this.getDepa(arrayFilas[6])
//this.muni.idDepartamento=
console.log(arrayFilas[6])
this.depa.departamento=arrayFilas[6]
this.perfil.direccion=arrayFilas[7]
this.Temporal.latitud=arrayFilas[8]
this.Temporal.longitud=arrayFilas[9]
this.perfil.telefono=arrayFilas[10]
var rep=arrayFilas[11].replaceAll('/','')
this.Carta.fecha=rep
this.Carta.estado='Confirmado'
this.juguetess.nombre=arrayFilas[12]
this.juguetess.categoria=arrayFilas[13]
this.juguetess.bastones=arrayFilas[14]
this.juguetess.edad=arrayFilas[15]
console.log(this.perfil)
this.getRegistrarPadre()
console.log(this.juguetess)
this.getRegistrarJuguete(this.juguetess)
this.getPadre(arrayFilas[0])
this.getJuguete(this.juguetess.nombre)
this.getRegistrarDepartamento()

this.getDepa(arrayFilas[6])
this.getRegistrarMunicipio()

this.getHijo(arrayFilas[4])
this.getRegistrarCarta()
//console.log(this.Carta)
//this.getRegistrarCarta()
//this.getCarta(this.Carta.idHijo,this.Carta.fecha,0)



//this.getRegistrarLista()

//console.log(this.muni)
  }
 
  
}
getDepa(id: string) {
  this.perfilService.getDepa(id)
    .subscribe(
      res => {
       // console.log(res);
        this.depas = res;
        this.muni.idDepartamento=this.depas.idDepartamento;
        console.log(this.muni);
        //this.saveNewMuni();
      },
      err => console.error(err)
    );
}
getJuguete(id: string) {
  this.perfilService.getIdJuguete(id)
    .subscribe(
      res => {
        //console.log(res);
        this.juguete = res;
        //this.lista.idJuguete=this.juguete.idJuguete;
       // this.getRegistrarJuguete(this.juguete)
        
        this.lista.idJuguete=this.juguete.idJuguete
        console.log(this.lista);
        //this.getRegistrarLista(this.lista)
        //this.getCarta(this.Carta.idHijo,this.Carta.fecha,0)
        //this.saveNewMuni();
      },
      err => console.error(err)
    );
}
getHijo(id: string) {
  this.perfilService.getIdHijo(id)
    .subscribe(
      res => {
        console.log(res);
        this.perfilss = res;
        
        //this.getRegistrarCarta()
        //this.getCarta(this.Carta.idHijo,this.Carta.fecha,0)
        console.log(this.perfilss);
       
        
        //this.getCarta(this.Carta.idHijo,this.Carta.fecha,0)
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
        console.log(this.padre)
        this.perfilss.idPadre=this.padre.idPadre;
       console.log(this.perfilss);
       this.getRegistrarHijo()
        //this.perfilService.saveGame(this.perfil)
        //this.saveNewMuni();
      },
      err => console.error(err)
    );
}
getRegistrarPadre() {
  this.perfilService.saveGame(this.perfil)
    .subscribe(
      res => {
        
      },
      err => console.error(err)
    );
}
getRegistrarDepartamento() {
  console.log(this.depa)
  this.perfilService.saveDepa(this.depa)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
}
getRegistrarMunicipio() {
  this.perfilService.saveMuni(this.muni)
    .subscribe(
      res => {
        //console.log(res);
      },
      err => console.error(err)
    );
}
getRegistrarHijo() {
 this.perfilss.idPadre=this.padre.idPadre;
  this.perfilService.saveHijo(this.perfilss)
    .subscribe(
      res => {
        console.log(res);
        this.getHijo(this.perfilss.email)
      },
      err => console.error(err)
    );
}
getRegistrarCarta() {
  this.Carta.idHijo=this.perfilss.idHijo;
  console.log(this.Carta)
  this.perfilService.confirmarCartas(this.Carta)
    .subscribe(
      res => {
        this.getCarta(this.Carta.idHijo,this.Carta.fecha,0)
       // console.log(res);
      },
      err => console.error(err)
    );
}
crearAccion() {
  console.log(this.accioness)
  this.perfilService.saveAccion(this.accioness)
    .subscribe(
      res => {
       // console.log(res);
      },
      err => console.error(err)
    );
}
getRegistrarJuguete(juguetess:Juguete) {
  //this.lista.idJuguete=this.juguete.idJuguete;
  this.perfilService.saveJuguete(juguetess)
    .subscribe(
      res => {
       // console.log(res);
       
      },
      err => console.error(err)
    );
}
getRegistrarLista(lista:Lista) {
  console.log(lista)
  this.perfilService.confirmarLista(lista)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
}
//(click)="saveListaAcciones(perfilss.idHijo,accion.idAccion)"
getCarta(idHijo:number,fecha:string,id: number){
  this.perfilService.getCarta(idHijo,fecha)
      .subscribe(
        res => {
          //console.log(res);
          this.Cartas = res;
          console.log(this.lista)
          this.lista.idCarta=this.Cartas.idCarta
        //  this.Carta.idHijo=this.perfilss.idHijo;
          //this.idCarta=this.Carta.idCarta
          //this.saveListaJ(id,this.Carta.idCarta)
          console.log(this.lista);
          this.saveListaJ(this.lista.idJuguete,this.lista.idCarta)
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
          this.getJuguetes(this.edad,this.catego,this.sumas.creditos);  
          //this.getAcciones(this.perfilss.edad);
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
          this.getJuguetes('10',this.catego,this.sumas.creditos);  
          console.log('10',this.catego)
          //console.log(this.perfils[1]);
        },
        err => console.error(err)
      );
  }
  /*this.Temporal.correo=arrayFilas[0]
this.Temporal.contra=arrayFilas[1]
this.Temporal.nombreHijo=arrayFilas[2]
this.Temporal.nombrePadre=arrayFilas[3]
this.Temporal.nickHijo=arrayFilas[4]
this.Temporal.municipio=arrayFilas[5]
this.Temporal.departamento=arrayFilas[6]
this.Temporal.descripcionDireccion=arrayFilas[7]
this.Temporal.latitud=arrayFilas[8]
this.Temporal.longitud=arrayFilas[9]
this.Temporal.telefono=arrayFilas[10]
this.Temporal.fechaCarta=arrayFilas[11]
this.Temporal.nombreJuguete=arrayFilas[12]
this.Temporal.categoria=arrayFilas[13]
this.Temporal.precioJuguete=arrayFilas[14]
this.Temporal.edad=arrayFilas[15]*/

   
  
}
