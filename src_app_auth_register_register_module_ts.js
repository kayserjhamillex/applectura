"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth_register_register_module_ts"],{

/***/ 2638:
/*!**********************************************************!*\
  !*** ./src/app/auth/register/register-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 1351);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 6108:
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 2638);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 1351);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 1351:
/*!************************************************!*\
  !*** ./src/app/auth/register/register.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 4089);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 9105);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_grado_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/grado.service */ 6339);
/* harmony import */ var src_app_services_relacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/relacion.service */ 6534);
/* harmony import */ var src_app_services_estudiante_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/estudiante.service */ 4378);
/* harmony import */ var src_app_services_responsable_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/responsable.service */ 936);



/* eslint-disable @typescript-eslint/naming-convention */








let RegisterPage = class RegisterPage {
    constructor(router, toast, gradoService, relacionService, estudianteService, responsableService) {
        this.router = router;
        this.toast = toast;
        this.gradoService = gradoService;
        this.relacionService = relacionService;
        this.estudianteService = estudianteService;
        this.responsableService = responsableService;
        this.grados = [];
        this.relaciones = [];
        this.secciones = [
            { name: 'A' },
            { name: 'B' },
            { name: 'C' },
            { name: 'D' },
            { name: 'E' }
        ];
        this.generos = [
            {
                name: 'Femenino'
            },
            {
                name: 'Masculino'
            },
        ];
        this.estudiante = {
            id: 0,
            Nombre: '',
            Apellido: '',
            Genero: '',
            Documento: '',
            Seccion: '',
            GradoId: 0
        };
        this.estudiante1 = {
            id: 0,
            Nombre: '',
            Apellido: '',
            Genero: '',
            Documento: '',
            Seccion: '',
            GradoId: 0
        };
        this.responsable = {
            id: 0,
            Nombre: '',
            Apellido: '',
            Genero: '',
            Documento: ''
        };
        this.responsable1 = {
            id: 0,
            Nombre: '',
            Apellido: '',
            Genero: '',
            Documento: ''
        };
        this.relacion = {
            Parentesco: '',
            ResponsableId: 0,
            EstudianteId: 0
        };
        this.relacion1 = {
            id: 0,
            Parentesco: '',
            ResponsableId: 0,
            EstudianteId: 0
        };
    }
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }
    confirm() {
        this.modal.dismiss(null, 'confirm');
    }
    onWillDismiss(event) {
        const ev = event;
        if (ev.detail.role === 'confirm') {
            console.log('Holaaaa');
        }
    }
    logearse() {
        this.router.navigate([
            'auth',
            'login'
        ]);
    }
    saveEstudiante() {
        delete this.estudiante.id;
        this.estudianteService.saveEstudiante(this.estudiante).subscribe(resestudiante => {
            this.estudiante1 = resestudiante;
            console.log(resestudiante);
        }, err => {
            console.log('Error save Estudiante');
        });
    }
    saveResponsable() {
        delete this.estudiante.id;
        this.responsableService.saveResponsable(this.responsable).subscribe(resresponsable => {
            this.responsable1 = resresponsable;
            console.log(resresponsable);
        }, err => {
            console.log('Error save responsable');
        });
    }
    saveRelacion() {
        this.relacionService.saveRelacion(this.relacion).subscribe(resrelacion => {
            this.responsable1 = resrelacion;
            console.log(resrelacion);
        }, err => {
            console.log('Error save Relacion');
        });
    }
    getgrados() {
        this.gradoService.getGrados().subscribe(resgrados => {
            this.grados = resgrados;
        }, err => {
            console.log('Error get all grados');
        });
    }
    onOptionsSelectGenero(event) {
        const value = event.target.value;
        this.estudiante.Genero = value;
    }
    onOptionsSelectGeneroResponsable(event) {
        const value = event.target.value;
        this.responsable.Genero = value;
    }
    onOptionsSelectParentesco(event) {
        const value = event.target.value;
        this.relacion.Parentesco = value;
    }
    onOptionsSelectGrado(event) {
        const value = event.target.value;
        this.estudiante.GradoId = value;
    }
    onOptionsSelectSeccion(event) {
        const value = event.target.value;
        this.estudiante.Seccion = value;
    }
    ngOnInit() {
        this.getgrados();
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: src_app_services_grado_service__WEBPACK_IMPORTED_MODULE_2__.GradoService },
    { type: src_app_services_relacion_service__WEBPACK_IMPORTED_MODULE_3__.RelacionService },
    { type: src_app_services_estudiante_service__WEBPACK_IMPORTED_MODULE_4__.EstudianteService },
    { type: src_app_services_responsable_service__WEBPACK_IMPORTED_MODULE_5__.ResponsableService }
];
RegisterPage.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonModal,] }]
};
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



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

