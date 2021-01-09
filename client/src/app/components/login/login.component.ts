import { Component, OnInit, HostBinding } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { Padre } from 'src/app/models/Padre';
import { Hijo } from 'src/app/models/Hijo';
import { Municipio } from 'src/app/models/Municipio';
import { Departamento } from 'src/app/models/Departamento';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from 'src/app/models/login';
import { Admin } from 'src/app/models/Admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @HostBinding('class') clases = 'row';
  admin: Admin= {
  idAdmin: 0,
    Nombre: '',
    email: '',
    contra: ''
  }
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
  login: Login = {
    email:'',
    contra: ''
  }
  suma: any = {
    Creditos: 0
  }
  cursos: any=[]; 

  //edit: boolean = false;

  constructor(private perfilService: PerfilService, private router: Router, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
   
  }

logins(){
  let respuesta
  this.perfilService.loginAdmin(this.login)
  .subscribe(
    res => {
      respuesta=res
this.admin=res
      console.log(respuesta);
      if(respuesta=!null){
        this.router.navigate(['admin/'+this.admin.idAdmin]);
      }
    },
    err => console.error(err)
  );
  if(respuesta==null){
    this.perfilService.loginHijo(this.login)
  .subscribe(
    res => {
      respuesta=res
      this.perfilHijo=res
      console.log(respuesta);
      if(respuesta=!null){
        this.router.navigate(['perfil/myperfil/'+this.perfilHijo.idHijo]);
      }
      
    },
    err => console.error(err)
  );
  }
  if(respuesta==null){
    this.perfilService.loginPadre(this.login)
  .subscribe(
    res => {
      respuesta=res
      console.log(respuesta);
      this.perfil=res
      if(respuesta=!null){
        this.router.navigate(['perfilPadre/'+this.perfil.idPadre]);
      }
      
    },
    err => console.error(err)
  );
  }
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




}

