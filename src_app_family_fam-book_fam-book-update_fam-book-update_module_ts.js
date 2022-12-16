"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_family_fam-book_fam-book-update_fam-book-update_module_ts"],{

/***/ 1840:
/*!***********************************************************************************!*\
  !*** ./src/app/family/fam-book/fam-book-update/fam-book-update-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamBookUpdatePageRoutingModule": () => (/* binding */ FamBookUpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fam_book_update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-book-update.page */ 5995);




const routes = [
    {
        path: '',
        component: _fam_book_update_page__WEBPACK_IMPORTED_MODULE_0__.FamBookUpdatePage
    }
];
let FamBookUpdatePageRoutingModule = class FamBookUpdatePageRoutingModule {
};
FamBookUpdatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FamBookUpdatePageRoutingModule);



/***/ }),

/***/ 404:
/*!***************************************************************************!*\
  !*** ./src/app/family/fam-book/fam-book-update/fam-book-update.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamBookUpdatePageModule": () => (/* binding */ FamBookUpdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _fam_book_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-book-update-routing.module */ 1840);
/* harmony import */ var _fam_book_update_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-book-update.page */ 5995);







let FamBookUpdatePageModule = class FamBookUpdatePageModule {
};
FamBookUpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fam_book_update_routing_module__WEBPACK_IMPORTED_MODULE_0__.FamBookUpdatePageRoutingModule
        ],
        declarations: [_fam_book_update_page__WEBPACK_IMPORTED_MODULE_1__.FamBookUpdatePage]
    })
], FamBookUpdatePageModule);



/***/ }),

/***/ 5995:
/*!*************************************************************************!*\
  !*** ./src/app/family/fam-book/fam-book-update/fam-book-update.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamBookUpdatePage": () => (/* binding */ FamBookUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _fam_book_update_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-book-update.page.html?ngResource */ 5469);
/* harmony import */ var _fam_book_update_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-book-update.page.scss?ngResource */ 6098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FamBookUpdatePage = class FamBookUpdatePage {
    constructor() { }
    ngOnInit() {
    }
};
FamBookUpdatePage.ctorParameters = () => [];
FamBookUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fam-book-update',
        template: _fam_book_update_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fam_book_update_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FamBookUpdatePage);



/***/ }),

/***/ 6098:
/*!**************************************************************************************!*\
  !*** ./src/app/family/fam-book/fam-book-update/fam-book-update.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYW0tYm9vay11cGRhdGUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 5469:
/*!**************************************************************************************!*\
  !*** ./src/app/family/fam-book/fam-book-update/fam-book-update.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>fam-book-update</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_family_fam-book_fam-book-update_fam-book-update_module_ts.js.map