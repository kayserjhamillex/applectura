"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_family_family_module_ts"],{

/***/ 5671:
/*!*************************************************!*\
  !*** ./src/app/family/family-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamilyPageRoutingModule": () => (/* binding */ FamilyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _family_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./family.page */ 1922);




const routes = [
    {
        path: '',
        component: _family_page__WEBPACK_IMPORTED_MODULE_0__.FamilyPage,
        children: [
            {
                path: 'fam-home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_family_fam-home_fam-home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fam-home/fam-home.module */ 8913)).then(m => m.FamHomePageModule)
            },
            {
                path: 'fam-statistics',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_family_fam-statistics_fam-statistics_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fam-statistics/fam-statistics.module */ 7317)).then(m => m.FamStatisticsPageModule)
            },
            {
                path: 'fam-book',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_family_fam-book_fam-book_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fam-book/fam-book.module */ 927)).then(m => m.FamBookPageModule)
            },
            {
                path: 'fam-profile',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_family_fam-profile_fam-profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fam-profile/fam-profile.module */ 684)).then(m => m.FamProfilePageModule)
            },
            {
                path: '',
                redirectTo: 'fam-home',
                pathMatch: 'prefix'
            }
        ]
    },
];
let FamilyPageRoutingModule = class FamilyPageRoutingModule {
};
FamilyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FamilyPageRoutingModule);



/***/ }),

/***/ 9116:
/*!*****************************************!*\
  !*** ./src/app/family/family.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamilyPageModule": () => (/* binding */ FamilyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _family_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./family-routing.module */ 5671);
/* harmony import */ var _family_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./family.page */ 1922);







let FamilyPageModule = class FamilyPageModule {
};
FamilyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _family_routing_module__WEBPACK_IMPORTED_MODULE_0__.FamilyPageRoutingModule
        ],
        declarations: [_family_page__WEBPACK_IMPORTED_MODULE_1__.FamilyPage]
    })
], FamilyPageModule);



/***/ }),

/***/ 1922:
/*!***************************************!*\
  !*** ./src/app/family/family.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamilyPage": () => (/* binding */ FamilyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _family_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./family.page.html?ngResource */ 515);
/* harmony import */ var _family_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./family.page.scss?ngResource */ 2149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ 7053);






let FamilyPage = class FamilyPage {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.genero = false;
        this.studentPages = [
            { title: 'Inicio', url: '/family/fam-home', icon: 'home' },
            { title: 'Lectura de libros', url: '/family/fam-content', icon: 'library' },
            { title: 'Agregar Libro o Cuento', url: '/family/fam-book', icon: 'library' },
            { title: 'Perfil', url: '/family/fam-detail', icon: 'person' }
        ];
    }
    ngOnInit() {
        this.cliente = JSON.parse(localStorage.getItem('usuario'));
        this.clientetipo = JSON.parse(localStorage.getItem('tipoclient'));
        if (this.clientetipo === 'estudiante') {
            console.log('el usuario no es responsable, es estudiante; redirigiendolo');
            this.router.navigate([
                'student'
            ]);
        }
        else if (this.clientetipo === 'profesor') {
            console.log('el usuario no es responsable, es profesor; redirigiendolo');
            this.router.navigate([
                'teacher'
            ]);
        }
        else if (this.clientetipo === 'resposable') {
            console.log('el usuario es resposable');
        }
    }
    logout() {
        this.authenticationService.loggout();
        this.router.navigate([
            'auth'
        ]);
    }
};
FamilyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService }
];
FamilyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-family',
        template: _family_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_family_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FamilyPage);



/***/ }),

