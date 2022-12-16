"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_family_fam-book_fam-book_module_ts"],{

/***/ 6255:
/*!************************************************************!*\
  !*** ./src/app/family/fam-book/fam-book-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamBookPageRoutingModule": () => (/* binding */ FamBookPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fam_book_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-book.page */ 4802);




const routes = [
    {
        path: '',
        component: _fam_book_page__WEBPACK_IMPORTED_MODULE_0__.FamBookPage,
        children: [
            {
                path: 'fam-book-list',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_family_fam-book_fam-book-list_fam-book-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fam-book-list/fam-book-list.module */ 5320)).then(m => m.FamBookListPageModule)
            },
            {
                path: 'fam-book-create',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_family_fam-book_fam-book-create_fam-book-create_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fam-book-create/fam-book-create.module */ 7176)).then(m => m.FamBookCreatePageModule)
            },
            {
                path: 'fam-book-update',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_family_fam-book_fam-book-update_fam-book-update_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fam-book-update/fam-book-update.module */ 404)).then(m => m.FamBookUpdatePageModule)
            },
            {
                path: '',
                redirectTo: 'fam-book-list',
                pathMatch: 'prefix'
            }
        ]
    },
];
let FamBookPageRoutingModule = class FamBookPageRoutingModule {
};
FamBookPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FamBookPageRoutingModule);



/***/ }),

/***/ 927:
/*!****************************************************!*\
  !*** ./src/app/family/fam-book/fam-book.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamBookPageModule": () => (/* binding */ FamBookPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _fam_book_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-book-routing.module */ 6255);
/* harmony import */ var _fam_book_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-book.page */ 4802);







let FamBookPageModule = class FamBookPageModule {
};
FamBookPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fam_book_routing_module__WEBPACK_IMPORTED_MODULE_0__.FamBookPageRoutingModule
        ],
        declarations: [_fam_book_page__WEBPACK_IMPORTED_MODULE_1__.FamBookPage]
    })
], FamBookPageModule);



/***/ }),

/***/ 4802:
/*!**************************************************!*\
  !*** ./src/app/family/fam-book/fam-book.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamBookPage": () => (/* binding */ FamBookPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _fam_book_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-book.page.html?ngResource */ 762);
/* harmony import */ var _fam_book_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-book.page.scss?ngResource */ 6117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FamBookPage = class FamBookPage {
    constructor() { }
    ngOnInit() {
    }
};
FamBookPage.ctorParameters = () => [];
FamBookPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fam-book',
        template: _fam_book_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fam_book_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FamBookPage);



/***/ }),

/***/ 6117:
/*!***************************************************************!*\
  !*** ./src/app/family/fam-book/fam-book.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYW0tYm9vay5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 762:
/*!***************************************************************!*\
  !*** ./src/app/family/fam-book/fam-book.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>fam-book</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n<!-- <router-outlet></router-outlet> -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_family_fam-book_fam-book_module_ts.js.map