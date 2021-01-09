import { Router } from 'express';
const router = Router();

import { login,confirmarAcciones,reporte6,reporte7,reporte4,getLista,getPadre,getJuguetePadres2,getJuguetePadres,getPadref,getIdHijo,confirmarCarta,confirmarLista,getCarta,getListaA,getJugueteHijos,getMunicipios,getAcciones,getAccioness, getDepa, register,getUser,getHijos,getHijo,getJuguete,getDepartamento,getMunicipio, registroHijo, registroDepa, registroMuni, getCreditos, getIdJuguete, registroJuguete, getAdmin, loginAdmini, loginPadre, registroAccion, getAccionesPadre, getHijoId, updateHijo, updatePadre, updateLista_A, getListaAId, updateLista, getCarta2, getCartas, reporte1, getAco } from '../controllers/user.controller';

router.route('/reporte1').get(reporte1);
router.route('/reporte6').get(reporte6);
router.route('/reporte4').get(reporte4);
router.route('/reporte7').get(reporte7);

router.route('/registroAccion').post(registroAccion);

router.route('/registroPadre').post(register);
router.route('/registroHijo').post(registroHijo);
router.route('/updateHijo').put(updateHijo);
router.route('/updatePadre').put(updatePadre);
router.route('/updateListaA').put(updateLista_A);
router.route('/updateLista').put(updateLista);
router.route('/registroMuni').post(registroMuni);
router.route('/registroDepa').post(registroDepa);
router.route('/registroJuguete').post(registroJuguete);
router.route('/confirmarAcciones').post(confirmarAcciones);
router.route('/login').post(login);
router.route('/loginAdmin').post(loginAdmini);
router.route('/loginPadre').post(loginPadre);
router.route('/registroHijo').post(getUser);
router.route('/getListaA').get(getListaA);
router.route('/getListaAId/:id/:Hijo').get(getListaAId);  
router.route('/getLista').get(getLista);
router.route('/getCartass').get(getCartas);
router.route('/santaPublicaciones').get(getUser);
router.route('/mensaje').get(getUser);
router.route('/cartas').post(confirmarLista);
router.route('/confirmarCarta').post(confirmarCarta);
router.route('/getCarta/:id/:fecha').get(getCarta);
router.route('/getCarta2/:id').get(getCarta2);
router.route('/agregarCarta').post(getUser); 
router.route('/cartaConfirmar').put(getUser);
router.route('/juguetes').get(getJuguete); 
router.route('/getJuguete/:edad/:bastones').get(getJugueteHijos);   
router.route('/getJuguetePadres/:id').get(getJuguetePadres); 
router.route('/getJuguetePadres2/:id').get(getJuguetePadres2); 
router.route('/getUsuarios').get(getUser);
router.route('/getAdminis').get(getAdmin);
router.route('/getHIJO').get(getHijos);
router.route('/getDepa/:id').get(getDepa);
router.route('/getPadre/:id').get(getPadre);
router.route('/getIdHijo/:id').get(getIdHijo);
router.route('/getIdJuguete/:id').get(getIdJuguete);
router.route('/getCreditos/:id').get(getCreditos);  
router.route('/getHijof/:id').get(getHijo);
router.route('/getHijoId/:id').get(getHijoId);
router.route('/getPadref/:id').get(getPadref);
router.route('/getDepartamentos').get(getDepartamento);
router.route('/getMunicipios').get(getMunicipios);
router.route('/getAcciones/:id/:edad').get(getAcciones);
router.route('/getAccionesPadre/:id/:edad').get(getAccionesPadre);
router.route('/getAccioness').get(getAccioness);
router.route('/getAco').get(getAco);



//import { getCart, confirmRequest, cleanCart } from '../controllers/cart.controller';
//router.route('/cart/:email').get(getCart);
//router.route('/cart').post(confirmRequest);
//router.route('/cleanCart').post(cleanCart);

export default router;