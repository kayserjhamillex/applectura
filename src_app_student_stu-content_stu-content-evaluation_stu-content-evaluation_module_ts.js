"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_student_stu-content_stu-content-evaluation_stu-content-evaluation_module_ts"],{

/***/ 6743:
/*!**************************************************!*\
  !*** ./src/app/services/cuestionario.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuestionarioService": () => (/* binding */ CuestionarioService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.service */ 7465);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);




let CuestionarioService = class CuestionarioService {
    constructor(http, wasa) {
        this.http = http;
        this.wasa = wasa;
        this.apiUrl = this.wasa.apiUrlGlobal + '/cuestionario';
    }
    getCuestionarios() {
        return this.http.get(`${this.apiUrl}`);
    }
    getCuestionario(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    getsearchCuestionariobylibro(libro) {
        return this.http.get(`${this.apiUrl}/pregunta/${libro}`);
    }
    getsearchCuestionariobygrado(grado) {
        return this.http.get(`${this.apiUrl}/filter/grado/${grado}`);
    }
    deleteCuestionario(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
    // tslint:disable-next-line: no-shadowed-variable
    saveCuestionario(cuestionario) {
        return this.http.post(`${this.apiUrl}/create`, cuestionario);
    }
    updateCuestionario(id, updatedCuestionario) {
        return this.http.put(`${this.apiUrl}/update/${id}`, updatedCuestionario);
    }
};
CuestionarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService }
];
CuestionarioService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CuestionarioService);



/***/ }),

/***/ 7465:
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalService": () => (/* binding */ GlobalService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let GlobalService = class GlobalService {
    constructor() {
        this.apiUrlGlobal = 'https://promoting-reading-in-students.herokuapp.com';
    }
};
GlobalService.ctorParameters = () => [];
GlobalService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], GlobalService);



/***/ }),

/***/ 6421:
/*!**********************************************!*\
  !*** ./src/app/services/progreso.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgresoService": () => (/* binding */ ProgresoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.service */ 7465);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);




let ProgresoService = class ProgresoService {
    constructor(http, wasa) {
        this.http = http;
        this.wasa = wasa;
        this.apiUrl = this.wasa.apiUrlGlobal + '/progreso';
    }
    getProgresos() {
        return this.http.get(`${this.apiUrl}`);
    }
    getProgreso(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    getProgresoidividual(libro, estudiante) {
        return this.http.get(`${this.apiUrl}/filter/progresoidividual/${libro}/${estudiante}`);
    }
    deleteProgreso(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
    // tslint:disable-next-line: no-shadowed-variable
    saveProgreso(progreso) {
        return this.http.post(`${this.apiUrl}/create`, progreso);
    }
    updateProgreso(id, updatedProgreso) {
        return this.http.put(`${this.apiUrl}/update/${id}`, updatedProgreso);
    }
};
ProgresoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService }
];
ProgresoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ProgresoService);



/***/ }),

/***/ 917:
/*!*****************************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-evaluation/stu-content-evaluation-routing.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentEvaluationPageRoutingModule": () => (/* binding */ StuContentEvaluationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stu_content_evaluation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-evaluation.page */ 5340);




const routes = [
    {
        path: '',
        component: _stu_content_evaluation_page__WEBPACK_IMPORTED_MODULE_0__.StuContentEvaluationPage
    }
];
let StuContentEvaluationPageRoutingModule = class StuContentEvaluationPageRoutingModule {
};
StuContentEvaluationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StuContentEvaluationPageRoutingModule);



/***/ }),

/***/ 2763:
/*!*********************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-evaluation/stu-content-evaluation.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentEvaluationPageModule": () => (/* binding */ StuContentEvaluationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stu_content_evaluation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-evaluation-routing.module */ 917);
/* harmony import */ var _stu_content_evaluation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-content-evaluation.page */ 5340);







let StuContentEvaluationPageModule = class StuContentEvaluationPageModule {
};
StuContentEvaluationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stu_content_evaluation_routing_module__WEBPACK_IMPORTED_MODULE_0__.StuContentEvaluationPageRoutingModule
        ],
        declarations: [_stu_content_evaluation_page__WEBPACK_IMPORTED_MODULE_1__.StuContentEvaluationPage]
    })
], StuContentEvaluationPageModule);



/***/ }),

/***/ 5340:
/*!*******************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-evaluation/stu-content-evaluation.page.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentEvaluationPage": () => (/* binding */ StuContentEvaluationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stu_content_evaluation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-evaluation.page.html?ngResource */ 111);
/* harmony import */ var _stu_content_evaluation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-content-evaluation.page.scss?ngResource */ 3780);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_progreso_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/progreso.service */ 6421);
/* harmony import */ var src_app_services_resolucion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/resolucion.service */ 2732);
/* harmony import */ var src_app_services_cuestionario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cuestionario.service */ 6743);



