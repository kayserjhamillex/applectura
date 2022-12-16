"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_student_stu-profile_stu-profile-awards_stu-profile-awards_module_ts"],{

/***/ 3204:
/*!*********************************************************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile-awards/stu-profile-awards-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuProfileAwardsPageRoutingModule": () => (/* binding */ StuProfileAwardsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stu_profile_awards_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-profile-awards.page */ 454);




const routes = [
    {
        path: '',
        component: _stu_profile_awards_page__WEBPACK_IMPORTED_MODULE_0__.StuProfileAwardsPage
    }
];
let StuProfileAwardsPageRoutingModule = class StuProfileAwardsPageRoutingModule {
};
StuProfileAwardsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StuProfileAwardsPageRoutingModule);



/***/ }),

/***/ 8547:
/*!*************************************************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile-awards/stu-profile-awards.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuProfileAwardsPageModule": () => (/* binding */ StuProfileAwardsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stu_profile_awards_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-profile-awards-routing.module */ 3204);
/* harmony import */ var _stu_profile_awards_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-profile-awards.page */ 454);







let StuProfileAwardsPageModule = class StuProfileAwardsPageModule {
};
StuProfileAwardsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stu_profile_awards_routing_module__WEBPACK_IMPORTED_MODULE_0__.StuProfileAwardsPageRoutingModule
        ],
        declarations: [_stu_profile_awards_page__WEBPACK_IMPORTED_MODULE_1__.StuProfileAwardsPage]
    })
], StuProfileAwardsPageModule);



/***/ }),

/***/ 454:
/*!***********************************************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile-awards/stu-profile-awards.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuProfileAwardsPage": () => (/* binding */ StuProfileAwardsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stu_profile_awards_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-profile-awards.page.html?ngResource */ 4373);
/* harmony import */ var _stu_profile_awards_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-profile-awards.page.scss?ngResource */ 7038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let StuProfileAwardsPage = class StuProfileAwardsPage {
    constructor() { }
    ngOnInit() {
    }
};
StuProfileAwardsPage.ctorParameters = () => [];
StuProfileAwardsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-stu-profile-awards',
        template: _stu_profile_awards_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stu_profile_awards_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StuProfileAwardsPage);



/***/ }),

/***/ 7038:
/*!************************************************************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile-awards/stu-profile-awards.page.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHUtcHJvZmlsZS1hd2FyZHMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4373:
/*!************************************************************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile-awards/stu-profile-awards.page.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>stu-profile-awards</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_student_stu-profile_stu-profile-awards_stu-profile-awards_module_ts.js.map