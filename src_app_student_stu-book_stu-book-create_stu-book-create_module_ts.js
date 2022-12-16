"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_student_stu-book_stu-book-create_stu-book-create_module_ts"],{

/***/ 5326:
/*!************************************************************************************!*\
  !*** ./src/app/student/stu-book/stu-book-create/stu-book-create-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuBookCreatePageRoutingModule": () => (/* binding */ StuBookCreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stu_book_create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-book-create.page */ 2557);




const routes = [
    {
        path: '',
        component: _stu_book_create_page__WEBPACK_IMPORTED_MODULE_0__.StuBookCreatePage
    }
];
let StuBookCreatePageRoutingModule = class StuBookCreatePageRoutingModule {
};
StuBookCreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StuBookCreatePageRoutingModule);



/***/ }),

/***/ 294:
/*!****************************************************************************!*\
  !*** ./src/app/student/stu-book/stu-book-create/stu-book-create.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuBookCreatePageModule": () => (/* binding */ StuBookCreatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stu_book_create_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-book-create-routing.module */ 5326);
/* harmony import */ var _stu_book_create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-book-create.page */ 2557);







let StuBookCreatePageModule = class StuBookCreatePageModule {
};
StuBookCreatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stu_book_create_routing_module__WEBPACK_IMPORTED_MODULE_0__.StuBookCreatePageRoutingModule
        ],
        declarations: [_stu_book_create_page__WEBPACK_IMPORTED_MODULE_1__.StuBookCreatePage]
    })
], StuBookCreatePageModule);



/***/ }),

/***/ 2557:
/*!**************************************************************************!*\
  !*** ./src/app/student/stu-book/stu-book-create/stu-book-create.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuBookCreatePage": () => (/* binding */ StuBookCreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stu_book_create_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-book-create.page.html?ngResource */ 8330);
/* harmony import */ var _stu_book_create_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-book-create.page.scss?ngResource */ 7605);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_tipo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tipo.service */ 1463);
/* harmony import */ var src_app_services_libro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/libro.service */ 7809);
/* harmony import */ var src_app_services_parrafo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/parrafo.service */ 5683);
/* harmony import */ var src_app_services_publicacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/publicacion.service */ 3203);



/* eslint-disable @typescript-eslint/naming-convention */






let StuBookCreatePage = class StuBookCreatePage {
    constructor(router, tipoService, libroService, parrafoService, publicacionService) {
        this.router = router;
        this.tipoService = tipoService;
        this.libroService = libroService;
        this.parrafoService = parrafoService;
        this.publicacionService = publicacionService;
        this.parrafos = [];
        this.tipos = [];
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
    savepublicacion() {
        this.publicacion.Procedencia = 'interna';
        this.publicacion.FechaRegistro = new Date();
        this.publicacion.GradoDestino = this.cliente.grado.Nombre;
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
    ngOnInit() {
        this.cliente = JSON.parse(localStorage.getItem('usuario'));
        this.libro.Autor = this.cliente.Nombre + ' ' + this.cliente.Apellido;
        const parametro = this.cliente.id;
        this.publicacion.EstudianteId = parametro;
        this.gettipos();
    }
};
StuBookCreatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_tipo_service__WEBPACK_IMPORTED_MODULE_2__.TipoService },
    { type: src_app_services_libro_service__WEBPACK_IMPORTED_MODULE_3__.LibroService },
    { type: src_app_services_parrafo_service__WEBPACK_IMPORTED_MODULE_4__.ParrafoService },
    { type: src_app_services_publicacion_service__WEBPACK_IMPORTED_MODULE_5__.PublicacionService }
];
StuBookCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-stu-book-create',
        template: _stu_book_create_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stu_book_create_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StuBookCreatePage);



/***/ }),

