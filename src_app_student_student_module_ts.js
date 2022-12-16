"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_student_student_module_ts"],{

/***/ 7852:
/*!***************************************************!*\
  !*** ./src/app/student/student-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentPageRoutingModule": () => (/* binding */ StudentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _student_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student.page */ 9644);




const routes = [
    {
        path: '',
        component: _student_page__WEBPACK_IMPORTED_MODULE_0__.StudentPage,
        children: [
            {
                path: 'stu-home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_student_stu-home_stu-home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./stu-home/stu-home.module */ 513)).then(m => m.StuHomePageModule)
            },
            {
                path: 'stu-profile',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_student_stu-profile_stu-profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./stu-profile/stu-profile.module */ 5025)).then(m => m.StuProfilePageModule)
            },
            {
                path: 'stu-content',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_student_stu-content_stu-content_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./stu-content/stu-content.module */ 1886)).then(m => m.StuContentPageModule)
            },
            {
                path: 'stu-book',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_student_stu-book_stu-book_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./stu-book/stu-book.module */ 9061)).then(m => m.StuBookPageModule)
            },
            {
                path: 'stu-detail',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_services_global_service_ts-src_app_student_stu-detail_stu-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./stu-detail/stu-detail.module */ 3525)).then(m => m.StuDetailPageModule)
            },
            {
                path: '',
                redirectTo: 'stu-home',
                pathMatch: 'prefix'
            }
        ]
    },
];
let StudentPageRoutingModule = class StudentPageRoutingModule {
};
StudentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StudentPageRoutingModule);



/***/ }),

/***/ 7859:
/*!*******************************************!*\
  !*** ./src/app/student/student.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentPageModule": () => (/* binding */ StudentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _student_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-routing.module */ 7852);
/* harmony import */ var _student_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student.page */ 9644);







let StudentPageModule = class StudentPageModule {
};
StudentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _student_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentPageRoutingModule
        ],
        declarations: [_student_page__WEBPACK_IMPORTED_MODULE_1__.StudentPage]
    })
], StudentPageModule);



/***/ }),

/***/ 9644:
/*!*****************************************!*\
  !*** ./src/app/student/student.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentPage": () => (/* binding */ StudentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _student_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student.page.html?ngResource */ 103);
/* harmony import */ var _student_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student.page.scss?ngResource */ 852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ 7053);



/* eslint-disable @typescript-eslint/naming-convention */



let StudentPage = class StudentPage {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
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
        this.genero = false;
        this.studentPages = [
            { title: 'Inicio', url: '/student/stu-home', icon: 'home' },
            { title: 'Lectura de libros', url: '/student/stu-content', icon: 'library' },
            // { title: 'Agregar Libro o Cuento', url: '/student/stu-book', icon: 'library' },
            { title: 'Perfil', url: '/student/stu-detail', icon: 'person' },
            { title: 'Configuracion', url: '/student/stu-profile/stu-profile-edit', icon: 'settings' }
        ];
    }
    ngOnInit() {
        this.cliente = JSON.parse(localStorage.getItem('usuario'));
        this.clientetipo = JSON.parse(localStorage.getItem('tipoclient'));
        this.estudiante = this.cliente;
        if (this.estudiante.Genero === 'Femenino') {
            this.genero = true;
        }
        else {
            this.genero = false;
        }
        if (this.clientetipo === 'estudiante') {
            console.log('el usuario es estudiante');
        }
        else if (this.clientetipo === 'profesor') {
            console.log('el usuario no es estudiante, es profesor; redirigiendolo');
            this.router.navigate([
                'teacher'
            ]);
        }
        else if (this.clientetipo === 'responsable') {
            console.log('el usuario no es estudiante, es responsable; redirigiendolo');
            this.router.navigate([
                'family',
            ]);
        }
    }
    logout() {
        this.authenticationService.loggout();
        this.router.navigate([
            'auth',
            'login'
        ]);
    }
    readbook() {
    }
    viewprofile() {
    }
    addbook() {
    }
};
StudentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService }
];
StudentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-student',
        template: _student_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_student_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StudentPage);



/***/ }),

