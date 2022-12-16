"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_student_stu-content_stu-content-reading_stu-content-reading_module_ts"],{

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

/***/ 7809:
/*!*******************************************!*\
  !*** ./src/app/services/libro.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibroService": () => (/* binding */ LibroService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.service */ 7465);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);




let LibroService = class LibroService {
    constructor(http, wasa) {
        this.http = http;
        this.wasa = wasa;
        this.apiUrl = this.wasa.apiUrlGlobal + '/libro';
    }
    getLibros() {
        return this.http.get(`${this.apiUrl}`);
    }
    getLibro(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    deleteLibro(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
    // tslint:disable-next-line: no-shadowed-variable
    saveLibro(libro) {
        return this.http.post(`${this.apiUrl}/create`, libro);
    }
    updateLibro(id, updatedLibro) {
        return this.http.put(`${this.apiUrl}/update/${id}`, updatedLibro);
    }
};
LibroService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService }
];
LibroService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LibroService);



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

/***/ 8094:
/*!***********************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-reading/stu-content-reading-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentReadingPageRoutingModule": () => (/* binding */ StuContentReadingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stu_content_reading_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-reading.page */ 9021);




const routes = [
    {
        path: '',
        component: _stu_content_reading_page__WEBPACK_IMPORTED_MODULE_0__.StuContentReadingPage
    }
];
let StuContentReadingPageRoutingModule = class StuContentReadingPageRoutingModule {
};
StuContentReadingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StuContentReadingPageRoutingModule);



/***/ }),

/***/ 5226:
/*!***************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-reading/stu-content-reading.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentReadingPageModule": () => (/* binding */ StuContentReadingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stu_content_reading_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-reading-routing.module */ 8094);
/* harmony import */ var _stu_content_reading_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-content-reading.page */ 9021);







let StuContentReadingPageModule = class StuContentReadingPageModule {
};
StuContentReadingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stu_content_reading_routing_module__WEBPACK_IMPORTED_MODULE_0__.StuContentReadingPageRoutingModule
        ],
        declarations: [_stu_content_reading_page__WEBPACK_IMPORTED_MODULE_1__.StuContentReadingPage]
    })
], StuContentReadingPageModule);



/***/ }),

/***/ 9021:
/*!*************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-reading/stu-content-reading.page.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentReadingPage": () => (/* binding */ StuContentReadingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stu_content_reading_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-reading.page.html?ngResource */ 4283);
/* harmony import */ var _stu_content_reading_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-content-reading.page.scss?ngResource */ 9548);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_libro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/libro.service */ 7809);
/* harmony import */ var src_app_services_parrafo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/parrafo.service */ 5683);
/* harmony import */ var src_app_services_progreso_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/progreso.service */ 6421);
/* harmony import */ var src_app_services_cuestionario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cuestionario.service */ 6743);



/* eslint-disable @typescript-eslint/naming-convention */







