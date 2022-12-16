"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_teacher_tea-statistics_tea-statistics_module_ts"],{

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

/***/ 6472:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics-forstudent-cuestionario/tea-statistics-forstudent-cuestionario.page.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeaStatisticsForstudentCuestionarioPage": () => (/* binding */ TeaStatisticsForstudentCuestionarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tea_statistics_forstudent_cuestionario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tea-statistics-forstudent-cuestionario.page.html?ngResource */ 2095);
/* harmony import */ var _tea_statistics_forstudent_cuestionario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tea-statistics-forstudent-cuestionario.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_progreso_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/progreso.service */ 6421);
/* harmony import */ var src_app_services_resolucion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/resolucion.service */ 2732);



/* eslint-disable @typescript-eslint/naming-convention */




let TeaStatisticsForstudentCuestionarioPage = class TeaStatisticsForstudentCuestionarioPage {
    constructor(router, activatedRoute, progresoService, resolucionService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.progresoService = progresoService;
        this.resolucionService = resolucionService;
        this.resoluciones = [];
        this.resolucionfiltradas = [];
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
    }
    onOptionsSelectIntento(event) {
        const value = event.target.value;
        this.eleccion(value);
    }
    eleccion(dato) {
        this.resolucionService.getResolucioncuestionarioeintento(this.progreso.id, dato).subscribe(resresolucion => {
            this.resolucionfiltradas = resresolucion;
        }, err => {
            console.log('Error get resoluciones by progreso');
        });
    }
    ngOnInit() {
        const codigoprogreso = this.activatedRoute.snapshot.paramMap.get('codigo');
        this.progresoService.getProgreso(codigoprogreso).subscribe(resprogreso => {
            this.progreso = resprogreso;
            this.resolucionService.getResolucioncuestionarioeintento(this.progreso.id, this.progreso.NumeroIntento).subscribe(resresolucion => {
                this.resolucionfiltradas = resresolucion;
                console.log(this.resolucionfiltradas);
            }, err => {
                console.log('Error get resoluciones by progreso');
            });
        }, err => {
            console.log('Error get progreso by id');
        });
    }
    finalizar() {
        this.router.navigate([
            'teacher',
            'tea-home'
        ]);
    }
};
TeaStatisticsForstudentCuestionarioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_progreso_service__WEBPACK_IMPORTED_MODULE_2__.ProgresoService },
    { type: src_app_services_resolucion_service__WEBPACK_IMPORTED_MODULE_3__.ResolucionService }
];
TeaStatisticsForstudentCuestionarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tea-statistics-forstudent-cuestionario',
        template: _tea_statistics_forstudent_cuestionario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tea_statistics_forstudent_cuestionario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TeaStatisticsForstudentCuestionarioPage);



/***/ }),

/***/ 8762:
/*!****************************************************************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics-forstudent-libro/tea-statistics-forstudent-libro.page.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeaStatisticsForstudentLibroPage": () => (/* binding */ TeaStatisticsForstudentLibroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tea_statistics_forstudent_libro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tea-statistics-forstudent-libro.page.html?ngResource */ 3067);
/* harmony import */ var _tea_statistics_forstudent_libro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tea-statistics-forstudent-libro.page.scss?ngResource */ 8807);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_libro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/libro.service */ 7809);
/* harmony import */ var src_app_services_parrafo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/parrafo.service */ 5683);
/* harmony import */ var src_app_services_progreso_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/progreso.service */ 6421);
/* harmony import */ var src_app_services_cuestionario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cuestionario.service */ 6743);



/* eslint-disable @typescript-eslint/naming-convention */







let TeaStatisticsForstudentLibroPage = class TeaStatisticsForstudentLibroPage {
    constructor(router, libroService, activatedRoute, parrafoService, progresoService, cuestionarioService) {
        this.router = router;
        this.libroService = libroService;
        this.activatedRoute = activatedRoute;
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
        const codigoestudiante = this.activatedRoute.snapshot.paramMap.get('estudiante');
        const codigolibro = this.activatedRoute.snapshot.paramMap.get('libro');
        this.libroService.getLibro(codigolibro).subscribe(reslibro => {
            this.libro = reslibro;
            this.cuestionarioService.getsearchCuestionariobylibro(codigolibro).subscribe(rescuestionarios => {
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
            this.progresoService.getProgresoidividual(codigolibro, codigoestudiante).subscribe(resprogreso => {
                if (resprogreso !== null) {
                    this.progreso = resprogreso;
                }
            }, err => {
                console.log('Error get proceso by libro y alumno');
            });
            // sacar el progreso mediante libro y estudiante
            this.parrafoService.getsearchParrafobylibro(codigolibro).subscribe(resparrafos => {
                this.parrafos = resparrafos;
            }, err => {
                console.log('Error get parrafos by libro id');
            });
        }, err => {
            console.log('Error get libro by id');
        });
    }
    chekarcuestionario(dato) {
        this.router.navigate([
            'teacher',
            'tea-statistics',
            'tea-statistics-forstudent-cuestionario',
            dato
        ]);
    }
};
TeaStatisticsForstudentLibroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_libro_service__WEBPACK_IMPORTED_MODULE_2__.LibroService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_services_parrafo_service__WEBPACK_IMPORTED_MODULE_3__.ParrafoService },
    { type: src_app_services_progreso_service__WEBPACK_IMPORTED_MODULE_4__.ProgresoService },
    { type: src_app_services_cuestionario_service__WEBPACK_IMPORTED_MODULE_5__.CuestionarioService }
];
TeaStatisticsForstudentLibroPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSlides, { static: true },] }]
};
TeaStatisticsForstudentLibroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tea-statistics-forstudent-libro',
        template: _tea_statistics_forstudent_libro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tea_statistics_forstudent_libro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TeaStatisticsForstudentLibroPage);



/***/ }),