/***/ 852:
/*!******************************************************!*\
  !*** ./src/app/student/student.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-menu::part(backdrop) {\n  background-color: #36BDBC;\n}\n\nion-menu::part(container) {\n  border-radius: 0 20px 20px 0;\n  box-shadow: 4px 0px 16px rgba(33, 2, 33, 0.18);\n}\n\n.fondosidebar, .fondocontenido {\n  --background: linear-gradient(to top, #23A0AD, #30D6CC);\n  border-radius: 25px;\n}\n\n.user_main_div {\n  padding-top: 50px;\n}\n\n.user_main_div .user_div {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  border: 3px solid white;\n  display: block;\n  margin: auto;\n  background-position: top;\n}\n\n.user_main_div .username {\n  display: block;\n  margin-top: 20px;\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n  color: white;\n}\n\n.user_main_div .bg_image {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.user_main_div .image_male {\n  background: url('studentboy.png') content-box no-repeat;\n  background-size: cover;\n}\n\n.user_main_div .image_female {\n  background: url('student.png') content-box no-repeat;\n  background-size: cover;\n}\n\n#inbox-list {\n  background: transparent;\n}\n\n#inbox-list ion-item {\n  --background: transparent;\n}\n\n#inbox-list ion-item ion-icon, #inbox-list ion-item ion-label {\n  color: white;\n}\n\n.ion-page-global {\n  --background: linear-gradient(to top, #23A0AD, #30D6CC);\n  border-radius: 25px;\n}\n\n.ion-page-global .main_content_div {\n  width: 100%;\n}\n\n.ion-page-global .main_content_div .menu_btn {\n  position: relative;\n  top: 40px;\n  left: 10px;\n}\n\n.ion-page-global .main_content_div_child {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzZW1lc3RyZSUyMDVcXGN1cnNvcyUyMGV4dHJhY3VycmljdWxhcmVzXFxjYWxpZGFkJTIwZWR1Y2F0aXZhXFxzaXN0ZW1hLWxlY3R1cmFsXFxhcHBsZWN0dXJhLWFuZ3VsYXIxNC1pb25pYzYtY2FwYWNpdG9yXFxzcmNcXGFwcFxcc3R1ZGVudFxcc3R1ZGVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsNEJBQUE7RUFDQSw4Q0FBQTtBQ0VGOztBREFBO0VBQ0UsdURBQUE7RUFDQSxtQkFBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7QUNJRjs7QURIRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUNLSjs7QURIRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0tKOztBREhFO0VBQ0UsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDS0o7O0FESEU7RUFDRSx1REFBQTtFQUNBLHNCQUFBO0FDS0o7O0FESEU7RUFDRSxvREFBQTtFQUNBLHNCQUFBO0FDS0o7O0FEREE7RUFDRSx1QkFBQTtBQ0lGOztBREhFO0VBQ0UseUJBQUE7QUNLSjs7QURKSTtFQUNFLFlBQUE7QUNNTjs7QUREQTtFQUNFLHVEQUFBO0VBQ0EsbUJBQUE7QUNJRjs7QURIRTtFQUNFLFdBQUE7QUNLSjs7QURKSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNNTjs7QURIRTtFQUNFLFdBQUE7QUNLSiIsImZpbGUiOiJzdHVkZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51OjpwYXJ0KGJhY2tkcm9wKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2QkRCQztcclxufVxyXG5pb24tbWVudTo6cGFydChjb250YWluZXIpIHtcclxuICBib3JkZXItcmFkaXVzOiAwIDIwcHggMjBweCAwO1xyXG4gIGJveC1zaGFkb3c6IDRweCAwcHggMTZweCByZ2JhKDMzLCAyLCAzMywgMC4xOCk7XHJcbn1cclxuLmZvbmRvc2lkZWJhciwgLmZvbmRvY29udGVuaWRvIHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMyM0EwQUQsICMzMEQ2Q0MpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuLnVzZXJfbWFpbl9kaXYge1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIC51c2VyX2RpdiB7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gIH1cclxuICAudXNlcm5hbWUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5iZ19pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgLmltYWdlX21hbGUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ub3Mvc3R1ZGVudGJveS5wbmcpIGNvbnRlbnQtYm94IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIC5pbWFnZV9mZW1hbGUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ub3Mvc3R1ZGVudC5wbmcpIGNvbnRlbnQtYm94IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4jaW5ib3gtbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGlvbi1pY29uLCBpb24tbGFiZWwge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW9uLXBhZ2UtZ2xvYmFsIHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMyM0EwQUQsICMzMEQ2Q0MpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgLm1haW5fY29udGVudF9kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAubWVudV9idG4ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogNDBweDtcclxuICAgICAgbGVmdDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1haW5fY29udGVudF9kaXZfY2hpbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsImlvbi1tZW51OjpwYXJ0KGJhY2tkcm9wKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNkJEQkM7XG59XG5cbmlvbi1tZW51OjpwYXJ0KGNvbnRhaW5lcikge1xuICBib3JkZXItcmFkaXVzOiAwIDIwcHggMjBweCAwO1xuICBib3gtc2hhZG93OiA0cHggMHB4IDE2cHggcmdiYSgzMywgMiwgMzMsIDAuMTgpO1xufVxuXG4uZm9uZG9zaWRlYmFyLCAuZm9uZG9jb250ZW5pZG8ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMyM0EwQUQsICMzMEQ2Q0MpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4udXNlcl9tYWluX2RpdiB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuLnVzZXJfbWFpbl9kaXYgLnVzZXJfZGl2IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG59XG4udXNlcl9tYWluX2RpdiAudXNlcm5hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4udXNlcl9tYWluX2RpdiAuYmdfaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4udXNlcl9tYWluX2RpdiAuaW1hZ2VfbWFsZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbm9zL3N0dWRlbnRib3kucG5nKSBjb250ZW50LWJveCBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4udXNlcl9tYWluX2RpdiAuaW1hZ2VfZmVtYWxlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ub3Mvc3R1ZGVudC5wbmcpIGNvbnRlbnQtYm94IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2luYm94LWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiNpbmJveC1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiNpbmJveC1saXN0IGlvbi1pdGVtIGlvbi1pY29uLCAjaW5ib3gtbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pb24tcGFnZS1nbG9iYWwge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMyM0EwQUQsICMzMEQ2Q0MpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmlvbi1wYWdlLWdsb2JhbCAubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmlvbi1wYWdlLWdsb2JhbCAubWFpbl9jb250ZW50X2RpdiAubWVudV9idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogMTBweDtcbn1cbi5pb24tcGFnZS1nbG9iYWwgLm1haW5fY29udGVudF9kaXZfY2hpbGQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";

/***/ }),

