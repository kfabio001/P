import { Request, Response } from 'express'
import OracleDB from 'oracledb';
import { connection } from '../oracle' 

//let idDepartamento: string="1";
var nombreDepartamento: string="1";
export async function loginE(req: Request, res: Response) {
    let email = req.body.email;
    let pass = req.body.password;
    let query = `SELECT * FROM Estudiante WHERE email = '${email}' AND contrasena = '${pass}'`;
    let result: OracleDB.Result<any> = await connection.execute(query);
    try {
        if (result.rows) {
            if(result.rows.length==1){
                let response = {
                    auth: true
                    
                }
                res.json(response);
            }else{
                let response = {
                    auth: false
                    
                }
                res.json(response);
            }
            
            
        }
    } catch (err) {
        res.send(null);
    }
}
/*"email":"email2",
    "password": "contra2",
    "nombrePadre": "nombre2",
    "nombreHijo":"nombre2",
    "edad":"11",
    "dirreccion":"direccion2",
    "municipio":"municipio2",
    "departamento":"departamento2",
    "nick":"email2",
    "sexo":"sexo2",
   
    "bastones":"500"*/
    export async function reporte7(req: Request, res: Response) {
    
        // console.log("nose")
         let id = req.params.id;
         let fecha = req.params.fecha;
         let query = `SELECT temp.idCarta, temp.fecha, temp2.bastones FROM ( SELECT LISTA.idLista AS idLista, CARTA.idCarta AS idCarta, CARTA.fecha AS fecha FROM CARTA INNER JOIN LISTA ON CARTA.idCarta=LISTA.idCarta AND CARTA.estado='Confirmado')temp INNER JOIN (SELECT LISTA.idLista AS idLista, JUGUETES.bastones AS bastones  FROM JUGUETES INNER JOIN LISTA ON JUGUETES.idJuguetes=LISTA.idJuguetes) temp2 ON temp.idLista=temp2.idLista`;
         let result: OracleDB.Result<any> = await connection.execute(query);
         try {
             let response=[]
             
             
             let responses
             if (result.rows) {
                // res.send(result)
                 //for (let i = 0; i < result.rows.length; i++) {
                  responses = {
                     idCarta: result.rows[0][0],
                     estado: result.rows[0][1],
                     fecha: result.rows[0][2],
                     idHijo: result.rows[0][3]
                     
                    
                // }
                 //response.push(responses);
             }
                 res.json(responses);
             }
         } catch (err) {
             res.send("null");
         }
         
     }
    export async function reporte4(req: Request, res: Response) {
    
        // console.log("nose")
         let edad = req.params.edad;
         //edad='11'
         let id=req.params.id
        // console.log(edad)
        // let query = ` SELECT DISTINCT temp.ida, ACCION.nombre,ACCION.descripcion,ACCION.bastones,ACCION.edad FROM (SELECT Lista_A.idAccion AS ida FROM HIJO INNER JOIN Lista_A ON Lista_A.idHijo=${id})temp INNER JOIN (SELECT * FROM ACCION INNER JOIN LISTA_A ON ACCION.idAccion = LISTA_A.idAccion)tempo ON tempo.idAccion = temp.ida  AND tempo.edad<=${edad}`;
        let query = `SELECT temp.cantidad,ACCION.idAccion, ACCION.nombre,ACCION.descripcion,ACCION.bastones,ACCION.edad FROM (SELECT COUNT(ACCION.idAccion) AS cantidad, ACCION.idAccion AS id FROM ACCION INNER JOIN LISTA_A ON LISTA_A.idAccion=ACCION.idAccion GROUP BY ACCION.idAccion)temp INNER JOIN ACCION ON ACCION.idAccion=temp.id ORDER BY temp.cantidad DESC FETCH FIRST 10 ROWS ONLY  `;
         let result: OracleDB.Result<any> = await connection.execute(query);
         try {
             let response=[]
             
             
             let responses
             if (result.rows) {
                // res.send(result)
                 for (let i = 0; i < result.rows.length; i++) {
                  responses = {
                     idAccion: result.rows[i][0],
                     nombre: result.rows[i][1],
                     descripcion: result.rows[i][2],
                     bastones: result.rows[i][3],
                     edad: result.rows[i][4]
    
                 }
                 response.push(responses);
             }
                 res.json(response);
             }
         } catch (err) {
             res.send("null");
         }
         
     }
    export async function reporte1(req: Request, res: Response) {
    
        // console.log("nose")
          let query = `SELECT temp.cantidad,JUGUETES.idJuguetes, JUGUETES.nombre,JUGUETES.categoria,JUGUETES.edad FROM (SELECT COUNT(JUGUETES.idJuguetes) AS cantidad, JUGUETES.idJuguetes AS id FROM JUGUETES INNER JOIN LISTA ON LISTA.idJuguetes=JUGUETES.idJuguetes GROUP BY JUGUETES.idJuguetes)temp INNER JOIN JUGUETES ON JUGUETES.idJuguetes=temp.id ORDER BY temp.cantidad DESC FETCH FIRST 10 ROWS ONLY `;
         //let query = ` select JUGUETES.idJuguetes,JUGUETES.nombre, JUGUETES.categoria,JUGUETES.bastones,JUGUETES.edad FROM (SELECT COUNT(idJuguete),idJugutes FROM JUGUETES)temp INNER JOIN JUGUETES ON temp.idJuguetes=JUGUETES.idJuguetes `;
         let result: OracleDB.Result<any> = await connection.execute(query);
         try {
             let response=[]
             
             
             let responses
             if (result.rows) {
                // res.send(result)
                 for (let i = 0; i < result.rows.length; i++) {
                  responses = {
                     Cantidad: result.rows[i][0],
                     idJuguete: result.rows[i][1],
                     nombre: result.rows[i][2],
                     categoria: result.rows[i][3],
                     edad: result.rows[i][4]
                    
                 }
                 response.push(responses);
             }
                 res.json(response);
             }
         } catch (err) {
             res.send("null");
         }
         
     }
     export async function reporte6(req: Request, res: Response) {
    
        // console.log("nose")
          let query = `SELECT temp.cantidad,JUGUETES.idJuguetes, JUGUETES.nombre,JUGUETES.categoria,JUGUETES.edad FROM (SELECT COUNT(JUGUETES.categoria) AS cantidad, JUGUETES.idJuguetes AS id FROM JUGUETES INNER JOIN LISTA ON LISTA.idJuguetes=JUGUETES.idJuguetes GROUP BY JUGUETES.idJuguetes)temp INNER JOIN JUGUETES ON JUGUETES.idJuguetes=temp.id ORDER BY temp.cantidad DESC FETCH FIRST 5 ROWS ONLY `;
         //let query = ` select JUGUETES.idJuguetes,JUGUETES.nombre, JUGUETES.categoria,JUGUETES.bastones,JUGUETES.edad FROM (SELECT COUNT(idJuguete),idJugutes FROM JUGUETES)temp INNER JOIN JUGUETES ON temp.idJuguetes=JUGUETES.idJuguetes `;
         let result: OracleDB.Result<any> = await connection.execute(query);
         try {
             let response=[]
             
             
             let responses
             if (result.rows) {
                // res.send(result)
                 for (let i = 0; i < result.rows.length; i++) {
                  responses = {
                     Cantidad: result.rows[i][0],
                     idJuguete: result.rows[i][1],
                     nombre: result.rows[i][2],
                     categoria: result.rows[i][3],
                     edad: result.rows[i][4]
                    
                 }
                 response.push(responses);
             }
                 res.json(response);
             }
         } catch (err) {
             res.send("null");
         }
         
     }