/***/ 8625:
/*!****************************************************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics-forstudent/tea-statistics-forstudent.page.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeaStatisticsForstudentPage": () => (/* binding */ TeaStatisticsForstudentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tea_statistics_forstudent_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tea-statistics-forstudent.page.html?ngResource */ 9858);
/* harmony import */ var _tea_statistics_forstudent_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tea-statistics-forstudent.page.scss?ngResource */ 8959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_reporte_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/reporte.service */ 7218);
/* harmony import */ var src_app_services_estudiante_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/estudiante.service */ 4378);



/* eslint-disable @typescript-eslint/naming-convention */




let TeaStatisticsForstudentPage = class TeaStatisticsForstudentPage {
    constructor(router, activatedRoute, reporteService, estudianteService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.reporteService = reporteService;
        this.estudianteService = estudianteService;
        this.estudiante = {
            id: 0,
            Nombre: '',
            Apellido: '',
            Genero: '',
            Documento: '',
            Seccion: '',
            GradoId: 0,
            grado: {
                id: 0,
                Nombre: ''
            }
        };
        this.reporte = [];
        this.reportedetallado = [];
        this.libros = [];
        this.eleccion = 'libro';
    }
    elegir(par) {
        this.eleccion = par;
        if (this.eleccion === 'lectura') {
            this.libros = this.reportedetallado[2];
        }
        else if (this.eleccion === 'video') {
            this.libros = this.reportedetallado[0];
        }
        else if (this.eleccion === 'audio') {
            this.libros = this.reportedetallado[1];
        }
        console.log(this.libros);
    }
    ngOnInit() {
        const inicio = this.activatedRoute.snapshot.paramMap.get('inicio');
        const fin = this.activatedRoute.snapshot.paramMap.get('fin');
        const codigoestudiante = this.activatedRoute.snapshot.paramMap.get('estudiante');
        this.estudianteService.getEstudiante(codigoestudiante).subscribe(resestudiante => {
            this.estudiante = resestudiante;
            this.reporteService.getstatisticsindividual(this.estudiante.id, inicio, fin).subscribe(resrepo => {
                this.reporte = resrepo;
                this.videosvistos = this.reporte[0][0].videos_vistos;
                this.audiosescuchados = this.reporte[1][0].audios_escuchados;
                this.librosleidos = this.reporte[2][0].libros_leidos;
                this.notapromedio = this.reporte[2][0].nota;
                this.progresopromedio = this.reporte[2].progreso;
            }, err => {
                console.log('Error get reporte individual');
            });
            this.reporteService.getstatisticsindividualdetail(this.estudiante.id, inicio, fin).subscribe(resrepodetallado => {
                this.reportedetallado = resrepodetallado;
                console.log(this.reportedetallado);
            }, err => {
                console.log('Error get reporte detallado');
            });
        }, err => {
            console.log('Error get estudiante');
        });
    }
    goToCuento(parametro) {
        this.router.navigate([
            'teacher',
            'tea-statistics',
            'tea-statistics-forstudent-libro',
            parametro,
            this.estudiante.id
        ]);
    }
};
TeaStatisticsForstudentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_reporte_service__WEBPACK_IMPORTED_MODULE_2__.ReporteService },
    { type: src_app_services_estudiante_service__WEBPACK_IMPORTED_MODULE_3__.EstudianteService }
];
TeaStatisticsForstudentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tea-statistics-forstudent',
        template: _tea_statistics_forstudent_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tea_statistics_forstudent_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TeaStatisticsForstudentPage);



/***/ }),

/***/ 2634:
/*!*************************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeaStatisticsPageRoutingModule": () => (/* binding */ TeaStatisticsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tea_statistics_forstudent_cuestionario_tea_statistics_forstudent_cuestionario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tea-statistics-forstudent-cuestionario/tea-statistics-forstudent-cuestionario.page */ 6472);
/* harmony import */ var _tea_statistics_forstudent_libro_tea_statistics_forstudent_libro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tea-statistics-forstudent-libro/tea-statistics-forstudent-libro.page */ 8762);
/* harmony import */ var _tea_statistics_forstudent_tea_statistics_forstudent_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tea-statistics-forstudent/tea-statistics-forstudent.page */ 8625);
/* harmony import */ var _tea_statistics_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tea-statistics.page */ 7296);



// eslint-disable-next-line max-len




const routes = [
    {
        path: '',
        component: _tea_statistics_page__WEBPACK_IMPORTED_MODULE_3__.TeaStatisticsPage,
        children: [
            {
                path: 'tea-statistics-forstudent/:inicio/:fin/:estudiante',
                component: _tea_statistics_forstudent_tea_statistics_forstudent_page__WEBPACK_IMPORTED_MODULE_2__.TeaStatisticsForstudentPage
                // eslint-disable-next-line max-len
                // loadChildren: () => import('./tea-statistics-forstudent/tea-statistics-forstudent.module').then( m => m.TeaStatisticsForstudentPageModule)
            },
            {
                path: 'tea-statistics-home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_teacher_tea-statistics_tea-statistics-home_tea-statistics-home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tea-statistics-home/tea-statistics-home.module */ 663)).then(m => m.TeaStatisticsHomePageModule)
            },
            {
                path: 'tea-statistics-forstudent-libro/:libro/:estudiante',
                component: _tea_statistics_forstudent_libro_tea_statistics_forstudent_libro_page__WEBPACK_IMPORTED_MODULE_1__.TeaStatisticsForstudentLibroPage
                // eslint-disable-next-line max-len
                // loadChildren: () => import('./tea-statistics-forstudent-libro/tea-statistics-forstudent-libro.module').then( m => m.TeaStatisticsForstudentLibroPageModule)
            },
            {
                path: 'tea-statistics-forstudent-cuestionario/:codigo',
                component: _tea_statistics_forstudent_cuestionario_tea_statistics_forstudent_cuestionario_page__WEBPACK_IMPORTED_MODULE_0__.TeaStatisticsForstudentCuestionarioPage
                // eslint-disable-next-line max-len
                // loadChildren: () => import('./tea-statistics-forstudent-cuestionario/tea-statistics-forstudent-cuestionario.module').then( m => m.TeaStatisticsForstudentCuestionarioPageModule)
            },
            {
                path: '',
                redirectTo: 'tea-statistics-home',
                pathMatch: 'prefix'
            }
        ]
    },
];
let TeaStatisticsPageRoutingModule = class TeaStatisticsPageRoutingModule {
};
TeaStatisticsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    })
], TeaStatisticsPageRoutingModule);



