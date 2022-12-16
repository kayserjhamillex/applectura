"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_student_stu-home_stu-home_module_ts"],{

/***/ 291:
/*!*************************************************************!*\
  !*** ./src/app/student/stu-home/stu-home-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuHomePageRoutingModule": () => (/* binding */ StuHomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stu_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-home.page */ 3859);




const routes = [
    {
        path: '',
        component: _stu_home_page__WEBPACK_IMPORTED_MODULE_0__.StuHomePage
    }
];
let StuHomePageRoutingModule = class StuHomePageRoutingModule {
};
StuHomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StuHomePageRoutingModule);



/***/ }),

/***/ 513:
/*!*****************************************************!*\
  !*** ./src/app/student/stu-home/stu-home.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuHomePageModule": () => (/* binding */ StuHomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stu_home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-home-routing.module */ 291);
/* harmony import */ var _stu_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-home.page */ 3859);







let StuHomePageModule = class StuHomePageModule {
};
StuHomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stu_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.StuHomePageRoutingModule
        ],
        declarations: [_stu_home_page__WEBPACK_IMPORTED_MODULE_1__.StuHomePage]
    })
], StuHomePageModule);



/***/ }),

/***/ 3859:
/*!***************************************************!*\
  !*** ./src/app/student/stu-home/stu-home.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuHomePage": () => (/* binding */ StuHomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stu_home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-home.page.html?ngResource */ 5883);
/* harmony import */ var _stu_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-home.page.scss?ngResource */ 1649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



/* eslint-disable @typescript-eslint/naming-convention */


let StuHomePage = class StuHomePage {
    constructor(router) {
        this.router = router;
        this.estudiante = {
            id: 0,
            Nombre: '',
            Apellido: '',
            Genero: '',
            Documento: '',
            Seccion: '',
            GradoId: 0,
            grado: {
                id: 0,
                Nombre: ''
            }
        };
        this.genero = false;
    }
    ngOnInit() {
        this.cliente = JSON.parse(localStorage.getItem('usuario'));
        this.estudiante = this.cliente;
        if (this.estudiante.Genero === 'Femenino') {
            this.genero = true;
        }
        else {
            this.genero = false;
        }
    }
    gohome() {
        this.router.navigate([
            'student',
            'stu-home'
        ]);
    }
    readbook() {
        this.router.navigate([
            'student',
            'stu-content'
        ]);
    }
    viewprofile() {
        this.router.navigate([
            'student',
            'stu-detail'
        ]);
    }
    addbook() {
        this.router.navigate([
            'student',
            'stu-book'
        ]);
    }
};
StuHomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
StuHomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-stu-home',
        template: _stu_home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stu_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StuHomePage);



/***/ }),