/***/ 2149:
/*!****************************************************!*\
  !*** ./src/app/family/family.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "ion-menu::part(backdrop) {\n  background-color: #36BDBC;\n}\n\nion-menu::part(container) {\n  border-radius: 0 20px 20px 0;\n  box-shadow: 4px 0px 16px rgba(33, 2, 33, 0.18);\n}\n\n.fondosidebar, .fondocontenido {\n  --background: linear-gradient(to right, #08A6AC, #36BDBC);\n}\n\n.user_main_div {\n  padding-top: 50px;\n}\n\n.user_main_div .user_div {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  border: 3px solid white;\n  display: block;\n  margin: auto;\n  background-position: top;\n}\n\n.user_main_div .username {\n  display: block;\n  margin-top: 20px;\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n  color: white;\n}\n\n.user_main_div .bg_image {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.user_main_div .image_male {\n  background: url('studentboy.png') content-box no-repeat;\n  background-size: cover;\n}\n\n.user_main_div .image_female {\n  background: url('student.png') content-box no-repeat;\n  background-size: cover;\n}\n\n#inbox-list {\n  background: transparent;\n}\n\n#inbox-list ion-item {\n  --background: transparent;\n}\n\n#inbox-list ion-item ion-icon, #inbox-list ion-item ion-label {\n  color: white;\n}\n\n.ion-page-global {\n  --background: linear-gradient(to right, #08A6AC, #36BDBC);\n}\n\n.ion-page-global .main_content_div {\n  width: 100%;\n}\n\n.ion-page-global .main_content_div .menu_btn {\n  position: relative;\n  top: 40px;\n  left: 10px;\n}\n\n.ion-page-global .main_content_div_child {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbWlseS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlbWVzdHJlJTIwNVxcY3Vyc29zJTIwZXh0cmFjdXJyaWN1bGFyZXNcXGNhbGlkYWQlMjBlZHVjYXRpdmFcXHNpc3RlbWEtbGVjdHVyYWxcXGFwcGxlY3R1cmEtYW5ndWxhcjE0LWlvbmljNi1jYXBhY2l0b3JcXHNyY1xcYXBwXFxmYW1pbHlcXGZhbWlseS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsNEJBQUE7RUFDQSw4Q0FBQTtBQ0VGOztBREFBO0VBQ0UseURBQUE7QUNHRjs7QUREQTtFQUNFLGlCQUFBO0FDSUY7O0FESEU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDS0o7O0FESEU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNLSjs7QURIRTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0tKOztBREhFO0VBQ0UsdURBQUE7RUFDQSxzQkFBQTtBQ0tKOztBREhFO0VBQ0Usb0RBQUE7RUFDQSxzQkFBQTtBQ0tKOztBRERBO0VBQ0UsdUJBQUE7QUNJRjs7QURIRTtFQUNFLHlCQUFBO0FDS0o7O0FESkk7RUFDRSxZQUFBO0FDTU47O0FEREE7RUFDRSx5REFBQTtBQ0lGOztBREhFO0VBQ0UsV0FBQTtBQ0tKOztBREpJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ01OOztBREhFO0VBQ0UsV0FBQTtBQ0tKIiwiZmlsZSI6ImZhbWlseS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudTo6cGFydChiYWNrZHJvcCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNkJEQkM7XHJcbn1cclxuaW9uLW1lbnU6OnBhcnQoY29udGFpbmVyKSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDIwcHggMDtcclxuICBib3gtc2hhZG93OiA0cHggMHB4IDE2cHggcmdiYSgzMywgMiwgMzMsIDAuMTgpO1xyXG59XHJcbi5mb25kb3NpZGViYXIsIC5mb25kb2NvbnRlbmlkbyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwOEE2QUMsICMzNkJEQkMpO1xyXG59XHJcbi51c2VyX21haW5fZGl2IHtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAudXNlcl9kaXYge1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICB9XHJcbiAgLnVzZXJuYW1lIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuYmdfaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIC5pbWFnZV9tYWxlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbm9zL3N0dWRlbnRib3kucG5nKSBjb250ZW50LWJveCBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICAuaW1hZ2VfZmVtYWxlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbm9zL3N0dWRlbnQucG5nKSBjb250ZW50LWJveCBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuI2luYm94LWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBpb24taWNvbiwgaW9uLWxhYmVsIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmlvbi1wYWdlLWdsb2JhbCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwOEE2QUMsICMzNkJEQkMpO1xyXG4gIC5tYWluX2NvbnRlbnRfZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLm1lbnVfYnRuIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDQwcHg7XHJcbiAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tYWluX2NvbnRlbnRfZGl2X2NoaWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCJpb24tbWVudTo6cGFydChiYWNrZHJvcCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzZCREJDO1xufVxuXG5pb24tbWVudTo6cGFydChjb250YWluZXIpIHtcbiAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDIwcHggMDtcbiAgYm94LXNoYWRvdzogNHB4IDBweCAxNnB4IHJnYmEoMzMsIDIsIDMzLCAwLjE4KTtcbn1cblxuLmZvbmRvc2lkZWJhciwgLmZvbmRvY29udGVuaWRvIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwOEE2QUMsICMzNkJEQkMpO1xufVxuXG4udXNlcl9tYWluX2RpdiB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuLnVzZXJfbWFpbl9kaXYgLnVzZXJfZGl2IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG59XG4udXNlcl9tYWluX2RpdiAudXNlcm5hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4udXNlcl9tYWluX2RpdiAuYmdfaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4udXNlcl9tYWluX2RpdiAuaW1hZ2VfbWFsZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbm9zL3N0dWRlbnRib3kucG5nKSBjb250ZW50LWJveCBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4udXNlcl9tYWluX2RpdiAuaW1hZ2VfZmVtYWxlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ub3Mvc3R1ZGVudC5wbmcpIGNvbnRlbnQtYm94IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2luYm94LWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiNpbmJveC1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiNpbmJveC1saXN0IGlvbi1pdGVtIGlvbi1pY29uLCAjaW5ib3gtbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pb24tcGFnZS1nbG9iYWwge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA4QTZBQywgIzM2QkRCQyk7XG59XG4uaW9uLXBhZ2UtZ2xvYmFsIC5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW9uLXBhZ2UtZ2xvYmFsIC5tYWluX2NvbnRlbnRfZGl2IC5tZW51X2J0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0MHB4O1xuICBsZWZ0OiAxMHB4O1xufVxuLmlvbi1wYWdlLWdsb2JhbCAubWFpbl9jb250ZW50X2Rpdl9jaGlsZCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";

/***/ }),