/***/ }),

/***/ 1669:
/*!*****************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeaStatisticsPageModule": () => (/* binding */ TeaStatisticsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tea_statistics_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tea-statistics-routing.module */ 2634);
/* harmony import */ var _tea_statistics_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tea-statistics.page */ 7296);
/* harmony import */ var _tea_statistics_forstudent_libro_tea_statistics_forstudent_libro_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tea-statistics-forstudent-libro/tea-statistics-forstudent-libro.page */ 8762);
/* harmony import */ var _tea_statistics_forstudent_tea_statistics_forstudent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tea-statistics-forstudent/tea-statistics-forstudent.page */ 8625);
/* harmony import */ var _tea_statistics_forstudent_cuestionario_tea_statistics_forstudent_cuestionario_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tea-statistics-forstudent-cuestionario/tea-statistics-forstudent-cuestionario.page */ 6472);










let TeaStatisticsPageModule = class TeaStatisticsPageModule {
};
TeaStatisticsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _tea_statistics_routing_module__WEBPACK_IMPORTED_MODULE_0__.TeaStatisticsPageRoutingModule
        ],
        declarations: [
            _tea_statistics_page__WEBPACK_IMPORTED_MODULE_1__.TeaStatisticsPage,
            _tea_statistics_forstudent_tea_statistics_forstudent_page__WEBPACK_IMPORTED_MODULE_3__.TeaStatisticsForstudentPage,
            _tea_statistics_forstudent_libro_tea_statistics_forstudent_libro_page__WEBPACK_IMPORTED_MODULE_2__.TeaStatisticsForstudentLibroPage,
            _tea_statistics_forstudent_cuestionario_tea_statistics_forstudent_cuestionario_page__WEBPACK_IMPORTED_MODULE_4__.TeaStatisticsForstudentCuestionarioPage
        ]
    })
], TeaStatisticsPageModule);



/***/ }),

/***/ 7296:
/*!***************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeaStatisticsPage": () => (/* binding */ TeaStatisticsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tea_statistics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tea-statistics.page.html?ngResource */ 7129);
/* harmony import */ var _tea_statistics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tea-statistics.page.scss?ngResource */ 9258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TeaStatisticsPage = class TeaStatisticsPage {
    constructor() { }
    ngOnInit() {
    }
};
TeaStatisticsPage.ctorParameters = () => [];
TeaStatisticsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tea-statistics',
        template: _tea_statistics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tea_statistics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TeaStatisticsPage);



/***/ }),