/***/ 6534:
/*!**********************************************!*\
  !*** ./src/app/services/relacion.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelacionService": () => (/* binding */ RelacionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.service */ 7465);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);




let RelacionService = class RelacionService {
    constructor(http, wasa) {
        this.http = http;
        this.wasa = wasa;
        this.apiUrl = this.wasa.apiUrlGlobal + '/relacion';
    }
    getRelacions() {
        return this.http.get(`${this.apiUrl}`);
    }
    getRelacion(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    getsearchRelacionbypadre(padre) {
        return this.http.get(`${this.apiUrl}/search/sons/${padre}`);
    }
    getsearchRelacionbyhijo(hijo) {
        return this.http.get(`${this.apiUrl}/search/fathers/${hijo}`);
    }
    deleteRelacion(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
    // tslint:disable-next-line: no-shadowed-variable
    saveRelacion(relacion) {
        return this.http.post(`${this.apiUrl}/create`, relacion);
    }
    updateRelacion(id, updatedRelacion) {
        return this.http.put(`${this.apiUrl}/update/${id}`, updatedRelacion);
    }
};
RelacionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService }
];
RelacionService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], RelacionService);



/***/ }),

/***/ 9105:
/*!*************************************************************!*\
  !*** ./src/app/auth/register/register.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  min-height: 700px;\n  max-height: 1920px;\n  height: auto;\n  --background: transparent;\n}\n\n.register-section {\n  height: 100vh;\n  background: linear-gradient(to top, #23A0AD, #30D6CC);\n  width: 100%;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  position: fixed;\n  border-radius: 25px;\n  border: 3px solid white;\n  display: block;\n  margin: auto;\n  background-position: top;\n}\n\n.register-section .heading {\n  margin-left: 1px;\n  margin-top: 20px;\n}\n\n.register-section .heading h1 {\n  font-size: 3rem;\n  font-weight: bolder;\n  text-align: center;\n  color: white;\n}\n\n.register-section .register-form .form-input {\n  position: relative;\n  margin-bottom: 40px;\n  border-bottom: 1px solid white;\n  color: white;\n  margin-left: 15;\n  font-size: 4rem;\n}\n\n.register-section .action-buttons {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.register-section .action-buttons .the-button {\n  font-size: 15px;\n  margin-bottom: 20px;\n  width: 100%;\n  font-weight: bold;\n}\n\n.register-section .list {\n  font-size: 40px;\n  width: 100px;\n  background-color: transparent;\n}\n\n.register-section .selected {\n  color: white;\n  font-size: 4rem;\n  opacity: 1;\n  width: 100%;\n  padding: 5px 2px;\n  border: none;\n  background-color: transparent;\n}\n\n.register-section .grades {\n  color: white;\n  font-size: 4rem;\n  opacity: 1;\n  width: 100%;\n  padding: 5px 2px;\n  border: none;\n  background-color: transparent;\n}\n\n.register-section ion-item {\n  --background: transparent;\n}\n\n.c-white {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlbWVzdHJlJTIwNVxcY3Vyc29zJTIwZXh0cmFjdXJyaWN1bGFyZXNcXGNhbGlkYWQlMjBlZHVjYXRpdmFcXHNpc3RlbWEtbGVjdHVyYWxcXGFwcGxlY3R1cmEtYW5ndWxhcjE0LWlvbmljNi1jYXBhY2l0b3JcXHNyY1xcYXBwXFxhdXRoXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQ0NGOztBREFFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRERJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDR047O0FERUk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNBTjs7QURJRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURJSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0ZOOztBREtFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ0hKOztBRE1FO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDSko7O0FET0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNMSjs7QURPRTtFQUNFLHlCQUFBO0FDTEo7O0FEd0JBO0VBQ0UsWUFBQTtBQ3JCRiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnQge1xyXG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDE5MjBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4ucmVnaXN0ZXItc2VjdGlvbiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMjNBMEFELCAjMzBENkNDKTtcclxuICB3aWR0aDogMTAwJTtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gIC5oZWFkaW5nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJlZ2lzdGVyLWZvcm0ge1xyXG4gICAgLmZvcm0taW5wdXQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTU7XHJcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC50aGUtYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5saXN0IHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGVkIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweCAycHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC5ncmFkZXMge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLW1vZGVsIHtcclxuICAvLyAtLWJhY2tkcm9wLW9wYWNpdHlcdE9wYWNpdHkgb2YgdGhlIGJhY2tkcm9wXHJcbiAgLy8gLS1iYWNrZ3JvdW5kXHRCYWNrZ3JvdW5kIG9mIHRoZSBtb2RhbCBjb250ZW50XHJcbiAgLy8gLS1ib3JkZXItY29sb3JcdEJvcmRlciBjb2xvciBvZiB0aGUgbW9kYWwgY29udGVudFxyXG4gIC8vIC0tYm9yZGVyLXJhZGl1c1x0Qm9yZGVyIHJhZGl1cyBvZiB0aGUgbW9kYWwgY29udGVudFxyXG4gIC8vIC0tYm9yZGVyLXN0eWxlXHRCb3JkZXIgc3R5bGUgb2YgdGhlIG1vZGFsIGNvbnRlbnRcclxuICAvLyAtLWJvcmRlci13aWR0aFx0Qm9yZGVyIHdpZHRoIG9mIHRoZSBtb2RhbCBjb250ZW50XHJcbiAgLy8gLS1oZWlnaHRcdEhlaWdodCBvZiB0aGUgbW9kYWxcclxuICAvLyAtLW1heC1oZWlnaHRcdE1heGltdW0gaGVpZ2h0IG9mIHRoZSBtb2RhbFxyXG4gIC8vIC0tbWF4LXdpZHRoXHRNYXhpbXVtIHdpZHRoIG9mIHRoZSBtb2RhbFxyXG4gIC8vIC0tbWluLWhlaWdodFx0TWluaW11bSBoZWlnaHQgb2YgdGhlIG1vZGFsXHJcbiAgLy8gLS1taW4td2lkdGhcdE1pbmltdW0gd2lkdGggb2YgdGhlIG1vZGFsXHJcbiAgLy8gLS13aWR0aFx0V2lkdGggb2YgdGhlIG1vZGFsXHJcbn1cclxuXHJcbi5jLXdoaXRlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xuICBtYXgtaGVpZ2h0OiAxOTIwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnJlZ2lzdGVyLXNlY3Rpb24ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMjNBMEFELCAjMzBENkNDKTtcbiAgd2lkdGg6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbn1cbi5yZWdpc3Rlci1zZWN0aW9uIC5oZWFkaW5nIHtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5yZWdpc3Rlci1zZWN0aW9uIC5oZWFkaW5nIGgxIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5yZWdpc3Rlci1zZWN0aW9uIC5yZWdpc3Rlci1mb3JtIC5mb3JtLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDE1O1xuICBmb250LXNpemU6IDRyZW07XG59XG4ucmVnaXN0ZXItc2VjdGlvbiAuYWN0aW9uLWJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmVnaXN0ZXItc2VjdGlvbiAuYWN0aW9uLWJ1dHRvbnMgLnRoZS1idXR0b24ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5yZWdpc3Rlci1zZWN0aW9uIC5saXN0IHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnJlZ2lzdGVyLXNlY3Rpb24gLnNlbGVjdGVkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDRyZW07XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnJlZ2lzdGVyLXNlY3Rpb24gLmdyYWRlcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDJweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5yZWdpc3Rlci1zZWN0aW9uIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmMtd2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";

/***/ }),

