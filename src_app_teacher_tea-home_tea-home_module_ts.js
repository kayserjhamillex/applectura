"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_teacher_tea-home_tea-home_module_ts"],{

/***/ 3571:
/*!*************************************************************!*\
  !*** ./src/app/teacher/tea-home/tea-home-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeaHomePageRoutingModule": () => (/* binding */ TeaHomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tea_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tea-home.page */ 3605);




const routes = [
    {
        path: '',
        component: _tea_home_page__WEBPACK_IMPORTED_MODULE_0__.TeaHomePage
    }
];
let TeaHomePageRoutingModule = class TeaHomePageRoutingModule {
};
TeaHomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TeaHomePageRoutingModule);



/***/ }),

/***/ 2260:
/*!*****************************************************!*\
  !*** ./src/app/teacher/tea-home/tea-home.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeaHomePageModule": () => (/* binding */ TeaHomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tea_home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tea-home-routing.module */ 3571);
/* harmony import */ var _tea_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tea-home.page */ 3605);







let TeaHomePageModule = class TeaHomePageModule {
};
TeaHomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tea_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.TeaHomePageRoutingModule
        ],
        declarations: [_tea_home_page__WEBPACK_IMPORTED_MODULE_1__.TeaHomePage]
    })
], TeaHomePageModule);



/***/ }),

/***/ 3605:
/*!***************************************************!*\
  !*** ./src/app/teacher/tea-home/tea-home.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeaHomePage": () => (/* binding */ TeaHomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tea_home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tea-home.page.html?ngResource */ 1700);
/* harmony import */ var _tea_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tea-home.page.scss?ngResource */ 1290);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);



/* eslint-disable @typescript-eslint/naming-convention */


let TeaHomePage = class TeaHomePage {
    constructor(router) {
        this.router = router;
        this.profesor = {
            id: 0,
            Nombre: '',
            Apellido: '',
            Genero: '',
            Documento: '',
            GradoId: 0,
            Seccion: '',
            grado: {
                id: 0,
                Nombre: ''
            }
        };
        this.genero = false;
    }
    ngOnInit() {
        this.cliente = JSON.parse(localStorage.getItem('usuario'));
        this.profesor = this.cliente;
        if (this.profesor.Genero === 'Femenino') {
            this.genero = true;
        }
        else {
            this.genero = false;
        }
    }
    viewstatics() {
        this.router.navigate([
            'teacher',
            'tea-statistics'
        ]);
    }
    addbook() {
        this.router.navigate([
            'teacher',
            'tea-book'
        ]);
    }
};
TeaHomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
TeaHomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tea-home',
        template: _tea_home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tea_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TeaHomePage);



/***/ }),

