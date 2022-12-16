"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_family_fam-book_fam-book-create_fam-book-create_module_ts"],{

/***/ 970:
/*!***********************************************************************************!*\
  !*** ./src/app/family/fam-book/fam-book-create/fam-book-create-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamBookCreatePageRoutingModule": () => (/* binding */ FamBookCreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fam_book_create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-book-create.page */ 6422);




const routes = [
    {
        path: '',
        component: _fam_book_create_page__WEBPACK_IMPORTED_MODULE_0__.FamBookCreatePage
    }
];
let FamBookCreatePageRoutingModule = class FamBookCreatePageRoutingModule {
};
FamBookCreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FamBookCreatePageRoutingModule);



/***/ }),

/***/ 7176:
/*!***************************************************************************!*\
  !*** ./src/app/family/fam-book/fam-book-create/fam-book-create.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamBookCreatePageModule": () => (/* binding */ FamBookCreatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _fam_book_create_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-book-create-routing.module */ 970);
/* harmony import */ var _fam_book_create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-book-create.page */ 6422);







let FamBookCreatePageModule = class FamBookCreatePageModule {
};
FamBookCreatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fam_book_create_routing_module__WEBPACK_IMPORTED_MODULE_0__.FamBookCreatePageRoutingModule
        ],
        declarations: [_fam_book_create_page__WEBPACK_IMPORTED_MODULE_1__.FamBookCreatePage]
    })
], FamBookCreatePageModule);



/***/ }),

/***/ 6422:
/*!*************************************************************************!*\
  !*** ./src/app/family/fam-book/fam-book-create/fam-book-create.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamBookCreatePage": () => (/* binding */ FamBookCreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _fam_book_create_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-book-create.page.html?ngResource */ 6284);
/* harmony import */ var _fam_book_create_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-book-create.page.scss?ngResource */ 7310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FamBookCreatePage = class FamBookCreatePage {
    constructor() { }
    ngOnInit() {
    }
};
FamBookCreatePage.ctorParameters = () => [];
FamBookCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fam-book-create',
        template: _fam_book_create_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fam_book_create_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FamBookCreatePage);



/***/ }),

/***/ 7310:
/*!**************************************************************************************!*\
  !*** ./src/app/family/fam-book/fam-book-create/fam-book-create.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYW0tYm9vay1jcmVhdGUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6284:
/*!**************************************************************************************!*\
  !*** ./src/app/family/fam-book/fam-book-create/fam-book-create.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>fam-book-create</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_family_fam-book_fam-book-create_fam-book-create_module_ts.js.map