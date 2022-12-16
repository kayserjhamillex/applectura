"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_student_stu-profile_stu-profile_module_ts"],{

/***/ 7835:
/*!*******************************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuProfilePageRoutingModule": () => (/* binding */ StuProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stu_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-profile.page */ 7181);




const routes = [
    {
        path: '',
        component: _stu_profile_page__WEBPACK_IMPORTED_MODULE_0__.StuProfilePage,
        children: [
            {
                path: 'stu-profile-view',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_student_stu-profile_stu-profile-view_stu-profile-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./stu-profile-view/stu-profile-view.module */ 4493)).then(m => m.StuProfileViewPageModule)
            },
            {
                path: 'stu-profile-edit',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_services_global_service_ts-src_app_student_stu-profile_stu-profile-edit_stu-profile-e-49fad8")]).then(__webpack_require__.bind(__webpack_require__, /*! ./stu-profile-edit/stu-profile-edit.module */ 1182)).then(m => m.StuProfileEditPageModule)
            },
            {
                path: 'stu-profile-read-books',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_student_stu-profile_stu-profile-read-books_stu-profile-read-books_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./stu-profile-read-books/stu-profile-read-books.module */ 5438)).then(m => m.StuProfileReadBooksPageModule)
            },
            {
                path: 'stu-profile-awards',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_student_stu-profile_stu-profile-awards_stu-profile-awards_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./stu-profile-awards/stu-profile-awards.module */ 8547)).then(m => m.StuProfileAwardsPageModule)
            },
            {
                path: '',
                redirectTo: 'stu-profile-view',
                pathMatch: 'prefix'
            }
        ]
    },
];
let StuProfilePageRoutingModule = class StuProfilePageRoutingModule {
};
StuProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StuProfilePageRoutingModule);



/***/ }),

/***/ 5025:
/*!***********************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuProfilePageModule": () => (/* binding */ StuProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stu_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-profile-routing.module */ 7835);
/* harmony import */ var _stu_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-profile.page */ 7181);







let StuProfilePageModule = class StuProfilePageModule {
};
StuProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stu_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.StuProfilePageRoutingModule
        ],
        declarations: [_stu_profile_page__WEBPACK_IMPORTED_MODULE_1__.StuProfilePage]
    })
], StuProfilePageModule);



/***/ }),

/***/ 7181:
/*!*********************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuProfilePage": () => (/* binding */ StuProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stu_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-profile.page.html?ngResource */ 9326);
/* harmony import */ var _stu_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-profile.page.scss?ngResource */ 5965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let StuProfilePage = class StuProfilePage {
    constructor() { }
    ngOnInit() {
    }
};
StuProfilePage.ctorParameters = () => [];
StuProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-stu-profile',
        template: _stu_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stu_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StuProfilePage);



/***/ }),

/***/ 5965:
/*!**********************************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHUtcHJvZmlsZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9326:
/*!**********************************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_student_stu-profile_stu-profile_module_ts.js.map