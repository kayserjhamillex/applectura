"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_teacher_teacher_module_ts"],{

/***/ 9927:
/*!***************************************************!*\
  !*** ./src/app/teacher/teacher-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherPageRoutingModule": () => (/* binding */ TeacherPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _teacher_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teacher.page */ 3540);




const routes = [
    {
        path: '',
        component: _teacher_page__WEBPACK_IMPORTED_MODULE_0__.TeacherPage,
        children: [
            {
                path: 'tea-home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_teacher_tea-home_tea-home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tea-home/tea-home.module */ 2260)).then(m => m.TeaHomePageModule)
            },
            {
                path: 'tea-book',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_teacher_tea-book_tea-book_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tea-book/tea-book.module */ 6988)).then(m => m.TeaBookPageModule)
            },
            {
                path: 'tea-statistics',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_teacher_tea-statistics_tea-statistics_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tea-statistics/tea-statistics.module */ 1669)).then(m => m.TeaStatisticsPageModule)
            },
            {
                path: '',
                redirectTo: 'tea-home',
                pathMatch: 'prefix'
            }
        ]
    },
];
let TeacherPageRoutingModule = class TeacherPageRoutingModule {
};
TeacherPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TeacherPageRoutingModule);



/***/ }),

/***/ 3042:
/*!*******************************************!*\
  !*** ./src/app/teacher/teacher.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherPageModule": () => (/* binding */ TeacherPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _teacher_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teacher-routing.module */ 9927);
/* harmony import */ var _teacher_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher.page */ 3540);







let TeacherPageModule = class TeacherPageModule {
};
TeacherPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _teacher_routing_module__WEBPACK_IMPORTED_MODULE_0__.TeacherPageRoutingModule
        ],
        declarations: [_teacher_page__WEBPACK_IMPORTED_MODULE_1__.TeacherPage]
    })
], TeacherPageModule);



/***/ }),

/***/ 3540:
/*!*****************************************!*\
  !*** ./src/app/teacher/teacher.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherPage": () => (/* binding */ TeacherPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _teacher_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teacher.page.html?ngResource */ 2229);
/* harmony import */ var _teacher_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher.page.scss?ngResource */ 8512);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ 7053);



/* eslint-disable @typescript-eslint/naming-convention */



let TeacherPage = class TeacherPage {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
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
        this.genero = false;
        this.teacherPages = [
            { title: 'Inicio', url: '/teacher/tea-home', icon: 'home' },
            { title: 'Agregar Libro o Cuento', url: '/teacher/tea-book', icon: 'library' },
            { title: 'Estadisticas', url: '/teacher/tea-statistics', icon: 'person' }
        ];
    }
    ngOnInit() {
        console.log(localStorage.getItem('usuario'));
        console.log(JSON.parse(localStorage.getItem('usuario')));
        this.cliente = JSON.parse(localStorage.getItem('usuario'));
        this.clientetipo = JSON.parse(localStorage.getItem('tipoclient'));
        this.profesor = this.cliente;
        console.log(this.cliente);
        console.log(this.clientetipo);
        if (this.profesor.Genero === 'Femenino') {
            this.genero = true;
        }
        else {
            this.genero = false;
        }
        if (this.clientetipo === 'estudiante') {
            console.log('el usuario no es profesor, es estudiante; redirigiendolo');
            this.router.navigate([
                'student'
            ]);
        }
        else if (this.clientetipo === 'profesor') {
            console.log('el usuario es profesor');
        }
        else if (this.clientetipo === 'responsable') {
            console.log('el usuario no es profesor, es responsable; redirigiendolo');
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
};
TeacherPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService }
];
TeacherPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-teacher',
        template: _teacher_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_teacher_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TeacherPage);



/***/ }),

