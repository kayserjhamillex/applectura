"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth_register-teacher_register-teacher_module_ts-src_app_services_global_service_ts"],{

/***/ 5773:
/*!**************************************************************************!*\
  !*** ./src/app/auth/register-teacher/register-teacher-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterTeacherPageRoutingModule": () => (/* binding */ RegisterTeacherPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _register_teacher_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-teacher.page */ 7839);




const routes = [
    {
        path: '',
        component: _register_teacher_page__WEBPACK_IMPORTED_MODULE_0__.RegisterTeacherPage
    }
];
let RegisterTeacherPageRoutingModule = class RegisterTeacherPageRoutingModule {
};
RegisterTeacherPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterTeacherPageRoutingModule);



/***/ }),

/***/ 2727:
/*!******************************************************************!*\
  !*** ./src/app/auth/register-teacher/register-teacher.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterTeacherPageModule": () => (/* binding */ RegisterTeacherPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_teacher_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-teacher-routing.module */ 5773);
/* harmony import */ var _register_teacher_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-teacher.page */ 7839);







let RegisterTeacherPageModule = class RegisterTeacherPageModule {
};
RegisterTeacherPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_teacher_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterTeacherPageRoutingModule
        ],
        declarations: [_register_teacher_page__WEBPACK_IMPORTED_MODULE_1__.RegisterTeacherPage]
    })
], RegisterTeacherPageModule);



/***/ }),

/***/ 7839:
/*!****************************************************************!*\
  !*** ./src/app/auth/register-teacher/register-teacher.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterTeacherPage": () => (/* binding */ RegisterTeacherPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_teacher_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-teacher.page.html?ngResource */ 3284);
/* harmony import */ var _register_teacher_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-teacher.page.scss?ngResource */ 1807);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_grado_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/grado.service */ 6339);
/* harmony import */ var src_app_services_profesor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profesor.service */ 9847);



/* eslint-disable @typescript-eslint/naming-convention */




let RegisterTeacherPage = class RegisterTeacherPage {
    constructor(router, gradoService, profesorService) {
        this.router = router;
        this.gradoService = gradoService;
        this.profesorService = profesorService;
        this.grados = [];
        this.profesor = {
            id: 0,
            Nombre: '',
            Apellido: '',
            Genero: '',
            Documento: '',
            Seccion: '',
            GradoId: 0
        };
        this.profesor1 = {
            id: 0,
            Nombre: '',
            Apellido: '',
            Genero: '',
            Documento: '',
            Seccion: '',
            GradoId: 0
        };
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
    }
    logearse() {
        this.router.navigate([
            'auth',
            'login'
        ]);
    }
    getgrados() {
        this.gradoService.getGrados().subscribe(resgrados => {
            this.grados = resgrados;
        }, err => {
            console.log('Error get all grados');
        });
    }
    saveProfesor() {
        delete this.profesor.id;
        this.profesorService.saveProfesor(this.profesor).subscribe(resdocente => {
            this.profesor1 = resdocente;
            console.log(resdocente);
        }, err => {
            console.log('Error save Docente');
        });
    }
    onOptionsSelectGenero(event) {
        const value = event.target.value;
        this.profesor.Genero = value;
    }
    onOptionsSelectGrado(event) {
        const value = event.target.value;
        this.profesor.GradoId = value;
    }
    onOptionsSelectSeccion(event) {
        const value = event.target.value;
        this.profesor.Seccion = value;
    }
    ngOnInit() {
        this.getgrados();
    }
};
RegisterTeacherPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_grado_service__WEBPACK_IMPORTED_MODULE_2__.GradoService },
    { type: src_app_services_profesor_service__WEBPACK_IMPORTED_MODULE_3__.ProfesorService }
];
RegisterTeacherPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-register-teacher',
        template: _register_teacher_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_teacher_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterTeacherPage);



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

