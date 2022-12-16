"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_student_stu-book_stu-book_module_ts"],{

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

/***/ 9377:
/*!*************************************************************!*\
  !*** ./src/app/student/stu-book/stu-book-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuBookPageRoutingModule": () => (/* binding */ StuBookPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stu_book_update_stu_book_update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-book-update/stu-book-update.page */ 6757);
/* harmony import */ var _stu_book_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-book.page */ 5291);





const routes = [
    {
        path: '',
        component: _stu_book_page__WEBPACK_IMPORTED_MODULE_1__.StuBookPage,
        children: [
            {
                path: 'stu-book-list',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_student_stu-book_stu-book-list_stu-book-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./stu-book-list/stu-book-list.module */ 230)).then(m => m.StuBookListPageModule)
            },
            {
                path: 'stu-book-create',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_student_stu-book_stu-book-create_stu-book-create_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./stu-book-create/stu-book-create.module */ 294)).then(m => m.StuBookCreatePageModule)
            },
            {
                path: 'stu-book-update/:libro',
                component: _stu_book_update_stu_book_update_page__WEBPACK_IMPORTED_MODULE_0__.StuBookUpdatePage
                // loadChildren: () => import('./stu-book-update/stu-book-update.module').then( m => m.StuBookUpdatePageModule)
            },
            {
                path: '',
                redirectTo: 'stu-book-list',
                pathMatch: 'prefix'
            }
        ]
    },
];
let StuBookPageRoutingModule = class StuBookPageRoutingModule {
};
StuBookPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], StuBookPageRoutingModule);



/***/ }),

/***/ 6757:
/*!**************************************************************************!*\
  !*** ./src/app/student/stu-book/stu-book-update/stu-book-update.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuBookUpdatePage": () => (/* binding */ StuBookUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stu_book_update_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-book-update.page.html?ngResource */ 309);
/* harmony import */ var _stu_book_update_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-book-update.page.scss?ngResource */ 163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_tipo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tipo.service */ 1463);
/* harmony import */ var src_app_services_libro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/libro.service */ 7809);
/* harmony import */ var _services_parrafo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/parrafo.service */ 5683);
/* harmony import */ var src_app_services_publicacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/publicacion.service */ 3203);









let StuBookUpdatePage = class StuBookUpdatePage {
    constructor(router, tipoService, libroService, parrafoService, activatedRoute, publicacionService) {
        this.router = router;
        this.tipoService = tipoService;
        this.libroService = libroService;
        this.parrafoService = parrafoService;
        this.activatedRoute = activatedRoute;
        this.publicacionService = publicacionService;
        this.parrafos = [];
        this.tipos = [];
        this.libro = {
            id: 0,
            Titulo: '',
            Audio: '',
            Video: '',
            Imagen: '',
            Autor: ''
        };
        this.parrafo = {
            id: 0,
            Parrafo: '',
            Imagen: '',
            Tipoid: 0,
            LibroId: 0
        };
        this.publicacion = {
            id: 0,
            Procedencia: '',
            FechaRegistro: new Date(),
            GradoDestino: '',
            LibroId: 0,
            EstudianteId: 0
        };
        this.isModalOpen = false;
    }
    setOpen(isOpen) {
        this.isModalOpen = isOpen;
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
    getparrafos() {
        this.parrafoService.getsearchParrafobylibro(this.codigolibro).subscribe(resparrafos => {
            this.parrafos = resparrafos;
        }, err => {
            console.log('Error get parrafos by libro');
        });
    }
    selectParrafo(dato) {
        this.setOpen(true);
        this.parrafoService.getParrafo(dato).subscribe(resparrafito => {
            this.parrafo = resparrafito;
        }, err => {
            console.log('Eror get parrafo');
        });
    }
    updateLibro() {
        this.libroService.updateLibro(this.codigolibro, this.libro).subscribe(reslibro => {
            this.mensajelibro = reslibro;
            this.publicacion.FechaRegistro = new Date();
            this.publicacionService.updatePublicacion(this.publicacion.id, this.publicacion).subscribe(respublicacion => {
                this.mensajepublicacion = respublicacion;
            }, err => {
                console.log('Error update Publicacion');
            });
        }, err => {
            console.log('Eror update libro');
        });
    }
    updateParrafo(dato) {
        this.setOpen(false);
        this.parrafoService.updateParrafo(dato, this.parrafo).subscribe(resparrafo => {
            this.mensajeparrafo = resparrafo;
        }, err => {
            console.log('Error update parrafo');
        });
    }
    finalizar() {
        this.router.navigate([
            'student',
            'stu-book',
            'stu-book-list'
        ]);
    }
    ngOnInit() {
        const parametro = this.activatedRoute.snapshot.paramMap.get('libro');
        this.codigolibro = parametro;
        this.libroService.getLibro(parametro).subscribe(reslibro => {
            if (reslibro !== null) {
                this.libro = reslibro;
                this.getparrafos();
            }
            else {
                console.log('No hay examen');
            }
        }, err => {
            console.log('Error get libro');
        });
    }
};
StuBookUpdatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_tipo_service__WEBPACK_IMPORTED_MODULE_2__.TipoService },
    { type: src_app_services_libro_service__WEBPACK_IMPORTED_MODULE_3__.LibroService },
    { type: _services_parrafo_service__WEBPACK_IMPORTED_MODULE_4__.ParrafoService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_services_publicacion_service__WEBPACK_IMPORTED_MODULE_5__.PublicacionService }
];
StuBookUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-stu-book-update',
        template: _stu_book_update_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stu_book_update_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StuBookUpdatePage);



