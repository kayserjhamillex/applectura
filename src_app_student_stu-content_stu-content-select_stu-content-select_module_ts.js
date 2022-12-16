"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_student_stu-content_stu-content-select_stu-content-select_module_ts"],{

/***/ 7465:
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalService": () => (/* binding */ GlobalService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let GlobalService = class GlobalService {
    constructor() {
        this.apiUrlGlobal = 'https://promoting-reading-in-students.herokuapp.com';
    }
};
GlobalService.ctorParameters = () => [];
GlobalService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], GlobalService);



/***/ }),

/***/ 7809:
/*!*******************************************!*\
  !*** ./src/app/services/libro.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibroService": () => (/* binding */ LibroService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.service */ 7465);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);




let LibroService = class LibroService {
    constructor(http, wasa) {
        this.http = http;
        this.wasa = wasa;
        this.apiUrl = this.wasa.apiUrlGlobal + '/libro';
    }
    getLibros() {
        return this.http.get(`${this.apiUrl}`);
    }
    getLibro(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    deleteLibro(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
    // tslint:disable-next-line: no-shadowed-variable
    saveLibro(libro) {
        return this.http.post(`${this.apiUrl}/create`, libro);
    }
    updateLibro(id, updatedLibro) {
        return this.http.put(`${this.apiUrl}/update/${id}`, updatedLibro);
    }
};
LibroService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService }
];
LibroService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LibroService);



/***/ }),

/***/ 7229:
/*!*********************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-select/stu-content-select-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentSelectPageRoutingModule": () => (/* binding */ StuContentSelectPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stu_content_select_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-select.page */ 7818);




const routes = [
    {
        path: '',
        component: _stu_content_select_page__WEBPACK_IMPORTED_MODULE_0__.StuContentSelectPage
    }
];
let StuContentSelectPageRoutingModule = class StuContentSelectPageRoutingModule {
};
StuContentSelectPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StuContentSelectPageRoutingModule);



/***/ }),

/***/ 4840:
/*!*************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-select/stu-content-select.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentSelectPageModule": () => (/* binding */ StuContentSelectPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stu_content_select_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-select-routing.module */ 7229);
/* harmony import */ var _stu_content_select_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-content-select.page */ 7818);







let StuContentSelectPageModule = class StuContentSelectPageModule {
};
StuContentSelectPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stu_content_select_routing_module__WEBPACK_IMPORTED_MODULE_0__.StuContentSelectPageRoutingModule
        ],
        declarations: [_stu_content_select_page__WEBPACK_IMPORTED_MODULE_1__.StuContentSelectPage]
    })
], StuContentSelectPageModule);



/***/ }),

/***/ 7818:
/*!***********************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-select/stu-content-select.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentSelectPage": () => (/* binding */ StuContentSelectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stu_content_select_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-select.page.html?ngResource */ 5536);
/* harmony import */ var _stu_content_select_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-content-select.page.scss?ngResource */ 7856);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_libro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/libro.service */ 7809);



/* eslint-disable @typescript-eslint/naming-convention */



let StuContentSelectPage = class StuContentSelectPage {
    constructor(router, libroService) {
        this.router = router;
        this.libroService = libroService;
        this.libro = {
            id: 0,
            Titulo: '',
            Audio: '',
            Video: '',
            Imagen: '',
            Autor: ''
        };
    }
    ngOnInit() {
        const parametro = JSON.parse(localStorage.getItem('ellibro'));
        this.libroService.getLibro(parametro).subscribe(reslibro => {
            this.libro = reslibro;
        }, err => {
            console.log('Error get libro by id');
        });
    }
    porlectura() {
        this.router.navigate([
            'student',
            'stu-content',
            'stu-content-reading'
        ]);
    }
    porvideo() {
        this.router.navigate([
            'student',
            'stu-content',
            'stu-content-video'
        ]);
    }
    poraudio() {
        this.router.navigate([
            'student',
            'stu-content',
            'stu-content-audio'
        ]);
    }
};
StuContentSelectPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_libro_service__WEBPACK_IMPORTED_MODULE_2__.LibroService }
];
StuContentSelectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-stu-content-select',
        template: _stu_content_select_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stu_content_select_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StuContentSelectPage);



/***/ }),