/***/ 515:
/*!****************************************************!*\
  !*** ./src/app/family/family.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-menu type=\"overlay\" contentId=\"main-content\">\r\n  <ion-content class=\"fondosidebar ion-padding\">\r\n    <div *ngIf=\"!genero\" class=\"user_main_div\">\r\n      <div class=\"user_div bg_image image_male\">\r\n      </div>\r\n      <div class=\"username\">\r\n        Daigo\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"genero\" class=\"user_main_div\">\r\n      <div class=\"user_div bg_image image_female\">\r\n      </div>\r\n      <div class=\"username\">\r\n        Flor, Beatriz\r\n      </div>\r\n    </div>\r\n    <ion-list id=\"inbox-list\">\r\n      <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let item of studentPages; let i = index\">\r\n        <ion-item routerDirection=\"root\" [routerLink]=\"[item.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\r\n          <ion-icon slot=\"start\" [ios]=\"item.icon + '-outline'\" [md]=\"item.icon + '-sharp'\"></ion-icon>\r\n          <ion-label>\r\n            {{item.title}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n      <br>\r\n      <br>\r\n      <ion-item routerDirection=\"root\" lines=\"none\" detail=\"false\">\r\n        <ion-icon slot=\"start\" [ios]=\"'log-out' + '-outline'\" [md]=\"'log-out' + '-sharp'\"></ion-icon>\r\n        <ion-label>\r\n          Salir\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-content class=\"fondocontenido\" id=\"main-content\">\r\n  <div class=\"ion-page-global\">\r\n    <div class=\"main_content_div\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button color=\"primary\"></ion-menu-button>\r\n      </ion-buttons>\r\n    </div>\r\n    <div class=\"main_content_div_child\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_family_family_module_ts.js.map