/* eslint-disable @typescript-eslint/naming-convention */





let StuContentEvaluationPage = class StuContentEvaluationPage {
    constructor(router, progresoService, resolucionService, cuestionarioService) {
        this.router = router;
        this.progresoService = progresoService;
        this.resolucionService = resolucionService;
        this.cuestionarioService = cuestionarioService;
        this.cuestionarios = [];
        this.respuestas = [];
        this.progreso = {
            id: 0,
            Progreso: 0,
            Reaccion: '',
            Comentario: '',
            FinalAlternativo: '',
            FechaLectura: new Date(),
            NotaCuestionario: 0,
            NumeroIntento: 0,
            LibroId: 0,
            EstudianteId: 0
        };
        this.resolucion = {
            Pregunta: '',
            RespuestaEscogida: '',
            NumeroIntento: '',
            Correcto: '',
            ProgresoId: 0
        };
        this.resolucion1 = {
            id: 0,
            Pregunta: '',
            RespuestaEscogida: '',
            NumeroIntento: '',
            Correcto: '',
            ProgresoId: 0
        };
        this.formatopregunta = {
            id: 0,
            Pregunta: ''
        };
        this.resoluciones = [];
        this.preguntas = [];
        this.lasrespuesas = [];
        this.respuestasdesordenadas = [];
        this.cuestionariofiltrado = [];
        this.numeroaciertos = 0;
        this.bandera = false;
    }
    ngOnInit() {
        const parametro = JSON.parse(localStorage.getItem('ellibro'));
        const parestudiante = JSON.parse(localStorage.getItem('usuario'));
        this.progresoService.getProgresoidividual(parametro, parestudiante.id).subscribe(resprogreso => {
            this.progreso = resprogreso;
            this.codigoprogreso = this.progreso.id;
            const filtro = this.progreso.Progreso;
            if (filtro < 100) {
                window.location.reload();
            }
            const parametrito = this.progreso.LibroId;
            this.cuestionarioService.getsearchCuestionariobylibro(parametrito).subscribe(rescuestionarios => {
                this.cuestionarios = rescuestionarios;
                this.numeropreguntas = this.cuestionarios.length;
                this.notaporpregunta = 20 / this.numeropreguntas;
                const elarray = this.cuestionarios;
                const array1 = [];
                for (const item of elarray) {
                    // eslint-disable-next-line prefer-const
                    let formatodepregunta = {
                        id: 0,
                        pregunta: ''
                    };
                    // separamos la pregunta de sus respuestas
                    formatodepregunta.id = item.id;
                    formatodepregunta.pregunta = item.Pregunta;
                    array1.push(formatodepregunta);
                    this.preguntas = array1;
                    // eslint-disable-next-line prefer-const
                    let arrayrespuestas = [];
                    // eslint-disable-next-line prefer-const
                    let cajasimple = [];
                    // desordenamos las respuestas
                    arrayrespuestas.push(item.RespuestaCorrecta);
                    arrayrespuestas.push(item.RespuestaIncorrecta1);
                    arrayrespuestas.push(item.RespuestaIncorrecta2);
                    arrayrespuestas.sort();
                    cajasimple.push(arrayrespuestas);
                    this.respuestasdesordenadas.push(cajasimple);
                }
                // guardamos todo orientado a objetos para no complicarnos
                for (let i = 0; i < this.numeropreguntas; i++) {
                    // eslint-disable-next-line prefer-const
                    let formatoconglomerado = {
                        id: 0,
                        Pregunta: '',
                        Respuesta1: '',
                        Respuesta2: '',
                        Respuesta3: ''
                    };
                    formatoconglomerado.id = this.preguntas[i].id;
                    formatoconglomerado.Pregunta = this.preguntas[i].pregunta;
                    formatoconglomerado.Respuesta1 = this.respuestasdesordenadas[i][0][0];
                    formatoconglomerado.Respuesta2 = this.respuestasdesordenadas[i][0][1];
                    formatoconglomerado.Respuesta3 = this.respuestasdesordenadas[i][0][2];
                    this.cuestionariofiltrado.push(formatoconglomerado);
                }
            }, err => {
                console.log('Error get cuestionarios by libro');
            });
        }, err => {
            console.log('Error get progeso by libro and usuario');
        });
    }
    agregarrespuesta(dato, codigo) {
        const respuesta = {
            id: 0,
            respuesta: ''
        };
        let banderita = false;
        respuesta.id = codigo;
        respuesta.respuesta = dato;
        const parametro = respuesta.id;
        const cantidad = Object.entries(this.respuestas).length;
        if (cantidad > 0) {
            for (const obj of this.respuestas) {
                const filtro = obj.id;
                if (parametro === filtro) {
                    banderita = true;
                    obj.respuesta = dato;
                }
            }
            if (banderita === false) {
                this.respuestas.push(respuesta);
            }
        }
        else if (cantidad === 0) {
            this.respuestas.push(respuesta);
        }
    }
    comprobarrespuesta() {
        const lasresoluciones = [];
        for (const item of this.cuestionarios) {
            const respuestacorrecta = item.RespuestaCorrecta;
            const idcuestionario = item.id;
            for (const obj of this.respuestas) {
                const idrespuestas = obj.id;
                const respuestaelegida = obj.respuesta;
                if (idcuestionario === idrespuestas) {
                    // eslint-disable-next-line prefer-const
                    let laresolucion = {
                        Pregunta: '',
                        RespuestaEscogida: '',
                        NumeroIntento: '',
                        Correcto: '',
                        ProgresoId: 0
                    };
                    laresolucion.Pregunta = item.Pregunta;
                    laresolucion.ProgresoId = this.codigoprogreso;
                    laresolucion.Correcto = 'incorrecto';
                    laresolucion.NumeroIntento = (+this.progreso.NumeroIntento + 1).toString();
                    laresolucion.RespuestaEscogida = respuestaelegida;
                    if (respuestacorrecta === respuestaelegida) {
                        this.numeroaciertos++;
                        laresolucion.Correcto = 'correcto';
                        lasresoluciones.push(laresolucion);
                        this.resoluciones = lasresoluciones;
                    }
                    else if (respuestacorrecta !== respuestaelegida) {
                        lasresoluciones.push(laresolucion);
                        this.resoluciones = lasresoluciones;
                    }
                }
            }
        }
        const lanota = this.numeroaciertos * this.notaporpregunta;
        if (lanota > this.progreso.NotaCuestionario) {
            this.progreso.NotaCuestionario = lanota;
        }
        this.progreso.NumeroIntento = this.progreso.NumeroIntento + 1;
        console.log(this.resoluciones);
        console.log(this.progreso);
        for (const resp of this.resoluciones) {
            console.log(resp);
            this.resolucionService.saveResolucion(resp).subscribe(ressaveresolucion => {
                this.resolucion1 = ressaveresolucion;
                console.log(this.resolucion1);
            }, err => {
                console.log('Error save resolucion');
            });
        }
        this.progresoService.updateProgreso(this.codigoprogreso, this.progreso).subscribe(resupdate => {
            this.mensaje = resupdate;
            this.bandera = true;
        }, err => {
            console.log('Error update cuestionario');
        });
    }
    finalizar() {
        this.router.navigate([
            'student',
            'stu-content'
        ]);
    }
    otrointento() {
        window.location.reload();
    }
};
StuContentEvaluationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_progreso_service__WEBPACK_IMPORTED_MODULE_2__.ProgresoService },
    { type: src_app_services_resolucion_service__WEBPACK_IMPORTED_MODULE_3__.ResolucionService },
    { type: src_app_services_cuestionario_service__WEBPACK_IMPORTED_MODULE_4__.CuestionarioService }
];
StuContentEvaluationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-stu-content-evaluation',
        template: _stu_content_evaluation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stu_content_evaluation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StuContentEvaluationPage);