/***/ 7605:
/*!***************************************************************************************!*\
  !*** ./src/app/student/stu-book/stu-book-create/stu-book-create.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".main_content_div_child {\n  min-height: 700px;\n  max-height: 5000px;\n  height: auto;\n  --background: transparent;\n}\n\n.main_content_div {\n  background: white;\n  width: 100%;\n  border-top-right-radius: 75px;\n  margin-top: 20px;\n  padding-top: 30px;\n  padding: 10px;\n}\n\n.main_content_div .book-section {\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  text-align: center;\n  min-height: 150px;\n  max-width: 100%;\n  height: auto;\n  border-radius: 20px;\n}\n\n.main_content_div .book-section .heading {\n  margin-left: 1px;\n  margin-top: 20px;\n}\n\n.main_content_div .book-section .heading h1 {\n  font-size: 2rem;\n  font-weight: bolder;\n  text-align: center;\n  color: #08A6AC;\n}\n\n.main_content_div .book-section .book-form .form-input {\n  position: relative;\n  margin-bottom: 40px;\n  border-bottom: 1px solid white;\n  color: white;\n  margin-left: 15;\n  font-size: 4rem;\n}\n\n.main_content_div .book-section .book-form .form-input ion-item {\n  --background: transparent;\n}\n\n.main_content_div .book-section .book-form .form-input ion-item ion-label {\n  font-weight: bold;\n  font-size: 14px;\n  color: #08A6AC;\n}\n\n.main_content_div .book-section .book-form .form-input ion-item ion-input {\n  --color: #08A6AC;\n  --placeholder-color: rgb(87, 219, 242);\n}\n\n.main_content_div .book-section .book-form .action-buttons {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.main_content_div .book-section .book-form .action-buttons ion-button {\n  --background: #08A6AC;\n}\n\n.main_content_div .book-section .book-form .action-buttons .book-button {\n  margin-bottom: 60px;\n  width: 100%;\n  font-weight: bold;\n}\n\n.main_content_div .book-section .parrafo-form .form-input {\n  position: relative;\n  margin-bottom: 40px;\n  border-bottom: 1px solid white;\n  color: white;\n  margin-left: 15;\n  font-size: 4rem;\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item {\n  --background: transparent;\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item ion-label {\n  font-weight: bold;\n  font-size: 14px;\n  color: #08A6AC;\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item ion-input {\n  --color: #08A6AC;\n  --placeholder-color: rgb(87, 219, 242);\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item ion-textarea {\n  --color: #08A6AC;\n  --placeholder-color: rgb(87, 219, 242);\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item .list {\n  font-size: 40px;\n  width: 100px;\n  background-color: transparent;\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item .selected {\n  color: white;\n  font-size: 4rem;\n  opacity: 1;\n  width: 100%;\n  padding: 5px 2px;\n  border: none;\n  background-color: transparent;\n}\n\n.main_content_div .book-section .parrafo-form .form-input ion-item .lostitos {\n  color: white;\n  font-size: 4rem;\n  opacity: 1;\n  width: 100%;\n  padding: 5px 2px;\n  border: none;\n  background-color: transparent;\n}\n\n.main_content_div .book-section .parrafo-form .action-buttons {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.main_content_div .book-section .parrafo-form .action-buttons ion-button {\n  --background: #08A6AC;\n}\n\n.main_content_div .book-section .parrafo-form .action-buttons .parrafo-button {\n  margin-bottom: 60px;\n  width: 100%;\n  font-weight: bold;\n}\n\n.main_content_div .book-section .parrafo-vizualizacion h2 {\n  font-weight: bold;\n  font-size: 22px;\n}\n\n.main_content_div .book-section .parrafo-vizualizacion h4 {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.main_content_div .book-section .parrafo-vizualizacion .losparrafoscreados p {\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.main_content_div .book-section .parrafo-vizualizacion .losparrafoscreados img {\n  width: 100%;\n  height: 80px;\n}\n\n.animated {\n  --webkit-animation-duration: 5s;\n  animation-duration: 5s;\n  --webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.bounceInUp {\n  --webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n  }\n  80% {\n    -webkit-transform: translateY(10px);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dS1ib29rLWNyZWF0ZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2VtZXN0cmUlMjA1XFxjdXJzb3MlMjBleHRyYWN1cnJpY3VsYXJlc1xcY2FsaWRhZCUyMGVkdWNhdGl2YVxcc2lzdGVtYS1sZWN0dXJhbFxcYXBwbGVjdHVyYS1hbmd1bGFyMTQtaW9uaWM2LWNhcGFjaXRvclxcc3JjXFxhcHBcXHN0dWRlbnRcXHN0dS1ib29rXFxzdHUtYm9vay1jcmVhdGVcXHN0dS1ib29rLWNyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRERJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0dOOztBREZNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSVI7O0FEQU07RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNFUjs7QUREUTtFQUNFLHlCQUFBO0FDR1Y7O0FERlU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDSVo7O0FERlU7RUFDRSxnQkFBQTtFQUNBLHNDQUFBO0FDSVo7O0FEQU07RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDRVI7O0FERFE7RUFDRSxxQkFBQTtBQ0dWOztBRERRO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNHVjs7QURFTTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0FSOztBRENRO0VBQ0UseUJBQUE7QUNDVjs7QURBVTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNFWjs7QURBVTtFQUNFLGdCQUFBO0VBQ0Esc0NBQUE7QUNFWjs7QURBVTtFQUNFLGdCQUFBO0VBQ0Esc0NBQUE7QUNFWjs7QURBVTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNFZDs7QURBVTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ0VaOztBREFVO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDRVo7O0FERU07RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDQVI7O0FEQ1E7RUFDRSxxQkFBQTtBQ0NWOztBRENRO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDVjs7QURJTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZSOztBRElNO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDRlI7O0FES1E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNIVjs7QURLUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSFY7O0FEVUE7RUFDRSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtBQ1BGOztBRDJCQTtFQUNFLG1DQUFBO0VBQ0EsMEJBQUE7QUNSRjs7QURXQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHFDQUFBO0VDUkY7RURVQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtFQ1JGO0VEVUE7SUFDRSxtQ0FBQTtFQ1JGO0VEVUE7SUFDRSxnQ0FBQTtFQ1JGO0FBQ0YiLCJmaWxlIjoic3R1LWJvb2stY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2X2NoaWxkIHtcclxuICBtaW4taGVpZ2h0OiA3MDBweDtcclxuICBtYXgtaGVpZ2h0OiA1MDAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5tYWluX2NvbnRlbnRfZGl2IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNzVweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgLmJvb2stc2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgLmhlYWRpbmcge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMDhBNkFDO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm9vay1mb3JtIHtcclxuICAgICAgLmZvcm0taW5wdXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwOEE2QUM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICAtLWNvbG9yOiAjMDhBNkFDO1xyXG4gICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoODcsIDIxOSwgMjQyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmFjdGlvbi1idXR0b25zIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogIzA4QTZBQztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJvb2stYnV0dG9uIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBhcnJhZm8tZm9ybSB7XHJcbiAgICAgIC5mb3JtLWlucHV0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNTtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDhBNkFDO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgLS1jb2xvcjogIzA4QTZBQztcclxuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiKDg3LCAyMTksIDI0Mik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpb24tdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAtLWNvbG9yOiAjMDhBNkFDO1xyXG4gICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoODcsIDIxOSwgMjQyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saXN0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNlbGVjdGVkIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMnB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvc3RpdG9zIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMnB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuYWN0aW9uLWJ1dHRvbnMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDhBNkFDO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFycmFmby1idXR0b24ge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucGFycmFmby12aXp1YWxpemFjaW9uIHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgfVxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5sb3NwYXJyYWZvc2NyZWFkb3Mge1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hbmltYXRlZCB7XHJcbiAgLS13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gIC0td2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluVXAge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYm91bmNlSW5VcCB7XHJcbiAgLS13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlSW5VcCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluX2NvbnRlbnRfZGl2X2NoaWxkIHtcbiAgbWluLWhlaWdodDogNzAwcHg7XG4gIG1heC1oZWlnaHQ6IDUwMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDc1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiB7XG4gIG1hcmdpbjogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLmhlYWRpbmcge1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAuaGVhZGluZyBoMSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzA4QTZBQztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLmJvb2stZm9ybSAuZm9ybS1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxNTtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAuYm9vay1mb3JtIC5mb3JtLWlucHV0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLmJvb2stZm9ybSAuZm9ybS1pbnB1dCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzA4QTZBQztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLmJvb2stZm9ybSAuZm9ybS1pbnB1dCBpb24taXRlbSBpb24taW5wdXQge1xuICAtLWNvbG9yOiAjMDhBNkFDO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoODcsIDIxOSwgMjQyKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLmJvb2stZm9ybSAuYWN0aW9uLWJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYm9vay1zZWN0aW9uIC5ib29rLWZvcm0gLmFjdGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMwOEE2QUM7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYm9vay1zZWN0aW9uIC5ib29rLWZvcm0gLmFjdGlvbi1idXR0b25zIC5ib29rLWJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tZm9ybSAuZm9ybS1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxNTtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAucGFycmFmby1mb3JtIC5mb3JtLWlucHV0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tZm9ybSAuZm9ybS1pbnB1dCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzA4QTZBQztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tZm9ybSAuZm9ybS1pbnB1dCBpb24taXRlbSBpb24taW5wdXQge1xuICAtLWNvbG9yOiAjMDhBNkFDO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoODcsIDIxOSwgMjQyKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tZm9ybSAuZm9ybS1pbnB1dCBpb24taXRlbSBpb24tdGV4dGFyZWEge1xuICAtLWNvbG9yOiAjMDhBNkFDO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoODcsIDIxOSwgMjQyKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tZm9ybSAuZm9ybS1pbnB1dCBpb24taXRlbSAubGlzdCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tZm9ybSAuZm9ybS1pbnB1dCBpb24taXRlbSAuc2VsZWN0ZWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgb3BhY2l0eTogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYm9vay1zZWN0aW9uIC5wYXJyYWZvLWZvcm0gLmZvcm0taW5wdXQgaW9uLWl0ZW0gLmxvc3RpdG9zIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDRyZW07XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAucGFycmFmby1mb3JtIC5hY3Rpb24tYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tZm9ybSAuYWN0aW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzA4QTZBQztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tZm9ybSAuYWN0aW9uLWJ1dHRvbnMgLnBhcnJhZm8tYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvb2stc2VjdGlvbiAucGFycmFmby12aXp1YWxpemFjaW9uIGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tdml6dWFsaXphY2lvbiBoNCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYm9vay1zZWN0aW9uIC5wYXJyYWZvLXZpenVhbGl6YWNpb24gLmxvc3BhcnJhZm9zY3JlYWRvcyBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib29rLXNlY3Rpb24gLnBhcnJhZm8tdml6dWFsaXphY2lvbiAubG9zcGFycmFmb3NjcmVhZG9zIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5hbmltYXRlZCB7XG4gIC0td2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIC0td2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJblVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcbiAgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwKTtcbiAgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmJvdW5jZUluVXAge1xuICAtLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlSW5VcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XG4gIH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59Il19 */";

