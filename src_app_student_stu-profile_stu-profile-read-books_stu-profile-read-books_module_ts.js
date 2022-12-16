"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_student_stu-profile_stu-profile-read-books_stu-profile-read-books_module_ts"],{

/***/ 3699:
/*!*****************************************************************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile-read-books/stu-profile-read-books-routing.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuProfileReadBooksPageRoutingModule": () => (/* binding */ StuProfileReadBooksPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stu_profile_read_books_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-profile-read-books.page */ 769);




const routes = [
    {
        path: '',
        component: _stu_profile_read_books_page__WEBPACK_IMPORTED_MODULE_0__.StuProfileReadBooksPage
    }
];
let StuProfileReadBooksPageRoutingModule = class StuProfileReadBooksPageRoutingModule {
};
StuProfileReadBooksPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StuProfileReadBooksPageRoutingModule);



/***/ }),

/***/ 5438:
/*!*********************************************************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile-read-books/stu-profile-read-books.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuProfileReadBooksPageModule": () => (/* binding */ StuProfileReadBooksPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stu_profile_read_books_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-profile-read-books-routing.module */ 3699);
/* harmony import */ var _stu_profile_read_books_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-profile-read-books.page */ 769);







let StuProfileReadBooksPageModule = class StuProfileReadBooksPageModule {
};
StuProfileReadBooksPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stu_profile_read_books_routing_module__WEBPACK_IMPORTED_MODULE_0__.StuProfileReadBooksPageRoutingModule
        ],
        declarations: [_stu_profile_read_books_page__WEBPACK_IMPORTED_MODULE_1__.StuProfileReadBooksPage]
    })
], StuProfileReadBooksPageModule);



/***/ }),

/***/ 769:
/*!*******************************************************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile-read-books/stu-profile-read-books.page.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuProfileReadBooksPage": () => (/* binding */ StuProfileReadBooksPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stu_profile_read_books_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-profile-read-books.page.html?ngResource */ 5369);
/* harmony import */ var _stu_profile_read_books_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-profile-read-books.page.scss?ngResource */ 9017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let StuProfileReadBooksPage = class StuProfileReadBooksPage {
    constructor() { }
    ngOnInit() {
    }
};
StuProfileReadBooksPage.ctorParameters = () => [];
StuProfileReadBooksPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-stu-profile-read-books',
        template: _stu_profile_read_books_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stu_profile_read_books_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StuProfileReadBooksPage);



/***/ }),

/***/ 9017:
/*!********************************************************************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile-read-books/stu-profile-read-books.page.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHUtcHJvZmlsZS1yZWFkLWJvb2tzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5369:
/*!********************************************************************************************************!*\
  !*** ./src/app/student/stu-profile/stu-profile-read-books/stu-profile-read-books.page.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>stu-profile-read-books</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_student_stu-profile_stu-profile-read-books_stu-profile-read-books_module_ts.js.map