/***/ 1290:
/*!****************************************************************!*\
  !*** ./src/app/teacher/tea-home/tea-home.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".main_user_div {\n  padding: 20px;\n  width: 100%;\n  height: 260px;\n  display: flex;\n  padding-top: 40px;\n  justify-content: space-between;\n  --background: linear-gradient(to right, #08A6AC, #36BDBC);\n}\n.main_user_div .first_div {\n  padding-top: 35px;\n}\n.main_user_div .first_div .welcome {\n  font-size: 18px;\n  color: white;\n  font-weight: 500;\n}\n.main_user_div .first_div .username {\n  font-size: 24px;\n  color: white;\n  font-weight: 600;\n}\n.main_user_div .second_div {\n  height: 100px;\n  width: 100px;\n  border: 3px solid white;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 50%;\n}\n.main_user_div .image_male {\n  background: url('studentboy.png') content-box no-repeat;\n  background-size: cover;\n}\n.main_user_div .image_female {\n  background: url('student.png') content-box no-repeat;\n  background-size: cover;\n}\n.main_content_div {\n  background: white;\n  width: 100%;\n  border-top-right-radius: 15px;\n  margin-top: -90px;\n  padding-top: 30px;\n}\n.main_content_div .hello_lbl {\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n  margin-left: 30px;\n  margin-top: 10px;\n  color: #08A6AC;\n}\n.main_content_div .col_div {\n  background: linear-gradient(to right, #08A6AC, #36BDBC);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 200px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n.main_content_div .col_div img {\n  width: 100px;\n}\n.main_content_div .col_div ion-label {\n  color: white;\n  margin-top: 5px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.animated {\n  --webkit-animation-duration: 5s;\n  animation-duration: 5s;\n  --webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.bounceInUp {\n  --webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n  }\n  80% {\n    -webkit-transform: translateY(10px);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYS1ob21lLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlbWVzdHJlJTIwNVxcY3Vyc29zJTIwZXh0cmFjdXJyaWN1bGFyZXNcXGNhbGlkYWQlMjBlZHVjYXRpdmFcXHNpc3RlbWEtbGVjdHVyYWxcXGFwcGxlY3R1cmEtYW5ndWxhcjE0LWlvbmljNi1jYXBhY2l0b3JcXHNyY1xcYXBwXFx0ZWFjaGVyXFx0ZWEtaG9tZVxcdGVhLWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFJQSx5REFBQTtBQ0ZGO0FEV0U7RUFDRSxpQkFBQTtBQ1RKO0FEVUk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDUk47QURVSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNSTjtBRFdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDVEo7QURXRTtFQUNFLHVEQUFBO0VBQ0Esc0JBQUE7QUNUSjtBRFlFO0VBQ0Usb0RBQUE7RUFDQSxzQkFBQTtBQ1ZKO0FEY0E7RUFFRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNaRjtBRGFFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBSUEsY0FBQTtBQ2RKO0FEd0JFO0VBSUUsdURBQUE7RUFTQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFFQSw0QkFBQTtFQUNBLGdDQUFBO0FDbENKO0FEbUNJO0VBQ0UsWUFBQTtBQ2pDTjtBRG1DSTtFQVlFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDNUNOO0FEa0RBO0VBQ0UsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUMvQ0Y7QURvRUE7RUFDRSxtQ0FBQTtFQUNBLDBCQUFBO0FDakRGO0FEb0RBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EscUNBQUE7RUNqREY7RURtREE7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7RUNqREY7RURtREE7SUFDRSxtQ0FBQTtFQ2pERjtFRG1EQTtJQUNFLGdDQUFBO0VDakRGO0FBQ0YiLCJmaWxlIjoidGVhLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fdXNlcl9kaXYge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAvLyBwcmltZXJhIG9wY2lvblxyXG4gIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYjkxZDczLCAjZjk1M2M2KTtcclxuICAvLyBzZWd1bmRhIG9wY2lvblxyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDhBNkFDLCAjMzZCREJDKTtcclxuICAvLyB0ZXJjZXJhIG9wY2lvblxyXG4gIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNjY3ZWVhLCAjNzY0YmEyKTtcclxuICAvLyBjdWFydGEgb3BjaW9uXHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDM5NDksICM1MTdmYTQpO1xyXG4gIC8vIHF1aW50YSBvcGNpb25cclxuICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y0NmI0NSwgI2VlYTg0OSk7XHJcbiAgLy8gc2V4dGEgb3BjaW9uXHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyZjA3NDMsICM0MTI5NWEpO1xyXG4gIC5maXJzdF9kaXYge1xyXG4gICAgcGFkZGluZy10b3A6IDM1cHg7XHJcbiAgICAud2VsY29tZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLnVzZXJuYW1lIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zZWNvbmRfZGl2IHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAuaW1hZ2VfbWFsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ljb25vcy9zdHVkZW50Ym95LnBuZykgY29udGVudC1ib3ggbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC8vIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbm9zL21hbGUucG5nKSBjb250ZW50LWJveCBuby1yZXBlYXQ7XHJcbiAgfVxyXG4gIC5pbWFnZV9mZW1hbGUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29ub3Mvc3R1ZGVudC5wbmcpIGNvbnRlbnQtYm94IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25vcy9mZW1hbGUucG5nKSBjb250ZW50LWJveCBuby1yZXBlYXQ7XHJcbiAgfVxyXG59XHJcbi5tYWluX2NvbnRlbnRfZGl2IHtcclxuXHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogLTkwcHg7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgLmhlbGxvX2xibCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIC8vIHByaW1lcmEgb3BjaW9uXHJcbiAgICAvLyBjb2xvcjogI2I5MWQ3MztcclxuICAgIC8vIHNlZ3VuZGEgb3BjaW9uXHJcbiAgICBjb2xvcjogIzA4QTZBQztcclxuICAgIC8vIHRlcmNlcmEgb3BjaW9uXHJcbiAgICAvLyBjb2xvcjogIzY2N2VlYTtcclxuICAgIC8vIGN1YXJ0YSBvcGNpb25cclxuICAgIC8vIGNvbG9yOiAjMjQzOTQ5O1xyXG4gICAgLy8gcXVpbnRhIG9wY2lvblxyXG4gICAgLy8gY29sb3I6ICNmNDZiNDU7XHJcbiAgICAvLyBzZXh0YSBvcGNpb25cclxuICAgIC8vIGNvbG9yOiAjMmYwNzQzO1xyXG4gIH1cclxuICAuY29sX2RpdiB7XHJcbiAgICAvLyBwcmltZXJhIG9wY2lvblxyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNiOTFkNzMsICNmOTUzYzYpO1xyXG4gICAgLy8gc2VndW5kYSBvcGNpb25cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA4QTZBQywgIzM2QkRCQyk7XHJcbiAgICAvLyB0ZXJjZXJhIG9wY2lvblxyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2NjdlZWEsICM3NjRiYTIpO1xyXG4gICAgLy8gY3VhcnRhIG9wY2lvblxyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDM5NDksICM1MTdmYTQpO1xyXG4gICAgLy8gcXVpbnRhIG9wY2lvblxyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNDZiNDUsICNlZWE4NDkpO1xyXG4gICAgLy8gc2V4dGEgb3BjaW9uXHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJmMDc0MywgIzQxMjk1YSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAvLyBwcmltZXJhIG9wY2lvblxyXG4gICAgICAvLyBjb2xvcjogI2I5MWQ3MztcclxuICAgICAgLy8gc2VndW5kYSBvcGNpb25cclxuICAgICAgLy8gY29sb3I6ICMwOEE2QUM7XHJcbiAgICAgIC8vIHRlcmNlcmEgb3BjaW9uXHJcbiAgICAgIC8vIGNvbG9yOiAjNjY3ZWVhO1xyXG4gICAgICAvLyBjdWFydGEgb3BjaW9uXHJcbiAgICAgIC8vIGNvbG9yOiAjMjQzOTQ5O1xyXG4gICAgICAvLyBxdWludGEgb3BjaW9uXHJcbiAgICAgIC8vIGNvbG9yOiAjZjQ2YjQ1O1xyXG4gICAgICAvLyBzZXh0YSBvcGNpb25cclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uYW5pbWF0ZWQge1xyXG4gIC0td2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuICAtLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5VcCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwKTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5ib3VuY2VJblVwIHtcclxuICAtLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcclxuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBib3VuY2VJblVwIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuIiwiLm1haW5fdXNlcl9kaXYge1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwOEE2QUMsICMzNkJEQkMpO1xufVxuLm1haW5fdXNlcl9kaXYgLmZpcnN0X2RpdiB7XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xufVxuLm1haW5fdXNlcl9kaXYgLmZpcnN0X2RpdiAud2VsY29tZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm1haW5fdXNlcl9kaXYgLmZpcnN0X2RpdiAudXNlcm5hbWUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluX3VzZXJfZGl2IC5zZWNvbmRfZGl2IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubWFpbl91c2VyX2RpdiAuaW1hZ2VfbWFsZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaWNvbm9zL3N0dWRlbnRib3kucG5nKSBjb250ZW50LWJveCBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubWFpbl91c2VyX2RpdiAuaW1hZ2VfZmVtYWxlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29ub3Mvc3R1ZGVudC5wbmcpIGNvbnRlbnQtYm94IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAtOTBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVsbG9fbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICMwOEE2QUM7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2RpdiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA4QTZBQywgIzM2QkRCQyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2RpdiBpbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2RpdiBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYW5pbWF0ZWQge1xuICAtLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICAtLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5VcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XG4gIH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5ib3VuY2VJblVwIHtcbiAgLS13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZUluVXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xuICB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 1700:
/*!****************************************************************!*\
  !*** ./src/app/teacher/tea-home/tea-home.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main_content_div_child\">\r\n  <div class=\"main_user_div\">\r\n    <div class=\"first_div\">\r\n      <ion-label class=\"welcome\">\r\n        Bienvenido\r\n      </ion-label>\r\n      <br>\r\n      <ion-label class=\"username\">\r\n        {{profesor.Nombre + ' ' + profesor.Apellido}}\r\n      </ion-label>\r\n    </div>\r\n    <div *ngIf=\"!genero\" class=\"second_div image_male\">\r\n    </div>\r\n    <div *ngIf=\"genero\" class=\"second_div image_female\">\r\n    </div>\r\n  </div>\r\n  <div class=\"main_content_div animated bounceInUp\">\r\n    <ion-label class=\"hello_lbl\">\r\n      Hola\r\n    </ion-label>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <!-- <ion-col size=\"6\" (click)=\"readbook()\">\r\n          <div class=\"col_div\">\r\n            <img *ngIf=\"genero\" src=\"../../../assets/iconos/readgirl.png\" alt=\"girl read\">\r\n            <img *ngIf=\"!genero\" src=\"../../../assets/iconos/readboy.png\" alt=\"boy read\">\r\n            <ion-label>\r\n              Leer libro\r\n            </ion-label>\r\n          </div>\r\n        </ion-col> -->\r\n        <ion-col size=\"6\" (click)=\"addbook()\">\r\n          <div class=\"col_div\">\r\n            <img src=\"../../../assets/iconos/book.png\" alt=\"nuevo libro\">\r\n            <ion-label>\r\n              Agregar Libro\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" (click)=\"viewstatics()\">\r\n          <div class=\"col_div\">\r\n            <img *ngIf=\"genero\" src=\"../../../assets/iconos/student.png\" alt=\"girl\">\r\n            <img *ngIf=\"!genero\" src=\"../../../assets/iconos/studentboy.png\" alt=\"boy\">\r\n            <ion-label>\r\n              Estadisticas de Estudiantes\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_teacher_tea-home_tea-home_module_ts.js.map