/***/ 103:
/*!******************************************************!*\
  !*** ./src/app/student/student.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-menu type=\"overlay\" contentId=\"main-content\">\r\n  <ion-content class=\"fondosidebar ion-padding\">\r\n    <div *ngIf=\"!genero\" class=\"user_main_div\">\r\n      <div class=\"user_div bg_image image_male\">\r\n      </div>\r\n      <div class=\"username\">\r\n        {{estudiante.Nombre + ' ' + estudiante.Apellido}}\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"genero\" class=\"user_main_div\">\r\n      <div class=\"user_div bg_image image_female\">\r\n      </div>\r\n      <div class=\"username\">\r\n        {{estudiante.Nombre + ' ' + estudiante.Apellido}}\r\n      </div>\r\n    </div>\r\n    <ion-list id=\"inbox-list\">\r\n      <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let item of studentPages; let i = index\">\r\n        <ion-item routerDirection=\"root\" [routerLink]=\"[item.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\r\n          <ion-icon slot=\"start\" [ios]=\"item.icon + '-outline'\" [md]=\"item.icon + '-sharp'\"></ion-icon>\r\n          <ion-label>\r\n            {{item.title}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n      <br>\r\n      <br>\r\n      <ion-item (click)=\"logout()\" routerDirection=\"root\" lines=\"none\" detail=\"false\">\r\n        <ion-icon slot=\"start\" [ios]=\"'log-out' + '-outline'\" [md]=\"'log-out' + '-sharp'\"></ion-icon>\r\n        <ion-label>\r\n          Salir\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-content class=\"fondocontenido\" id=\"main-content\">\r\n  <div class=\"ion-page-global\">\r\n    <div class=\"main_content_div\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button color=\"primary\"></ion-menu-button>\r\n      </ion-buttons>\r\n    </div>\r\n    <div class=\"main_content_div_child\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_student_student_module_ts.js.map