/***/ }),

/***/ 9061:
/*!*****************************************************!*\
  !*** ./src/app/student/stu-book/stu-book.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuBookPageModule": () => (/* binding */ StuBookPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stu_book_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-book-routing.module */ 9377);
/* harmony import */ var _stu_book_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-book.page */ 5291);
/* harmony import */ var _stu_book_update_stu_book_update_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stu-book-update/stu-book-update.page */ 6757);








let StuBookPageModule = class StuBookPageModule {
};
StuBookPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _stu_book_routing_module__WEBPACK_IMPORTED_MODULE_0__.StuBookPageRoutingModule
        ],
        declarations: [
            _stu_book_page__WEBPACK_IMPORTED_MODULE_1__.StuBookPage,
            _stu_book_update_stu_book_update_page__WEBPACK_IMPORTED_MODULE_2__.StuBookUpdatePage
        ]
    })
], StuBookPageModule);



/***/ }),

/***/ 5291:
/*!***************************************************!*\
  !*** ./src/app/student/stu-book/stu-book.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuBookPage": () => (/* binding */ StuBookPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stu_book_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-book.page.html?ngResource */ 4819);
/* harmony import */ var _stu_book_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-book.page.scss?ngResource */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let StuBookPage = class StuBookPage {
    constructor() { }
    ngOnInit() {
    }
};
StuBookPage.ctorParameters = () => [];
StuBookPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-stu-book',
        template: _stu_book_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stu_book_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StuBookPage);



/***/ }),

