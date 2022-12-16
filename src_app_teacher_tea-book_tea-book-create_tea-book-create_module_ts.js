"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_teacher_tea-book_tea-book-create_tea-book-create_module_ts"],{

/***/ 9243:
/*!************************************************************************************!*\
  !*** ./src/app/teacher/tea-book/tea-book-create/tea-book-create-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeaBookCreatePageRoutingModule": () => (/* binding */ TeaBookCreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tea_book_create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tea-book-create.page */ 1583);




const routes = [
    {
        path: '',
        component: _tea_book_create_page__WEBPACK_IMPORTED_MODULE_0__.TeaBookCreatePage
    }
];
let TeaBookCreatePageRoutingModule = class TeaBookCreatePageRoutingModule {
};
TeaBookCreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TeaBookCreatePageRoutingModule);



/***/ }),

/***/ 8283:
/*!****************************************************************************!*\
  !*** ./src/app/teacher/tea-book/tea-book-create/tea-book-create.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeaBookCreatePageModule": () => (/* binding */ TeaBookCreatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tea_book_create_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tea-book-create-routing.module */ 9243);
/* harmony import */ var _tea_book_create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tea-book-create.page */ 1583);







let TeaBookCreatePageModule = class TeaBookCreatePageModule {
};
TeaBookCreatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tea_book_create_routing_module__WEBPACK_IMPORTED_MODULE_0__.TeaBookCreatePageRoutingModule
        ],
        declarations: [_tea_book_create_page__WEBPACK_IMPORTED_MODULE_1__.TeaBookCreatePage]
    })
], TeaBookCreatePageModule);



/***/ }),

/***/ 1583:
/*!**************************************************************************!*\
  !*** ./src/app/teacher/tea-book/tea-book-create/tea-book-create.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeaBookCreatePage": () => (/* binding */ TeaBookCreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tea_book_create_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tea-book-create.page.html?ngResource */ 171);
/* harmony import */ var _tea_book_create_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tea-book-create.page.scss?ngResource */ 2791);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_tipo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tipo.service */ 1463);
/* harmony import */ var src_app_services_libro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/libro.service */ 7809);
/* harmony import */ var src_app_services_parrafo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/parrafo.service */ 5683);
/* harmony import */ var src_app_services_estudiante_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/estudiante.service */ 4378);
/* harmony import */ var src_app_services_publicacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/publicacion.service */ 3203);



/* eslint-disable @typescript-eslint/naming-convention */