/***/ 7856:
/*!************************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-select/stu-content-select.page.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = ".main_content_div {\n  background: white;\n  width: 93%;\n  border-top-right-radius: 55px;\n  border-bottom-right-radius: 55px;\n  margin-top: 20px;\n  padding-top: 30px;\n  padding: 10px;\n}\n.main_content_div .hello_lbl {\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n  margin-left: 5px;\n  margin-top: 10px;\n  color: #36BDBC;\n}\n.main_content_div .col_div {\n  margin: 10px;\n  background: linear-gradient(to top, #08A6AC, #36BDBC);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 150px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 25px;\n}\n.main_content_div .col_div img {\n  width: 125px;\n  height: 125px;\n}\n.main_content_div .col_div ion-label {\n  color: white;\n  margin-top: 5px;\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n  vertical-align: middle;\n}\n.animated {\n  --webkit-animation-duration: 5s;\n  animation-duration: 5s;\n  --webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.bounceInUp {\n  --webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n  }\n  80% {\n    -webkit-transform: translateY(10px);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dS1jb250ZW50LXNlbGVjdC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2VtZXN0cmUlMjA1XFxjdXJzb3MlMjBleHRyYWN1cnJpY3VsYXJlc1xcY2FsaWRhZCUyMGVkdWNhdGl2YVxcc2lzdGVtYS1sZWN0dXJhbFxcYXBwbGVjdHVyYS1hbmd1bGFyMTQtaW9uaWM2LWNhcGFjaXRvclxcc3JjXFxhcHBcXHN0dWRlbnRcXHN0dS1jb250ZW50XFxzdHUtY29udGVudC1zZWxlY3RcXHN0dS1jb250ZW50LXNlbGVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNDRjtBREFFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQUU7RUFDRSxZQUFBO0VBQ0EscURBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEREk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0dOO0FEREk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNHTjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUNBRjtBRHFCQTtFQUNFLG1DQUFBO0VBQ0EsMEJBQUE7QUNGRjtBREtBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EscUNBQUE7RUNGRjtFRElBO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO0VDRkY7RURJQTtJQUNFLG1DQUFBO0VDRkY7RURJQTtJQUNFLGdDQUFBO0VDRkY7QUFDRiIsImZpbGUiOiJzdHUtY29udGVudC1zZWxlY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXYge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHdpZHRoOiA5MyU7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDU1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDU1cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC5oZWxsb19sYmwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiAjMzZCREJDO1xyXG4gIH1cclxuICAuY29sX2RpdiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDhBNkFDLCAjMzZCREJDKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTI1cHg7XHJcbiAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmFuaW1hdGVkIHtcclxuICAtLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgLS13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluVXAge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYm91bmNlSW5VcCB7XHJcbiAgLS13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlSW5VcCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiA5MyU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1NXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVsbG9fbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogIzM2QkRCQztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2IHtcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDhBNkFDLCAjMzZCREJDKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXYgaW1nIHtcbiAgd2lkdGg6IDEyNXB4O1xuICBoZWlnaHQ6IDEyNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXYgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uYW5pbWF0ZWQge1xuICAtLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICAtLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5VcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XG4gIH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5ib3VuY2VJblVwIHtcbiAgLS13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZUluVXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xuICB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 5536:
/*!************************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-select/stu-content-select.page.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main_content_div_child\">\r\n  <div class=\"main_content_div animated bounceInUp\">\r\n    <ion-label class=\"hello_lbl\">\r\n      Como Prefiere su Libro o Cuento\r\n    </ion-label>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <div class=\"col_div\" (click)=\"porlectura()\">\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <img src=\"../../../../assets/iconos/book.png\" alt=\"libro\">\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-label>\r\n                  Lectura Textual\r\n                </ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col *ngIf=\"true\" size=\"12\">\r\n          <div class=\"col_div\" (click)=\"porvideo()\">\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <img src=\"../../../../assets/iconos/video-book.png\" alt=\"libro\">\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-label>\r\n                  Mediante Video\r\n                </ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col *ngIf=\"true\" size=\"12\">\r\n          <div class=\"col_div\" (click)=\"poraudio()\">\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <img src=\"../../../../assets/iconos/audio-book.png\" alt=\"libro\">\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-label>\r\n                  Mediante Audio\r\n                </ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_student_stu-content_stu-content-select_stu-content-select_module_ts.js.map