/***/ 4089:
/*!*************************************************************!*\
  !*** ./src/app/auth/register/register.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\" class=\"register-section ion-padding\">\r\n  <div class=\"heading ion-padding\">\r\n    <h1>Registro de estudiante</h1>\r\n  </div>\r\n  <div class=\"register-form ion-padding\">\r\n    <div class=\"form-input\">\r\n      <ion-item>\r\n        <ion-label color=\"light\" position=\"floating\">\r\n          Ingrese su nombre\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"estudiante.Nombre\" name=\"Nombre\" type=\"text\" required autofocus tabindex=\"1\">\r\n        </ion-input>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"form-input\">\r\n      <ion-item>\r\n        <ion-label color=\"light\" position=\"floating\">\r\n          Ingrese sus apellidos\r\n        </ion-label>\r\n        <ion-input name=\"Apellido\" [(ngModel)]=\"estudiante.Apellido\" type=\"text\" required tabindex=\"2\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"form-input\">\r\n      <ion-item>\r\n        <ion-label color=\"light\" position=\"floating\">\r\n          Ingrese su DNI\r\n        </ion-label>\r\n        <ion-input name=\"Documento\" [(ngModel)]=\"estudiante.Documento\" type=\"text\" required tabindex=\"3\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n    <ion-list class=\"selected\">\r\n      <ion-item>\r\n        <ion-select (change)=\"onOptionsSelectGenero($event)\" [(ngModel)]=\"estudiante.Genero\" name=\"Genero\" required\r\n          tabindex=\"4\" interface=\"popover\" placeholder=\"Seleccione su genero\">\r\n          <ion-select-option class=\"list\" [value]=\"item.name\" *ngFor=\"let item of generos\">\r\n            {{item.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-list>\r\n    <br>\r\n    <ion-list class=\"grades\">\r\n      <ion-item>\r\n        <ion-select (change)=\"onOptionsSelectGrado($event)\" [(ngModel)]=\"estudiante.GradoId\" name=\"GradoId\" required\r\n          tabindex=\"5\" color=\"light\" position=\"floating\" interface=\"popover\" placeholder=\"Seleccione su grado\">\r\n          <ion-select-option class=\"list\" [value]=\"item.id\" *ngFor=\"let item of grados\">\r\n            {{item.Nombre}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-list>\r\n    <br>\r\n    <ion-list class=\"selected\">\r\n      <ion-item>\r\n        <ion-select (change)=\"onOptionsSelectSeccion($event)\" [(ngModel)]=\"estudiante.Seccion\" name=\"Seccion\" required\r\n          tabindex=\"6\" interface=\"popover\" placeholder=\"Seleccione su seccion\">\r\n          <ion-select-option class=\"list\" [value]=\"item.name\" *ngFor=\"let item of secciones\">\r\n            {{item.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-list>\r\n    <br>\r\n    <div class=\"action-buttons ion-padding\">\r\n      <ion-button size=\"large\" color=\"light\" class=\"the-button\" (click)=\"saveEstudiante()\"\r\n        [disabled]=\"(estudiante.Nombre === '' || estudiante.Apellido === '' || estudiante.Documento === '' || estudiante.Genero === '' || estudiante.GradoId === 0)? true:false\">\r\n        Registrar\r\n      </ion-button>\r\n      <!-- <ion-button  id=\"open-modal\" expand=\"block\" size=\"large\" color=\"dark\" class=\"the-button\"\r\n      [disabled]=\"(estudiante.Nombre === '' || estudiante.Apellido === '' || estudiante.Documento === '' || estudiante.Genero === '' )? true:false\">\r\n        Agregar Responsable\r\n      </ion-button> -->\r\n      <ion-button (click)=\"logearse()\" size=\"large\" color=\"light\" class=\"the-button\"\r\n        [disabled]=\"(estudiante.Nombre !== '' || estudiante.Apellido !== '' || estudiante.Documento !== '' || estudiante.Genero !== '' || estudiante.GradoId !== 0)? true:false\">\r\n        Regresar\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- zono del modal -->\r\n  <!-- <ion-modal trigger=\"open-modal\" (willDismiss)=\"onWillDismiss($event)\">\r\n    <ng-template>\r\n      <div class=\"register-form ion-padding\">\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label color=\"dark\" position=\"floating\">\r\n              Ingrese su nombre\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"responsable.Nombre\" name=\"Nombre\" type=\"text\" required autofocus tabindex=\"1\">\r\n            </ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label color=\"dark\" position=\"floating\">\r\n              Ingrese sus apellidos\r\n            </ion-label>\r\n            <ion-input name=\"Apellido\" [(ngModel)]=\"responsable.Apellido\" type=\"text\" required tabindex=\"2\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-input\">\r\n          <ion-item>\r\n            <ion-label color=\"dark\" position=\"floating\">\r\n              Ingrese su DNI\r\n            </ion-label>\r\n            <ion-input name=\"Documento\" [(ngModel)]=\"responsable.Documento\" type=\"text\" required tabindex=\"3\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <ion-list class=\"selected\">\r\n          <ion-item>\r\n            <ion-select (change)=\"onOptionsSelectGeneroResponsable($event)\" class=\"c-white\" [(ngModel)]=\"responsable.Genero\" name=\"Genero\" required\r\n              tabindex=\"4\" interface=\"popover\" placeholder=\"Seleccione su genero\">\r\n              <ion-select-option class=\"list\" [value]=\"item.name\" *ngFor=\"let item of generos\">\r\n                {{item.name}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-list>\r\n        <br>\r\n        <ion-list class=\"grades\">\r\n          <ion-item>\r\n            <ion-select (change)=\"onOptionsSelectParentesco($event)\" class=\"c-white\" [(ngModel)]=\"relacion.Parentesco\" name=\"Parentesco\" required\r\n              tabindex=\"5\" color=\"dark\" position=\"floating\" interface=\"popover\" placeholder=\"Seleccione su grado\">\r\n              <ion-select-option class=\"list\" [value]=\"item.id\" *ngFor=\"let item of grados\">\r\n                {{item.Nombre}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-list>\r\n        <br>\r\n        <div class=\"action-buttons ion-padding\">\r\n          <ion-button (click)=\"confirm()\" id=\"open-modal\" expand=\"block\" size=\"large\" color=\"dark\" class=\"the-button\">\r\n            Registrar\r\n          </ion-button>\r\n          <ion-button (click)=\"cancel()\" id=\"open-modal\" expand=\"block\" size=\"large\" color=\"dark\" class=\"the-button\">\r\n            Cancelar\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </ion-modal> -->\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_auth_register_register_module_ts.js.map