/***/ 7087:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics-forstudent-cuestionario/tea-statistics-forstudent-cuestionario.page.scss?ngResource ***!
  \*******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-title.title-large {\n  color: #c897d8;\n  font-size: 30px;\n}\n\nion-title {\n  height: auto;\n  --color: white;\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center;\n}\n\nion-toolbar {\n  --background: translucent;\n}\n\n.main_content_div {\n  background: white;\n  width: 100%;\n  height: auto;\n  min-height: 600px;\n  max-height: 2000px;\n  border-top-right-radius: 75px;\n  border-bottom-right-radius: 75px;\n  margin-top: 10px;\n  padding-top: 10px;\n}\n\n.main_content_div ion-grid ion-row ion-col ion-select {\n  border: 2px solid #36abe0;\n  border-radius: 20px;\n  --placeholder-color: #23A0AD;\n  color: #23A0AD;\n  font-size: 20px;\n}\n\n.main_content_div ion-grid ion-row ion-col ion-list {\n  background: transparent;\n}\n\n.main_content_div ion-grid ion-row ion-col ion-list ion-item {\n  --background: transparent;\n}\n\n.main_content_div ion-grid ion-row ion-col ion-list ion-item ion-label {\n  background: transparent;\n  --color: #23A0AD;\n}\n\n.main_content_div ion-grid ion-row ion-col ion-list ion-item .pregunta {\n  font-size: 24px;\n}\n\n.main_content_div ion-grid ion-row ion-col ion-list ion-item .respuesta {\n  font-size: 20px;\n}\n\n.main_content_div ion-grid ion-row ion-col ion-list ion-item .correcto {\n  border-radius: 50%;\n  border: 2px solid #36abe0;\n  color: #36abe0;\n}\n\n.main_content_div ion-grid ion-row ion-col ion-list ion-item .incorrecto {\n  border-radius: 50%;\n  border: 2px solid #eb445a;\n  color: #eb445a;\n}\n\n.main_content_div ion-grid ion-row ion-col .col_div {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 25px;\n}\n\n.main_content_div ion-grid ion-row ion-col .col_div ion-button {\n  --background: #93e9be;\n  --background-hover: #9ce0be;\n  --background-activated: #88f4be;\n  --background-focused: #88f4be;\n  --color: blue;\n  --border-radius: 10px;\n  --border-color: #000;\n  --border-style: solid;\n  --border-width: 1px;\n  --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);\n  --ripple-color: deeppink;\n  --padding-top: center;\n  --padding-bottom: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYS1zdGF0aXN0aWNzLWZvcnN0dWRlbnQtY3Vlc3Rpb25hcmlvLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzZW1lc3RyZSUyMDVcXGN1cnNvcyUyMGV4dHJhY3VycmljdWxhcmVzXFxjYWxpZGFkJTIwZWR1Y2F0aXZhXFxzaXN0ZW1hLWxlY3R1cmFsXFxhcHBsZWN0dXJhLWFuZ3VsYXIxNC1pb25pYzYtY2FwYWNpdG9yXFxzcmNcXGFwcFxcdGVhY2hlclxcdGVhLXN0YXRpc3RpY3NcXHRlYS1zdGF0aXN0aWNzLWZvcnN0dWRlbnQtY3Vlc3Rpb25hcmlvXFx0ZWEtc3RhdGlzdGljcy1mb3JzdHVkZW50LWN1ZXN0aW9uYXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UseUJBQUE7QUNHRjs7QUREQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QURBUTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRVY7O0FEQVE7RUFDRSx1QkFBQTtBQ0VWOztBRERVO0VBQ0UseUJBQUE7QUNHWjs7QURGWTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUNJZDs7QURGWTtFQUNFLGVBQUE7QUNJZDs7QURGWTtFQUNFLGVBQUE7QUNJZDs7QURDWTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ2Q7O0FEQ1k7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NkOztBREdRO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRFY7O0FERVU7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FDQVoiLCJmaWxlIjoidGVhLXN0YXRpc3RpY3MtZm9yc3R1ZGVudC1jdWVzdGlvbmFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlLnRpdGxlLWxhcmdlIHtcclxuICBjb2xvcjogI2M4OTdkODtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xyXG59XHJcbi5tYWluX2NvbnRlbnRfZGl2IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgbWF4LWhlaWdodDogMjAwMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3NXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3NXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgaW9uLWdyaWQge1xyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgICMzNmFiZTA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzIzQTBBRDtcclxuICAgICAgICAgIGNvbG9yOiAjMjNBMEFEO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAtLWNvbG9yOiAjMjNBMEFEO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcmVndW50YSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yZXNwdWVzdGEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvcnJlY3RvIHtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgICMzNmFiZTA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzNmFiZTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluY29ycmVjdG8ge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWI0NDVhO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZWI0NDVhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2xfZGl2IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzkzZTliZTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjOWNlMGJlO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjODhmNGJlO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzg4ZjRiZTtcclxuICAgICAgICAgICAgLS1jb2xvcjogYmx1ZTtcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAtLWJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYigwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICAgICAgLS1yaXBwbGUtY29sb3I6IGRlZXBwaW5rO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctdG9wOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCJpb24tdGl0bGUudGl0bGUtbGFyZ2Uge1xuICBjb2xvcjogI2M4OTdkODtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBoZWlnaHQ6IGF1dG87XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogNjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDc1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3NXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tc2VsZWN0IHtcbiAgYm9yZGVyOiAycHggc29saWQgIzM2YWJlMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzIzQTBBRDtcbiAgY29sb3I6ICMyM0EwQUQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogIzIzQTBBRDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tbGlzdCBpb24taXRlbSAucHJlZ3VudGEge1xuICBmb250LXNpemU6IDI0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWxpc3QgaW9uLWl0ZW0gLnJlc3B1ZXN0YSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tbGlzdCBpb24taXRlbSAuY29ycmVjdG8ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNmFiZTA7XG4gIGNvbG9yOiAjMzZhYmUwO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1saXN0IGlvbi1pdGVtIC5pbmNvcnJlY3RvIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZWI0NDVhO1xuICBjb2xvcjogI2ViNDQ1YTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuY29sX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5jb2xfZGl2IGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICM5M2U5YmU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzljZTBiZTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzg4ZjRiZTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM4OGY0YmU7XG4gIC0tY29sb3I6IGJsdWU7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1ib3JkZXItY29sb3I6ICMwMDA7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2IoMCwgMCwgMCwgMC4yNSk7XG4gIC0tcmlwcGxlLWNvbG9yOiBkZWVwcGluaztcbiAgLS1wYWRkaW5nLXRvcDogY2VudGVyO1xuICAtLXBhZGRpbmctYm90dG9tOiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 8807:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics-forstudent-libro/tea-statistics-forstudent-libro.page.scss?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".col_div_notificacion {\n  position: relative;\n  float: right;\n  height: 40px;\n  width: 40px;\n  top: -40px;\n}\n.col_div_notificacion ion-icon {\n  width: 40px;\n  height: 40px;\n}\n.main_content_div {\n  background: white;\n  width: 100%;\n  height: auto;\n  min-height: 600px;\n  max-height: 2000px;\n  border-top-right-radius: 75px;\n  margin-top: 10px;\n  padding-top: 10px;\n}\n.main_content_div .col_div_titulo {\n  height: auto;\n}\n.main_content_div .col_div_titulo h1 {\n  font-weight: bold;\n  font-size: 30px;\n  color: #36BDBC;\n  font-style: italic;\n}\n.main_content_div .col_div_lectura {\n  min-height: 300px;\n  max-height: 500px;\n  height: auto;\n  color: #36BDBC;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n.main_content_div .col_div_lectura ion-slides {\n  height: 100%;\n  width: 100%;\n  --bullet-background: #ededeb;\n  --bullet-background-active: #36BDBC;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide {\n  color: #000;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide h1 {\n  font-weight: bold;\n  font-size: 24px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide h2 {\n  font-weight: bold;\n  font-size: 22px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide h3 {\n  font-weight: bold;\n  font-size: 20px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide h4 {\n  font-weight: bold;\n  font-size: 18px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide h5 {\n  font-weight: bold;\n  font-size: 16px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide h6 {\n  font-weight: bold;\n  font-size: 14px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide p {\n  font-weight: bold;\n  font-size: 12px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide img {\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .col_div_video {\n  height: 250px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n.main_content_div .col_div_video iframe {\n  width: 100%;\n  height: 100%;\n  border-radius: 25px;\n}\n.main_content_div .col_div_audio {\n  height: 50px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n.main_content_div .col_div_audio audio {\n  width: 100%;\n}\n.main_content_div .col_div_reaccion {\n  height: 80px;\n}\n.main_content_div .col_div_reaccion ion-grid ion-row ion-col {\n  padding: 5px;\n}\n.main_content_div .col_div_reaccion ion-grid ion-row ion-col .elegible {\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .col_div_reaccion ion-grid ion-row ion-col .elegible img {\n  width: 60px;\n  height: 60px;\n  margin: auto;\n}\n.main_content_div .col_div_reaccion ion-grid ion-row ion-col .elegido {\n  z-index: 1;\n  margin-top: -35px;\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .col_div_reaccion ion-grid ion-row ion-col .elegido img {\n  width: 60px;\n  height: 60px;\n  margin: auto;\n}\n.main_content_div .col_div_formulario {\n  min-height: 300px;\n  max-height: 900px;\n  height: auto;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n.main_content_div .col_div_formulario ion-list {\n  width: 100%;\n  background: transparent;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group {\n  width: 100%;\n  background: transparent;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group ion-item-divider {\n  width: 100%;\n  background: transparent;\n  border-bottom: none;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group ion-item-divider ion-label {\n  width: 100%;\n  text-align: start;\n  color: #08A6AC;\n  font-weight: bold;\n  font-size: 24px;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group ion-item {\n  --background: transparent;\n  --border-color: 2px solid black;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group ion-item ion-label {\n  text-align: start;\n  color: #08A6AC;\n  font-weight: bold;\n  font-size: 20px;\n}\n.main_content_div .col_div_final_cuestionario {\n  height: 50px;\n  border-radius: 50px;\n}\n.main_content_div .col_div_final_cuestionario ion-button {\n  --background: linear-gradient(to right, #08A6AC, #36BDBC);\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .col_div_final_cuestionario ion-button:hover {\n  --background: linear-gradient(to right, #36BDBC, #08A6AC);\n}\n.main_content_div .col_div_final_finalizar {\n  height: 50px;\n  border-radius: 50px;\n}\n.main_content_div .col_div_final_finalizar ion-button {\n  --background: linear-gradient(to right, #08A6AC, #36BDBC);\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .col_div_final_finalizar ion-button:hover {\n  --background: linear-gradient(to right, #36BDBC, #08A6AC);\n}\n.main_content_div .col_div {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 25px;\n}\n.main_content_div .col_div img {\n  width: 100px;\n}\n.main_content_div .col_div ion-label {\n  color: white;\n  margin-top: 5px;\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n}\n.animated {\n  --webkit-animation-duration: 5s;\n  animation-duration: 5s;\n  --webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.no-border {\n  border-color: 0px solid black !important;\n}\n.bounceInUp {\n  --webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n  }\n  80% {\n    -webkit-transform: translateY(10px);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYS1zdGF0aXN0aWNzLWZvcnN0dWRlbnQtbGlicm8ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlbWVzdHJlJTIwNVxcY3Vyc29zJTIwZXh0cmFjdXJyaWN1bGFyZXNcXGNhbGlkYWQlMjBlZHVjYXRpdmFcXHNpc3RlbWEtbGVjdHVyYWxcXGFwcGxlY3R1cmEtYW5ndWxhcjE0LWlvbmljNi1jYXBhY2l0b3JcXHNyY1xcYXBwXFx0ZWFjaGVyXFx0ZWEtc3RhdGlzdGljc1xcdGVhLXN0YXRpc3RpY3MtZm9yc3R1ZGVudC1saWJyb1xcdGVhLXN0YXRpc3RpY3MtZm9yc3R1ZGVudC1saWJyby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFSjtBRENBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFRjtBRERFO0VBQ0UsWUFBQTtBQ0dKO0FERkk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNJTjtBRERFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7QUNHSjtBREZJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLG1DQUFBO0FDSU47QURITTtFQUNFLFdBQUE7QUNLUjtBREpRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDTVY7QURKUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ01WO0FESlE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNNVjtBREpRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDTVY7QURKUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ01WO0FESlE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNNVjtBREpRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDTVY7QURKUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDTVY7QURERTtFQUNFLGFBQUE7RUFDQSwwQ0FBQTtBQ0dKO0FERkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDSU47QURERTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0dKO0FERkk7RUFDRSxXQUFBO0FDSU47QURERTtFQUNFLFlBQUE7QUNHSjtBREFRO0VBQ0UsWUFBQTtBQ0VWO0FERFU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0daO0FERlk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNJZDtBRERVO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHWjtBREZZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSWQ7QURHRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUNESjtBREVJO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FDQU47QURDTTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtBQ0NSO0FEQVE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VWO0FERFU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDR1o7QURBUTtFQUNFLHlCQUFBO0VBQ0EsK0JBQUE7QUNFVjtBRERVO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDR1o7QURHRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0RKO0FERUk7RUFDRSx5REFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQU47QURFSTtFQUNFLHlEQUFBO0FDQU47QURHRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0RKO0FERUk7RUFDRSx5REFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQU47QURFSTtFQUNFLHlEQUFBO0FDQU47QURHRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0RKO0FERUk7RUFDRSxZQUFBO0FDQU47QURFSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBTjtBREtBO0VBQ0UsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUNGRjtBREtBO0VBQ0Usd0NBQUE7QUNGRjtBRHNCQTtFQUNFLG1DQUFBO0VBQ0EsMEJBQUE7QUNIRjtBRE1BO0VBQ0U7SUFDRSxVQUFBO0lBQ0EscUNBQUE7RUNIRjtFREtBO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO0VDSEY7RURLQTtJQUNFLG1DQUFBO0VDSEY7RURLQTtJQUNFLGdDQUFBO0VDSEY7QUFDRiIsImZpbGUiOiJ0ZWEtc3RhdGlzdGljcy1mb3JzdHVkZW50LWxpYnJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xfZGl2X25vdGlmaWNhY2lvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgdG9wOiAtNDBweDtcclxuICBpb24taWNvbiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcbn1cclxuLm1haW5fY29udGVudF9kaXYge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICBtYXgtaGVpZ2h0OiAyMDAwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDc1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAuY29sX2Rpdl90aXR1bG8ge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBjb2xvcjogIzM2QkRCQztcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29sX2Rpdl9sZWN0dXJhIHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogIzM2QkRCQztcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGlvbi1zbGlkZXMge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjZWRlZGViO1xyXG4gICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogIzM2QkRCQztcclxuICAgICAgaW9uLXNsaWRlIHtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2xfZGl2X3ZpZGVvIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBpZnJhbWUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29sX2Rpdl9hdWRpbyB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBhdWRpbyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29sX2Rpdl9yZWFjY2lvbiB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBpb24tZ3JpZCB7XHJcbiAgICAgIGlvbi1yb3cge1xyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgLmVsZWdpYmxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZWxlZ2lkbyB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNvbF9kaXZfZm9ybXVsYXJpbyB7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDkwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGlvbi1pdGVtLWdyb3VwIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBpb24taXRlbS1kaXZpZGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgICBjb2xvcjogIzA4QTZBQztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgICAgY29sb3I6ICMwOEE2QUM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2xfZGl2X2ZpbmFsX2N1ZXN0aW9uYXJpbyB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDhBNkFDLCAjMzZCREJDKTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIGlvbi1idXR0b246aG92ZXIge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM2QkRCQywgIzA4QTZBQyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2xfZGl2X2ZpbmFsX2ZpbmFsaXphciB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDhBNkFDLCAjMzZCREJDKTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIGlvbi1idXR0b246aG92ZXIge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM2QkRCQywgIzA4QTZBQyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2xfZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFuaW1hdGVkIHtcclxuICAtLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgLS13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG4ubm8tYm9yZGVyIHtcclxuICBib3JkZXItY29sb3I6IDBweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5VcCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwKTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5ib3VuY2VJblVwIHtcclxuICAtLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcclxuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBib3VuY2VJblVwIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuIiwiLmNvbF9kaXZfbm90aWZpY2FjaW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHRvcDogLTQwcHg7XG59XG4uY29sX2Rpdl9ub3RpZmljYWNpb24gaW9uLWljb24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgbWF4LWhlaWdodDogMjAwMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNzVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl90aXR1bG8ge1xuICBoZWlnaHQ6IGF1dG87XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl90aXR1bG8gaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzM2QkRCQztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfbGVjdHVyYSB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzM2QkRCQztcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfbGVjdHVyYSBpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogI2VkZWRlYjtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICMzNkJEQkM7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9sZWN0dXJhIGlvbi1zbGlkZXMgaW9uLXNsaWRlIHtcbiAgY29sb3I6ICMwMDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9sZWN0dXJhIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2xlY3R1cmEgaW9uLXNsaWRlcyBpb24tc2xpZGUgaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfbGVjdHVyYSBpb24tc2xpZGVzIGlvbi1zbGlkZSBoMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9sZWN0dXJhIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGg0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2xlY3R1cmEgaW9uLXNsaWRlcyBpb24tc2xpZGUgaDUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfbGVjdHVyYSBpb24tc2xpZGVzIGlvbi1zbGlkZSBoNiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9sZWN0dXJhIGlvbi1zbGlkZXMgaW9uLXNsaWRlIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfbGVjdHVyYSBpb24tc2xpZGVzIGlvbi1zbGlkZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfdmlkZW8ge1xuICBoZWlnaHQ6IDI1MHB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl92aWRlbyBpZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfYXVkaW8ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2F1ZGlvIGF1ZGlvIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9yZWFjY2lvbiB7XG4gIGhlaWdodDogODBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X3JlYWNjaW9uIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X3JlYWNjaW9uIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuZWxlZ2libGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfcmVhY2Npb24gaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5lbGVnaWJsZSBpbWcge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9yZWFjY2lvbiBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmVsZWdpZG8ge1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tdG9wOiAtMzVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X3JlYWNjaW9uIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuZWxlZ2lkbyBpbWcge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9mb3JtdWxhcmlvIHtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDkwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2Zvcm11bGFyaW8gaW9uLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9mb3JtdWxhcmlvIGlvbi1saXN0IGlvbi1pdGVtLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfZm9ybXVsYXJpbyBpb24tbGlzdCBpb24taXRlbS1ncm91cCBpb24taXRlbS1kaXZpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfZm9ybXVsYXJpbyBpb24tbGlzdCBpb24taXRlbS1ncm91cCBpb24taXRlbS1kaXZpZGVyIGlvbi1sYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICMwOEE2QUM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9mb3JtdWxhcmlvIGlvbi1saXN0IGlvbi1pdGVtLWdyb3VwIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IDJweCBzb2xpZCBibGFjaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2Zvcm11bGFyaW8gaW9uLWxpc3QgaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGNvbG9yOiAjMDhBNkFDO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfZmluYWxfY3Vlc3Rpb25hcmlvIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfZmluYWxfY3Vlc3Rpb25hcmlvIGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA4QTZBQywgIzM2QkRCQyk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9maW5hbF9jdWVzdGlvbmFyaW8gaW9uLWJ1dHRvbjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzZCREJDLCAjMDhBNkFDKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2ZpbmFsX2ZpbmFsaXphciB7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2ZpbmFsX2ZpbmFsaXphciBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwOEE2QUMsICMzNkJEQkMpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfZmluYWxfZmluYWxpemFyIGlvbi1idXR0b246aG92ZXIge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM2QkRCQywgIzA4QTZBQyk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXYgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXYgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYW5pbWF0ZWQge1xuICAtLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICAtLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4ubm8tYm9yZGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAwcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluVXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xuICB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzApO1xuICB9XG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4uYm91bmNlSW5VcCB7XG4gIC0td2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcbn1cblxuQGtleWZyYW1lcyBib3VuY2VJblVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcbiAgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICB9XG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 8959:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics-forstudent/tea-statistics-forstudent.page.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  color: #ffffff;\n  text-align: center;\n  margin: 15px auto 20px auto;\n}\n\n.card-container {\n  --background: #ffffff;\n  padding: 15px;\n  margin: 20px;\n}\n\n.card-history {\n  --background: #FFFFFF;\n  padding-bottom: 5px;\n  margin: 20px;\n  border-radius: 10px;\n}\n\n.card-title {\n  padding-top: 5px;\n  color: #08A6AC;\n  text-align: center;\n}\n\n.color-text {\n  color: #08A6AC !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYS1zdGF0aXN0aWNzLWZvcnN0dWRlbnQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlbWVzdHJlJTIwNVxcY3Vyc29zJTIwZXh0cmFjdXJyaWN1bGFyZXNcXGNhbGlkYWQlMjBlZHVjYXRpdmFcXHNpc3RlbWEtbGVjdHVyYWxcXGFwcGxlY3R1cmEtYW5ndWxhcjE0LWlvbmljNi1jYXBhY2l0b3JcXHNyY1xcYXBwXFx0ZWFjaGVyXFx0ZWEtc3RhdGlzdGljc1xcdGVhLXN0YXRpc3RpY3MtZm9yc3R1ZGVudFxcdGVhLXN0YXRpc3RpY3MtZm9yc3R1ZGVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0NGOztBRENBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0dGOztBRERBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QURGQTtFQUNFLHlCQUFBO0FDS0YiLCJmaWxlIjoidGVhLXN0YXRpc3RpY3MtZm9yc3R1ZGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDE1cHggYXV0byAyMHB4IGF1dG87XHJcbn1cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLmNhcmQtaGlzdG9yeSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmNhcmQtdGl0bGV7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBjb2xvcjogIzA4QTZBQztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbG9yLXRleHR7XHJcbiAgY29sb3I6ICMwOEE2QUMgIWltcG9ydGFudDtcclxufVxyXG4iLCIudGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDE1cHggYXV0byAyMHB4IGF1dG87XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uY2FyZC1oaXN0b3J5IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgY29sb3I6ICMwOEE2QUM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbG9yLXRleHQge1xuICBjb2xvcjogIzA4QTZBQyAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 9258:
/*!****************************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWEtc3RhdGlzdGljcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2095:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics-forstudent-cuestionario/tea-statistics-forstudent-cuestionario.page.html?ngResource ***!
  \*******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Verificando Respuestas\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<div class=\"main_content_div\">\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-select interface=\"popover\"\r\n        placeholder=\"Seleccione numero intento\"\r\n        (ionChange)=\"onOptionsSelectIntento($event)\">\r\n          <ion-select-option value=\"1\">1</ion-select-option>\r\n          <ion-select-option value=\"2\">2</ion-select-option>\r\n          <ion-select-option value=\"3\">3</ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n       <ion-col size=\"12\" *ngFor=\"let item of resolucionfiltradas\">\r\n        <ion-list>\r\n          <ion-item>\r\n            <ion-label class=\"pregunta\">\r\n              {{item.Pregunta}}\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label class=\"respuesta\">\r\n              {{item.RespuestaEscogida}}\r\n            </ion-label>\r\n            <ion-icon\r\n            *ngIf=\"item.Correcto ==='correcto'\"\r\n            class=\"correcto\"\r\n            name=\"checkmark-done-outline\"\r\n            slot=\"end\"></ion-icon>\r\n            <ion-icon\r\n            *ngIf=\"item.Correcto ==='incorrecto'\"\r\n            class=\"incorrecto\"\r\n            name=\"close-circle-outline\"\r\n            slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <div\r\n        class=\"col_div\">\r\n        <ion-button\r\n          shape=\"round\"\r\n          (click)=\"finalizar()\">\r\n              Terminar\r\n          </ion-button>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";

/***/ }),

