"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_services_global_service_ts-src_app_student_stu-detail_stu-detail_module_ts"],{

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

/***/ 6650:
/*!*****************************************************************!*\
  !*** ./src/app/student/stu-detail/stu-detail-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuDetailPageRoutingModule": () => (/* binding */ StuDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stu_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-detail.page */ 4080);




const routes = [
    {
        path: '',
        component: _stu_detail_page__WEBPACK_IMPORTED_MODULE_0__.StuDetailPage
    }
];
let StuDetailPageRoutingModule = class StuDetailPageRoutingModule {
};
StuDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StuDetailPageRoutingModule);



/***/ }),

/***/ 3525:
/*!*********************************************************!*\
  !*** ./src/app/student/stu-detail/stu-detail.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuDetailPageModule": () => (/* binding */ StuDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stu_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-detail-routing.module */ 6650);
/* harmony import */ var _stu_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-detail.page */ 4080);







let StuDetailPageModule = class StuDetailPageModule {
};
StuDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stu_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.StuDetailPageRoutingModule
        ],
        declarations: [_stu_detail_page__WEBPACK_IMPORTED_MODULE_1__.StuDetailPage]
    })
], StuDetailPageModule);



/***/ }),

/***/ 4080:
/*!*******************************************************!*\
  !*** ./src/app/student/stu-detail/stu-detail.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuDetailPage": () => (/* binding */ StuDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stu_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-detail.page.html?ngResource */ 9788);
/* harmony import */ var _stu_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-detail.page.scss?ngResource */ 2359);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_reporte_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/reporte.service */ 7218);



/* eslint-disable @typescript-eslint/naming-convention */





let StuDetailPage = class StuDetailPage {
    constructor(router, datoService, reporteService) {
        this.router = router;
        this.datoService = datoService;
        this.reporteService = reporteService;
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
        this.isModalOpen = false;
    }
    setOpen(isOpen) {
        this.isModalOpen = isOpen;
    }
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }
    confirm() {
        this.modal.dismiss(null, 'confirm');
    }
    elegir(par) {
        this.setOpen(true);
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
        const hoy = new Date();
        const parametro = hoy.toISOString().split('T')[0];
        this.cliente = JSON.parse(localStorage.getItem('usuario'));
        this.estudiante = this.cliente;
        this.reporteService.getstatisticsindividual(this.estudiante.id, '2022-10-11', parametro).subscribe(resrepo => {
            this.reporte = resrepo;
            this.videosvistos = this.reporte[0][0].videos_vistos;
            this.audiosescuchados = this.reporte[1][0].audios_escuchados;
            this.librosleidos = this.reporte[2][0].libros_leidos;
            this.notapromedio = this.reporte[2][0].nota;
            this.progresopromedio = this.reporte[2].progreso;
        }, err => {
            console.log('Error get reporte individual');
        });
        this.reporteService.getstatisticsindividualdetail(this.estudiante.id, '2022-10-11', parametro).subscribe(resrepodetallado => {
            this.reportedetallado = resrepodetallado;
            console.log(this.reportedetallado);
        }, err => {
            console.log('Error get reporte detallado');
        });
    }
    seleccion(codigo) {
        this.datoService.rentedbook(codigo);
        this.setOpen(false);
        if (this.eleccion === 'lectura') {
            this.gobook();
        }
        else if (this.eleccion === 'video') {
            this.govideo();
        }
        else if (this.eleccion === 'audio') {
            this.goaudio();
        }
    }
    gobook() {
        this.router.navigate([
            'student',
            'stu-content',
            'stu-content-reading'
        ]);
    }
    govideo() {
        this.router.navigate([
            'student',
            'stu-content',
            'stu-content-video'
        ]);
    }
    goaudio() {
        this.router.navigate([
            'student',
            'stu-content',
            'stu-content-audio'
        ]);
    }
    goToHome() {
        this.router.navigate([
            'student',
            'stu-content',
            'stu-content-list'
        ]);
    }
};
StuDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: src_app_services_reporte_service__WEBPACK_IMPORTED_MODULE_3__.ReporteService }
];
StuDetailPage.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonModal,] }]
};
StuDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-stu-detail',
        template: _stu_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stu_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StuDetailPage);



/***/ }),

