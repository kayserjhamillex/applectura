"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_family_fam-profile_fam-profile-sons_fam-profile-sons_module_ts"],{

/***/ 9297:
/*!****************************************************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile-sons/fam-profile-sons-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamProfileSonsPageRoutingModule": () => (/* binding */ FamProfileSonsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fam_profile_sons_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-profile-sons.page */ 9662);




const routes = [
    {
        path: '',
        component: _fam_profile_sons_page__WEBPACK_IMPORTED_MODULE_0__.FamProfileSonsPage
    }
];
let FamProfileSonsPageRoutingModule = class FamProfileSonsPageRoutingModule {
};
FamProfileSonsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FamProfileSonsPageRoutingModule);



/***/ }),

/***/ 1373:
/*!********************************************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile-sons/fam-profile-sons.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamProfileSonsPageModule": () => (/* binding */ FamProfileSonsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _fam_profile_sons_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-profile-sons-routing.module */ 9297);
/* harmony import */ var _fam_profile_sons_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-profile-sons.page */ 9662);







let FamProfileSonsPageModule = class FamProfileSonsPageModule {
};
FamProfileSonsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fam_profile_sons_routing_module__WEBPACK_IMPORTED_MODULE_0__.FamProfileSonsPageRoutingModule
        ],
        declarations: [_fam_profile_sons_page__WEBPACK_IMPORTED_MODULE_1__.FamProfileSonsPage]
    })
], FamProfileSonsPageModule);



/***/ }),

/***/ 9662:
/*!******************************************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile-sons/fam-profile-sons.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamProfileSonsPage": () => (/* binding */ FamProfileSonsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _fam_profile_sons_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-profile-sons.page.html?ngResource */ 2824);
/* harmony import */ var _fam_profile_sons_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-profile-sons.page.scss?ngResource */ 7144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FamProfileSonsPage = class FamProfileSonsPage {
    constructor() { }
    ngOnInit() {
    }
};
FamProfileSonsPage.ctorParameters = () => [];
FamProfileSonsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fam-profile-sons',
        template: _fam_profile_sons_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fam_profile_sons_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FamProfileSonsPage);



/***/ }),

/***/ 7144:
/*!*******************************************************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile-sons/fam-profile-sons.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYW0tcHJvZmlsZS1zb25zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2824:
/*!*******************************************************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile-sons/fam-profile-sons.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>fam-profile-sons</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_family_fam-profile_fam-profile-sons_fam-profile-sons_module_ts.js.map