let StuContentReadingPage = class StuContentReadingPage {
    constructor(router, libroService, parrafoService, progresoService, cuestionarioService) {
        this.router = router;
        this.libroService = libroService;
        this.parrafoService = parrafoService;
        this.progresoService = progresoService;
        this.cuestionarioService = cuestionarioService;
        this.libro = {
            id: 0,
            Titulo: '',
            Audio: '',
            Video: '',
            Imagen: '',
            Autor: ''
        };
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
        this.progresocreate = {
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
        this.estudiante = {
            id: 0,
            Nombre: '',
            Apellido: '',
            Genero: '',
            Documento: '',
            GradoId: 0,
            grado: {
                id: 0,
                Nombre: '',
            },
        };
        this.parrafos = [];
        this.slideOpts = {
            // slidesPerView: 1,
            centeredSlides: true,
            loop: true,
            spaceBetween: 10,
            grabCursor: true,
            initialSlide: 0,
            speed: 500
        };
        this.existencia = 'no existe';
        this.estado = '';
        this.haycuestionario = false;
        this.resolviocuestionario = false;
        this.cuestionarios = [];
    }
    ngOnInit() {
        const parametro = JSON.parse(localStorage.getItem('ellibro'));
        const parestudiante = JSON.parse(localStorage.getItem('usuario'));
        this.libroService.getLibro(parametro).subscribe(reslibro => {
            this.libro = reslibro;
            this.cuestionarioService.getsearchCuestionariobylibro(parametro).subscribe(rescuestionarios => {
                if (Object.entries(rescuestionarios).length > 0) {
                    this.cuestionarios = rescuestionarios;
                    this.haycuestionario = true;
                }
                else {
                    console.log('No hay Cuestionarios');
                }
            }, err => {
                console.log('Error get cuestionarios by libro');
            });
            this.progresoService.getProgresoidividual(parametro, parestudiante.id).subscribe(resprogreso => {
                if (resprogreso !== null) {
                    this.progreso = resprogreso;
                }
                else {
                    this.progresocreate.LibroId = parametro;
                    this.progresocreate.EstudianteId = parestudiante.id;
                    this.progresocreate.Progreso = 0;
                    this.progresoService.saveProgreso(this.progresocreate).subscribe(resnewprogreso => {
                        this.progreso = resnewprogreso;
                        this.estado = 'iniciado';
                        window.location.reload();
                    }, err => {
                        console.log('Error create progreso');
                    });
                }
            }, err => {
                console.log('Error get proceso by libro y alumno');
            });
            // sacar el progreso mediante libro y estudiante
            this.parrafoService.getsearchParrafobylibro(parametro).subscribe(resparrafos => {
                this.parrafos = resparrafos;
            }, err => {
                console.log('Error get parrafos by libro id');
            });
        }, err => {
            console.log('Error get libro by id');
        });
    }
    elegir(dato) {
        this.progreso.Reaccion = dato;
    }
    deselegir() {
        this.progreso.Reaccion = '';
    }
    slideChanged(event) {
        this.slides.isEnd().then((istrue) => {
            if (istrue) {
                this.validacionultimoslide = 'termino';
                if (this.progreso.Progreso === 0) {
                    this.progreso.Progreso = 50;
                }
            }
            else {
                this.validacionultimoslide = 'aun no termino';
            }
        });
    }
    validarprogreso() {
        if (this.progreso.Progreso < 100) {
            if (this.progreso.Progreso === 50) {
                if (this.progreso.Comentario.length > 10) {
                    this.progreso.Progreso = this.progreso.Progreso + 20;
                }
                if (this.progreso.FinalAlternativo.length > 20) {
                    this.progreso.Progreso = this.progreso.Progreso + 30;
                }
            }
            if (this.progreso.Progreso === 70) {
                if (this.progreso.FinalAlternativo.length > 20) {
                    this.progreso.Progreso = this.progreso.Progreso + 30;
                }
            }
            if (this.progreso.Progreso === 80) {
                if (this.progreso.Comentario.length > 10) {
                    this.progreso.Progreso = this.progreso.Progreso + 20;
                }
            }
        }
        else {
            this.progreso.Progreso = 100;
        }
    }
    actualizar(dato) {
        this.validarprogreso();
        this.progresoService.updateProgreso(dato, this.progreso).subscribe(resupdate => {
            this.mensaje = resupdate;
        }, err => {
            console.log('Error Update Progreso');
        });
    }
    iracuestionario(dato) {
        this.actualizar(dato);
        this.router.navigate([
            'student',
            'stu-content',
            'stu-content-evaluation'
        ]);
    }
    terminar(dato) {
        this.actualizar(dato);
        this.router.navigate([
            'student',
            'stu-content'
        ]);
    }
};
StuContentReadingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_libro_service__WEBPACK_IMPORTED_MODULE_2__.LibroService },
    { type: src_app_services_parrafo_service__WEBPACK_IMPORTED_MODULE_3__.ParrafoService },
    { type: src_app_services_progreso_service__WEBPACK_IMPORTED_MODULE_4__.ProgresoService },
    { type: src_app_services_cuestionario_service__WEBPACK_IMPORTED_MODULE_5__.CuestionarioService }
];
StuContentReadingPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSlides, { static: true },] }]
};
StuContentReadingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-stu-content-reading',
        template: _stu_content_reading_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stu_content_reading_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StuContentReadingPage);



/***/ }),

