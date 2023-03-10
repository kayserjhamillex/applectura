"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_family_fam-profile_fam-profile-view_fam-profile-view_module_ts"],{

/***/ 9144:
/*!****************************************************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile-view/fam-profile-view-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamProfileViewPageRoutingModule": () => (/* binding */ FamProfileViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fam_profile_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-profile-view.page */ 786);




const routes = [
    {
        path: '',
        component: _fam_profile_view_page__WEBPACK_IMPORTED_MODULE_0__.FamProfileViewPage
    }
];
let FamProfileViewPageRoutingModule = class FamProfileViewPageRoutingModule {
};
FamProfileViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FamProfileViewPageRoutingModule);



/***/ }),

/***/ 6302:
/*!********************************************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile-view/fam-profile-view.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamProfileViewPageModule": () => (/* binding */ FamProfileViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _fam_profile_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-profile-view-routing.module */ 9144);
/* harmony import */ var _fam_profile_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-profile-view.page */ 786);







let FamProfileViewPageModule = class FamProfileViewPageModule {
};
FamProfileViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fam_profile_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.FamProfileViewPageRoutingModule
        ],
        declarations: [_fam_profile_view_page__WEBPACK_IMPORTED_MODULE_1__.FamProfileViewPage]
    })
], FamProfileViewPageModule);



/***/ }),

/***/ 786:
/*!******************************************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile-view/fam-profile-view.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamProfileViewPage": () => (/* binding */ FamProfileViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _fam_profile_view_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-profile-view.page.html?ngResource */ 2352);
/* harmony import */ var _fam_profile_view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-profile-view.page.scss?ngResource */ 4273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FamProfileViewPage = class FamProfileViewPage {
    constructor() { }
    ngOnInit() {
    }
};
FamProfileViewPage.ctorParameters = () => [];
FamProfileViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fam-profile-view',
        template: _fam_profile_view_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fam_profile_view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FamProfileViewPage);



/***/ }),

/***/ 4273:
/*!*******************************************************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile-view/fam-profile-view.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYW0tcHJvZmlsZS12aWV3LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2352:
/*!*******************************************************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile-view/fam-profile-view.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>fam-profile-view</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_family_fam-profile_fam-profile-view_fam-profile-view_module_ts.js.map