export async function registroDepa(req: Request, res:Response) {
    let email = req.body.email;
    let pass = req.body.password;
    let nombrePadre = req.body.nombrePadre;
    let nombreHijo = req.body.nombreHijo;
    let telefono = req.body.telefono;
    let edad = req.body.edad;
    let direccion = req.body.direccion;
    let municipio = req.body.municipio;
    let departamento = req.body.departamento;
    let nick = req.body.nick;
    let sexo = req.body.sexo;
    let bastones = req.body.bastones;
    let idPadre=req.body.idPadre;
    let query3 = `INSERT INTO DEPARTAMENTO(nombre)VALUES('${departamento}')`;
    try {
        let result: OracleDB.Result<any> = await connection.execute(query3, [], { autoCommit: true });
        if (result.rowsAffected){
            
       console.log("depa")
            
        }else {
            res.status(400).send('Bad Request Depa')
        }
    } catch (error) {
        res.status(400).send('Bad Request Depa')
    }
}
export async function registroJuguete(req: Request, res:Response) {
    let nombre = req.body.nombre;
    let categoria = req.body.categoria;
    let bastones = req.body.bastones;
    let edad = req.body.edad;
 
    let query3 = `INSERT INTO JUGUETES(nombre,categoria,bastones,edad) VALUES('${nombre}','${categoria}','${bastones}','${edad}')`;
    try {
        let result: OracleDB.Result<any> = await connection.execute(query3, [], { autoCommit: true });
        if (result.rowsAffected){
            
       console.log("depa")
            
        }else {
            res.status(400).send('Bad Request Depa')
        }
    } catch (error) {
        res.status(400).send('Bad Request Depa')
    }
}
export async function registroAccion(req: Request, res:Response) {
    let nombre = req.body.nombre;
    let descripcion = req.body.descripcion;
    let bastones = req.body.bastones;
    let edad = req.body.edad;
 
    let query3 = `INSERT INTO ACCION(nombre,descripcion,bastones,edad) VALUES('${nombre}','${descripcion}','${bastones}','${edad}')`;
    try {
        let result: OracleDB.Result<any> = await connection.execute(query3, [], { autoCommit: true });
        if (result.rowsAffected){
            
       console.log("accon")
            
        }else {
            res.status(400).send('Bad Request Depa')
        }
    } catch (error) {
        res.status(400).send('Bad Request Depa')
    }
}
export async function registroMuni(req:Request, res:Response) {
    let email = req.body.email;
    let pass = req.body.password;
    let nombrePadre = req.body.nombrePadre;
    let nombreHijo = req.body.nombreHijo;
    let telefono = req.body.telefono;
    let edad = req.body.edad;
    let direccion = req.body.direccion;
    let municipio = req.body.Municipio;
    let departamento = req.body.Municipio;
    let nick = req.body.nick;
    let sexo = req.body.sexo;
    let bastones = req.body.bastones;
    let idPadre=req.body.idPadre;
    let idDepartamento=req.body.idDepartamento;
    let query4 = `INSERT INTO MUNICIPIO(nombre,idDepartamento)VALUES('${municipio}','${idDepartamento}')`;
    try {
        let result: OracleDB.Result<any> = await connection.execute(query4, [], { autoCommit: true });
        if(result.rowsAffected){
            res.send(result);
            console.log("muni")
       
        }else {
            res.status(400).send('Bad Request Muni')
        }
        
    } catch (error) {
        res.status(400).send('Bad Request Muni')
    }
}
export async function registroHijo( req:Request, res:Response) {
    let email = req.body.email;
    let pass = req.body.contra;
    let nombrePadre = req.body.nombrePadre;
    let nombreHijo = req.body.nombre;
    let telefono = req.body.telefono;
    let edad = req.body.edad;
    let direccion = req.body.direccion;
    let municipio = req.body.municipio;
    let departamento = req.body.municipio;
    //let  = req.body.nick;
    let sexo = req.body.sexo;
    let bastones = req.body.bastones;
    let idPadre=req.body.idPadre;
  
    let query2 = `INSERT INTO HIJO(nombre,sexo,edad,email,contra,bastones,bastonesGanados,idPadre) VALUES('${nombreHijo}','${sexo}','${edad}','${email}','${pass}','${bastones}','0','${idPadre}')`;
    try {
        let result: OracleDB.Result<any> = await connection.execute(query2, [], { autoCommit: true });
        if (result.rowsAffected) {
           // registroDepa(req,res)
            res.send(result);
            console.log("hijo")

        } else {
            res.status(400).send('Bad Request hijo')
        }
    } catch (error) {
        res.status(400).send('Bad Request hijo')
    }
}
export async function register(req: Request, res: Response) {
    let email = req.body.email;
    let pass = req.body.contra;
    let nombrePadre = req.body.Nombre;
    let nombreHijo = req.body.nombreHijo;
    let telefono = req.body.telefono;
    let edad = req.body.edad;
    let direccion = req.body.direccion;
    let municipio = req.body.municipio;
    let departamento = req.body.municipio;
    let nick = req.body.nick;
    let sexo = req.body.sexo;
    let bastones = req.body.bastones;
    let idPadre=req.body.idPadre;
    
    
    let query = `INSERT INTO PADRE(nombre,email,contra,telefono,credito,direccion ) VALUES('${nombrePadre}','${email}','${pass}','${telefono}','${bastones}','${direccion}')`;
    console.log(query);
    try {
        let result: OracleDB.Result<any> = await connection.execute(query, [], { autoCommit: true });
        if (result.rowsAffected) {
            //registroHijo(nombreHijo,sexo,edad,nick,pass,bastones,idPadre)
            res.send(result);
            console.log("padre")

        } else {
            res.status(400).send('Bad Request hijo')
        }
    } catch (error) {
        res.status(400).send("Ese usuario ya existe");
    }
    
    
    
}
export async function confirmarAcciones(req:Request, res:Response) {
    let idHijo = req.body.idHijo;
    let idAccion = req.body.idAccion;
    //let est = req.body.nombrePadre;
   
    let query4 = `INSERT INTO LISTA_A(idHijo,idAccion,estado) VALUES(${idHijo},${idAccion},'No Confirmada')`;
    try {
        let result: OracleDB.Result<any> = await connection.execute(query4, [], { autoCommit: true });
        if(result.rowsAffected){
            res.send(result);
            console.log("Accion")
       
        }else {
            res.status(400).send('Bad Request Accion')
        }
        
    } catch (error) {
        res.status(400).send('Bad Request Accion')
    }
}
export async function confirmarLista(req:Request, res:Response) {
    let idCarta = req.body.idCarta;
    let idJuguete = req.body.idJuguete;
    //let est = req.body.nombrePadre;
   
    let query4 = `INSERT INTO LISTA(idCarta,idJuguetes) VALUES(${idCarta},${idJuguete})`;
    try {
        let result: OracleDB.Result<any> = await connection.execute(query4, [], { autoCommit: true });
        if(result.rowsAffected){
            res.send(result);
            console.log("Cartas")
       
        }else {
            res.status(400).send('Bad Request Accion')
        }
        
    } catch (error) {
        res.status(400).send('Bad Request Accion')
    }
}
export async function confirmarCarta(req:Request, res:Response) {
    let idHijo = req.body.idHijo;
    let estado= req.body.estado;
    let fecha= req.body.fecha;
    //let est = req.body.nombrePadre;
 
    let query4 = `INSERT INTO CARTA(estado,fecha,idHijo) VALUES('${estado}','${fecha}','${idHijo}')`;
    console.log(query4)
    try {
        let result: OracleDB.Result<any> = await connection.execute(query4, [], { autoCommit: true });
        if(result.rowsAffected){
            res.send(result);
            console.log("Cartas")
       
        }else {
            res.status(400).send('Bad Request Accion')
        }
        
    } catch (error) {
        res.status(400).send('Bad Request Accion')
    }
} 
export async function getMunicipio(req: Request, res: Response) {
    
    // console.log("nose")
     
     let query = `select * from MUNICIPIO`;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         
         
         let responses
         if (result.rows) {
            // res.send(result)
             for (let i = 0; i < result.rows.length; i++) {
              responses = {
             //    nombre: result.rows[i],
                 //email: result.rows[i],
                 usuario: result.rows[i]
                
             }
             response.push(responses);
         }
             res.json(response);
         }
     } catch (err) {
         res.send("null");
     }
     
 } 
 
 export async function getListaA(req: Request, res: Response) {
    
    // console.log("nose")
     
     let query = `select * from LISTA_A `; 
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         
         
         
         
         if (result.rows) {
           //  idDepartamento=req.body.idDepartamento
            // res.send(result)
          
             res.json(result);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 export async function getLista(req: Request, res: Response) {
    
    // console.log("nose")
     
     let query = `select * from LISTA `; 
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         
         
         
         
         if (result.rows) {
           //  idDepartamento=req.body.idDepartamento
            // res.send(result)
          
             res.json(result);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 export async function getCartas(req: Request, res: Response) {
    
    // console.log("nose")
     
     let query = `select * from CARTA `; 
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         
         
         
         
         if (result.rows) {
           //  idDepartamento=req.body.idDepartamento
            // res.send(result)
          
             res.json(result);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 export async function getAco(req: Request, res: Response) {
    
    // console.log("nose")
     
     let query = `select * from ACCION `; 
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         
         
         
         
         if (result.rows) {
           //  idDepartamento=req.body.idDepartamento
            // res.send(result)
          
             res.json(result);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 export async function getMunicipios(req: Request, res: Response) {
    
    // console.log("nose")
     
     let query = `select * from MUNICIPIO `;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         
         
         
         
         if (result.rows) {
           //  idDepartamento=req.body.idDepartamento
            // res.send(result)
          
             res.json(result);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 export async function getDepa(req: Request, res: Response) {
    
    // console.log("nose")
     let id = req.params.id
     let query = `select * from DEPARTAMENTO where nombre='${id}'`;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         
         
         let responses
         if (result.rows) {
            // res.send(result)
            // for (let i = 0; i < result.rows.length; i++) {
              responses = {
                 idDepartamento: result.rows[0][0],
                 nombre: result.rows[0][1]
              

                
             //}
            // response.push(responses);
         }
         //console.log(id)
             res.json(responses);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 export async function getPadre(req: Request, res: Response) {
    
    // console.log("nose")
     let id = req.params.id
     let query = `select * from PADRE where email='${id}'`;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         
         
         let responses
         if (result.rows) {
            // res.send(result)
            // for (let i = 0; i < result.rows.length; i++) {
              responses = {
                 idPadre: result.rows[0][0],
                 nombre: result.rows[0][1]
              

                
             //}
            // response.push(responses);
         }
         //console.log(id)
             res.json(responses);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 
 export async function getIdHijo(req: Request, res: Response) {
    
    // console.log("nose")
     let id = req.params.id
     let query = `select * from HIJO where email='${id}'`;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         
         
         let responses
         if (result.rows) {
            // res.send(result)
            // for (let i = 0; i < result.rows.length; i++) {
              responses = {
                 idHijo: result.rows[0][0],
                 nombre: result.rows[0][1]
              

                
             //}
            // response.push(responses);
         }
         //console.log(id)
             res.json(responses);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 export async function getIdJuguete(req: Request, res: Response) {
    
    // console.log("nose")
     let id = req.params.id
     let query = `select * from JUGUETES where nombre='${id}'`;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         
         
         let responses
         if (result.rows) {
            // res.send(result)
            // for (let i = 0; i < result.rows.length; i++) {
              responses = {
                 idJuguete: result.rows[0][0],
                 nombre: result.rows[0][1]
              
 
                
             //}
            // response.push(responses);
         }
         //console.log(id)
             res.json(responses);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
export async function getDepartamento(req: Request, res: Response) {
    
    // console.log("nose")
     
     let query = `select * from DEPARTAMENTO `;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         
         
         
         
         if (result.rows) {
           //  idDepartamento=req.body.idDepartamento
            // res.send(result)
          
             res.json(result);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 export async function getHijo(req: Request, res: Response) {
    
    // console.log("nose")
     let id = req.params.id
     let query = `select * from HIJO where idHijo='${id}'`;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         
         
         let responses
         if (result.rows) {
            // res.send(result)
            // for (let i = 0; i < result.rows.length; i++) {
              responses = {
                 idHijo: result.rows[0][0],
                 nombre: result.rows[0][1],
                 sexo: result.rows[0][2],
                 edad: result.rows[0][3],
                 email: result.rows[0][4],
                 contra: result.rows[0][5],
                bastones: result.rows[0][6],
                bastonesG: result.rows[0][7],
                idPadre: result.rows[0][8]

                
             //}
            // response.push(responses);
         }
         //console.log(id)
             res.json(responses);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 export async function getPadref(req: Request, res: Response) {
    
    // console.log("nose")
     let id = req.params.id
     let query = `select * from PADRE where idPadre='${id}'`;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         
         
         let responses
         if (result.rows) {
            // res.send(result)
            // for (let i = 0; i < result.rows.length; i++) {
              responses = {
                 idPadre: result.rows[0][0],
                 nombre: result.rows[0][1],
                 email: result.rows[0][2],
                 contra: result.rows[0][3],
                telefono: result.rows[0][4],
                credito: result.rows[0][5],
                direccion: result.rows[0][6]

                
             //}
            // response.push(responses);
         }
         //console.log(id)
             res.json(responses);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
export async function getHijos(req: Request, res: Response) {
    
    // console.log("nose") 
     
     let query = `select * from HIJO  `;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         
         
         let responses
         if (result.rows) {
            // res.send(result)
             for (let i = 0; i < result.rows.length; i++) {
              responses = {
                 idHijo: result.rows[i][0],
                 nombre: result.rows[i][1],
                 sexo: result.rows[i][2],
                 edad: result.rows[i][3],
                 email: result.rows[i][4],
                 contra: result.rows[i][5],
                bastones: result.rows[i][6],
                bastonesG: result.rows[i][7],
                idPadre: result.rows[i][8]

                
             }
             response.push(responses);
         }
             res.json(response);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 export async function getHijoId(req: Request, res: Response) {
    
    // console.log("nose")
     let id = req.params.id
     let query = `select * from HIJO where idPadre='${id}'`;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         
         
         let responses
         if (result.rows) {
            // res.send(result)
            // for (let i = 0; i < result.rows.length; i++) {
              responses = {
                 idHijo: result.rows[0][0],
                 nombre: result.rows[0][1],
                 sexo: result.rows[0][2],
                 edad: result.rows[0][3],
                 email: result.rows[0][4],
                 contra: result.rows[0][5],
                bastones: result.rows[0][6],
                bastonesG: result.rows[0][7],
                idPadre: result.rows[0][8]

                
             //}
            // response.push(responses);
         }
         //console.log(id)
             res.json(responses);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 
export async function getUser(req: Request, res: Response) {
    
   // console.log("nose")
    
    let query = `select * from PADRE`;
    let result: OracleDB.Result<any> = await connection.execute(query);
    try {
        let response=[]
        
        
        let responses
        if (result.rows) {
           // res.send(result)
            for (let i = 0; i < result.rows.length; i++) {
             responses = {
               idPadre: result.rows[i][0],
                nombre: result.rows[i][1],
                email: result.rows[i][2],
                contra: result.rows[i][3],
                telefono: result.rows[i][4],
                bastones: result.rows[i][5],
                direccion: result.rows[i][6]
               
            }
            response.push(responses);
        }
            res.json(response);
        }
    } catch (err) {
        res.send("null");
    }
    
}
export async function getAdmin(req: Request, res: Response) {
    
    // console.log("nose")
     
     let query = `select * from ADMINI`;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         
         
         let responses
         if (result.rows) {
            // res.send(result)
             for (let i = 0; i < result.rows.length; i++) {
              responses = {
                idAdmini: result.rows[i][0],
                 nombre: result.rows[i][1],
                 email: result.rows[i][2],
                 contra: result.rows[i][3]
                 
                
             }
             response.push(responses);
         }
             res.json(response);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
export async function getJuguete(req: Request, res: Response) {
    
    // console.log("nose")
     
     let query = `select * from JUGUETES`;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         
         
         let responses
         if (result.rows) {
            // res.send(result)
             for (let i = 0; i < result.rows.length; i++) {
              responses = {
                 idJuguete: result.rows[i][0],
                 nombre: result.rows[i][1],
                 categoria: result.rows[i][2],
                 bastones: result.rows[i][3],
                 edad: result.rows[i][4]
                
             }
             response.push(responses);
         }
             res.json(response);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 export async function getJugueteHijos(req: Request, res: Response) {
    
    console.log("nose")
   // let categoria = req.params.categoria;
    let bastones = req.params.bastones;
    let edad = req.params.edad;
    console.log(bastones,edad)
     let query = `SELECT * FROM JUGUETES WHERE  bastones<=${bastones} and edad<=${edad}`;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         let responses
         if (result.rows) {
            // res.send(result)
             for (let i = 0; i < result.rows.length; i++) {
              responses = {
                 idJuguete: result.rows[i][0],
                 nombre: result.rows[i][1],
                 categoria: result.rows[i][2],
                 bastones: result.rows[i][3],
                 edad: result.rows[i][4]
                
             }
             response.push(responses);
         }
             res.json(response);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 export async function getJuguetePadres(req: Request, res: Response) {
    
    console.log("nose")
    let id = req.params.id;
   // let bastones = req.params.bastones;
    //let edad = req.params.edad;
    //console.log(bastones,edad)
    // let query = `SELECT * FROM (SELECT * FROM JUGUETES INNER JOIN LISTA ON LISTA.idJuguetes = JUGUETES.idJuguetes)temp INNER JOIN CARTA ON CARTA.idCarta=temp.idCarta AND CARTA.idHijo=${id} `;
     let query = `SELECT JUGUETES.idJuguetes, JUGUETES.nombre,JUGUETES.categoria,JUGUETES.bastones,JUGUETES.edad FROM (SELECT * FROM CARTA INNER JOIN LISTA ON CARTA.idCarta=LISTA.idCarta  AND CARTA.idHijo=${id} )temp INNER JOIN JUGUETES ON temp.idJuguetes = JUGUETES.idJuguetes  `;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         let responses
         if (result.rows) {
            // res.send(result)
             for (let i = 0; i < result.rows.length; i++) {
              responses = {
                 idJuguete: result.rows[i][0],
                 nombre: result.rows[i][1],
                 categoria: result.rows[i][2],
                 bastones: result.rows[i][3],
                 edad: result.rows[i][4]
                
             }
             response.push(responses);
         }
             res.json(response);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 export async function getJuguetePadres2(req: Request, res: Response) {
    
    console.log("nose")
    let id = req.params.id;
   // let bastones = req.params.bastones;
    //let edad = req.params.edad;
    //console.log(bastones,edad)
    // let query = `SELECT * FROM (SELECT * FROM JUGUETES INNER JOIN LISTA ON LISTA.idJuguetes = JUGUETES.idJuguetes)temp INNER JOIN CARTA ON CARTA.idCarta=temp.idCarta AND CARTA.idHijo=${id} `;
     let query = `SELECT JUGUETES.idJuguetes, JUGUETES.nombre,JUGUETES.categoria,JUGUETES.bastones,JUGUETES.edad,temp.idCarta FROM (SELECT LISTA.idJuguetes AS idJuguetes,LISTA.idCarta AS idCarta FROM CARTA INNER JOIN LISTA ON CARTA.idCarta=LISTA.idCarta  AND CARTA.idHijo=${id} AND CARTA.estado <> 'Confirmado' )temp INNER JOIN JUGUETES ON temp.idJuguetes = JUGUETES.idJuguetes  `;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         let responses
         if (result.rows) {
            // res.send(result)
             for (let i = 0; i < result.rows.length; i++) {
              responses = {
                 idJuguete: result.rows[i][0],
                 nombre: result.rows[i][1],
                 categoria: result.rows[i][2],
                 bastones: result.rows[i][3],
                 edad: result.rows[i][4],
                idCarta: result.rows[i][5]
             }
             response.push(responses);
         }
             res.json(response);
         }
     } catch (err) {
         res.send("null");
     }
     
 }

export async function loginPadre(req: Request, res: Response) {
    let email = req.body.email;
    let pass = req.body.contra;
    let query = `SELECT * FROM PADRE WHERE email = '${email}' AND contra= '${pass}'`;
    let result: OracleDB.Result<any> = await connection.execute(query);
    try {
        if (result.rows) {
            let response = {
                idPadre: result.rows[0][0],
                nombre: result.rows[0][1],
                email: result.rows[0][2],
                contra: result.rows[0][3],
                telefono: result.rows[0][4],
                bastones: result.rows[0][5],
                direccion: result.rows[0][6]
            }
            res.json(response);
        }
    } catch (err) {
        res.send(null);
    }
}
export async function login(req: Request, res: Response) {
    let email = req.body.email;
    let pass = req.body.contra;
    let query = `SELECT * FROM HIJO WHERE email = '${email}' AND contra= '${pass}'`;
    let result: OracleDB.Result<any> = await connection.execute(query);
    try {
        if (result.rows) {
            let response = {
                idHijo: result.rows[0][0],
                nombre: result.rows[0][1],
                sexo: result.rows[0][2],
                edad: result.rows[0][3],
                email: result.rows[0][4],
                contra: result.rows[0][5],
                bastones: result.rows[0][6],
                bastonesG: result.rows[0][7],
                idPadre: result.rows[0][8]
            }
            res.json(response);
        }
    } catch (err) {
        res.send(null);
    }
}
export async function loginAdmini(req: Request, res: Response) {
    let email = req.body.email;
    let contra = req.body.contra;
    let query = `SELECT * FROM ADMINI WHERE email = '${email}' AND contra= '${contra}'`;
    let result: OracleDB.Result<any> = await connection.execute(query);
    try {
        if (result.rows) {
            let response = {
                idAdmini: result.rows[0][0],
                nombre: result.rows[0][1],
                email: result.rows[0][2],
                contra: result.rows[0][3],
                
            }
            res.json(response);
        }
    } catch (err) {
        res.send(null);
    }
}

export async function registerr(req: Request, res: Response) {
    let email = req.body.email;
    let pass = req.body.password;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let birthDate = req.body.birthDate;
    let country = req.body.country;
    let query = `INSERT INTO USUARIO(correo_electronico,contrasena,nombre,apellido,fecha_nac,pais,tipo,creditos) VALUES('${email}','${pass}','${firstName}','${lastName}',DATE '${birthDate}','${country}',2,10000)`;
    console.log(query);
    try {
        let result: OracleDB.Result<any> = await connection.execute(query, [], { autoCommit: true });
        if (result.rowsAffected) {
            res.send(result);
        } else {
            res.status(400).send('Bad Request')
        }
    } catch (error) {
        res.status(400).send("Ese usuario ya existe");
    }
}
export async function getCreditos(req: Request, res: Response) {
    
    // console.log("nose")
     let id = req.params.id;
     let query = `select (bastones-bastonesGanados) from HIJO where idHijo='${id}'`;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         
         
         let responses
         if (result.rows) {
            // res.send(result)
             //for (let i = 0; i < result.rows.length; i++) {
              responses = {
                 creditos: result.rows[0][0]
                 
                
            // }
             //response.push(responses);
         }
             res.json(responses);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 export async function getCarta(req: Request, res: Response) {
    
    // console.log("nose")
     let id = req.params.id;
     let fecha = req.params.fecha;
     let query = `select * from CARTA where idHijo='${id}' AND fecha='${fecha}'`;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         
         
         let responses
         if (result.rows) {
            // res.send(result)
             //for (let i = 0; i < result.rows.length; i++) {
              responses = {
                 idCarta: result.rows[0][0],
                 estado: result.rows[0][1],
                 fecha: result.rows[0][2],
                 idHijo: result.rows[0][3]
                 
                
            // }
             //response.push(responses);
         }
             res.json(responses);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 export async function getCarta2(req: Request, res: Response) {
    
    // console.log("nose")
     let id = req.params.id;
     
     let query = `select * from CARTA where idCarta='${id}' `;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         
         
         let responses
         if (result.rows) {
            // res.send(result)
             //for (let i = 0; i < result.rows.length; i++) {
              responses = {
                 idCarta: result.rows[0][0],
                 estado: result.rows[0][1],
                 fecha: result.rows[0][2],
                 idHijo: result.rows[0][3]
                 
                
            // }
             //response.push(responses);
         }
             res.json(responses);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 export async function getAcciones(req: Request, res: Response) {
    
    // console.log("nose")
     let edad = req.params.edad;
     //edad='11'
     let id=req.params.id
    // console.log(edad)
    // let query = ` SELECT DISTINCT temp.ida, ACCION.nombre,ACCION.descripcion,ACCION.bastones,ACCION.edad FROM (SELECT Lista_A.idAccion AS ida FROM HIJO INNER JOIN Lista_A ON Lista_A.idHijo=${id})temp INNER JOIN (SELECT * FROM ACCION INNER JOIN LISTA_A ON ACCION.idAccion = LISTA_A.idAccion)tempo ON tempo.idAccion = temp.ida  AND tempo.edad<=${edad}`;
    let query = ` SELECT DISTINCT ACCION.idAccion, ACCION.nombre,ACCION.descripcion,ACCION.bastones,ACCION.edad FROM ACCION INNER JOIN (SELECT DISTINCT LISTA_A.idAccion AS ida FROM HIJO INNER JOIN Lista_A ON Lista_A.idHijo <> ${id} AND Lista_A.estado<>'Confirmada')temp ON ACCION.idAccion <> temp.ida  AND ACCION.edad<=${edad}`;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         let response=[]
         
         
         let responses
         if (result.rows) {
            // res.send(result)
             for (let i = 0; i < result.rows.length; i++) {
              responses = {
                 idAccion: result.rows[i][0],
                 nombre: result.rows[i][1],
                 descripcion: result.rows[i][2],
                 bastones: result.rows[i][3],
                 edad: result.rows[i][4]

             }
             response.push(responses);
         }
             res.json(response);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 export async function getAccioness(req: Request, res: Response) {
    
    // console.log("nose")
    //let query = ` SELECT DISTINCT LISTA_A.idAccion FROM HIJO INNER JOIN Lista_A ON Lista_A.idHijo = '2'`; 
    let query = ` SELECT DISTINCT ACCION.idAccion, ACCION.nombre,ACCION.descripcion,ACCION.bastones,ACCION.edad FROM ACCION INNER JOIN (SELECT DISTINCT LISTA_A.idAccion AS ida FROM HIJO INNER JOIN Lista_A ON Lista_A.idHijo <> '2' )temp ON ACCION.idAccion <> temp.ida  AND ACCION.edad<='5'`;
     //let query = `select * from ACCION INNER JOIN LISTA_A ON ACCION.idAccion=LISTA_A.idAccion`; 
     //let query = ` SELECT DISTINCT temp.ida, ACCION.nombre,ACCION.descripcion,ACCION.bastones,ACCION.edad FROM (SELECT Lista_A.idAccion AS ida FROM HIJO INNER JOIN Lista_A ON Lista_A.idHijo=2)temp ON ACCION.idAccion=temp.ida AND ACCION.edad<='5'`;
     //let query = ` SELECT DISTINCT temp.ida, ACCION.nombre,ACCION.descripcion,ACCION.bastones,ACCION.edad FROM (SELECT Lista_A.idAccion AS ida FROM HIJO INNER JOIN Lista_A ON Lista_A.idHijo=2)temp INNER JOIN (SELECT * FROM ACCION INNER JOIN LISTA_A ON ACCION.idAccion = LISTA_A.idAccion)tempo ON tempo.idAccion <> temp.ida  AND tempo.edad<=5`;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         
         
         
         
         if (result.rows) {
           //  idDepartamento=req.body.idDepartamento
            // res.send(result)
          
             res.json(result);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 export async function getAccionesPadre(req: Request, res: Response) {
    
    // console.log("nose")
    let edad = req.params.edad;
    //edad='11'
    let id=req.params.id 
    // console.log(edad)
     let query = ` SELECT DISTINCT ACCION.idAccion, ACCION.nombre,ACCION.descripcion,ACCION.bastones,ACCION.edad,temp.estados,temp.Hijo FROM ACCION INNER JOIN (SELECT Lista_A.idAccion AS ida, Lista_A.estado AS estados, Lista_A.idHijo AS Hijo FROM HIJO INNER JOIN Lista_A ON Lista_A.idHijo='${id}' AND Lista_A.estado<>'Confirmado' AND Lista_A.estado<>'Borrado')temp ON ACCION.idAccion=temp.ida  AND ACCION.edad<='${edad}'`;
    // let query = ` SELECT DISTINCT ACCION.idAccion, ACCION.nombre,ACCION.descripcion,ACCION.bastones,ACCION.edad FROM ACCION INNER JOIN (SELECT * FROM HIJO INNER JOIN Lista_A ON Lista_A.idHijo='${id}')temp ON ACCION.idAccion=temp.idAccion  AND ACCION.edad<='${edad}'`;
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {   
         let response=[]
         
         
         let responses
         if (result.rows) {
            // res.send(result)
             for (let i = 0; i < result.rows.length; i++) {
                
              responses = {
                 idAccion: result.rows[i][0],
                 nombre: result.rows[i][1],
                 descripcion: result.rows[i][2],
                 bastones: result.rows[i][3],
                 edad: result.rows[i][4]
                
             
            }
           // if ((result.rows[i][5]!='Confirmado')&&(result.rows[i][6]==id)){
                response.push(responses); 
               // console.log(result.rows[i][6])
            //}else{
             //console.log(result.rows[i][0])
            //}
         }
             res.json(response);
         }
     } catch (err) {
         res.send("null");
     }
     
 }
 
 
 export async function updateHijo(req: Request, res: Response) {
    let idHijo=req.body.idHijo;
    let nombre = req.body.nombre;
    let sexo = req.body.sexo;
    let edad = req.body.edad;
    let email = req.body.email;
    let contra = req.body.contra;
    let bastones = req.body.bastones;
    let bastonesGanados = req.body.bastonesG;
    
    let query = `UPDATE HIJO SET nombre = '${nombre}', sexo = '${sexo}', edad = '${edad}', email = '${email}', contra = '${contra}', bastones = '${bastones}',bastonesGanados = '${bastonesGanados}' WHERE idHijo = '${idHijo}'`;
    console.log(query)
    try {
        let result: OracleDB.Result<any> = await connection.execute(query, [], { autoCommit: true });
        if (result.rowsAffected) {
            res.send({ data: "Datos actualizados" });
        } else {
            res.send({ data: "No se hicieron cambios" });
        }
    } catch (error) {
        res.statusCode = 500;
        res.statusMessage = error;
        res.send();
    }
}
export async function updatePadre(req: Request, res: Response) {
    let email = req.body.email;
    let pass = req.body.contra;
    let nombrePadre = req.body.Nombre;
    let telefono = req.body.telefono;
    let direccion = req.body.direccion;
    let bastones = req.body.bastones;
    let idPadre=req.body.idPadre;
    
    let query = `UPDATE PADRE SET nombre='${nombrePadre}',email='${email}',contra='${pass}',telefono='${telefono}',credito='${bastones}',direccion='${direccion}'  WHERE idPadre = ${idPadre}`;
    console.log(query)
    try {
        let result: OracleDB.Result<any> = await connection.execute(query, [], { autoCommit: true });
        if (result.rowsAffected) {
            res.send({ data: "Datos actualizados" });
        } else {
            res.send({ data: "No se hicieron cambios" });
        }
    } catch (error) {
        res.statusCode = 500;
        res.statusMessage = error;
        res.send();
    }
}
export async function updateLista_A(req: Request, res: Response) {
    let idHijo = req.body.idHijo;
    let idAccion = req.body.idAccion;
    let estado= req.body.estado;
    let idLista_A=req.body.idLista_A;
    let query = `UPDATE LISTA_A SET estado='${estado}'  WHERE idLista_A = ${idLista_A} AND idHijo=${idHijo}`;
    console.log(query)
    try {
        let result: OracleDB.Result<any> = await connection.execute(query, [], { autoCommit: true });
        if (result.rowsAffected) {
            res.send({ data: "Datos actualizados" });
        } else {
            res.send({ data: "No se hicieron cambios" });
        }
    } catch (error) {
        res.statusCode = 500;
        res.statusMessage = error;
        res.send();
    }
}
export async function updateLista(req: Request, res: Response) {
    let idHijo = req.body.idHijo;
    let idCarta = req.body.idCarta;
    let estado=req.body.estado
    let fecha=req.body.fecha
    let idLista_A=req.body.idLista_A;
    let query = `UPDATE CARTA SET estado='${estado}'  WHERE idCarta= ${idCarta} `;
    console.log(query)
    try {
        let result: OracleDB.Result<any> = await connection.execute(query, [], { autoCommit: true });
        if (result.rowsAffected) {
            res.send({ data: "Datos actualizados" });
        } else {
            res.send({ data: "No se hicieron cambios" });
        }
    } catch (error) {
        res.statusCode = 500;
        res.statusMessage = error;
        res.send();
    }
}
export async function updateProfilePhoto(req: Request, res: Response) {
    let email = req.body.email;
    let path = req.body.path;
    let query = `UPDATE USUARIO SET foto_perfil = '${path}' WHERE correo_electronico='${email}'`;
    console.log(query);
    let result: OracleDB.Result<any> = await connection.execute(query, [], { autoCommit: true });
    if (result.rowsAffected) {
        res.send(result);
    } else {
        res.status(400).send('Bad Request')
    }
}

export async function updateInfo(req: Request, res: Response) {
    let email = req.body.email;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let birthDate = req.body.birthDate;
    let country = req.body.country;
    let query = `UPDATE USUARIO SET nombre = '${firstName}', apellido = '${lastName}', pais = '${country}', fecha_nac = TO_DATE('${birthDate}', 'MONTH DD, YYYY') WHERE correo_electronico = '${email}'`;
    try {
        let result: OracleDB.Result<any> = await connection.execute(query, [], { autoCommit: true });
        if (result.rowsAffected) {
            res.send({ data: "Datos actualizados" });
        } else {
            res.send({ data: "No se hicieron cambios" });
        }
    } catch (error) {
        res.statusCode = 500;
        res.statusMessage = error;
        res.send();
    }
}

export async function updatePassword(req: Request, res: Response) {
    let email = req.body.email;
    let password = req.body.password;
    let query = `UPDATE USUARIO SET contrasena = '${password}' WHERE correo_electronico = '${email}'`;
    console.log(query);
    try {
        let result: OracleDB.Result<any> = await connection.execute(query, [], { autoCommit: true });
        if (result.rowsAffected) {
            res.send({ data: "Datos actualizados" });
        } else {
            res.send({ data: "No se hicieron cambios" });
        }
    } catch (error) {
        res.statusCode = 500;
        res.statusMessage = error;
        res.send();
    }
}

export async function updateCredits(req: Request, res: Response) {
    let binds = req.body.array;
    let query =
        `select (bastones-bastonesGanados) from HIJO where idHijo='1';`
    try {
        let result: OracleDB.Result<any> = await connection.executeMany(query, binds, { autoCommit: true });
        if (result.rowsAffected) {
            res.json({ message: "Actualizados correctamente" });
        } else {
            res.json({ message: "No se actualizó" })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}
export async function getListaAId(req: Request, res: Response) {
    
    // console.log("nose")
    let id=req.params.id
    let Hijo=req.params.Hijo
     let query = `select * from LISTA_A where idAccion=${id} AND idhijo=${Hijo}`; 
     let result: OracleDB.Result<any> = await connection.execute(query);
     try {
         
        let response=[]
         
         
         let responses
         if (result.rows) {
            // res.send(result)
            // for (let i = 0; i < result.rows.length; i++) {
              responses = {
                 idLista_A: result.rows[0][0],
                 idHijo: result.rows[0][1],
                 idAccion: result.rows[0][2],
                 estado: result.rows[0][3]

                
             //}
            // response.push(responses);
         }
         //console.log(id)
             res.json(responses);
         }
     } catch (err) {
         res.send("null");
     }
     
 }

/*export async function loginHijo(req: Request, res: Response) {
    let email = req.body.email;
    let pass = req.body.password;
    let query = `SELECT * FROM HIJO WHERE email = '${email}' AND contra = '${pass}'`;
    let result: OracleDB.Result<any> = await connection.execute(query);
    try {
        if (result.rows) {
            console.log(result.rows.length)
            if(result.rows.length>=1){
                let response = {
                    auth: true
                    
                }
                res.json(response);
            }else{
                let response = {
                    auth: false
                    
                }
                res.json(response);
            }
            
            
        }
    } catch (err) {
        res.send(null);
    }
}*/