/***/ 9548:
/*!**************************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-reading/stu-content-reading.page.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = ".col_div_notificacion {\n  position: relative;\n  float: right;\n  height: 40px;\n  width: 40px;\n  top: -40px;\n}\n.col_div_notificacion ion-icon {\n  width: 40px;\n  height: 40px;\n}\n.main_content_div {\n  background: white;\n  width: 100%;\n  height: auto;\n  min-height: 600px;\n  max-height: 2000px;\n  border-top-right-radius: 75px;\n  margin-top: 10px;\n  padding-top: 10px;\n}\n.main_content_div .col_div_titulo {\n  height: auto;\n}\n.main_content_div .col_div_titulo h1 {\n  font-weight: bold;\n  font-size: 30px;\n  color: #36BDBC;\n  font-style: italic;\n}\n.main_content_div .col_div_lectura {\n  min-height: 300px;\n  max-height: 500px;\n  height: auto;\n  color: #36BDBC;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n.main_content_div .col_div_lectura ion-slides {\n  height: 100%;\n  width: 100%;\n  --bullet-background: #ededeb;\n  --bullet-background-active: #36BDBC;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide {\n  color: #000;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide h1 {\n  font-weight: bold;\n  font-size: 24px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide h2 {\n  font-weight: bold;\n  font-size: 22px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide h3 {\n  font-weight: bold;\n  font-size: 20px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide h4 {\n  font-weight: bold;\n  font-size: 18px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide h5 {\n  font-weight: bold;\n  font-size: 16px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide h6 {\n  font-weight: bold;\n  font-size: 14px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide p {\n  font-weight: bold;\n  font-size: 12px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide img {\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .col_div_video {\n  height: 250px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n.main_content_div .col_div_video iframe {\n  width: 100%;\n  height: 100%;\n  border-radius: 25px;\n}\n.main_content_div .col_div_audio {\n  height: 50px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n.main_content_div .col_div_audio audio {\n  width: 100%;\n}\n.main_content_div .col_div_reaccion {\n  height: 80px;\n}\n.main_content_div .col_div_reaccion ion-grid ion-row ion-col {\n  padding: 5px;\n}\n.main_content_div .col_div_reaccion ion-grid ion-row ion-col .elegible {\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .col_div_reaccion ion-grid ion-row ion-col .elegible img {\n  width: 60px;\n  height: 60px;\n  margin: auto;\n}\n.main_content_div .col_div_reaccion ion-grid ion-row ion-col .elegido {\n  z-index: 1;\n  margin-top: -35px;\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .col_div_reaccion ion-grid ion-row ion-col .elegido img {\n  width: 60px;\n  height: 60px;\n  margin: auto;\n}\n.main_content_div .col_div_formulario {\n  min-height: 400px;\n  max-height: 900px;\n  height: auto;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n.main_content_div .col_div_formulario ion-list {\n  width: 100%;\n  background: transparent;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group {\n  width: 100%;\n  background: transparent;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group ion-item-divider {\n  width: 100%;\n  background: transparent;\n  border-bottom: none;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group ion-item-divider ion-label {\n  width: 100%;\n  text-align: start;\n  color: #08A6AC;\n  font-weight: bold;\n  font-size: 24px;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group ion-item {\n  --background: transparent;\n  --border-color: 2px solid black;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group ion-item ion-label {\n  text-align: start;\n  color: #08A6AC;\n  font-weight: bold;\n  font-size: 24px;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group ion-item ion-textarea {\n  padding: 5px;\n  font-size: 20px;\n  font-weight: 400;\n  color: #08A6AC;\n  border-radius: 15px;\n  width: 100%;\n  height: 125px;\n  border: 2px solid #08A6AC;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group ion-item ion-icon {\n  color: #000;\n}\n.main_content_div .col_div_final_cuestionario {\n  height: 50px;\n  border-radius: 50px;\n}\n.main_content_div .col_div_final_cuestionario ion-button {\n  --background: linear-gradient(to right, #08A6AC, #36BDBC);\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .col_div_final_cuestionario ion-button:hover {\n  --background: linear-gradient(to right, #36BDBC, #08A6AC);\n}\n.main_content_div .col_div_final_finalizar {\n  height: 50px;\n  border-radius: 50px;\n}\n.main_content_div .col_div_final_finalizar ion-button {\n  --background: linear-gradient(to right, #08A6AC, #36BDBC);\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .col_div_final_finalizar ion-button:hover {\n  --background: linear-gradient(to right, #36BDBC, #08A6AC);\n}\n.main_content_div .col_div {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 25px;\n}\n.main_content_div .col_div img {\n  width: 100px;\n}\n.main_content_div .col_div ion-label {\n  color: white;\n  margin-top: 5px;\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n}\n.animated {\n  --webkit-animation-duration: 5s;\n  animation-duration: 5s;\n  --webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.no-border {\n  border-color: 0px solid black !important;\n}\n.bounceInUp {\n  --webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n  }\n  80% {\n    -webkit-transform: translateY(10px);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dS1jb250ZW50LXJlYWRpbmcucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlbWVzdHJlJTIwNVxcY3Vyc29zJTIwZXh0cmFjdXJyaWN1bGFyZXNcXGNhbGlkYWQlMjBlZHVjYXRpdmFcXHNpc3RlbWEtbGVjdHVyYWxcXGFwcGxlY3R1cmEtYW5ndWxhcjE0LWlvbmljNi1jYXBhY2l0b3JcXHNyY1xcYXBwXFxzdHVkZW50XFxzdHUtY29udGVudFxcc3R1LWNvbnRlbnQtcmVhZGluZ1xcc3R1LWNvbnRlbnQtcmVhZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFSjtBRENBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFRjtBRERFO0VBQ0UsWUFBQTtBQ0dKO0FERkk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNJTjtBRERFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7QUNHSjtBREZJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLG1DQUFBO0FDSU47QURITTtFQUNFLFdBQUE7QUNLUjtBREpRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDTVY7QURKUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ01WO0FESlE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNNVjtBREpRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDTVY7QURKUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ01WO0FESlE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNNVjtBREpRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDTVY7QURKUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDTVY7QURERTtFQUNFLGFBQUE7RUFDQSwwQ0FBQTtBQ0dKO0FERkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDSU47QURERTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0dKO0FERkk7RUFDRSxXQUFBO0FDSU47QURERTtFQUNFLFlBQUE7QUNHSjtBREFRO0VBQ0UsWUFBQTtBQ0VWO0FERFU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0daO0FERlk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNJZDtBRERVO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHWjtBREZZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSWQ7QURHRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUNESjtBREVJO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FDQU47QURDTTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtBQ0NSO0FEQVE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VWO0FERFU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDR1o7QURBUTtFQUNFLHlCQUFBO0VBQ0EsK0JBQUE7QUNFVjtBRERVO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDR1o7QUREVTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDR1o7QUREVTtFQUNFLFdBQUE7QUNHWjtBREdFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDREo7QURFSTtFQUNFLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBTjtBREVJO0VBQ0UseURBQUE7QUNBTjtBREdFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDREo7QURFSTtFQUNFLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBTjtBREVJO0VBQ0UseURBQUE7QUNBTjtBREdFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDREo7QURFSTtFQUNFLFlBQUE7QUNBTjtBREVJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FOO0FES0E7RUFDRSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtBQ0ZGO0FES0E7RUFDRSx3Q0FBQTtBQ0ZGO0FEc0JBO0VBQ0UsbUNBQUE7RUFDQSwwQkFBQTtBQ0hGO0FETUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxxQ0FBQTtFQ0hGO0VES0E7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7RUNIRjtFREtBO0lBQ0UsbUNBQUE7RUNIRjtFREtBO0lBQ0UsZ0NBQUE7RUNIRjtBQUNGIiwiZmlsZSI6InN0dS1jb250ZW50LXJlYWRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbF9kaXZfbm90aWZpY2FjaW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICB0b3A6IC00MHB4O1xyXG4gIGlvbi1pY29uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxufVxyXG4ubWFpbl9jb250ZW50X2RpdiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDIwMDBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNzVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIC5jb2xfZGl2X3RpdHVsbyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGNvbG9yOiAjMzZCREJDO1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2xfZGl2X2xlY3R1cmEge1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGNvbG9yOiAjMzZCREJDO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgaW9uLXNsaWRlcyB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6ICNlZGVkZWI7XHJcbiAgICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjMzZCREJDO1xyXG4gICAgICBpb24tc2xpZGUge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDYge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNvbF9kaXZfdmlkZW8ge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGlmcmFtZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2xfZGl2X2F1ZGlvIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGF1ZGlvIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2xfZGl2X3JlYWNjaW9uIHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGlvbi1ncmlkIHtcclxuICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAuZWxlZ2libGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5lbGVnaWRvIHtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTM1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY29sX2Rpdl9mb3JtdWxhcmlvIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogOTAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgaW9uLWl0ZW0tZ3JvdXAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGlvbi1pdGVtLWRpdmlkZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDhBNkFDO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgLS1ib3JkZXItY29sb3I6IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgICBjb2xvcjogIzA4QTZBQztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlvbi10ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzA4QTZBQztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwOEE2QUM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY29sX2Rpdl9maW5hbF9jdWVzdGlvbmFyaW8ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA4QTZBQywgIzM2QkRCQyk7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uOmhvdmVyIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNkJEQkMsICMwOEE2QUMpO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29sX2Rpdl9maW5hbF9maW5hbGl6YXIge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA4QTZBQywgIzM2QkRCQyk7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uOmhvdmVyIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNkJEQkMsICMwOEE2QUMpO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29sX2RpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hbmltYXRlZCB7XHJcbiAgLS13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gIC0td2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuLm5vLWJvcmRlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAwcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluVXAge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYm91bmNlSW5VcCB7XHJcbiAgLS13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlSW5VcCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcbiIsIi5jb2xfZGl2X25vdGlmaWNhY2lvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICB0b3A6IC00MHB4O1xufVxuLmNvbF9kaXZfbm90aWZpY2FjaW9uIGlvbi1pY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogNjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDc1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfdGl0dWxvIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfdGl0dWxvIGgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICMzNkJEQkM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2xlY3R1cmEge1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICMzNkJEQkM7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2xlY3R1cmEgaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6ICNlZGVkZWI7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjMzZCREJDO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfbGVjdHVyYSBpb24tc2xpZGVzIGlvbi1zbGlkZSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfbGVjdHVyYSBpb24tc2xpZGVzIGlvbi1zbGlkZSBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9sZWN0dXJhIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2xlY3R1cmEgaW9uLXNsaWRlcyBpb24tc2xpZGUgaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfbGVjdHVyYSBpb24tc2xpZGVzIGlvbi1zbGlkZSBoNCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9sZWN0dXJhIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGg1IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2xlY3R1cmEgaW9uLXNsaWRlcyBpb24tc2xpZGUgaDYge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfbGVjdHVyYSBpb24tc2xpZGVzIGlvbi1zbGlkZSBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2xlY3R1cmEgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X3ZpZGVvIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfdmlkZW8gaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2F1ZGlvIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9hdWRpbyBhdWRpbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfcmVhY2Npb24ge1xuICBoZWlnaHQ6IDgwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9yZWFjY2lvbiBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9yZWFjY2lvbiBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmVsZWdpYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X3JlYWNjaW9uIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuZWxlZ2libGUgaW1nIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfcmVhY2Npb24gaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5lbGVnaWRvIHtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLXRvcDogLTM1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9yZWFjY2lvbiBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmVsZWdpZG8gaW1nIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfZm9ybXVsYXJpbyB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBtYXgtaGVpZ2h0OiA5MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9mb3JtdWxhcmlvIGlvbi1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfZm9ybXVsYXJpbyBpb24tbGlzdCBpb24taXRlbS1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2Zvcm11bGFyaW8gaW9uLWxpc3QgaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2Zvcm11bGFyaW8gaW9uLWxpc3QgaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW0tZGl2aWRlciBpb24tbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGNvbG9yOiAjMDhBNkFDO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfZm9ybXVsYXJpbyBpb24tbGlzdCBpb24taXRlbS1ncm91cCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAycHggc29saWQgYmxhY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9mb3JtdWxhcmlvIGlvbi1saXN0IGlvbi1pdGVtLWdyb3VwIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogIzA4QTZBQztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2Zvcm11bGFyaW8gaW9uLWxpc3QgaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW0gaW9uLXRleHRhcmVhIHtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMDhBNkFDO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjVweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzA4QTZBQztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2Zvcm11bGFyaW8gaW9uLWxpc3QgaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzAwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2ZpbmFsX2N1ZXN0aW9uYXJpbyB7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2ZpbmFsX2N1ZXN0aW9uYXJpbyBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwOEE2QUMsICMzNkJEQkMpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfZmluYWxfY3Vlc3Rpb25hcmlvIGlvbi1idXR0b246aG92ZXIge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM2QkRCQywgIzA4QTZBQyk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9maW5hbF9maW5hbGl6YXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9maW5hbF9maW5hbGl6YXIgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDhBNkFDLCAjMzZCREJDKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2ZpbmFsX2ZpbmFsaXphciBpb24tYnV0dG9uOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNkJEQkMsICMwOEE2QUMpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2IGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkIHtcbiAgLS13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgLS13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLm5vLWJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogMHB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJblVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcbiAgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwKTtcbiAgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmJvdW5jZUluVXAge1xuICAtLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlSW5VcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XG4gIH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59Il19 */";

