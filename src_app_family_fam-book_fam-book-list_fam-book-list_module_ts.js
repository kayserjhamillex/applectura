"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_family_fam-book_fam-book-list_fam-book-list_module_ts"],{

/***/ 2232:
/*!*******************************************************************************!*\
  !*** ./src/app/family/fam-book/fam-book-list/fam-book-list-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamBookListPageRoutingModule": () => (/* binding */ FamBookListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fam_book_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-book-list.page */ 742);




const routes = [
    {
        path: '',
        component: _fam_book_list_page__WEBPACK_IMPORTED_MODULE_0__.FamBookListPage
    }
];
let FamBookListPageRoutingModule = class FamBookListPageRoutingModule {
};
FamBookListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FamBookListPageRoutingModule);



/***/ }),

/***/ 5320:
/*!***********************************************************************!*\
  !*** ./src/app/family/fam-book/fam-book-list/fam-book-list.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamBookListPageModule": () => (/* binding */ FamBookListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _fam_book_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-book-list-routing.module */ 2232);
/* harmony import */ var _fam_book_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-book-list.page */ 742);







let FamBookListPageModule = class FamBookListPageModule {
};
FamBookListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fam_book_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.FamBookListPageRoutingModule
        ],
        declarations: [_fam_book_list_page__WEBPACK_IMPORTED_MODULE_1__.FamBookListPage]
    })
], FamBookListPageModule);



/***/ }),

/***/ 742:
/*!*********************************************************************!*\
  !*** ./src/app/family/fam-book/fam-book-list/fam-book-list.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamBookListPage": () => (/* binding */ FamBookListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _fam_book_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-book-list.page.html?ngResource */ 6394);
/* harmony import */ var _fam_book_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-book-list.page.scss?ngResource */ 4599);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FamBookListPage = class FamBookListPage {
    constructor() { }
    ngOnInit() {
    }
};
FamBookListPage.ctorParameters = () => [];
FamBookListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fam-book-list',
        template: _fam_book_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fam_book_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FamBookListPage);



/***/ }),

/***/ 4599:
/*!**********************************************************************************!*\
  !*** ./src/app/family/fam-book/fam-book-list/fam-book-list.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYW0tYm9vay1saXN0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6394:
/*!**********************************************************************************!*\
  !*** ./src/app/family/fam-book/fam-book-list/fam-book-list.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>fam-book-list</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_family_fam-book_fam-book-list_fam-book-list_module_ts.js.map