/***/ }),

/***/ 8330:
/*!***************************************************************************************!*\
  !*** ./src/app/student/stu-book/stu-book-create/stu-book-create.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main_content_div_child\">\r\n  <div class=\"main_content_div animated bounceInUp\">\r\n    <div class=\"book-section ion-padding\">\r\n      <div class=\"heading ion-padding\">\r\n        <h1>\r\n          Registrar Libro\r\n        </h1>\r\n      </div>\r\n      <div *ngIf=\"!creado\" class=\"book-form ion-padding\">\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">\r\n              Ingrese Titulo\r\n            </ion-label>\r\n            <ion-input type=\"text\" name=\"Titulo\" [(ngModel)]=\"libro.Titulo\" required autofocus tabindex=\"1\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              Ingrese link del Audio\r\n            </ion-label>\r\n            <ion-input type=\"text\" name=\"Audio\" [(ngModel)]=\"libro.Audio\" tabindex=\"2\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              Ingrese link embed del video de yotube\r\n            </ion-label>\r\n            <ion-input type=\"text\" name=\"Video\" [(ngModel)]=\"libro.Video\" tabindex=\"3\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              Ingrese Link de la Imagen\r\n            </ion-label>\r\n            <ion-input type=\"text\" name=\"Imagen\" [(ngModel)]=\"libro.Imagen\" required tabindex=\"4\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <!-- <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              Ingrese Autor\r\n            </ion-label>\r\n            <ion-input type=\"text\" name=\"Autor\" [(ngModel)]=\"libro.Autor\" required tabindex=\"5\"></ion-input>\r\n          </ion-item>\r\n        </div> -->\r\n        <div class=\"action-buttons ion-padding\">\r\n          <ion-button (click)=\"saveLibro()\" size=\"large\" class=\"book-button\"\r\n          [disabled]=\"(libro.Titulo === '' || libro.Imagen === '')? true:false\">\r\n            Registrar\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!creado\" class=\"heading ion-padding\">\r\n        <h1>\r\n          Agregar Parrafos del Libro\r\n        </h1>\r\n      </div>\r\n      <div *ngIf=\"!creado\" class=\"parrafo-form ion-padding\">\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              Parrafo\r\n            </ion-label>\r\n            <ion-textarea [autoGrow]=\"true\" type=\"text\" name=\"Parrafo\" [(ngModel)]=\"parrafo.Parrafo\" required autofocus tabindex=\"5\"></ion-textarea>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              Imagen\r\n            </ion-label>\r\n            <ion-input type=\"text\" name=\"Imagen\" [(ngModel)]=\"parrafo.Imagen\" tabindex=\"6\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label  position=\"floating\">\r\n              inicio, Desarrollo o Final\r\n            </ion-label>\r\n            <ion-list class=\"lostitos\">\r\n              <ion-item>\r\n                <ion-select (change)=\"onOptionsSelectTipo($event)\" [(ngModel)]=\"parrafo.Tipoid\" name=\"Tipoid\" required\r\n                  tabindex=\"7\"  position=\"floating\" interface=\"popover\" placeholder=\"Seleccione la etapa del Libro o Cuento\">\r\n                  <ion-select-option class=\"list\" [value]=\"item.id\" *ngFor=\"let item of tipos\">\r\n                    {{item.Nombre}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"action-buttons ion-padding\">\r\n          <ion-button (click)=\"saveParrafo()\" size=\"large\" class=\"parrafo-button\"\r\n          [disabled]=\"(parrafo.Parrafo === '' && parrafo.Imagen === '' || parrafo.Tipoid === 0)? true:false\">\r\n            Agregar\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!creado && !mostrarparrafos\" class=\"heading ion-padding\">\r\n        <h1>\r\n          Vista Previa del Texto\r\n        </h1>\r\n      </div>\r\n      <div *ngIf=\"!creado\" class=\"parrafo-vizualizacion ion-padding\">\r\n        <h2>\r\n          {{libro1.Titulo}}\r\n        </h2>\r\n        <h4>\r\n          Autor:\r\n            <br>\r\n          {{libro1.Autor}}\r\n        </h4>\r\n        <div class=\"losparrafoscreados\" *ngFor=\"let obj of parrafos\">\r\n          <p *ngIf=\"obj.Imagen === ''\">\r\n            {{obj.Parrafo}}\r\n          </p>\r\n          <img *ngIf=\"obj.Parrafo === ''\" [src]=\"obj.Imagen\" alt=\"\">\r\n        </div>\r\n        <div *ngIf=\"porfinalizar\" class=\"action-buttons ion-padding\">\r\n          <ion-button (click)=\"savepublicacion()\" size=\"large\" class=\"parrafo-button\"\r\n          [disabled]=\"(parrafo.Parrafo === '' && parrafo.Imagen === '' || parrafo.Tipoid === 0)? true:false\">\r\n            Finalizar\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_student_stu-book_stu-book-create_stu-book-create_module_ts.js.map