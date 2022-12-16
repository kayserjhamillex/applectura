"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_student_stu-content_stu-content-award_stu-content-award_module_ts"],{

/***/ 4572:
/*!*******************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-award/stu-content-award-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentAwardPageRoutingModule": () => (/* binding */ StuContentAwardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stu_content_award_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-award.page */ 1535);




const routes = [
    {
        path: '',
        component: _stu_content_award_page__WEBPACK_IMPORTED_MODULE_0__.StuContentAwardPage
    }
];
let StuContentAwardPageRoutingModule = class StuContentAwardPageRoutingModule {
};
StuContentAwardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StuContentAwardPageRoutingModule);



/***/ }),

/***/ 9571:
/*!***********************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-award/stu-content-award.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentAwardPageModule": () => (/* binding */ StuContentAwardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stu_content_award_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-award-routing.module */ 4572);
/* harmony import */ var _stu_content_award_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-content-award.page */ 1535);







let StuContentAwardPageModule = class StuContentAwardPageModule {
};
StuContentAwardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stu_content_award_routing_module__WEBPACK_IMPORTED_MODULE_0__.StuContentAwardPageRoutingModule
        ],
        declarations: [_stu_content_award_page__WEBPACK_IMPORTED_MODULE_1__.StuContentAwardPage]
    })
], StuContentAwardPageModule);



/***/ }),

/***/ 1535:
/*!*********************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-award/stu-content-award.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentAwardPage": () => (/* binding */ StuContentAwardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stu_content_award_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-award.page.html?ngResource */ 192);
/* harmony import */ var _stu_content_award_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-content-award.page.scss?ngResource */ 2883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let StuContentAwardPage = class StuContentAwardPage {
    constructor() { }
    ngOnInit() {
    }
};
StuContentAwardPage.ctorParameters = () => [];
StuContentAwardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-stu-content-award',
        template: _stu_content_award_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stu_content_award_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StuContentAwardPage);



/***/ }),

/***/ 2883:
/*!**********************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-award/stu-content-award.page.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHUtY29udGVudC1hd2FyZC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 192:
/*!**********************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-award/stu-content-award.page.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>stu-content-award</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_student_stu-content_stu-content-award_stu-content-award_module_ts.js.map