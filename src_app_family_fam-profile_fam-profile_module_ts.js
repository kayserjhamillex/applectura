"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_family_fam-profile_fam-profile_module_ts"],{

/***/ 4619:
/*!******************************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamProfilePageRoutingModule": () => (/* binding */ FamProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fam_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-profile.page */ 3735);




const routes = [
    {
        path: '',
        component: _fam_profile_page__WEBPACK_IMPORTED_MODULE_0__.FamProfilePage,
        children: [
            {
                path: 'fam-profile-view',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_family_fam-profile_fam-profile-view_fam-profile-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fam-profile-view/fam-profile-view.module */ 6302)).then(m => m.FamProfileViewPageModule)
            },
            {
                path: 'fam-profile-edit',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_family_fam-profile_fam-profile-edit_fam-profile-edit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fam-profile-edit/fam-profile-edit.module */ 3663)).then(m => m.FamProfileEditPageModule)
            },
            {
                path: 'fam-profile-sons',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_family_fam-profile_fam-profile-sons_fam-profile-sons_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fam-profile-sons/fam-profile-sons.module */ 1373)).then(m => m.FamProfileSonsPageModule)
            },
            {
                path: '',
                redirectTo: 'fam-profile-view',
                pathMatch: 'prefix'
            }
        ]
    },
];
let FamProfilePageRoutingModule = class FamProfilePageRoutingModule {
};
FamProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FamProfilePageRoutingModule);



/***/ }),

/***/ 684:
/*!**********************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamProfilePageModule": () => (/* binding */ FamProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _fam_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-profile-routing.module */ 4619);
/* harmony import */ var _fam_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-profile.page */ 3735);







let FamProfilePageModule = class FamProfilePageModule {
};
FamProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fam_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.FamProfilePageRoutingModule
        ],
        declarations: [_fam_profile_page__WEBPACK_IMPORTED_MODULE_1__.FamProfilePage]
    })
], FamProfilePageModule);



/***/ }),

/***/ 3735:
/*!********************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamProfilePage": () => (/* binding */ FamProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _fam_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-profile.page.html?ngResource */ 8405);
/* harmony import */ var _fam_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-profile.page.scss?ngResource */ 7133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FamProfilePage = class FamProfilePage {
    constructor() { }
    ngOnInit() {
    }
};
FamProfilePage.ctorParameters = () => [];
FamProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fam-profile',
        template: _fam_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fam_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FamProfilePage);



/***/ }),

/***/ 7133:
/*!*********************************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYW0tcHJvZmlsZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 8405:
/*!*********************************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>fam-profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n<!-- <router-outlet></router-outlet> -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_family_fam-profile_fam-profile_module_ts.js.map