/***/ }),

/***/ 4283:
/*!**************************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-reading/stu-content-reading.page.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main_content_div_child\">\r\n  <div class=\"col_div_notificacion\">\r\n    <ion-icon name=\"notifications-outline\"></ion-icon>\r\n  </div>\r\n  <div class=\"main_content_div animated bounceInUp\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <div class=\"col_div col_div_titulo\">\r\n            <h1>\r\n              {{libro.Titulo}}\r\n            </h1>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <div class=\"col_div col_div_lectura\">\r\n            <ion-slides pager=\"true\" (ionSlideWillChange)=\"slideChanged($event)\" [options]=\"slideOpts\">\r\n              <ion-slide *ngFor=\"let item of parrafos\">\r\n                <img *ngIf=\"item.Imagen !== ''\" [src]=\"item.Imagen\" alt=\"\" srcset=\"\">\r\n                <h1 *ngIf=\"item.Parrafo !== '' && 35 < item.Parrafo.length\">\r\n                  {{item.Parrafo}}\r\n                </h1>\r\n                <h2 *ngIf=\"item.Parrafo !== '' && 35 >= item.Parrafo.length && item.Parrafo.length < 50\">\r\n                  {{item.Parrafo}}\r\n                </h2>\r\n                <h3 *ngIf=\"item.Parrafo !== '' && 50 >= item.Parrafo.length\">\r\n                  {{item.Parrafo}}\r\n                </h3>\r\n              </ion-slide>\r\n            </ion-slides>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <div class=\"col_div col_div_reaccion\">\r\n            <ion-grid fixed>\r\n              <ion-row>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"elegible\">\r\n                    <img *ngIf=\"progreso.Reaccion !== 'like'\"\r\n                    src=\"../../../../assets/reacciones/like.png\"\r\n                    alt=\"me gusta\" srcset=\"\" (click)=\"elegir('like')\">\r\n                  </div>\r\n                  <div class=\"elegido\">\r\n                    <img *ngIf=\"progreso.Reaccion === 'like'\"\r\n                    src=\"../../../../assets/reacciones/like-active.png\"\r\n                    alt=\"me gusta activado\" srcset=\"\" (click)=\"deselegir()\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"elegible\" (click)=\"elegir('smile')\">\r\n                    <img *ngIf=\"progreso.Reaccion !== 'smile'\"\r\n                    src=\"../../../../assets/reacciones/smile.png\"\r\n                    alt=\"me alegra\" srcset=\"\">\r\n                  </div>\r\n                  <div class=\"elegido\" (click)=\"deselegir()\">\r\n                    <img *ngIf=\"progreso.Reaccion === 'smile'\"\r\n                    src=\"../../../../assets/reacciones/smile-active.png\"\r\n                    alt=\"me alegra activado\" srcset=\"\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"elegible\" (click)=\"elegir('sad')\">\r\n                    <img *ngIf=\"progreso.Reaccion !== 'sad'\"\r\n                    src=\"../../../../assets/reacciones/sad.png\"\r\n                    alt=\"me entristece\" srcset=\"\">\r\n                  </div>\r\n                  <div class=\"elegido\" (click)=\"deselegir()\">\r\n                    <img *ngIf=\"progreso.Reaccion === 'sad'\"\r\n                    src=\"../../../../assets/reacciones/sad-active.png\"\r\n                    alt=\"me entristece activado\" srcset=\"\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"elegible\" (click)=\"elegir('angry')\">\r\n                    <img *ngIf=\"progreso.Reaccion !== 'angry'\"\r\n                    src=\"../../../../assets/reacciones/angry.png\"\r\n                    alt=\"me enoja\" srcset=\"\">\r\n                  </div>\r\n                  <div class=\"elegido\" (click)=\"deselegir()\">\r\n                    <img *ngIf=\"progreso.Reaccion === 'angry'\"\r\n                    src=\"../../../../assets/reacciones/angry-active.png\"\r\n                    alt=\"me enoja activado\" srcset=\"\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"elegible\" (click)=\"elegir('confused')\">\r\n                    <img *ngIf=\"progreso.Reaccion !== 'confused'\"\r\n                    src=\"../../../../assets/reacciones/confused.png\"\r\n                    alt=\"me confunde\" srcset=\"\">\r\n                  </div>\r\n                  <div class=\"elegido\" (click)=\"deselegir()\">\r\n                    <img *ngIf=\"progreso.Reaccion === 'confused'\"\r\n                    src=\"../../../../assets/reacciones/confused-active.png\"\r\n                    alt=\"me confunde activado\" srcset=\"\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"elegible\" (click)=\"elegir('amazed')\">\r\n                    <img *ngIf=\"progreso.Reaccion !== 'amazed'\"\r\n                    src=\"../../../../assets/reacciones/amazed.png\"\r\n                    alt=\"me asombra\" srcset=\"\">\r\n                  </div>\r\n                  <div class=\"elegido\" (click)=\"deselegir()\">\r\n                    <img *ngIf=\"progreso.Reaccion === 'amazed'\"\r\n                    src=\"../../../../assets/reacciones/amazed-active.png\"\r\n                    alt=\"me asombra activado\" srcset=\"\">\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <div class=\"col_div col_div_formulario\">\r\n            <ion-list>\r\n              <ion-item-group>\r\n                <ion-item-divider>\r\n                  <ion-label>\r\n                    Comentario:\r\n                  </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item class=\"no-border\">\r\n                  <ion-textarea\r\n                    type=\"text\"\r\n                    name=\"Comentario\"\r\n                    required\r\n                    auto-focus\r\n                    tabindex=\"1\"\r\n                    minlength=\"10\"\r\n                    #Comentario=\"ngModel\"\r\n                    [(ngModel)]=\"progreso.Comentario\">\r\n                  </ion-textarea>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-text color=\"danger\" *ngIf=\"Comentario.errors?.minlength\">\r\n                    Escribir un comentario de mas de 10 letras\r\n                  </ion-text>\r\n                </ion-item>\r\n              </ion-item-group>\r\n              <ion-item-group>\r\n                <ion-item-divider>\r\n                  <ion-label>\r\n                    Final Alternativo:\r\n                  </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item>\r\n                  <ion-textarea\r\n                    type=\"text\"\r\n                    name=\"FinalAlternativo\"\r\n                    required\r\n                    tabindex=\"2\"\r\n                    minlength=\"20\"\r\n                    #FinalAlternativo=\"ngModel\"\r\n                    [(ngModel)]=\"progreso.FinalAlternativo\">\r\n                  </ion-textarea>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-text color=\"danger\" *ngIf=\"FinalAlternativo.errors?.minlength\">\r\n                    Escribir un final alternativo de mas de 20 letras\r\n                  </ion-text>\r\n                </ion-item>\r\n              </ion-item-group>\r\n            </ion-list>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" *ngIf=\"haycuestionario\">\r\n          <div class=\"col_div col_div_final_cuestionario\">\r\n            <ion-button\r\n            [disabled]=\"(progreso.Reaccion === '' || progreso.Comentario.length < 10 || progreso.FinalAlternativo.length < 20)? true:false\"\r\n            shape=\"round\"\r\n            (click)=\"iracuestionario(progreso.id)\">\r\n                Cuestionario\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" *ngIf=\"haycuestionario\">\r\n          <div\r\n          class=\"col_div col_div_final_finalizar\">\r\n          <ion-button\r\n            shape=\"round\"\r\n            [disabled]=\"(progreso.Progreso === 0 || progreso.Reaccion === '')? true:false\"\r\n            (click)=\"terminar(progreso.id)\">\r\n                Finalizar sin Cuestionario\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_student_stu-content_stu-content-reading_stu-content-reading_module_ts.js.map