"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_student_stu-profile_stu-profile-view_stu-profile-view_module_ts"],{

/***/ 4652:
/*!*****************************************************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile-view/stu-profile-view-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuProfileViewPageRoutingModule": () => (/* binding */ StuProfileViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stu_profile_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-profile-view.page */ 4048);




const routes = [
    {
        path: '',
        component: _stu_profile_view_page__WEBPACK_IMPORTED_MODULE_0__.StuProfileViewPage
    }
];
let StuProfileViewPageRoutingModule = class StuProfileViewPageRoutingModule {
};
StuProfileViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StuProfileViewPageRoutingModule);



/***/ }),

/***/ 4493:
/*!*********************************************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile-view/stu-profile-view.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuProfileViewPageModule": () => (/* binding */ StuProfileViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stu_profile_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-profile-view-routing.module */ 4652);
/* harmony import */ var _stu_profile_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-profile-view.page */ 4048);







let StuProfileViewPageModule = class StuProfileViewPageModule {
};
StuProfileViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stu_profile_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.StuProfileViewPageRoutingModule
        ],
        declarations: [_stu_profile_view_page__WEBPACK_IMPORTED_MODULE_1__.StuProfileViewPage]
    })
], StuProfileViewPageModule);



/***/ }),

/***/ 4048:
/*!*******************************************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile-view/stu-profile-view.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuProfileViewPage": () => (/* binding */ StuProfileViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stu_profile_view_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-profile-view.page.html?ngResource */ 610);
/* harmony import */ var _stu_profile_view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-profile-view.page.scss?ngResource */ 2142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let StuProfileViewPage = class StuProfileViewPage {
    constructor() { }
    ngOnInit() {
    }
};
StuProfileViewPage.ctorParameters = () => [];
StuProfileViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-stu-profile-view',
        template: _stu_profile_view_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stu_profile_view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StuProfileViewPage);



/***/ }),

/***/ 2142:
/*!********************************************************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile-view/stu-profile-view.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHUtcHJvZmlsZS12aWV3LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 610:
/*!********************************************************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile-view/stu-profile-view.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>stu-profile-view</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_student_stu-profile_stu-profile-view_stu-profile-view_module_ts.js.map