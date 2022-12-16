"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_family_fam-statistics_fam-statistics_module_ts"],{

/***/ 5710:
/*!************************************************************************!*\
  !*** ./src/app/family/fam-statistics/fam-statistics-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamStatisticsPageRoutingModule": () => (/* binding */ FamStatisticsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fam_statistics_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-statistics.page */ 2247);




const routes = [
    {
        path: '',
        component: _fam_statistics_page__WEBPACK_IMPORTED_MODULE_0__.FamStatisticsPage
    }
];
let FamStatisticsPageRoutingModule = class FamStatisticsPageRoutingModule {
};
FamStatisticsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FamStatisticsPageRoutingModule);



/***/ }),

/***/ 7317:
/*!****************************************************************!*\
  !*** ./src/app/family/fam-statistics/fam-statistics.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamStatisticsPageModule": () => (/* binding */ FamStatisticsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _fam_statistics_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-statistics-routing.module */ 5710);
/* harmony import */ var _fam_statistics_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-statistics.page */ 2247);







let FamStatisticsPageModule = class FamStatisticsPageModule {
};
FamStatisticsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fam_statistics_routing_module__WEBPACK_IMPORTED_MODULE_0__.FamStatisticsPageRoutingModule
        ],
        declarations: [_fam_statistics_page__WEBPACK_IMPORTED_MODULE_1__.FamStatisticsPage]
    })
], FamStatisticsPageModule);



/***/ }),

/***/ 2247:
/*!**************************************************************!*\
  !*** ./src/app/family/fam-statistics/fam-statistics.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamStatisticsPage": () => (/* binding */ FamStatisticsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _fam_statistics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-statistics.page.html?ngResource */ 5706);
/* harmony import */ var _fam_statistics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-statistics.page.scss?ngResource */ 9640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FamStatisticsPage = class FamStatisticsPage {
    constructor() { }
    ngOnInit() {
    }
};
FamStatisticsPage.ctorParameters = () => [];
FamStatisticsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fam-statistics',
        template: _fam_statistics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fam_statistics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FamStatisticsPage);



/***/ }),

/***/ 9640:
/*!***************************************************************************!*\
  !*** ./src/app/family/fam-statistics/fam-statistics.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYW0tc3RhdGlzdGljcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5706:
/*!***************************************************************************!*\
  !*** ./src/app/family/fam-statistics/fam-statistics.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>fam-statistics</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_family_fam-statistics_fam-statistics_module_ts.js.map