/***/ 8512:
/*!******************************************************!*\
  !*** ./src/app/teacher/teacher.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-menu::part(backdrop) {\n  background-color: #36BDBC;\n}\n\nion-menu::part(container) {\n  border-radius: 0 20px 20px 0;\n  box-shadow: 4px 0px 16px rgba(33, 2, 33, 0.18);\n}\n\n.fondosidebar, .fondocontenido {\n  --background: linear-gradient(to top, #23A0AD, #30D6CC);\n}\n\n.user_main_div {\n  padding-top: 50px;\n}\n\n.user_main_div .user_div {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  border: 3px solid white;\n  display: block;\n  margin: auto;\n  background-position: top;\n}\n\n.user_main_div .username {\n  display: block;\n  margin-top: 20px;\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n  color: white;\n}\n\n.user_main_div .bg_image {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.user_main_div .image_male {\n  background: url('studentboy.png') content-box no-repeat;\n  background-size: cover;\n}\n\n.user_main_div .image_female {\n  background: url('student.png') content-box no-repeat;\n  background-size: cover;\n}\n\n#inbox-list {\n  background: transparent;\n}\n\n#inbox-list ion-item {\n  --background: transparent;\n}\n\n#inbox-list ion-item ion-icon, #inbox-list ion-item ion-label {\n  color: white;\n}\n\n.ion-page-global {\n  --background: linear-gradient(to right, #08A6AC, #36BDBC);\n}\n\n.ion-page-global .main_content_div {\n  width: 100%;\n}\n\n.ion-page-global .main_content_div .menu_btn {\n  position: relative;\n  top: 40px;\n  left: 10px;\n}\n\n.ion-page-global .main_content_div_child {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXIucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzZW1lc3RyZSUyMDVcXGN1cnNvcyUyMGV4dHJhY3VycmljdWxhcmVzXFxjYWxpZGFkJTIwZWR1Y2F0aXZhXFxzaXN0ZW1hLWxlY3R1cmFsXFxhcHBsZWN0dXJhLWFuZ3VsYXIxNC1pb25pYzYtY2FwYWNpdG9yXFxzcmNcXGFwcFxcdGVhY2hlclxcdGVhY2hlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsNEJBQUE7RUFDQSw4Q0FBQTtBQ0VGOztBREFBO0VBQ0UsdURBQUE7QUNHRjs7QUREQTtFQUNFLGlCQUFBO0FDSUY7O0FESEU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDS0o7O0FESEU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNLSjs7QURIRTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0tKOztBREhFO0VBQ0UsdURBQUE7RUFDQSxzQkFBQTtBQ0tKOztBREhFO0VBQ0Usb0RBQUE7RUFDQSxzQkFBQTtBQ0tKOztBRERBO0VBQ0UsdUJBQUE7QUNJRjs7QURIRTtFQUNFLHlCQUFBO0FDS0o7O0FESkk7RUFDRSxZQUFBO0FDTU47O0FEREE7RUFDRSx5REFBQTtBQ0lGOztBREhFO0VBQ0UsV0FBQTtBQ0tKOztBREpJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ01OOztBREhFO0VBQ0UsV0FBQTtBQ0tKIiwiZmlsZSI6InRlYWNoZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnU6OnBhcnQoYmFja2Ryb3ApIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzZCREJDO1xyXG59XHJcbmlvbi1tZW51OjpwYXJ0KGNvbnRhaW5lcikge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMjBweCAyMHB4IDA7XHJcbiAgYm94LXNoYWRvdzogNHB4IDBweCAxNnB4IHJnYmEoMzMsIDIsIDMzLCAwLjE4KTtcclxufVxyXG4uZm9uZG9zaWRlYmFyLCAuZm9uZG9jb250ZW5pZG8ge1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzIzQTBBRCwgIzMwRDZDQyk7XHJcbn1cclxuLnVzZXJfbWFpbl9kaXYge1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIC51c2VyX2RpdiB7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gIH1cclxuICAudXNlcm5hbWUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5iZ19pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgLmltYWdlX21hbGUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ub3Mvc3R1ZGVudGJveS5wbmcpIGNvbnRlbnQtYm94IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIC5pbWFnZV9mZW1hbGUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ub3Mvc3R1ZGVudC5wbmcpIGNvbnRlbnQtYm94IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4jaW5ib3gtbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGlvbi1pY29uLCBpb24tbGFiZWwge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW9uLXBhZ2UtZ2xvYmFsIHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA4QTZBQywgIzM2QkRCQyk7XHJcbiAgLm1haW5fY29udGVudF9kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAubWVudV9idG4ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogNDBweDtcclxuICAgICAgbGVmdDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1haW5fY29udGVudF9kaXZfY2hpbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsImlvbi1tZW51OjpwYXJ0KGJhY2tkcm9wKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNkJEQkM7XG59XG5cbmlvbi1tZW51OjpwYXJ0KGNvbnRhaW5lcikge1xuICBib3JkZXItcmFkaXVzOiAwIDIwcHggMjBweCAwO1xuICBib3gtc2hhZG93OiA0cHggMHB4IDE2cHggcmdiYSgzMywgMiwgMzMsIDAuMTgpO1xufVxuXG4uZm9uZG9zaWRlYmFyLCAuZm9uZG9jb250ZW5pZG8ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMyM0EwQUQsICMzMEQ2Q0MpO1xufVxuXG4udXNlcl9tYWluX2RpdiB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuLnVzZXJfbWFpbl9kaXYgLnVzZXJfZGl2IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG59XG4udXNlcl9tYWluX2RpdiAudXNlcm5hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4udXNlcl9tYWluX2RpdiAuYmdfaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4udXNlcl9tYWluX2RpdiAuaW1hZ2VfbWFsZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbm9zL3N0dWRlbnRib3kucG5nKSBjb250ZW50LWJveCBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4udXNlcl9tYWluX2RpdiAuaW1hZ2VfZmVtYWxlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ub3Mvc3R1ZGVudC5wbmcpIGNvbnRlbnQtYm94IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2luYm94LWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiNpbmJveC1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiNpbmJveC1saXN0IGlvbi1pdGVtIGlvbi1pY29uLCAjaW5ib3gtbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pb24tcGFnZS1nbG9iYWwge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA4QTZBQywgIzM2QkRCQyk7XG59XG4uaW9uLXBhZ2UtZ2xvYmFsIC5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW9uLXBhZ2UtZ2xvYmFsIC5tYWluX2NvbnRlbnRfZGl2IC5tZW51X2J0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0MHB4O1xuICBsZWZ0OiAxMHB4O1xufVxuLmlvbi1wYWdlLWdsb2JhbCAubWFpbl9jb250ZW50X2Rpdl9jaGlsZCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";

/***/ }),

