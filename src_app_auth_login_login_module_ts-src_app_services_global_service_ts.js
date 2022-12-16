"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth_login_login_module_ts-src_app_services_global_service_ts"],{

/***/ 4272:
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 1506);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 8990:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 4272);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 1506);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 1506:
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 5286);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 9633);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_profesor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profesor.service */ 9847);
/* harmony import */ var src_app_services_estudiante_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/estudiante.service */ 4378);
/* harmony import */ var src_app_services_responsable_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/responsable.service */ 936);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);



/* eslint-disable @typescript-eslint/naming-convention */







let LoginPage = class LoginPage {
    constructor(router, toast, profesorService, estudianteService, responsableService, authenticationService) {
        this.router = router;
        this.toast = toast;
        this.profesorService = profesorService;
        this.estudianteService = estudianteService;
        this.responsableService = responsableService;
        this.authenticationService = authenticationService;
        this.estudiante = {
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
        this.profesor = {
            id: 0,
            Nombre: '',
            Apellido: '',
            Genero: '',
            Documento: '',
            Seccion: '',
            GradoId: 0
        };
        this.tipos = [
            {
                name: 'estudiante'
            },
            {
                name: 'profesor'
            },
            // {
            //   name: 'responsable'
            // }
        ];
        this.eleccion = 'estudiante';
    }
    onOptionsSelectTipo(event) {
        const value = event.target.value;
        this.eleccion = value;
    }
    toastloginsucceed() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Bienvenido',
                duration: 1000,
                animated: true,
                color: 'success',
                position: 'top'
            });
            toast.present();
        });
    }
    toastloginerror() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Por favor Crear sus credenciales',
                duration: 1000,
                animated: true,
                color: 'warning',
                position: 'top'
            });
            toast.present();
        });
    }
    registrarsedoc() {
        this.router.navigate([
            'auth',
            'register-teacher'
        ]);
    }
    registrarse() {
        this.router.navigate([
            'auth',
            'register'
        ]);
    }
    login() {
        this.authenticationService.loggout();
        console.log(this.parametro);
        if (this.eleccion === 'estudiante') {
            this.loginestudiante();
        }
        else if (this.eleccion === 'profesor') {
            this.loginprofesor();
        }
        else if (this.eleccion === 'responsable') {
            this.loginresponsable();
        }
    }
    loginestudiante() {
        this.estudianteService.getsearchEstudiantebydoc(this.parametro).subscribe(reslogin => {
            if (reslogin !== null) {
                this.estudiante = reslogin;
                console.log(this.estudiante);
                console.log(this.eleccion);
                this.authenticationService.loggin(this.estudiante, this.eleccion);
                this.toastloginsucceed();
                this.router.navigate([
                    'student'
                ]);
            }
            else {
                this.toastloginerror();
                console.log('Documento no encontrado, Por favor registrece como estudiante');
            }
        }, err => {
            console.log('Error login estudiante');
        });
    }
    loginresponsable() {
        this.responsableService.getsearchResponsablebydoc(this.parametro).subscribe(reslogin => {
            if (reslogin !== null) {
                this.responsable = reslogin;
                this.authenticationService.loggin(this.responsable, this.eleccion.toLowerCase());
                this.toastloginsucceed();
                this.router.navigate([
                    'family'
                ]);
            }
            else {
                this.toastloginerror();
                console.log('Documento no encontrado, Por favor registrece como responsable');
            }
        }, err => {
            console.log('Error login responsable');
        });
    }
    loginprofesor() {
        this.profesorService.getsearchProfesorbydoc(this.parametro).subscribe(reslogin => {
            if (reslogin !== null) {
                this.profesor = reslogin;
                this.authenticationService.loggin(this.profesor, this.eleccion.toLowerCase());
                this.toastloginsucceed();
                this.router.navigate([
                    'teacher'
                ]);
            }
            else {
                this.toastloginerror();
                console.log('Documento no encontrado, Por favor registrece dentro de la aplicacion de su hijo');
            }
        }, err => {
            console.log('Error login profesor');
        });
    }
    ngOnInit() {
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: src_app_services_profesor_service__WEBPACK_IMPORTED_MODULE_2__.ProfesorService },
    { type: src_app_services_estudiante_service__WEBPACK_IMPORTED_MODULE_3__.EstudianteService },
    { type: src_app_services_responsable_service__WEBPACK_IMPORTED_MODULE_4__.ResponsableService },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



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