/***/ 3067:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics-forstudent-libro/tea-statistics-forstudent-libro.page.html?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main_content_div_child\">\r\n  <div class=\"col_div_notificacion\">\r\n    <ion-icon name=\"notifications-outline\"></ion-icon>\r\n  </div>\r\n  <div class=\"main_content_div animated bounceInUp\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <div class=\"col_div col_div_titulo\">\r\n            <h1>\r\n              {{libro.Titulo}}\r\n            </h1>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <div class=\"col_div col_div_lectura\">\r\n            <ion-slides pager=\"true\"  [options]=\"slideOpts\">\r\n              <ion-slide *ngFor=\"let item of parrafos\">\r\n                <img *ngIf=\"item.Imagen !== ''\" [src]=\"item.Imagen\" alt=\"\" srcset=\"\">\r\n                <h1 *ngIf=\"item.Parrafo !== '' && 35 < item.Parrafo.length\">\r\n                  {{item.Parrafo}}\r\n                </h1>\r\n                <h2 *ngIf=\"item.Parrafo !== '' && 35 >= item.Parrafo.length && item.Parrafo.length < 50\">\r\n                  {{item.Parrafo}}\r\n                </h2>\r\n                <h3 *ngIf=\"item.Parrafo !== '' && 50 >= item.Parrafo.length\">\r\n                  {{item.Parrafo}}\r\n                </h3>\r\n              </ion-slide>\r\n            </ion-slides>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <div class=\"col_div col_div_reaccion\">\r\n            <ion-grid fixed>\r\n              <ion-row>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"elegible\">\r\n                    <img *ngIf=\"progreso.Reaccion !== 'like'\"\r\n                    src=\"../../../../assets/reacciones/like.png\"\r\n                    alt=\"me gusta\" srcset=\"\">\r\n                  </div>\r\n                  <div class=\"elegido\">\r\n                    <img *ngIf=\"progreso.Reaccion === 'like'\"\r\n                    src=\"../../../../assets/reacciones/like-active.png\"\r\n                    alt=\"me gusta activado\" srcset=\"\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"elegible\">\r\n                    <img *ngIf=\"progreso.Reaccion !== 'smile'\"\r\n                    src=\"../../../../assets/reacciones/smile.png\"\r\n                    alt=\"me alegra\" srcset=\"\">\r\n                  </div>\r\n                  <div class=\"elegido\">\r\n                    <img *ngIf=\"progreso.Reaccion === 'smile'\"\r\n                    src=\"../../../../assets/reacciones/smile-active.png\"\r\n                    alt=\"me alegra activado\" srcset=\"\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"elegible\">\r\n                    <img *ngIf=\"progreso.Reaccion !== 'sad'\"\r\n                    src=\"../../../../assets/reacciones/sad.png\"\r\n                    alt=\"me entristece\" srcset=\"\">\r\n                  </div>\r\n                  <div class=\"elegido\">\r\n                    <img *ngIf=\"progreso.Reaccion === 'sad'\"\r\n                    src=\"../../../../assets/reacciones/sad-active.png\"\r\n                    alt=\"me entristece activado\" srcset=\"\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"elegible\">\r\n                    <img *ngIf=\"progreso.Reaccion !== 'angry'\"\r\n                    src=\"../../../../assets/reacciones/angry.png\"\r\n                    alt=\"me enoja\" srcset=\"\">\r\n                  </div>\r\n                  <div class=\"elegido\">\r\n                    <img *ngIf=\"progreso.Reaccion === 'angry'\"\r\n                    src=\"../../../../assets/reacciones/angry-active.png\"\r\n                    alt=\"me enoja activado\" srcset=\"\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"elegible\">\r\n                    <img *ngIf=\"progreso.Reaccion !== 'confused'\"\r\n                    src=\"../../../../assets/reacciones/confused.png\"\r\n                    alt=\"me confunde\" srcset=\"\">\r\n                  </div>\r\n                  <div class=\"elegido\">\r\n                    <img *ngIf=\"progreso.Reaccion === 'confused'\"\r\n                    src=\"../../../../assets/reacciones/confused-active.png\"\r\n                    alt=\"me confunde activado\" srcset=\"\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"elegible\">\r\n                    <img *ngIf=\"progreso.Reaccion !== 'amazed'\"\r\n                    src=\"../../../../assets/reacciones/amazed.png\"\r\n                    alt=\"me asombra\" srcset=\"\">\r\n                  </div>\r\n                  <div class=\"elegido\">\r\n                    <img *ngIf=\"progreso.Reaccion === 'amazed'\"\r\n                    src=\"../../../../assets/reacciones/amazed-active.png\"\r\n                    alt=\"me asombra activado\" srcset=\"\">\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <div class=\"col_div col_div_formulario\">\r\n            <ion-list>\r\n              <ion-item-group>\r\n                <ion-item-divider>\r\n                  <ion-label>\r\n                    Comentario:\r\n                  </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item class=\"no-border\">\r\n                  <ion-label>\r\n                    {{progreso.Comentario}}\r\n                  </ion-label>\r\n                </ion-item>\r\n              </ion-item-group>\r\n              <ion-item-group>\r\n                <ion-item-divider>\r\n                  <ion-label>\r\n                    Final Alternativo:\r\n                  </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item class=\"no-border\">\r\n                  <ion-label>\r\n                    {{progreso.FinalAlternativo}}\r\n                  </ion-label>\r\n                </ion-item>\r\n              </ion-item-group>\r\n            </ion-list>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" *ngIf=\"haycuestionario\">\r\n          <div class=\"col_div col_div_final_cuestionario\">\r\n            <ion-button\r\n            shape=\"round\"\r\n            (click)=\"chekarcuestionario(progreso.id)\">\r\n              Cuestionario\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 9858:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics-forstudent/tea-statistics-forstudent.page.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\r\n  <section>\r\n    <h2 class=\"title\">\r\n      Estadisticas del estudiantes\r\n      <br>\r\n      {{estudiante.Nombre + ' ' + estudiante.Apellido}}\r\n    </h2>\r\n    <div>\r\n      <ion-card class=\"card-container\" (click)=\"elegir('lectura')\">\r\n        <ion-card-title class=\"card color-text\">\r\n          {{librosleidos || '0'}} libros leidos\r\n        </ion-card-title>\r\n      </ion-card>\r\n      <ion-card class=\"card-container\" (click)=\"elegir('audio')\">\r\n        <ion-card-title class=\"card color-text\">\r\n          {{audiosescuchados || '0'}} audiolibros escuchados\r\n        </ion-card-title>\r\n      </ion-card>\r\n      <ion-card class=\"card-container\" (click)=\"elegir('video')\">\r\n        <ion-card-title class=\"card color-text\">\r\n          {{videosvistos || '0'}} videolibros vistos\r\n        </ion-card-title>\r\n      </ion-card>\r\n      <ion-card class=\"card-container\">\r\n        <ion-card-title class=\"card color-text\">\r\n          {{notapromedio || '0'}} Nota Promedio\r\n        </ion-card-title>\r\n      </ion-card>\r\n      <ion-card class=\"card-container\">\r\n        <ion-card-title class=\"card color-text\">\r\n          {{progresopromedio || '0'}} Progreso Promedio\r\n        </ion-card-title>\r\n      </ion-card>\r\n    </div>\r\n  </section>\r\n  <section>\r\n    <h2 class=\"title\">\r\n      Historial\r\n    </h2>\r\n    <ion-card class=\"card-container\">\r\n      <ion-card-content>\r\n        <ion-grid fixed>\r\n          <!-- <h2 *ngIf=\"libros.length === 0\">\r\n            No se encontro avances todavia\r\n          </h2> -->\r\n          <ion-row>\r\n            <ion-col size=\"12\" *ngFor=\"let item of libros\">\r\n              <ion-card class=\"card-history\" (click)=\"goToCuento(item.codigo)\">\r\n                <ion-img [src]=\"item.imagen\"></ion-img>\r\n                <ion-card-title class=\"card-title\">\r\n                  {{item.titulo}}\r\n                </ion-card-title>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </section>\r\n</div>\r\n";

/***/ }),

/***/ 7129:
/*!****************************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_teacher_tea-statistics_tea-statistics_module_ts.js.map