/***/ }),

/***/ 3780:
/*!********************************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-evaluation/stu-content-evaluation.page.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-title.title-large {\n  color: #c897d8;\n  font-size: 30px;\n}\n\nion-title {\n  height: auto;\n  --color: white;\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center;\n}\n\nion-toolbar {\n  --background: translucent;\n}\n\n.main_content_div {\n  background: white;\n  width: 100%;\n  height: auto;\n  min-height: 600px;\n  max-height: 2000px;\n  border-top-right-radius: 75px;\n  border-bottom-right-radius: 75px;\n  margin-top: 10px;\n  padding-top: 10px;\n}\n\n.main_content_div .col_div_header h1 {\n  font-weight: lighter;\n  font-size: 20px;\n  color: #23A0AD;\n  font-style: italic;\n}\n\n.main_content_div .col_div_pregunta {\n  height: auto;\n}\n\n.main_content_div .col_div_pregunta h2 {\n  font-weight: lighter;\n  font-size: 20px;\n  color: #3a9292;\n  font-style: italic;\n}\n\n.main_content_div ion-list {\n  background: transparent;\n}\n\n.main_content_div ion-list ion-radio-group {\n  background: transparent;\n}\n\n.main_content_div ion-list ion-radio-group ion-item {\n  --background: transparent;\n}\n\n.main_content_div ion-list ion-radio-group ion-item ion-label {\n  background: transparent;\n  --color: #23A0AD;\n}\n\n.main_content_div ion-list ion-radio-group ion-item ion-radio {\n  background: transparent;\n}\n\n.main_content_div .col_div {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 25px;\n}\n\n.main_content_div .col_div img {\n  width: 100px;\n}\n\n.main_content_div .col_div ion-label {\n  color: #23A0AD;\n  margin-top: 5px;\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n}\n\nion-radio {\n  --border-radius: 4px;\n  --inner-border-radius: 4px;\n  --color: #ddd;\n  --color-checked: #23A0AD;\n}\n\nion-radio.ios {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #ddd;\n  border-radius: 4px;\n}\n\n.radio-checked.ios {\n  border-color: #23A0AD;\n}\n\nion-button {\n  --background: #93e9be;\n  --background-hover: #9ce0be;\n  --background-activated: #88f4be;\n  --background-focused: #88f4be;\n  --color: blue;\n  --border-radius: 10px;\n  --border-color: #000;\n  --border-style: solid;\n  --border-width: 1px;\n  --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);\n  --ripple-color: deeppink;\n  --padding-top: center;\n  --padding-bottom: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dS1jb250ZW50LWV2YWx1YXRpb24ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlbWVzdHJlJTIwNVxcY3Vyc29zJTIwZXh0cmFjdXJyaWN1bGFyZXNcXGNhbGlkYWQlMjBlZHVjYXRpdmFcXHNpc3RlbWEtbGVjdHVyYWxcXGFwcGxlY3R1cmEtYW5ndWxhcjE0LWlvbmljNi1jYXBhY2l0b3JcXHNyY1xcYXBwXFxzdHVkZW50XFxzdHUtY29udGVudFxcc3R1LWNvbnRlbnQtZXZhbHVhdGlvblxcc3R1LWNvbnRlbnQtZXZhbHVhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFFO0VBQ0UseUJBQUE7QUNHSjs7QUREQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QURGTTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0lSOztBRERJO0VBQ0UsWUFBQTtBQ0dOOztBREZNO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDSVI7O0FEREk7RUFDRSx1QkFBQTtBQ0dOOztBREZNO0VBQ0UsdUJBQUE7QUNJUjs7QURIUTtFQUNFLHlCQUFBO0FDS1Y7O0FESlU7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FDTVo7O0FESlU7RUFDRSx1QkFBQTtBQ01aOztBRERJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDR047O0FERk07RUFDRSxZQUFBO0FDSVI7O0FERk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSVI7O0FEQ0E7RUFDSSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDRUo7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBRTtFQUNFLHFCQUFBO0FDR0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FDQ0oiLCJmaWxlIjoic3R1LWNvbnRlbnQtZXZhbHVhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUudGl0bGUtbGFyZ2Uge1xyXG4gICAgY29sb3I6ICNjODk3ZDg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbiAgfVxyXG4ubWFpbl9jb250ZW50X2RpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDAwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNzVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgLmNvbF9kaXZfaGVhZGVyIHtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjNBMEFEO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbF9kaXZfcHJlZ3VudGEge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXdlaWdodDpsaWdodGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjb2xvcjogIzNhOTI5MjtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGlvbi1yYWRpby1ncm91cCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAtLWNvbG9yOiAjMjNBMEFEO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW9uLXJhZGlvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29sX2RpdiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgfVxyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAjMjNBMEFEO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5pb24tcmFkaW8ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAtLWlubmVyLWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIC0tY29sb3I6ICNkZGQ7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICMyM0EwQUQ7XHJcbiAgfVxyXG5cclxuICBpb24tcmFkaW8uaW9zIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgLnJhZGlvLWNoZWNrZWQuaW9zIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzIzQTBBRDtcclxuICB9XHJcblxyXG5cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjOTNlOWJlO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjOWNlMGJlO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzg4ZjRiZTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjODhmNGJlO1xyXG4gICAgLS1jb2xvcjogYmx1ZTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjMDAwO1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAgIC0tYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgLS1yaXBwbGUtY29sb3I6IGRlZXBwaW5rO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogY2VudGVyO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogY2VudGVyO1xyXG4gIH1cclxuIiwiaW9uLXRpdGxlLnRpdGxlLWxhcmdlIHtcbiAgY29sb3I6ICNjODk3ZDg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICBtYXgtaGVpZ2h0OiAyMDAwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3NXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNzVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9oZWFkZXIgaDEge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzIzQTBBRDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfcHJlZ3VudGEge1xuICBoZWlnaHQ6IGF1dG87XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9wcmVndW50YSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjM2E5MjkyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxpc3QgaW9uLXJhZGlvLWdyb3VwIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGlzdCBpb24tcmFkaW8tZ3JvdXAgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxpc3QgaW9uLXJhZGlvLWdyb3VwIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiAjMjNBMEFEO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxpc3QgaW9uLXJhZGlvLWdyb3VwIGlvbi1pdGVtIGlvbi1yYWRpbyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2IGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjMjNBMEFEO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgLS1pbm5lci1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIC0tY29sb3I6ICNkZGQ7XG4gIC0tY29sb3ItY2hlY2tlZDogIzIzQTBBRDtcbn1cblxuaW9uLXJhZGlvLmlvcyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnJhZGlvLWNoZWNrZWQuaW9zIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjNBMEFEO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOTNlOWJlO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM5Y2UwYmU7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM4OGY0YmU7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjODhmNGJlO1xuICAtLWNvbG9yOiBibHVlO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDAwO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiKDAsIDAsIDAsIDAuMjUpO1xuICAtLXJpcHBsZS1jb2xvcjogZGVlcHBpbms7XG4gIC0tcGFkZGluZy10b3A6IGNlbnRlcjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogY2VudGVyO1xufSJdfQ== */";