let TeaBookCreatePage = class TeaBookCreatePage {
    constructor(router, tipoService, libroService, parrafoService, estudianteService, publicacionService) {
        this.router = router;
        this.tipoService = tipoService;
        this.libroService = libroService;
        this.parrafoService = parrafoService;
        this.estudianteService = estudianteService;
        this.publicacionService = publicacionService;
        this.parrafos = [];
        this.tipos = [];
        this.estudiantes = [];
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
        this.profesor = {
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
        this.libro = {
            Titulo: '',
            Audio: '',
            Video: '',
            Imagen: '',
            Autor: ''
        };
        this.libro1 = {
            id: 0,
            Titulo: '',
            Audio: '',
            Video: '',
            Imagen: '',
            Autor: ''
        };
        this.parrafo = {
            Parrafo: '',
            Imagen: '',
            Tipoid: 0,
            LibroId: 0
        };
        this.parrafo1 = {
            id: 0,
            Parrafo: '',
            Imagen: '',
            Tipoid: 0,
            LibroId: 0
        };
        this.publicacion = {
            Procedencia: '',
            FechaRegistro: new Date(),
            GradoDestino: '',
            LibroId: 0,
            EstudianteId: 0
        };
        this.publicacion1 = {
            id: 0,
            Procedencia: '',
            FechaRegistro: new Date(),
            GradoDestino: '',
            LibroId: 0,
            EstudianteId: 0
        };
        this.creado = false;
        this.mostrarparrafos = false;
        this.porfinalizar = false;
    }
    elegir(par) {
        this.eleccion = par;
    }
    onOptionsSelectEstudiante(event) {
        const value = event.target.value;
        this.selecionarestudiantes(value);
    }
    onOptionsSelectTipo(event) {
        const value = event.target.value;
        this.parrafo.Tipoid = value;
    }
    gettipos() {
        this.tipoService.getTipos().subscribe(restipos => {
            this.tipos = restipos;
        }, err => {
            console.log('Error get tipos');
        });
    }
    saveLibro() {
        this.libroService.saveLibro(this.libro).subscribe(reslibro => {
            this.libro1 = reslibro;
            this.codigolibro = this.libro1.id;
            this.parrafo.LibroId = this.codigolibro;
            this.publicacion.LibroId = this.codigolibro;
            console.log(reslibro);
            this.creado = true;
            this.mostrarparrafos = true;
        }, err => {
            console.log('Error save Libro');
        });
    }
    savelibrovideo() {
        this.libroService.saveLibro(this.libro).subscribe(reslibro => {
            this.libro1 = reslibro;
            this.codigolibro = this.libro1.id;
            this.publicacion.Procedencia = 'interna';
            this.publicacion.LibroId = this.codigolibro;
            this.publicacion.FechaRegistro = new Date();
            this.publicacionService.savePublicacion(this.publicacion).subscribe(respublicacion => {
                this.publicacion1 = respublicacion;
                this.router.navigate([
                    'student',
                    'stu-book',
                    'stu-book-list'
                ]);
            }, err => {
                console.log('Error save publicacion');
            });
        }, err => {
            console.log('Error save Libro');
        });
    }
    savelibroaudio() {
        this.libroService.saveLibro(this.libro).subscribe(reslibro => {
            this.libro1 = reslibro;
            this.codigolibro = this.libro1.id;
            this.publicacion.Procedencia = 'interna';
            this.publicacion.LibroId = this.codigolibro;
            this.publicacion.FechaRegistro = new Date();
            this.publicacionService.savePublicacion(this.publicacion).subscribe(respublicacion => {
                this.publicacion1 = respublicacion;
                this.router.navigate([
                    'student',
                    'stu-book',
                    'stu-book-list'
                ]);
            }, err => {
                console.log('Error save publicacion');
            });
        }, err => {
            console.log('Error save Libro');
        });
    }
    savepublicacion() {
        this.publicacion.Procedencia = 'interna';
        this.publicacion.FechaRegistro = new Date();
        this.publicacionService.savePublicacion(this.publicacion).subscribe(respublicacion => {
            this.publicacion1 = respublicacion;
            this.router.navigate([
                'student',
                'stu-book',
                'stu-book-list'
            ]);
        }, err => {
            console.log('Error save publicacion');
        });
    }
    getparrafos() {
        this.parrafoService.getsearchParrafobylibro(this.codigolibro).subscribe(resparrafos => {
            this.parrafos = resparrafos;
        }, err => {
            console.log('Error get parrafos by libro');
        });
    }
    saveParrafo() {
        this.parrafoService.saveParrafo(this.parrafo).subscribe(resparrafo => {
            this.parrafo1 = resparrafo;
            this.getparrafos();
            this.porfinalizar = true;
        }, err => {
            console.log('Error save parrafo');
        });
    }
    selecionarestudiantes(dato) {
        this.estudianteService.getEstudiante(dato).subscribe(resestudiante => {
            this.estudiante = resestudiante;
            this.publicacion.EstudianteId = this.estudiante.id;
            this.publicacion.GradoDestino = this.estudiante.grado.Nombre;
            if (this.libro.Autor === '') {
                this.libro.Autor = this.estudiante.Nombre + ' ' + this.estudiante.Apellido;
            }
        }, err => {
            console.log('Error get estudiante');
        });
    }
    ngOnInit() {
        this.gettipos();
        this.cliente = JSON.parse(localStorage.getItem('usuario'));
        this.profesor = this.cliente;
        this.estudianteService.getsearchEstudiantebygrado(this.profesor.GradoId, this.profesor.Seccion).subscribe(resestudiante => {
            this.estudiantes = resestudiante;
        }, err => {
            console.log('Error get estudiante by profe');
        });
    }
};
TeaBookCreatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_tipo_service__WEBPACK_IMPORTED_MODULE_2__.TipoService },
    { type: src_app_services_libro_service__WEBPACK_IMPORTED_MODULE_3__.LibroService },
    { type: src_app_services_parrafo_service__WEBPACK_IMPORTED_MODULE_4__.ParrafoService },
    { type: src_app_services_estudiante_service__WEBPACK_IMPORTED_MODULE_5__.EstudianteService },
    { type: src_app_services_publicacion_service__WEBPACK_IMPORTED_MODULE_6__.PublicacionService }
];
TeaBookCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tea-book-create',
        template: _tea_book_create_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tea_book_create_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TeaBookCreatePage);