/***/ 1807:
/*!*****************************************************************************!*\
  !*** ./src/app/auth/register-teacher/register-teacher.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  min-height: 700px;\n  max-height: 1920px;\n  height: auto;\n  --background: transparent;\n}\n\n.register-section {\n  height: 100vh;\n  background: linear-gradient(to right, #08A6AC, #36BDBC);\n  width: 100%;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  position: fixed;\n  border-radius: 25px;\n  border: 3px solid white;\n  display: block;\n  margin: auto;\n  background-position: top;\n}\n\n.register-section .heading {\n  margin-left: 1px;\n  margin-top: 20px;\n}\n\n.register-section .heading h1 {\n  font-size: 3rem;\n  font-weight: bolder;\n  text-align: center;\n  color: #ffffff;\n}\n\n.register-section .register-form .form-input {\n  position: relative;\n  margin-bottom: 40px;\n  border-bottom: 1px solid white;\n  color: white;\n  margin-left: 15;\n  font-size: 4rem;\n}\n\n.register-section .action-buttons {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.register-section .action-buttons .the-button {\n  font-size: 15px;\n  margin-bottom: 20px;\n  width: 100%;\n  font-weight: bold;\n}\n\n.register-section .list {\n  font-size: 40px;\n  width: 100px;\n  background-color: transparent;\n}\n\n.register-section .selected {\n  color: white;\n  font-size: 4rem;\n  opacity: 1;\n  width: 100%;\n  padding: 5px 2px;\n  border: none;\n  background-color: transparent;\n}\n\n.register-section .grades {\n  color: white;\n  font-size: 4rem;\n  opacity: 1;\n  width: 100%;\n  padding: 5px 2px;\n  border: none;\n  background-color: transparent;\n}\n\n.register-section ion-item {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXRlYWNoZXIucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2VtZXN0cmUlMjA1XFxjdXJzb3MlMjBleHRyYWN1cnJpY3VsYXJlc1xcY2FsaWRhZCUyMGVkdWNhdGl2YVxcc2lzdGVtYS1sZWN0dXJhbFxcYXBwbGVjdHVyYS1hbmd1bGFyMTQtaW9uaWM2LWNhcGFjaXRvclxcc3JjXFxhcHBcXGF1dGhcXHJlZ2lzdGVyLXRlYWNoZXJcXHJlZ2lzdGVyLXRlYWNoZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVEQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQ0NGOztBREFFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRERJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDR047O0FERUk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNBTjs7QURJRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURJSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0ZOOztBREtFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ0hKOztBRE1FO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDSko7O0FET0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNMSjs7QURPRTtFQUNFLHlCQUFBO0FDTEoiLCJmaWxlIjoicmVnaXN0ZXItdGVhY2hlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnQge1xyXG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDE5MjBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4ucmVnaXN0ZXItc2VjdGlvbiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwOEE2QUMsICMzNkJEQkMpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgLmhlYWRpbmcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlci1mb3JtIHtcclxuICAgIC5mb3JtLWlucHV0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1O1xyXG4gICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWJ1dHRvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAudGhlLWJ1dHRvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxuICAubGlzdCB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC5zZWxlY3RlZCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHggMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAuZ3JhZGVzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweCAycHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgbWF4LWhlaWdodDogMTkyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5yZWdpc3Rlci1zZWN0aW9uIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDhBNkFDLCAjMzZCREJDKTtcbiAgd2lkdGg6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbn1cbi5yZWdpc3Rlci1zZWN0aW9uIC5oZWFkaW5nIHtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5yZWdpc3Rlci1zZWN0aW9uIC5oZWFkaW5nIGgxIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnJlZ2lzdGVyLXNlY3Rpb24gLnJlZ2lzdGVyLWZvcm0gLmZvcm0taW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMTU7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cbi5yZWdpc3Rlci1zZWN0aW9uIC5hY3Rpb24tYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWdpc3Rlci1zZWN0aW9uIC5hY3Rpb24tYnV0dG9ucyAudGhlLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnJlZ2lzdGVyLXNlY3Rpb24gLmxpc3Qge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ucmVnaXN0ZXItc2VjdGlvbiAuc2VsZWN0ZWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgb3BhY2l0eTogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ucmVnaXN0ZXItc2VjdGlvbiAuZ3JhZGVzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDRyZW07XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnJlZ2lzdGVyLXNlY3Rpb24gaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSJdfQ== */";

