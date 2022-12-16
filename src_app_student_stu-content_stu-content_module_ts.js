"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_student_stu-content_stu-content_module_ts"],{

/***/ 1424:
/*!*******************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentPageRoutingModule": () => (/* binding */ StuContentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stu_content_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content.page */ 562);




const routes = [
    {
        path: '',
        component: _stu_content_page__WEBPACK_IMPORTED_MODULE_0__.StuContentPage,
        children: [
            {
                path: 'stu-content-list',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_services_global_service_ts-src_app_student_stu-content_stu-content-list_stu-content-l-ba4a2a")]).then(__webpack_require__.bind(__webpack_require__, /*! ./stu-content-list/stu-content-list.module */ 755)).then(m => m.StuContentListPageModule)
            },
            {
                path: 'stu-content-select',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_student_stu-content_stu-content-select_stu-content-select_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./stu-content-select/stu-content-select.module */ 4840)).then(m => m.StuContentSelectPageModule)
            },
            {
                path: 'stu-content-reading',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_student_stu-content_stu-content-reading_stu-content-reading_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./stu-content-reading/stu-content-reading.module */ 5226)).then(m => m.StuContentReadingPageModule)
            },
            {
                path: 'stu-content-video',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_cuestionario_service_ts-src_app_services_libro_service_ts-src_app_se-28f3f0"), __webpack_require__.e("src_app_student_stu-content_stu-content-video_stu-content-video_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./stu-content-video/stu-content-video.module */ 5259)).then(m => m.StuContentVideoPageModule)
            },
            {
                path: 'stu-content-audio',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_cuestionario_service_ts-src_app_services_libro_service_ts-src_app_se-28f3f0"), __webpack_require__.e("src_app_student_stu-content_stu-content-audio_stu-content-audio_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./stu-content-audio/stu-content-audio.module */ 9312)).then(m => m.StuContentAudioPageModule)
            },
            {
                path: 'stu-content-evaluation',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_student_stu-content_stu-content-evaluation_stu-content-evaluation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./stu-content-evaluation/stu-content-evaluation.module */ 2763)).then(m => m.StuContentEvaluationPageModule)
            },
            {
                path: 'stu-content-accompanying',
                // eslint-disable-next-line max-len
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_services_global_service_ts-src_app_student_stu-content_stu-content-accompanying_stu-c-188854")]).then(__webpack_require__.bind(__webpack_require__, /*! ./stu-content-accompanying/stu-content-accompanying.module */ 3221)).then(m => m.StuContentAccompanyingPageModule)
            },
            {
                path: 'stu-content-award',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_student_stu-content_stu-content-award_stu-content-award_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./stu-content-award/stu-content-award.module */ 9571)).then(m => m.StuContentAwardPageModule)
            },
            {
                path: '',
                redirectTo: 'stu-content-list',
                pathMatch: 'prefix'
            }
        ]
    },
];
let StuContentPageRoutingModule = class StuContentPageRoutingModule {
};
StuContentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StuContentPageRoutingModule);



/***/ }),

/***/ 1886:
/*!***********************************************************!*\
  !*** ./src/app/student/stu-content/stu-content.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentPageModule": () => (/* binding */ StuContentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stu_content_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-routing.module */ 1424);
/* harmony import */ var _stu_content_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-content.page */ 562);







let StuContentPageModule = class StuContentPageModule {
};
StuContentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stu_content_routing_module__WEBPACK_IMPORTED_MODULE_0__.StuContentPageRoutingModule
        ],
        declarations: [_stu_content_page__WEBPACK_IMPORTED_MODULE_1__.StuContentPage]
    })
], StuContentPageModule);



/***/ }),

/***/ 562:
/*!*********************************************************!*\
  !*** ./src/app/student/stu-content/stu-content.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentPage": () => (/* binding */ StuContentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stu_content_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content.page.html?ngResource */ 3094);
/* harmony import */ var _stu_content_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-content.page.scss?ngResource */ 9708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let StuContentPage = class StuContentPage {
    constructor() { }
    ngOnInit() {
    }
};
StuContentPage.ctorParameters = () => [];
StuContentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-stu-content',
        template: _stu_content_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stu_content_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StuContentPage);



/***/ }),

/***/ 9708:
/*!**********************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHUtY29udGVudC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3094:
/*!**********************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_student_stu-content_stu-content_module_ts.js.map