/***/ }),

/***/ 2791:
/*!***************************************************************************************!*\
  !*** ./src/app/teacher/tea-book/tea-book-create/tea-book-create.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".main_content_div_child {\n  min-height: 700px;\n  max-height: 5000px;\n  height: auto;\n  --background: transparent;\n}\n\n.main_content_div {\n  background: white;\n  width: 100%;\n  border-top-right-radius: 75px;\n  margin-top: 20px;\n  padding-top: 30px;\n  padding: 10px;\n}\n\n.main_content_div .book-section {\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  text-align: center;\n  min-height: 150px;\n  max-width: 100%;\n  height: auto;\n  border-radius: 20px;\n}\n\n.main_content_div .book-section .heading {\n  margin-left: 1px;\n  margin-top: 20px;\n}\n\n.main_content_div .book-section .heading h1 {\n  font-size: 2rem;\n  font-weight: bolder;\n  text-align: center;\n  color: #08A6AC;\n}\n\n.main_content_div .book-section .book-form .form-input {\n  position: relative;\n  margin-bottom: 40px;\n  border-bottom: 1px solid white;\n  color: white;\n  margin-left: 15;\n  font-size: 4rem;\n}\n\n.main_content_div .book-section .book-form .form-input ion-item {\n  --background: transparent;\n}\n\n.main_content_div .book-section .book-form .form-input ion-item ion-label {\n  font-weight: bold;\n  font-size: 14px;\n  color: #08A6AC;\n}\n\n.main_content_div .book-section .book-form .form-input ion-item ion-input {\n  --color: #08A6AC;\n  --placeholder-color: rgb(87, 219, 242);\n}\n\n.main_content_div .book-section .book-form .form-input ion-item ion-select {\n  --background: transparent;\n  --color: #08A6AC;\n  color: #08A6AC;\n  --placeholder-color: rgb(87, 219, 242);\n  --placeholder-opacity:rgb(87, 219, 242);\n}\n\n.main_content_div .book-section .book-form .action-buttons {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.main_content_div .book-section .book-form .action-buttons ion-button {\n  --background: #08A6AC;\n}\n\n.main_content_div .book-section .book-form .action-buttons .book-button {\n  margin-bottom: 60px;\n  width: 100%;\n  font-weight: bold;\n}\n\n.main_content_div .book-section .parrafo-form .form-input {\n  position: relative;\n  margin-bottom: 40px;\n  border-bottom: 1px solid white;\n  color: white;\n  margin-left: 15;\n  font-size: 4rem;\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item {\n  --background: transparent;\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item ion-label {\n  font-weight: bold;\n  font-size: 14px;\n  color: #08A6AC;\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item ion-input {\n  --color: #08A6AC;\n  --placeholder-color: rgb(87, 219, 242);\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item ion-textarea {\n  --color: #08A6AC;\n  --placeholder-color: rgb(87, 219, 242);\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item .list {\n  font-size: 40px;\n  width: 100px;\n  background-color: transparent;\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item .selected {\n  color: white;\n  font-size: 4rem;\n  opacity: 1;\n  width: 100%;\n  padding: 5px 2px;\n  border: none;\n  background-color: transparent;\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item .lostitos {\n  color: white;\n  font-size: 4rem;\n  opacity: 1;\n  width: 100%;\n  padding: 5px 2px;\n  border: none;\n  background-color: transparent;\n}\n\n.main_content_div .book-section .parrafo-form .action-buttons {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.main_content_div .book-section .parrafo-form .action-buttons ion-button {\n  --background: #08A6AC;\n}\n\n.main_content_div .book-section .parrafo-form .action-buttons .parrafo-button {\n  margin-bottom: 60px;\n  width: 100%;\n  font-weight: bold;\n}\n\n.main_content_div .book-section .parrafo-vizualizacion h2 {\n  font-weight: bold;\n  font-size: 22px;\n}\n\n.main_content_div .book-section .parrafo-vizualizacion h4 {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.main_content_div .book-section .parrafo-vizualizacion .losparrafoscreados p {\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.main_content_div .book-section .parrafo-vizualizacion .losparrafoscreados img {\n  width: 100%;\n  height: 80px;\n}\n\n.animated {\n  --webkit-animation-duration: 5s;\n  animation-duration: 5s;\n  --webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.bounceInUp {\n  --webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n  }\n  80% {\n    -webkit-transform: translateY(10px);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYS1ib29rLWNyZWF0ZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2VtZXN0cmUlMjA1XFxjdXJzb3MlMjBleHRyYWN1cnJpY3VsYXJlc1xcY2FsaWRhZCUyMGVkdWNhdGl2YVxcc2lzdGVtYS1sZWN0dXJhbFxcYXBwbGVjdHVyYS1hbmd1bGFyMTQtaW9uaWM2LWNhcGFjaXRvclxcc3JjXFxhcHBcXHRlYWNoZXJcXHRlYS1ib29rXFx0ZWEtYm9vay1jcmVhdGVcXHRlYS1ib29rLWNyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0VOOztBRERNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0dSOztBREZRO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSVY7O0FEQVE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNFVjs7QUREVTtFQUNFLHlCQUFBO0FDR1o7O0FERlk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDSWQ7O0FERlk7RUFDRSxnQkFBQTtFQUNBLHNDQUFBO0FDSWQ7O0FERlk7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7QUNJZDs7QURBUTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNFVjs7QUREVTtFQUNFLHFCQUFBO0FDR1o7O0FERFU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0daOztBREVRO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQVY7O0FEQ1U7RUFDRSx5QkFBQTtBQ0NaOztBREFZO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0VkOztBREFZO0VBQ0UsZ0JBQUE7RUFDQSxzQ0FBQTtBQ0VkOztBREFZO0VBQ0UsZ0JBQUE7RUFDQSxzQ0FBQTtBQ0VkOztBREFZO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ0VoQjs7QURBWTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ0VkOztBREFZO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDRWQ7O0FERVE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDQVY7O0FEQ1U7RUFDRSxxQkFBQTtBQ0NaOztBRENVO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDWjs7QURJUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZWOztBRElRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDRlY7O0FES1U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNIWjs7QURLVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSFo7O0FEVUU7RUFDRSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtBQ1BKOztBRDJCRTtFQUNFLG1DQUFBO0VBQ0EsMEJBQUE7QUNSSjs7QURXRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHFDQUFBO0VDUko7RURVRTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtFQ1JKO0VEVUU7SUFDRSxtQ0FBQTtFQ1JKO0VEVUU7SUFDRSxnQ0FBQTtFQ1JKO0FBQ0YiLCJmaWxlIjoidGVhLWJvb2stY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2X2NoaWxkIHtcclxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNTAwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC5tYWluX2NvbnRlbnRfZGl2IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNzVweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAuYm9vay1zZWN0aW9uIHtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogIzA4QTZBQztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmJvb2stZm9ybSB7XHJcbiAgICAgICAgLmZvcm0taW5wdXQge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwOEE2QUM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgICAtLWNvbG9yOiAjMDhBNkFDO1xyXG4gICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYig4NywgMjE5LCAyNDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgLS1jb2xvcjogIzA4QTZBQztcclxuICAgICAgICAgICAgICBjb2xvcjogIzA4QTZBQztcclxuICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoODcsIDIxOSwgMjQyKTtcclxuICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6cmdiKDg3LCAyMTksIDI0Mik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGlvbi1idXR0b25zIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDhBNkFDO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJvb2stYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucGFycmFmby1mb3JtIHtcclxuICAgICAgICAuZm9ybS1pbnB1dCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1O1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzA4QTZBQztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICAgIC0tY29sb3I6ICMwOEE2QUM7XHJcbiAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiKDg3LCAyMTksIDI0Mik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLXRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAtLWNvbG9yOiAjMDhBNkFDO1xyXG4gICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYig4NywgMjE5LCAyNDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saXN0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAycHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb3N0aXRvcyB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAycHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzA4QTZBQztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wYXJyYWZvLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnBhcnJhZm8tdml6dWFsaXphY2lvbiB7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9zcGFycmFmb3NjcmVhZG9zIHtcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hbmltYXRlZCB7XHJcbiAgICAtLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuICAgIC0td2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIH1cclxuXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluVXAge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwKTtcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ib3VuY2VJblVwIHtcclxuICAgIC0td2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGJvdW5jZUluVXAge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4iLCIubWFpbl9jb250ZW50X2Rpdl9jaGlsZCB7XG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xuICBtYXgtaGVpZ2h0OiA1MDAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3NXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24ge1xuICBtYXJnaW46IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYm9vay1zZWN0aW9uIC5oZWFkaW5nIHtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLmhlYWRpbmcgaDEge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwOEE2QUM7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYm9vay1zZWN0aW9uIC5ib29rLWZvcm0gLmZvcm0taW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMTU7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLmJvb2stZm9ybSAuZm9ybS1pbnB1dCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYm9vay1zZWN0aW9uIC5ib29rLWZvcm0gLmZvcm0taW5wdXQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwOEE2QUM7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYm9vay1zZWN0aW9uIC5ib29rLWZvcm0gLmZvcm0taW5wdXQgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgLS1jb2xvcjogIzA4QTZBQztcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiKDg3LCAyMTksIDI0Mik7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYm9vay1zZWN0aW9uIC5ib29rLWZvcm0gLmZvcm0taW5wdXQgaW9uLWl0ZW0gaW9uLXNlbGVjdCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6ICMwOEE2QUM7XG4gIGNvbG9yOiAjMDhBNkFDO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoODcsIDIxOSwgMjQyKTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OnJnYig4NywgMjE5LCAyNDIpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAuYm9vay1mb3JtIC5hY3Rpb24tYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLmJvb2stZm9ybSAuYWN0aW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzA4QTZBQztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLmJvb2stZm9ybSAuYWN0aW9uLWJ1dHRvbnMgLmJvb2stYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAucGFycmFmby1mb3JtIC5mb3JtLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDE1O1xuICBmb250LXNpemU6IDRyZW07XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYm9vay1zZWN0aW9uIC5wYXJyYWZvLWZvcm0gLmZvcm0taW5wdXQgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAucGFycmFmby1mb3JtIC5mb3JtLWlucHV0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDhBNkFDO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAucGFycmFmby1mb3JtIC5mb3JtLWlucHV0IGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIC0tY29sb3I6ICMwOEE2QUM7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYig4NywgMjE5LCAyNDIpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAucGFycmFmby1mb3JtIC5mb3JtLWlucHV0IGlvbi1pdGVtIGlvbi10ZXh0YXJlYSB7XG4gIC0tY29sb3I6ICMwOEE2QUM7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYig4NywgMjE5LCAyNDIpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAucGFycmFmby1mb3JtIC5mb3JtLWlucHV0IGlvbi1pdGVtIC5saXN0IHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAucGFycmFmby1mb3JtIC5mb3JtLWlucHV0IGlvbi1pdGVtIC5zZWxlY3RlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDJweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tZm9ybSAuZm9ybS1pbnB1dCBpb24taXRlbSAubG9zdGl0b3Mge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgb3BhY2l0eTogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYm9vay1zZWN0aW9uIC5wYXJyYWZvLWZvcm0gLmFjdGlvbi1idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAucGFycmFmby1mb3JtIC5hY3Rpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDhBNkFDO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAucGFycmFmby1mb3JtIC5hY3Rpb24tYnV0dG9ucyAucGFycmFmby1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYm9vay1zZWN0aW9uIC5wYXJyYWZvLXZpenVhbGl6YWNpb24gaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAucGFycmFmby12aXp1YWxpemFjaW9uIGg0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tdml6dWFsaXphY2lvbiAubG9zcGFycmFmb3NjcmVhZG9zIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAucGFycmFmby12aXp1YWxpemFjaW9uIC5sb3NwYXJyYWZvc2NyZWFkb3MgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmFuaW1hdGVkIHtcbiAgLS13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgLS13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluVXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xuICB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzApO1xuICB9XG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4uYm91bmNlSW5VcCB7XG4gIC0td2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcbn1cblxuQGtleWZyYW1lcyBib3VuY2VJblVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcbiAgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICB9XG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 171:
/*!***************************************************************************************!*\
  !*** ./src/app/teacher/tea-book/tea-book-create/tea-book-create.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main_content_div_child\">\r\n  <div class=\"main_content_div animated bounceInUp\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"4\" (click)=\"elegir('libro')\">\r\n          <img src=\"../../../../assets/iconos/book.png\" alt=\"libro\">\r\n        </ion-col>\r\n        <ion-col size=\"4\" (click)=\"elegir('video')\">\r\n          <img src=\"../../../../assets/iconos/video-book.png\" alt=\"video\">\r\n        </ion-col>\r\n        <ion-col size=\"4\" (click)=\"elegir('audio')\">\r\n          <img src=\"../../../../assets/iconos/audio-book.png\" alt=\"audio\">\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <div class=\"book-section ion-padding\">\r\n      <div class=\"heading ion-padding\">\r\n        <h1>\r\n          Registrar Libro\r\n        </h1>\r\n      </div>\r\n      <div *ngIf=\"!creado\" class=\"book-form ion-padding\">\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">\r\n              Ingrese Titulo\r\n            </ion-label>\r\n            <ion-input type=\"text\" name=\"Titulo\" [(ngModel)]=\"libro.Titulo\" required autofocus tabindex=\"1\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-input\" *ngIf=\"eleccion === 'audio'\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              Codigo del Audio\r\n            </ion-label>\r\n            <ion-input type=\"text\" name=\"Audio\" [(ngModel)]=\"libro.Audio\" tabindex=\"2\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-input\" *ngIf=\"eleccion === 'video'\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              Codigo del Video\r\n            </ion-label>\r\n            <ion-input type=\"text\" name=\"Video\" [(ngModel)]=\"libro.Video\" tabindex=\"3\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              Ingrese Link de la Imagen\r\n            </ion-label>\r\n            <ion-input type=\"text\" name=\"Imagen\" [(ngModel)]=\"libro.Imagen\" required tabindex=\"4\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              Relacionar libro con Estudiante\r\n            </ion-label>\r\n            <ion-select (change)=\"onOptionsSelectEstudiante($event)\" class=\"c-white\" [(ngModel)]=\"publicacion.EstudianteId\" name=\"eleccion\" required\r\n            tabindex=\"5\" interface=\"popover\" placeholder=\"Seleccione Estudiante\">\r\n            <ion-select-option class=\"list\" [value]=\"item.id\" *ngFor=\"let item of estudiantes\">\r\n              {{item.Nombre + ' ' + item.Apellido}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              Ingrese Autor\r\n            </ion-label>\r\n            <ion-input type=\"text\" name=\"Autor\" [(ngModel)]=\"libro.Autor\" required tabindex=\"6\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"action-buttons ion-padding\" *ngIf=\"eleccion === 'libro'\">\r\n          <ion-button (click)=\"saveLibro()\" size=\"large\" class=\"book-button\"\r\n          [disabled]=\"(libro.Titulo === '' || libro.Imagen === '' || libro.Autor === '')? true:false\">\r\n            Registrar\r\n          </ion-button>\r\n        </div>\r\n        <div class=\"action-buttons ion-padding\" *ngIf=\"eleccion === 'audio'\">\r\n          <ion-button (click)=\"savelibroaudio()\" size=\"large\" class=\"book-button\"\r\n          [disabled]=\"(libro.Titulo === '' || libro.Imagen === '' || libro.Autor === '')? true:false\">\r\n            Registrar\r\n          </ion-button>\r\n        </div>\r\n        <div class=\"action-buttons ion-padding\" *ngIf=\"eleccion === 'video'\">\r\n          <ion-button (click)=\"savelibrovideo()\" size=\"large\" class=\"book-button\"\r\n          [disabled]=\"(libro.Titulo === '' || libro.Imagen === '' || libro.Autor === '')? true:false\">\r\n            Registrar\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!creado && eleccion === 'libro'\"class=\"heading ion-padding\">\r\n        <h1>\r\n          Agregar Parrafos del Libro\r\n        </h1>\r\n      </div>\r\n      <div *ngIf=\"!creado && eleccion === 'libro'\" class=\"parrafo-form ion-padding\">\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              Parrafo\r\n            </ion-label>\r\n            <ion-textarea [autoGrow]=\"true\" type=\"text\" name=\"Parrafo\" [(ngModel)]=\"parrafo.Parrafo\" required autofocus tabindex=\"5\"></ion-textarea>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              Imagen\r\n            </ion-label>\r\n            <ion-input type=\"text\" name=\"Imagen\" [(ngModel)]=\"parrafo.Imagen\" tabindex=\"6\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              inicio, Desarrollo o Final\r\n            </ion-label>\r\n            <ion-list class=\"lostitos\">\r\n              <ion-item>\r\n                <ion-select (change)=\"onOptionsSelectTipo($event)\" [(ngModel)]=\"parrafo.Tipoid\" name=\"Tipoid\" required\r\n                  tabindex=\"7\"  position=\"floating\" interface=\"popover\" placeholder=\"Seleccione la etapa del Libro o Cuento\">\r\n                  <ion-select-option class=\"list\" [value]=\"item.id\" *ngFor=\"let item of tipos\">\r\n                    {{item.Nombre}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"action-buttons ion-padding\">\r\n          <ion-button (click)=\"saveParrafo()\" size=\"large\" class=\"parrafo-button\"\r\n          [disabled]=\"(parrafo.Parrafo === '' && parrafo.Imagen === '' || parrafo.Tipoid === 0)? true:false\">\r\n            Agregar\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!creado && !mostrarparrafos && eleccion === 'libro'\" class=\"heading ion-padding\">\r\n        <h1>\r\n          Vista Previa del Texto\r\n        </h1>\r\n      </div>\r\n      <div *ngIf=\"!creado && eleccion === 'libro'\" class=\"parrafo-vizualizacion ion-padding\">\r\n        <h2>\r\n          {{libro1.Titulo}}\r\n        </h2>\r\n        <h4>\r\n          Autor:\r\n            <br>\r\n          {{libro1.Autor}}\r\n        </h4>\r\n        <div class=\"losparrafoscreados\" *ngFor=\"let obj of parrafos\">\r\n          <p *ngIf=\"obj.Imagen === ''\">\r\n            {{obj.Parrafo}}\r\n          </p>\r\n          <img *ngIf=\"obj.Parrafo === ''\" [src]=\"obj.Imagen\" alt=\"\">\r\n        </div>\r\n        <div *ngIf=\"porfinalizar\" class=\"action-buttons ion-padding\">\r\n          <ion-button (click)=\"savepublicacion()\" size=\"large\" class=\"parrafo-button\"\r\n          [disabled]=\"(parrafo.Parrafo === '' && parrafo.Imagen === '' || parrafo.Tipoid === 0)? true:false\">\r\n            Finalizar\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_teacher_tea-book_tea-book-create_tea-book-create_module_ts.js.map