/***/ }),

/***/ 3284:
/*!*****************************************************************************!*\
  !*** ./src/app/auth/register-teacher/register-teacher.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\" class=\"register-section ion-padding\">\r\n  <div class=\"heading ion-padding\">\r\n    <h1>Registro de profesor</h1>\r\n  </div>\r\n  <div class=\"register-form ion-padding\">\r\n    <div class=\"form-input\">\r\n      <ion-item>\r\n        <ion-label color=\"light\" position=\"floating\">\r\n          Ingrese su nombre\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"profesor.Nombre\" name=\"Nombre\" type=\"text\" required autofocus tabindex=\"1\">\r\n        </ion-input>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"form-input\">\r\n      <ion-item>\r\n        <ion-label color=\"light\" position=\"floating\">\r\n          Ingrese sus apellidos\r\n        </ion-label>\r\n        <ion-input name=\"Apellido\" [(ngModel)]=\"profesor.Apellido\" type=\"text\" required tabindex=\"2\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"form-input\">\r\n      <ion-item>\r\n        <ion-label color=\"light\" position=\"floating\">\r\n          Ingrese su DNI\r\n        </ion-label>\r\n        <ion-input name=\"Documento\" [(ngModel)]=\"profesor.Documento\" type=\"text\" required tabindex=\"3\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n    <ion-list class=\"selected\">\r\n      <ion-item>\r\n        <ion-select (change)=\"onOptionsSelectGenero($event)\" [(ngModel)]=\"profesor.Genero\" name=\"Genero\" required\r\n          tabindex=\"4\" interface=\"popover\" placeholder=\"Seleccione su genero\">\r\n          <ion-select-option class=\"list\" [value]=\"item.name\" *ngFor=\"let item of generos\">\r\n            {{item.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-list>\r\n    <br>\r\n    <ion-list class=\"grades\">\r\n      <ion-item>\r\n        <ion-select (change)=\"onOptionsSelectGrado($event)\" [(ngModel)]=\"profesor.GradoId\" name=\"GradoId\" required\r\n          tabindex=\"5\" color=\"light\" position=\"floating\" interface=\"popover\" placeholder=\"Seleccione su grado\">\r\n          <ion-select-option class=\"list\" [value]=\"item.id\" *ngFor=\"let item of grados\">\r\n            {{item.Nombre}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-list>\r\n    <br>\r\n    <ion-list class=\"selected\">\r\n      <ion-item>\r\n        <ion-select (change)=\"onOptionsSelectSeccion($event)\" [(ngModel)]=\"profesor.Seccion\" name=\"Seccion\" required\r\n          tabindex=\"6\" interface=\"popover\" placeholder=\"Seleccione su seccion\">\r\n          <ion-select-option class=\"list\" [value]=\"item.name\" *ngFor=\"let item of secciones\">\r\n            {{item.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-list>\r\n    <br>\r\n    <div class=\"action-buttons ion-padding\">\r\n      <!-- <ion-button (click)=\"saveprofesor()\" size=\"large\" color=\"light\" class=\"the-button\"\r\n      [disabled]=\"(profesor.Nombre === '' || profesor.Apellido === '' || profesor.Documento === '' || profesor.Genero === '' || profesor.GradoId === 0)? true:false\">\r\n        Registrar\r\n      </ion-button> -->\r\n      <ion-button (click)=\"saveProfesor()\" size=\"large\" color=\"light\" class=\"the-button\"\r\n        [disabled]=\"(profesor.Nombre === '' || profesor.Apellido === '' || profesor.Documento === '' || profesor.Genero === '' || profesor.GradoId === 0)? true:false\">\r\n        Registrar Docente\r\n      </ion-button>\r\n      <ion-button (click)=\"logearse()\" size=\"large\" color=\"light\" class=\"the-button\"\r\n        [disabled]=\"(profesor.Nombre !== '' || profesor.Apellido !== '' || profesor.Documento !== '' || profesor.Genero !== '' || profesor.GradoId !== 0)? true:false\">\r\n        Regresar\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_auth_register-teacher_register-teacher_module_ts-src_app_services_global_service_ts.js.map