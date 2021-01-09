import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';
import { Padre } from 'src/app/models/Padre';
import { Hijo } from 'src/app/models/Hijo';
import { Municipio } from 'src/app/models/Municipio';
import { Departamento } from 'src/app/models/Departamento';
import { Curso } from '../models/Curso';
import { CursoAprobado } from '../models/CursoAprobado';
import { PensumSistemas } from '../models/PensumSistemas';
import { Observable } from 'rxjs';
import { Acciones } from '../models/Acciones';
import { Carta } from '../models/Carta';
import { Lista } from '../models/Lista';
import { Juguete} from '../models/Juguete';
import { Login} from '../models/login';
import { listaAcciones } from '../models/listaAcciones';
@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  //API_URI = 'http://localhost:3007/user'; 
  API_URI = 'http://35.193.181.247:3005/user';  
  constructor(private http: HttpClient) { }

//prueba de conexion no se usa obtiene los perfiles de todos los estudiantes no se usa 
  

//obtiene el perfil mandado por un parametro
getReporte1() {
  return this.http.get(`${this.API_URI}/reporte1`); 
}
getReporte3() {
  return this.http.get(`${this.API_URI}/reporte3`); 
}
getReporte4() {
  return this.http.get(`${this.API_URI}/reporte4`); 
}
getReporte6() {
  return this.http.get(`${this.API_URI}/reporte6`); 
}
getReporte7() {
  return this.http.get(`${this.API_URI}/reporte7`); 
}
getGames() {
  return this.http.get(`${this.API_URI}/getHIJO`); 
}
  getPadref(id: string) {
    return this.http.get(`${this.API_URI}/getPadref/${id}`);  
  }
  getGame(id: string) {
    return this.http.get(`${this.API_URI}/getHijof/${id}`);  
  }
  getHijoId(id: number) {
    return this.http.get(`${this.API_URI}/getHijoId/${id}`);  
  }
  getListaAId(id: number, Hijo:number) {
    return this.http.get(`${this.API_URI}/getListaAId/${id}/${Hijo}`);  
  }
  getDepa(id: string) {
    return this.http.get(`${this.API_URI}/getDepa/${id}`);  
  }
  getPadre(id: string) {
    return this.http.get(`${this.API_URI}/getPadre/${id}`);  
  }
  getIdHijo(id: string) {
    return this.http.get(`${this.API_URI}/getIdHijo/${id}`);  
  }
  getIdJuguete(id: string) {
    return this.http.get(`${this.API_URI}/getIdJuguete/${id}`);  
  }
  //obtiene los cursos faltantes 
  getcursos(id: string) {
    return this.http.get(`${this.API_URI}/perfil/pensum/${id}`);
  }
  getAccion(id: number,edad:string) {
    return this.http.get(`${this.API_URI}/getAcciones/${id}/${edad}`);
  }
  getAccionesPadre(id: number,edad:string) {
    return this.http.get(`${this.API_URI}/getAccionesPadre/${id}/${edad}`);
  }
  getJuguetes(edad: string, bastones:string) {
    //let info = { edad, categoria };
    return this.http.get(`${this.API_URI}/getJuguete/${edad}/${bastones}` );
  }
  getJuguetesPaddres(id:number) {
    //let info = { edad, categoria };
    return this.http.get(`${this.API_URI}/getJuguetePadres/${id}` );
  }
  getJuguetesPadres2(id:number) {
    //let info = { edad, categoria };
    return this.http.get(`${this.API_URI}/getJuguetePadres2/${id}` );
  }
  // obtiene la suma de los creditos
  getCreditos(id: string) {
    return this.http.get(`${this.API_URI}/getCreditos/${id}`); 
  }
  getSuma(id: string) {
    return this.http.get(`${this.API_URI}/getCreditos/${id}`);
  }
  getCarta(id: number,fecha:string) {
    return this.http.get(`${this.API_URI}/getCarta/${id}/${fecha}`);
  }
  getCarta2(id: number) {
    return this.http.get(`${this.API_URI}/getCarta2/${id}`);
  }
//  deleteGame(id: string) {
  //  return this.http.delete(`${this.API_URI}/games/${id}`);
  //}
// aun en prueba agrega cursos aprobados
  saveGame(perfil: Padre) {
    return this.http.post(`${this.API_URI}/registroPadre`, perfil);
  }
  saveListaAcciones(perfil: Acciones) {
    return this.http.post(`${this.API_URI}/confirmarAcciones`, perfil);
  }
  confirmarLista(perfil: Lista) {
    return this.http.post(`${this.API_URI}/cartas`, perfil);
  }
  confirmarCartas(perfil: Carta) {
    return this.http.post(`${this.API_URI}/confirmarCarta`, perfil);
  }
  saveMuni(perfil: Municipio) {
    return this.http.post(`${this.API_URI}/registroMuni`, perfil);
  }
  saveDepa(perfil: Departamento) {
    return this.http.post(`${this.API_URI}/registroDepa`, perfil);
  }
  saveJuguete(perfil: Juguete) {
    return this.http.post(`${this.API_URI}/registroJuguete`, perfil);
  }
  saveAccion(perfil: Acciones) {
    return this.http.post(`${this.API_URI}/registroAccion`, perfil);
  }
  loginAdmin(perfil: Login) {
    return this.http.post(`${this.API_URI}/loginAdmin`, perfil);
  }
  loginHijo(perfil: Login) {
    return this.http.post(`${this.API_URI}/login`, perfil);
  }
  loginPadre(perfil: Login) {
    return this.http.post(`${this.API_URI}/loginPadre`, perfil);
  }
  saveHijo(perfil: Hijo) {
    return this.http.post(`${this.API_URI}/registroHijo`, perfil);
  }
// aun en prueba edita el perfil del estudiante
  updateGame(id: string|number, updatedGame: Padre): Observable<Game> {
    return this.http.put(`${this.API_URI}/perfil/${id}`, updatedGame);
  }
  updateHijo( updatedGame: Hijo): Observable<Hijo> {
    return this.http.put(`${this.API_URI}/updateHijo`, updatedGame);
  }
  updateListaA( updatedGame: listaAcciones): Observable<listaAcciones> {
    return this.http.put(`${this.API_URI}/updateListaA`, updatedGame);
  }
  updateLista( updatedGame: Carta): Observable<Carta> {
    return this.http.put(`${this.API_URI}/updateLista`, updatedGame);
  }
  updatePadre( updatedGame: Padre): Observable<Padre> {
    return this.http.put(`${this.API_URI}/updatePadre`, updatedGame);
  }


}