/***/ 9633:
/*!*******************************************************!*\
  !*** ./src/app/auth/login/login.page.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".button-io {\n  margin: 50px 20px;\n  background-color: #c74f4f;\n}\n\nion-content {\n  min-height: 700px;\n  max-height: 1920px;\n  height: auto;\n  --background: transparent;\n}\n\n.login-section {\n  background: linear-gradient(to top, #23A0AD, #30D6CC);\n  border-radius: 25px;\n  height: 100vh;\n  width: 100%;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  position: fixed;\n  border-radius: 25px;\n  border: 3px solid white;\n  display: block;\n  margin: auto;\n  background-position: top;\n}\n\n.login-section .heading {\n  margin-top: 20px;\n}\n\n.login-section .heading h1 {\n  text-align: center;\n  font-weight: bolder;\n  color: #ffffff;\n}\n\n.login-section .imagen {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.login-section .login-form .form-input {\n  position: relative;\n  margin-bottom: 20px;\n  border-bottom: 1px solid white;\n  color: white !important;\n}\n\n.login-section .action-buttons {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.login-section .action-buttons .login-button {\n  width: 100%;\n  font-weight: bold;\n}\n\n.login-section .action-buttons .signup-button {\n  font-weight: bold;\n  width: 100%;\n}\n\n.login-section ion-item {\n  --background: transparent;\n}\n\n.c-white {\n  color: white;\n}\n\n.color-input {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlbWVzdHJlJTIwNVxcY3Vyc29zJTIwZXh0cmFjdXJyaWN1bGFyZXNcXGNhbGlkYWQlMjBlZHVjYXRpdmFcXHNpc3RlbWEtbGVjdHVyYWxcXGFwcGxlY3R1cmEtYW5ndWxhcjE0LWlvbmljNi1jYXBhY2l0b3JcXHNyY1xcYXBwXFxhdXRoXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0VGOztBREFBO0VBQ0UscURBQUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDR0o7O0FERkk7RUFDRSxnQkFBQTtBQ0lOOztBREhNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNLUjs7QURGSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSU47O0FERE07RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQ0dSOztBRENJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NOOztBREFNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDRVI7O0FEQU07RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNFUjs7QURDSTtFQUNFLHlCQUFBO0FDQ047O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1pbyB7XHJcbiAgbWFyZ2luOiA1MHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3NGY0ZjtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogNzAwcHg7XHJcbiAgbWF4LWhlaWdodDogMTkyMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5sb2dpbi1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMjNBMEFELCAjMzBENkNDKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgaDEge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW1hZ2VuIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubG9naW4tZm9ybSB7XHJcbiAgICAgIC5mb3JtLWlucHV0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9uLWJ1dHRvbnMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC5sb2dpbi1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgIC5zaWdudXAtYnV0dG9uIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi5jLXdoaXRlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb2xvci1pbnB1dHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufSIsIi5idXR0b24taW8ge1xuICBtYXJnaW46IDUwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3NGY0Zjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgbWF4LWhlaWdodDogMTkyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5sb2dpbi1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzIzQTBBRCwgIzMwRDZDQyk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG59XG4ubG9naW4tc2VjdGlvbiAuaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubG9naW4tc2VjdGlvbiAuaGVhZGluZyBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ubG9naW4tc2VjdGlvbiAuaW1hZ2VuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubG9naW4tc2VjdGlvbiAubG9naW4tZm9ybSAuZm9ybS1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5sb2dpbi1zZWN0aW9uIC5hY3Rpb24tYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbi1zZWN0aW9uIC5hY3Rpb24tYnV0dG9ucyAubG9naW4tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxvZ2luLXNlY3Rpb24gLmFjdGlvbi1idXR0b25zIC5zaWdudXAtYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmxvZ2luLXNlY3Rpb24gaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uYy13aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbG9yLWlucHV0IHtcbiAgY29sb3I6ICNmZmZmZmY7XG59Il19 */";

/***/ }),

/***/ 5286:
/*!*******************************************************!*\
  !*** ./src/app/auth/login/login.page.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<ion-content\r\n[fullscreen]=\"true\"\r\nclass=\"login-section ion-padding\">\r\n  <div class=\"heading ion-padding\">\r\n    <h1>\r\n      ¡Bienvenido!\r\n    </h1>\r\n  </div>\r\n  <div class=\"imagen\">\r\n    <img\r\n    height=\"200\"\r\n    src=\"../../../assets/images/1.png\" />\r\n  </div>\r\n  <div class=\"login-form ion-padding\">\r\n    <div class=\"form-input\">\r\n      <ion-item>\r\n        <ion-select (change)=\"onOptionsSelectTipo($event)\" class=\"c-white\" [(ngModel)]=\"eleccion\" name=\"eleccion\" required\r\n          tabindex=\"4\" interface=\"popover\" placeholder=\"Seleccione su rol\">\r\n          <ion-select-option class=\"list\" [value]=\"item.name\" *ngFor=\"let item of tipos\">\r\n            {{item.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"form-input\">\r\n      <ion-item>\r\n        <ion-label\r\n          color=\"light\"\r\n          position=\"floating\">\r\n          Ingrese su DNI\r\n      </ion-label>\r\n        <ion-input\r\n          name=\"parametro\"\r\n          [(ngModel)]=\"parametro\"\r\n          required autofocus\r\n          tabindex=\"1\" type=\"text\"\r\n          class=\"color-input\"\r\n          minlength=\"8\"\r\n          maxlength=\"11\"\r\n          onKeypress=\"if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"action-buttons ion-padding\">\r\n      <ion-button\r\n        (click)=\"login()\"\r\n        size=\"large\" color=\"light\"\r\n        class=\"login-button\"\r\n        [disabled]=\"(parametro === undefined)? true:false\">\r\n        Ingresar\r\n      </ion-button>\r\n      <ion-button *ngIf=\"this.eleccion !== 'profesor'\"\r\n        (click)=\"registrarse()\"\r\n        color=\"light\" size=\"large\"\r\n        class=\"signup-button\"\r\n        [disabled]=\"(parametro !== undefined)? true:false\">\r\n        Registrarse\r\n      </ion-button>\r\n      <ion-button *ngIf=\"this.eleccion === 'profesor'\"\r\n        (click)=\"registrarsedoc()\"\r\n        color=\"light\" size=\"large\"\r\n        slot=\"start\"\r\n        class=\"signup-button ion-text-wrap\"\r\n        [disabled]=\"(parametro !== undefined)? true:false\">\r\n        Registrarse Como Docente\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_auth_login_login_module_ts-src_app_services_global_service_ts.js.map