/***/ }),

/***/ 111:
/*!********************************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-evaluation/stu-content-evaluation.page.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      REFORZANDO TU APRENDIZAJE\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<div class=\"main_content_div\">\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n       <ion-col size=\"12\" *ngFor=\"let item of cuestionariofiltrado\">\r\n        <div class=\"col_div col_div_pregunta\">\r\n          <h2>\r\n            {{item.Pregunta}}\r\n          </h2>\r\n        </div>\r\n        <br>\r\n        <ion-list>\r\n          <ion-radio-group>\r\n            <ion-item (click)=\"agregarrespuesta(item.Respuesta1, item.id)\">\r\n              <ion-label>\r\n                {{item.Respuesta1}}\r\n              </ion-label>\r\n              <ion-radio color=\"secondary\" slot=\"end\" value=\"item.Respuesta1\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item (click)=\"agregarrespuesta(item.Respuesta1, item.id)\">\r\n              <ion-label>\r\n                {{item.Respuesta2}}\r\n              </ion-label>\r\n              <ion-radio color=\"secondary\" slot=\"end\" value=\"item.Respuesta2\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item (click)=\"agregarrespuesta(item.Respuesta1, item.id)\">\r\n              <ion-label>\r\n                {{item.Respuesta3}}\r\n              </ion-label>\r\n              <ion-radio color=\"secondary\" slot=\"end\" value=\"item.Respuesta3\"></ion-radio>\r\n            </ion-item>\r\n            </ion-radio-group>\r\n        </ion-list>\r\n      </ion-col>\r\n      <ion-col size=\"12\" *ngIf=\"bandera || progreso.NotaCuestionario === 20\">\r\n        <div\r\n        class=\"col_div col_div_final_finalizar\">\r\n          <ion-label color=\"primary\">\r\n            Calificacion: {{progreso.NotaCuestionario}}/20\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\" *ngIf=\"!bandera\">\r\n        <div\r\n        class=\"col_div col_div_final_finalizar\">\r\n        <!-- <ion-button\r\n          shape=\"round\"\r\n          (click)=\"comprobarrespuesta()\">\r\n              Calificar\r\n          </ion-button> -->\r\n          <ion-button\r\n          shape=\"round\"\r\n          [disabled]=\"(progreso.Progreso < 100 || progreso.NotaCuestionario === 20 || progreso.NumeroIntento > 2)? true:false\"\r\n          (click)=\"comprobarrespuesta()\">\r\n              Calificar\r\n          </ion-button>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\" *ngIf=\"bandera\">\r\n        <div\r\n        class=\"col_div col_div_final_finalizar\">\r\n        <ion-button\r\n          shape=\"round\"\r\n          [disabled]=\"(progreso.NumeroIntento > 2)? true:false\"\r\n          (click)=\"comprobarrespuesta()\">\r\n              Otro Intento\r\n          </ion-button>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\" *ngIf=\"bandera\">\r\n        <div\r\n        class=\"col_div col_div_final_finalizar\">\r\n        <ion-button\r\n          shape=\"round\"\r\n          (click)=\"comprobarrespuesta()\">\r\n              Terminar\r\n          </ion-button>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_student_stu-content_stu-content-evaluation_stu-content-evaluation_module_ts.js.map