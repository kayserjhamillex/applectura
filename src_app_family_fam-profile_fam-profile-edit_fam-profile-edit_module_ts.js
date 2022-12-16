"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_family_fam-profile_fam-profile-edit_fam-profile-edit_module_ts"],{

/***/ 6981:
/*!****************************************************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile-edit/fam-profile-edit-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamProfileEditPageRoutingModule": () => (/* binding */ FamProfileEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fam_profile_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-profile-edit.page */ 2765);




const routes = [
    {
        path: '',
        component: _fam_profile_edit_page__WEBPACK_IMPORTED_MODULE_0__.FamProfileEditPage
    }
];
let FamProfileEditPageRoutingModule = class FamProfileEditPageRoutingModule {
};
FamProfileEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FamProfileEditPageRoutingModule);



/***/ }),

/***/ 3663:
/*!********************************************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile-edit/fam-profile-edit.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamProfileEditPageModule": () => (/* binding */ FamProfileEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _fam_profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-profile-edit-routing.module */ 6981);
/* harmony import */ var _fam_profile_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-profile-edit.page */ 2765);







let FamProfileEditPageModule = class FamProfileEditPageModule {
};
FamProfileEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fam_profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.FamProfileEditPageRoutingModule
        ],
        declarations: [_fam_profile_edit_page__WEBPACK_IMPORTED_MODULE_1__.FamProfileEditPage]
    })
], FamProfileEditPageModule);



/***/ }),

/***/ 2765:
/*!******************************************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile-edit/fam-profile-edit.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamProfileEditPage": () => (/* binding */ FamProfileEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _fam_profile_edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-profile-edit.page.html?ngResource */ 4600);
/* harmony import */ var _fam_profile_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-profile-edit.page.scss?ngResource */ 5575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FamProfileEditPage = class FamProfileEditPage {
    constructor() { }
    ngOnInit() {
    }
};
FamProfileEditPage.ctorParameters = () => [];
FamProfileEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fam-profile-edit',
        template: _fam_profile_edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fam_profile_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FamProfileEditPage);



/***/ }),

/***/ 5575:
/*!*******************************************************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile-edit/fam-profile-edit.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYW0tcHJvZmlsZS1lZGl0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4600:
/*!*******************************************************************************************!*\
  !*** ./src/app/family/fam-profile/fam-profile-edit/fam-profile-edit.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>fam-profile-edit</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_family_fam-profile_fam-profile-edit_fam-profile-edit_module_ts.js.map