/***/ 2229:
/*!******************************************************!*\
  !*** ./src/app/teacher/teacher.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-menu type=\"overlay\" contentId=\"main-content\">\r\n  <ion-content class=\"fondosidebar ion-padding\">\r\n    <div *ngIf=\"!genero\" class=\"user_main_div\">\r\n      <div class=\"user_div bg_image image_male\">\r\n      </div>\r\n      <div class=\"username\">\r\n        {{profesor.Nombre + ' ' + profesor.Apellido}}\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"genero\" class=\"user_main_div\">\r\n      <div class=\"user_div bg_image image_female\">\r\n      </div>\r\n      <div class=\"username\">\r\n        {{profesor.Nombre + ' ' + profesor.Apellido}}\r\n      </div>\r\n    </div>\r\n    <ion-list id=\"inbox-list\">\r\n      <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let item of teacherPages; let i = index\">\r\n        <ion-item routerDirection=\"root\" [routerLink]=\"[item.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\r\n          <ion-icon slot=\"start\" [ios]=\"item.icon + '-outline'\" [md]=\"item.icon + '-sharp'\"></ion-icon>\r\n          <ion-label>\r\n            {{item.title}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n      <br>\r\n      <br>\r\n      <ion-item (click)=\"logout()\" routerDirection=\"root\" lines=\"none\" detail=\"false\">\r\n        <ion-icon slot=\"start\" [ios]=\"'log-out' + '-outline'\" [md]=\"'log-out' + '-sharp'\"></ion-icon>\r\n        <ion-label>\r\n          Salir\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-content class=\"fondocontenido\" id=\"main-content\">\r\n  <div class=\"ion-page-global\">\r\n    <div class=\"main_content_div\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button color=\"primary\"></ion-menu-button>\r\n      </ion-buttons>\r\n    </div>\r\n    <div class=\"main_content_div_child\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_teacher_teacher_module_ts.js.map