/***/ 163:
/*!***************************************************************************************!*\
  !*** ./src/app/student/stu-book/stu-book-update/stu-book-update.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".main_content_div_child {\n  min-height: 700px;\n  max-height: 5000px;\n  height: auto;\n  --background: transparent;\n}\n\n.main_content_div {\n  background: white;\n  width: 100%;\n  border-top-right-radius: 75px;\n  margin-top: 20px;\n  padding-top: 30px;\n  padding: 10px;\n}\n\n.main_content_div .book-section {\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  text-align: center;\n  min-height: 150px;\n  max-width: 100%;\n  height: auto;\n  border-radius: 20px;\n}\n\n.main_content_div .book-section .heading {\n  margin-left: 1px;\n  margin-top: 20px;\n}\n\n.main_content_div .book-section .heading h1 {\n  font-size: 2rem;\n  font-weight: bolder;\n  text-align: center;\n  color: #08A6AC;\n}\n\n.main_content_div .book-section .book-form .form-input {\n  position: relative;\n  margin-bottom: 40px;\n  border-bottom: 1px solid white;\n  color: white;\n  margin-left: 15;\n  font-size: 4rem;\n}\n\n.main_content_div .book-section .book-form .form-input ion-item {\n  --background: transparent;\n}\n\n.main_content_div .book-section .book-form .form-input ion-item ion-label {\n  font-weight: bold;\n  font-size: 14px;\n  color: #08A6AC;\n}\n\n.main_content_div .book-section .book-form .form-input ion-item ion-input {\n  --color: #08A6AC;\n  --placeholder-color: rgb(87, 219, 242);\n}\n\n.main_content_div .book-section .book-form .action-buttons {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.main_content_div .book-section .book-form .action-buttons ion-button {\n  --background: #08A6AC;\n}\n\n.main_content_div .book-section .book-form .action-buttons .book-button {\n  margin-bottom: 60px;\n  width: 100%;\n  font-weight: bold;\n}\n\n.main_content_div .book-section .parrafo-form .form-input {\n  position: relative;\n  margin-bottom: 40px;\n  border-bottom: 1px solid white;\n  color: white;\n  margin-left: 15;\n  font-size: 4rem;\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item {\n  --background: transparent;\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item ion-label {\n  font-weight: bold;\n  font-size: 14px;\n  color: #08A6AC;\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item ion-input {\n  --color: #08A6AC;\n  --placeholder-color: rgb(87, 219, 242);\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item ion-textarea {\n  --color: #08A6AC;\n  --placeholder-color: rgb(87, 219, 242);\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item .list {\n  font-size: 40px;\n  width: 100px;\n  background-color: transparent;\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item .selected {\n  color: white;\n  font-size: 4rem;\n  opacity: 1;\n  width: 100%;\n  padding: 5px 2px;\n  border: none;\n  background-color: transparent;\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item .lostitos {\n  color: white;\n  font-size: 4rem;\n  opacity: 1;\n  width: 100%;\n  padding: 5px 2px;\n  border: none;\n  background-color: transparent;\n}\n\n.main_content_div .book-section .parrafo-form .action-buttons {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.main_content_div .book-section .parrafo-form .action-buttons ion-button {\n  --background: #08A6AC;\n}\n\n.main_content_div .book-section .parrafo-form .action-buttons .parrafo-button {\n  margin-bottom: 60px;\n  width: 100%;\n  font-weight: bold;\n}\n\n.main_content_div .book-section .parrafo-vizualizacion h2 {\n  font-weight: bold;\n  font-size: 22px;\n}\n\n.main_content_div .book-section .parrafo-vizualizacion h4 {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.main_content_div .book-section .parrafo-vizualizacion .losparrafoscreados p {\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.main_content_div .book-section .parrafo-vizualizacion .losparrafoscreados img {\n  width: 100%;\n  height: 80px;\n}\n\n.animated {\n  --webkit-animation-duration: 5s;\n  animation-duration: 5s;\n  --webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.bounceInUp {\n  --webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n  }\n  80% {\n    -webkit-transform: translateY(10px);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dS1ib29rLXVwZGF0ZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2VtZXN0cmUlMjA1XFxjdXJzb3MlMjBleHRyYWN1cnJpY3VsYXJlc1xcY2FsaWRhZCUyMGVkdWNhdGl2YVxcc2lzdGVtYS1sZWN0dXJhbFxcYXBwbGVjdHVyYS1hbmd1bGFyMTQtaW9uaWM2LWNhcGFjaXRvclxcc3JjXFxhcHBcXHN0dWRlbnRcXHN0dS1ib29rXFxzdHUtYm9vay11cGRhdGVcXHN0dS1ib29rLXVwZGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0VOOztBRERNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0dSOztBREZRO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSVY7O0FEQVE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNFVjs7QUREVTtFQUNFLHlCQUFBO0FDR1o7O0FERlk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDSWQ7O0FERlk7RUFDRSxnQkFBQTtFQUNBLHNDQUFBO0FDSWQ7O0FEQVE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDRVY7O0FERFU7RUFDRSxxQkFBQTtBQ0daOztBRERVO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNHWjs7QURFUTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0FWOztBRENVO0VBQ0UseUJBQUE7QUNDWjs7QURBWTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNFZDs7QURBWTtFQUNFLGdCQUFBO0VBQ0Esc0NBQUE7QUNFZDs7QURBWTtFQUNFLGdCQUFBO0VBQ0Esc0NBQUE7QUNFZDs7QURBWTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNFaEI7O0FEQVk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNFZDs7QURBWTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ0VkOztBREVRO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FWOztBRENVO0VBQ0UscUJBQUE7QUNDWjs7QURDVTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ1o7O0FESVE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNGVjs7QURJUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZWOztBREtVO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDSFo7O0FES1U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0haOztBRFVFO0VBQ0UsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUNQSjs7QUQyQkU7RUFDRSxtQ0FBQTtFQUNBLDBCQUFBO0FDUko7O0FEV0U7RUFDRTtJQUNFLFVBQUE7SUFDQSxxQ0FBQTtFQ1JKO0VEVUU7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7RUNSSjtFRFVFO0lBQ0UsbUNBQUE7RUNSSjtFRFVFO0lBQ0UsZ0NBQUE7RUNSSjtBQUNGIiwiZmlsZSI6InN0dS1ib29rLXVwZGF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2Rpdl9jaGlsZCB7XHJcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDUwMDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAubWFpbl9jb250ZW50X2RpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDc1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLmJvb2stc2VjdGlvbiB7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgLmhlYWRpbmcge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6ICMwOEE2QUM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5ib29rLWZvcm0ge1xyXG4gICAgICAgIC5mb3JtLWlucHV0IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDhBNkFDO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgLS1jb2xvcjogIzA4QTZBQztcclxuICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoODcsIDIxOSwgMjQyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aW9uLWJ1dHRvbnMge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMwOEE2QUM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm9vay1idXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5wYXJyYWZvLWZvcm0ge1xyXG4gICAgICAgIC5mb3JtLWlucHV0IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDhBNkFDO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgLS1jb2xvcjogIzA4QTZBQztcclxuICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoODcsIDIxOSwgMjQyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgIC0tY29sb3I6ICMwOEE2QUM7XHJcbiAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiKDg3LCAyMTksIDI0Mik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpc3Qge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlbGVjdGVkIHtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDJweDtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvc3RpdG9zIHtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDJweDtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGlvbi1idXR0b25zIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDhBNkFDO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBhcnJhZm8tYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucGFycmFmby12aXp1YWxpemFjaW9uIHtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb3NwYXJyYWZvc2NyZWFkb3Mge1xyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFuaW1hdGVkIHtcclxuICAgIC0td2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gICAgLS13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgfVxyXG5cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5VcCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzApO1xyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJvdW5jZUluVXAge1xyXG4gICAgLS13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgYm91bmNlSW5VcCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgICB9XHJcbiAgICA4MCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICB9XHJcbiIsIi5tYWluX2NvbnRlbnRfZGl2X2NoaWxkIHtcbiAgbWluLWhlaWdodDogNzAwcHg7XG4gIG1heC1oZWlnaHQ6IDUwMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDc1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiB7XG4gIG1hcmdpbjogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLmhlYWRpbmcge1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAuaGVhZGluZyBoMSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzA4QTZBQztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLmJvb2stZm9ybSAuZm9ybS1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxNTtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAuYm9vay1mb3JtIC5mb3JtLWlucHV0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLmJvb2stZm9ybSAuZm9ybS1pbnB1dCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzA4QTZBQztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLmJvb2stZm9ybSAuZm9ybS1pbnB1dCBpb24taXRlbSBpb24taW5wdXQge1xuICAtLWNvbG9yOiAjMDhBNkFDO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoODcsIDIxOSwgMjQyKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLmJvb2stZm9ybSAuYWN0aW9uLWJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYm9vay1zZWN0aW9uIC5ib29rLWZvcm0gLmFjdGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMwOEE2QUM7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYm9vay1zZWN0aW9uIC5ib29rLWZvcm0gLmFjdGlvbi1idXR0b25zIC5ib29rLWJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tZm9ybSAuZm9ybS1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxNTtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAucGFycmFmby1mb3JtIC5mb3JtLWlucHV0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tZm9ybSAuZm9ybS1pbnB1dCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzA4QTZBQztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tZm9ybSAuZm9ybS1pbnB1dCBpb24taXRlbSBpb24taW5wdXQge1xuICAtLWNvbG9yOiAjMDhBNkFDO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoODcsIDIxOSwgMjQyKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tZm9ybSAuZm9ybS1pbnB1dCBpb24taXRlbSBpb24tdGV4dGFyZWEge1xuICAtLWNvbG9yOiAjMDhBNkFDO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoODcsIDIxOSwgMjQyKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tZm9ybSAuZm9ybS1pbnB1dCBpb24taXRlbSAubGlzdCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tZm9ybSAuZm9ybS1pbnB1dCBpb24taXRlbSAuc2VsZWN0ZWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgb3BhY2l0eTogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYm9vay1zZWN0aW9uIC5wYXJyYWZvLWZvcm0gLmZvcm0taW5wdXQgaW9uLWl0ZW0gLmxvc3RpdG9zIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDRyZW07XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAucGFycmFmby1mb3JtIC5hY3Rpb24tYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tZm9ybSAuYWN0aW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzA4QTZBQztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tZm9ybSAuYWN0aW9uLWJ1dHRvbnMgLnBhcnJhZm8tYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAucGFycmFmby12aXp1YWxpemFjaW9uIGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tdml6dWFsaXphY2lvbiBoNCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYm9vay1zZWN0aW9uIC5wYXJyYWZvLXZpenVhbGl6YWNpb24gLmxvc3BhcnJhZm9zY3JlYWRvcyBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tdml6dWFsaXphY2lvbiAubG9zcGFycmFmb3NjcmVhZG9zIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5hbmltYXRlZCB7XG4gIC0td2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIC0td2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJblVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcbiAgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwKTtcbiAgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmJvdW5jZUluVXAge1xuICAtLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlSW5VcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XG4gIH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59Il19 */";