/***/ 2359:
/*!********************************************************************!*\
  !*** ./src/app/student/stu-detail/stu-detail.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".title-name {\n  text-align: center;\n  font-size: 30px;\n  padding: 10px 0;\n  color: #23A0AD;\n}\n\n.title {\n  text-align: center;\n  font-size: 30px;\n  padding: 10px 0;\n  color: #ffffff;\n}\n\n.ion-main {\n  margin: 0 10px;\n}\n\n.two-columns {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  align-items: center;\n}\n\n.card {\n  padding: 10px;\n  background-color: #ffffff;\n  color: #23A0AD;\n}\n\n.button-io {\n  border-radius: 8px;\n  background-color: #ffffff;\n  height: 50px;\n  margin: 30px 10px 0 10px;\n  font-size: 20px;\n  overflow: hidden;\n  color: #23A0AD;\n}\n\n.card-img {\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.card-container {\n  margin-bottom: 25px;\n}\n\nion-list {\n  --background: transparent;\n}\n\nion-list ion-item {\n  --background: transparent;\n}\n\nion-list ion-item ion-label {\n  text-align: center;\n}\n\nion-list ion-item ion-img {\n  margin: auto;\n}\n\nion-list ion-item .chico {\n  width: 100px;\n  height: 100px;\n}\n\nion-list ion-item .mediano {\n  width: 150px;\n  height: 150px;\n}\n\nion-list ion-item .grande {\n  width: 250px;\n  height: 250px;\n}\n\nion-list ion-item .defecto {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dS1kZXRhaWwucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2VtZXN0cmUlMjA1XFxjdXJzb3MlMjBleHRyYWN1cnJpY3VsYXJlc1xcY2FsaWRhZCUyMGVkdWNhdGl2YVxcc2lzdGVtYS1sZWN0dXJhbFxcYXBwbGVjdHVyYS1hbmd1bGFyMTQtaW9uaWM2LWNhcGFjaXRvclxcc3JjXFxhcHBcXHN0dWRlbnRcXHN0dS1kZXRhaWxcXHN0dS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEREU7RUFDRSx5QkFBQTtBQ0dKOztBREZJO0VBQ0Usa0JBQUE7QUNJTjs7QURGSTtFQUNFLFlBQUE7QUNJTjs7QURGSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDSU47O0FERkk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0lOOztBREZJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNJTjs7QURGSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDSU4iLCJmaWxlIjoic3R1LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtbmFtZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBjb2xvcjogIzIzQTBBRDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmlvbi1tYWlue1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcblxyXG4udHdvLWNvbHVtbnMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgY29sb3I6ICMyM0EwQUQ7XHJcbn1cclxuXHJcbi5idXR0b24taW8ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW46IDMwcHggMTBweCAwIDEwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY29sb3I6ICMyM0EwQUQ7XHJcbn1cclxuXHJcbi5jYXJkLWltZyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lcntcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbmlvbi1saXN0IHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBpb24taW1nIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmNoaWNvIHtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLm1lZGlhbm8ge1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAuZ3JhbmRlIHtcclxuICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgfVxyXG4gICAgLmRlZmVjdG8ge1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi50aXRsZS1uYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgY29sb3I6ICMyM0EwQUQ7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaW9uLW1haW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLnR3by1jb2x1bW5zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGNvbG9yOiAjMjNBMEFEO1xufVxuXG4uYnV0dG9uLWlvIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMzBweCAxMHB4IDAgMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogIzIzQTBBRDtcbn1cblxuLmNhcmQtaW1nIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuaW9uLWxpc3Qge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWltZyB7XG4gIG1hcmdpbjogYXV0bztcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5jaGljbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5tZWRpYW5vIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLmdyYW5kZSB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5kZWZlY3RvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 9788:
/*!********************************************************************!*\
  !*** ./src/app/student/stu-detail/stu-detail.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"ion-main\">\r\n  <ion-card class=\"card\">\r\n    <ion-card-title class=\"title-name\">\r\n      Hola, {{estudiante.Nombre + ' ' + estudiante.Apellido}}\r\n    </ion-card-title>\r\n  </ion-card>\r\n\r\n  <div class=\"avance\">\r\n    <h2 class=\"title\">Avance</h2>\r\n    <div class=\"two-columns\">\r\n      <img src=\"../../../assets/images/insignia.png\" alt=\"avance\" />\r\n      <div>\r\n        <ion-card class=\"card-container\" (click)=\"elegir('lectura')\">\r\n          <ion-card-title class=\"card\">\r\n            {{librosleidos || '0'}} libros leidos\r\n          </ion-card-title>\r\n        </ion-card>\r\n        <ion-card class=\"card-container\" (click)=\"elegir('audio')\">\r\n          <ion-card-title class=\"card\">\r\n            {{audiosescuchados || '0'}} audiolibros escuchados\r\n          </ion-card-title>\r\n        </ion-card>\r\n        <ion-card class=\"card-container\" (click)=\"elegir('video')\">\r\n          <ion-card-title class=\"card\">\r\n            {{videosvistos || '0'}} videolibros vistos\r\n          </ion-card-title>\r\n        </ion-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"logros\">\r\n    <h2 class=\"title\">\r\n      Logros\r\n    </h2>\r\n    <ion-list>\r\n      <ion-item class=\"card-img\">\r\n        <ion-img src=\"../../../assets/trofeos/copa-de-bronce.png\"\r\n        *ngIf=\"librosleidos > 2\" class=\"chico\"\r\n        alt=\"Primer Premio\"></ion-img>\r\n        <ion-img src=\"../../../assets/trofeos/copa-de-plata.png\"\r\n        *ngIf=\"librosleidos > 4\" class=\"mediano\"\r\n        alt=\"Primer Premio\"></ion-img>\r\n        <ion-img src=\"../../../assets/trofeos/copa-de-oro.png\"\r\n        *ngIf=\"librosleidos > 6\" class=\"grande\"\r\n        alt=\"Primer Premio\"></ion-img>\r\n        <ion-img src=\"../../../assets/images/img1.png\"\r\n        *ngIf=\"librosleidos < 3\"  class=\"defecto\"\r\n        alt=\"Primer Premio\"></ion-img>\r\n      </ion-item>\r\n      <ion-item class=\"card\">\r\n        <ion-label *ngIf=\"librosleidos > 2 && librosleidos < 5\">\r\n          Lector Principiante\r\n        </ion-label>\r\n        <ion-label *ngIf=\"librosleidos > 4 && librosleidos < 7\">\r\n          Lector Aventurero\r\n        </ion-label>\r\n        <ion-label *ngIf=\"librosleidos > 6\">\r\n          Devorador de Textos\r\n        </ion-label>\r\n        <ion-label *ngIf=\"librosleidos < 3\">\r\n          Sigue Leendo\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n  <!-- <div class=\"logros\">\r\n    <h2 class=\"title\">Logros</h2>\r\n    <div class=\"two-columns\">\r\n      <div class=\"card-img\">\r\n        <img\r\n          class=\"card-container\"\r\n          width=\"80\"\r\n          height=\"auto\"\r\n          src=\"../../../assets/images/img1.png\"\r\n          alt=\"avance\"\r\n        />\r\n        <img\r\n          class=\"card-container\"\r\n          width=\"80\"\r\n          height=\"auto\"\r\n          src=\"../../../assets/images/img2.png\"\r\n          alt=\"avance\"\r\n        />\r\n      </div>\r\n      <div>\r\n        <ion-card class=\"card-container\">\r\n          <ion-card-title class=\"card\">Lector de aventuras</ion-card-title>\r\n        </ion-card>\r\n        <ion-card class=\"card-container\">\r\n          <ion-card-title class=\"card\">Gatolecturas</ion-card-title>\r\n        </ion-card>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <ion-button\r\n    class=\"button button-io\"\r\n    expand=\"block\"\r\n    color=\"ion-color-tertiary-shade\"\r\n    (click)=\"goToHome()\">Empezar</ion-button>\r\n</div>\r\n\r\n<ion-modal trigger=\"open-modal\" [isOpen]=\"isModalOpen\">\r\n  <ng-template>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-button (click)=\"setOpen(false)\">\r\n            Cancelar\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-title *ngIf=\"eleccion === 'lectura'\">\r\n          Lecturas Hechas\r\n        </ion-title>\r\n        <ion-title *ngIf=\"eleccion === 'video'\">\r\n          Videos Vistos\r\n        </ion-title>\r\n        <ion-title *ngIf=\"eleccion === 'audio'\">\r\n          Audios Escuchados\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"setOpen(false)\" [strong]=\"true\">\r\n            Confirmar\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-label *ngIf=\"eleccion === 'lectura'\" class=\"hello_lbl\">\r\n        Libros Disponibles\r\n      </ion-label>\r\n      <ion-label *ngIf=\"eleccion === 'video'\" class=\"hello_lbl\">\r\n        Videos Disponibles\r\n      </ion-label>\r\n      <ion-label *ngIf=\"eleccion === 'audio'\" class=\"hello_lbl\">\r\n        Audios Disponibles\r\n      </ion-label>\r\n      <ion-grid fixed>\r\n        <h2 *ngIf=\"libros.length === 0\">\r\n          No se encontro avances todavia\r\n        </h2>\r\n        <ion-row *ngIf=\"libros.length > 0\">\r\n          <ion-col size=\"12\" *ngFor=\"let item of libros\">\r\n            <div (click)=\"seleccion(item.codigo)\" class=\"col_div\">\r\n              <img [src]=\"item.imagen\" alt=\"libro\">\r\n              <ion-label>\r\n                {{item.titulo}}\r\n              </ion-label>\r\n              <p>\r\n                {{item.autor}}\r\n              </p>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_services_global_service_ts-src_app_student_stu-detail_stu-detail_module_ts.js.map