/***/ 1649:
/*!****************************************************************!*\
  !*** ./src/app/student/stu-home/stu-home.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".main_user_div {\n  padding: 20px;\n  width: 100%;\n  height: 260px;\n  display: flex;\n  padding-top: 40px;\n  justify-content: space-between;\n  --background: linear-gradient(to bottom, #23A0AD, #30D6CC);\n}\n.main_user_div .first_div {\n  padding-top: 35px;\n}\n.main_user_div .first_div .welcome {\n  font-size: 18px;\n  color: white;\n  font-weight: 500;\n}\n.main_user_div .first_div .username {\n  font-size: 24px;\n  color: white;\n  font-weight: 600;\n}\n.main_user_div .second_div {\n  height: 100px;\n  width: 100px;\n  border: 3px solid white;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 50%;\n}\n.main_user_div .image_male {\n  background: url('studentboy.png') content-box no-repeat;\n  background-size: cover;\n}\n.main_user_div .image_female {\n  background: url('student.png') content-box no-repeat;\n  background-size: cover;\n}\n.main_content_div {\n  background: white;\n  width: 100%;\n  border-top-right-radius: 15px;\n  margin-top: -90px;\n  padding-top: 30px;\n}\n.main_content_div .hello_lbl {\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n  margin-left: 30px;\n  margin-top: 10px;\n  color: #08A6AC;\n}\n.main_content_div .col_div {\n  background: linear-gradient(to top, #23A0AD, #30D6CC);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 200px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n.main_content_div .col_div img {\n  width: 100px;\n}\n.main_content_div .col_div ion-label {\n  color: white;\n  margin-top: 5px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.animated {\n  --webkit-animation-duration: 5s;\n  animation-duration: 5s;\n  --webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.bounceInUp {\n  --webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n  }\n  80% {\n    -webkit-transform: translateY(10px);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dS1ob21lLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlbWVzdHJlJTIwNVxcY3Vyc29zJTIwZXh0cmFjdXJyaWN1bGFyZXNcXGNhbGlkYWQlMjBlZHVjYXRpdmFcXHNpc3RlbWEtbGVjdHVyYWxcXGFwcGxlY3R1cmEtYW5ndWxhcjE0LWlvbmljNi1jYXBhY2l0b3JcXHNyY1xcYXBwXFxzdHVkZW50XFxzdHUtaG9tZVxcc3R1LWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwREFBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtBQ0VKO0FEREk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDR047QURESTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNHTjtBREFFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDRUo7QURBRTtFQUNFLHVEQUFBO0VBQ0Esc0JBQUE7QUNFSjtBREFFO0VBQ0Usb0RBQUE7RUFDQSxzQkFBQTtBQ0VKO0FEQ0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNFRjtBRERFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0dKO0FEREU7RUFDRSxxREFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7QUNHSjtBREZJO0VBQ0UsWUFBQTtBQ0lOO0FERkk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0lOO0FEQ0E7RUFDRSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtBQ0VGO0FEa0JBO0VBQ0UsbUNBQUE7RUFDQSwwQkFBQTtBQ0NGO0FERUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxxQ0FBQTtFQ0NGO0VEQ0E7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7RUNDRjtFRENBO0lBQ0UsbUNBQUE7RUNDRjtFRENBO0lBQ0UsZ0NBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InN0dS1ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX3VzZXJfZGl2IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMjNBMEFELCAjMzBENkNDKTtcclxuICAuZmlyc3RfZGl2IHtcclxuICAgIHBhZGRpbmctdG9wOiAzNXB4O1xyXG4gICAgLndlbGNvbWUge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIC51c2VybmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2Vjb25kX2RpdiB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgLmltYWdlX21hbGUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29ub3Mvc3R1ZGVudGJveS5wbmcpIGNvbnRlbnQtYm94IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIC5pbWFnZV9mZW1hbGUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29ub3Mvc3R1ZGVudC5wbmcpIGNvbnRlbnQtYm94IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG59XHJcbi5tYWluX2NvbnRlbnRfZGl2IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICBtYXJnaW4tdG9wOiAtOTBweDtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAuaGVsbG9fbGJsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6ICMwOEE2QUM7XHJcbiAgfVxyXG4gIC5jb2xfZGl2IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMyM0EwQUQsICMzMEQ2Q0MpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hbmltYXRlZCB7XHJcbiAgLS13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gIC0td2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluVXAge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYm91bmNlSW5VcCB7XHJcbiAgLS13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlSW5VcCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluX3VzZXJfZGl2IHtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzIzQTBBRCwgIzMwRDZDQyk7XG59XG4ubWFpbl91c2VyX2RpdiAuZmlyc3RfZGl2IHtcbiAgcGFkZGluZy10b3A6IDM1cHg7XG59XG4ubWFpbl91c2VyX2RpdiAuZmlyc3RfZGl2IC53ZWxjb21lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubWFpbl91c2VyX2RpdiAuZmlyc3RfZGl2IC51c2VybmFtZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fdXNlcl9kaXYgLnNlY29uZF9kaXYge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5tYWluX3VzZXJfZGl2IC5pbWFnZV9tYWxlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29ub3Mvc3R1ZGVudGJveS5wbmcpIGNvbnRlbnQtYm94IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tYWluX3VzZXJfZGl2IC5pbWFnZV9mZW1hbGUge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ljb25vcy9zdHVkZW50LnBuZykgY29udGVudC1ib3ggbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC05MHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWxsb19sYmwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogIzA4QTZBQztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzIzQTBBRCwgIzMwRDZDQyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2RpdiBpbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2RpdiBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYW5pbWF0ZWQge1xuICAtLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICAtLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5VcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XG4gIH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5ib3VuY2VJblVwIHtcbiAgLS13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZUluVXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xuICB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 5883:
/*!****************************************************************!*\
  !*** ./src/app/student/stu-home/stu-home.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main_content_div_child\">\r\n  <div class=\"main_user_div\">\r\n    <div class=\"first_div\">\r\n      <ion-label class=\"welcome\">\r\n        Bienvenido\r\n      </ion-label>\r\n      <br>\r\n      <ion-label class=\"username\">\r\n        {{estudiante.Nombre + ' ' + estudiante.Apellido}}\r\n      </ion-label>\r\n    </div>\r\n    <div slot=\"end\" *ngIf=\"!genero\" class=\"second_div image_male\">\r\n    </div>\r\n    <div slot=\"end\" *ngIf=\"genero\" class=\"second_div image_female\">\r\n    </div>\r\n  </div>\r\n  <div class=\"main_content_div animated bounceInUp\">\r\n    <ion-label class=\"hello_lbl\">\r\n      Hola\r\n    </ion-label>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"6\" (click)=\"readbook()\">\r\n          <div class=\"col_div\">\r\n            <img *ngIf=\"genero\" src=\"../../../assets/iconos/readgirl.png\" alt=\"girl read\">\r\n            <img *ngIf=\"!genero\" src=\"../../../assets/iconos/readboy.png\" alt=\"boy read\">\r\n            <ion-label>\r\n              Leer libro\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"6\" (click)=\"addbook()\">\r\n          <div class=\"col_div\">\r\n            <img src=\"../../../assets/iconos/book.png\" alt=\"nuevo libro\">\r\n            <ion-label>\r\n              Agregar Libro\r\n            </ion-label>\r\n          </div>\r\n        </ion-col> -->\r\n        <ion-col size=\"6\" (click)=\"viewprofile()\">\r\n          <div class=\"col_div\">\r\n            <img *ngIf=\"genero\" src=\"../../../assets/iconos/student.png\" alt=\"girl\">\r\n            <img *ngIf=\"!genero\" src=\"../../../assets/iconos/studentboy.png\" alt=\"boy\">\r\n            <ion-label>\r\n              Perfil\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_student_stu-home_stu-home_module_ts.js.map