/***/ }),

/***/ 4356:
/*!****************************************************************!*\
  !*** ./src/app/student/stu-book/stu-book.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHUtYm9vay5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 309:
/*!***************************************************************************************!*\
  !*** ./src/app/student/stu-book/stu-book-update/stu-book-update.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main_content_div_child\">\r\n  <div class=\"main_content_div animated bounceInUp\">\r\n    <div class=\"book-section ion-padding\">\r\n      <div class=\"heading ion-padding\">\r\n        <h1>\r\n          Modificar Libro\r\n        </h1>\r\n      </div>\r\n      <div class=\"book-form ion-padding\">\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">\r\n              Titulo\r\n            </ion-label>\r\n            <ion-input type=\"text\" name=\"Titulo\" [(ngModel)]=\"libro.Titulo\" required autofocus tabindex=\"1\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              Link del Audio de youtube\r\n            </ion-label>\r\n            <ion-input type=\"text\" name=\"Audio\" [(ngModel)]=\"libro.Audio\" tabindex=\"2\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              Link embed del video de yotube\r\n            </ion-label>\r\n            <ion-input type=\"text\" name=\"Video\" [(ngModel)]=\"libro.Video\" tabindex=\"3\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              Ingrese Link de la Imagen\r\n            </ion-label>\r\n            <ion-input type=\"text\" name=\"Imagen\" [(ngModel)]=\"libro.Imagen\" required tabindex=\"4\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <!-- <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              Ingrese Autor\r\n            </ion-label>\r\n            <ion-input type=\"text\" name=\"Autor\" [(ngModel)]=\"libro.Autor\" required tabindex=\"5\"></ion-input>\r\n          </ion-item>\r\n        </div> -->\r\n        <div class=\"action-buttons ion-padding\">\r\n          <ion-button (click)=\"updateLibro()\" size=\"large\" class=\"book-button\"\r\n          [disabled]=\"(libro.Titulo === '' || libro.Imagen === '')? true:false\">\r\n            actualizar\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n      <div class=\"heading ion-padding\">\r\n        <h1>\r\n          Vista Previa del Texto\r\n        </h1>\r\n      </div>\r\n      <div class=\"parrafo-vizualizacion ion-padding\">\r\n        <h2>\r\n          {{libro.Titulo}}\r\n        </h2>\r\n        <h4>\r\n          Autor:\r\n            <br>\r\n          {{libro.Autor}}\r\n        </h4>\r\n        <div class=\"losparrafoscreados\" *ngFor=\"let obj of parrafos\">\r\n          <p *ngIf=\"obj.Imagen === ''\" (click)=\"selectParrafo(obj.id)\">\r\n            {{obj.Parrafo}}\r\n          </p>\r\n          <img *ngIf=\"obj.Parrafo === ''\" [src]=\"obj.Imagen\" alt=\"\" (click)=\"selectParrafo(obj.id)\">\r\n        </div>\r\n        <div class=\"action-buttons ion-padding\">\r\n          <ion-button (click)=\"finalizar()\" size=\"large\" class=\"parrafo-button\">\r\n            Finalizar\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-modal [isOpen]=\"isModalOpen\">\r\n    <ng-template>\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            Modificar Parrafo\r\n          </ion-title>\r\n          <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"setOpen(false)\">Close</ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content class=\"ion-padding\">\r\n        <div class=\"heading ion-padding\">\r\n          <h1>\r\n            Modificar Parrafo del Libro\r\n          </h1>\r\n        </div>\r\n        <div class=\"parrafo-form ion-padding\">\r\n          <div class=\"form-input\">\r\n            <ion-item>\r\n              <ion-label  position=\"floating\">\r\n                Parrafo\r\n              </ion-label>\r\n              <ion-textarea [autoGrow]=\"true\" type=\"text\" name=\"Parrafo\" [(ngModel)]=\"parrafo.Parrafo\" required autofocus tabindex=\"5\"></ion-textarea>\r\n            </ion-item>\r\n          </div>\r\n          <div class=\"form-input\">\r\n            <ion-item>\r\n              <ion-label  position=\"floating\">\r\n                Imagen\r\n              </ion-label>\r\n              <ion-input type=\"text\" name=\"Imagen\" [(ngModel)]=\"parrafo.Imagen\" tabindex=\"6\"></ion-input>\r\n            </ion-item>\r\n          </div>\r\n          <div class=\"form-input\">\r\n            <ion-item>\r\n              <ion-label  position=\"floating\">\r\n                inicio, Desarrollo o Final\r\n              </ion-label>\r\n              <ion-list class=\"lostitos\">\r\n                <ion-item>\r\n                  <ion-select (change)=\"onOptionsSelectTipo($event)\" [(ngModel)]=\"parrafo.Tipoid\" name=\"Tipoid\" required\r\n                    tabindex=\"7\"  position=\"floating\" interface=\"popover\" placeholder=\"Seleccione la etapa del Libro o Cuento\">\r\n                    <ion-select-option class=\"list\" [value]=\"item.id\" *ngFor=\"let item of tipos\">\r\n                      {{item.Nombre}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-item>\r\n          </div>\r\n          <div class=\"action-buttons ion-padding\">\r\n            <ion-button (click)=\"updateParrafo(parrafo.id)\" size=\"large\" class=\"parrafo-button\"\r\n            [disabled]=\"(parrafo.Parrafo === '' && parrafo.Imagen === '' || parrafo.Tipoid === 0)? true:false\">\r\n              Actualizar\r\n            </ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-content>\r\n    </ng-template>\r\n  </ion-modal>\r\n</div>\r\n";

/***/ }),

/***/ 4819:
/*!****************************************************************!*\
  !*** ./src/app/student/stu-book/stu-book.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_student_stu-book_stu-book_module_ts.js.map