"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_family_fam-home_fam-home_module_ts"],{

/***/ 2538:
/*!************************************************************!*\
  !*** ./src/app/family/fam-home/fam-home-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamHomePageRoutingModule": () => (/* binding */ FamHomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fam_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-home.page */ 6050);




const routes = [
    {
        path: '',
        component: _fam_home_page__WEBPACK_IMPORTED_MODULE_0__.FamHomePage
    }
];
let FamHomePageRoutingModule = class FamHomePageRoutingModule {
};
FamHomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FamHomePageRoutingModule);



/***/ }),

/***/ 8913:
/*!****************************************************!*\
  !*** ./src/app/family/fam-home/fam-home.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamHomePageModule": () => (/* binding */ FamHomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _fam_home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-home-routing.module */ 2538);
/* harmony import */ var _fam_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-home.page */ 6050);







let FamHomePageModule = class FamHomePageModule {
};
FamHomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fam_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.FamHomePageRoutingModule
        ],
        declarations: [_fam_home_page__WEBPACK_IMPORTED_MODULE_1__.FamHomePage]
    })
], FamHomePageModule);



/***/ }),

/***/ 6050:
/*!**************************************************!*\
  !*** ./src/app/family/fam-home/fam-home.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamHomePage": () => (/* binding */ FamHomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _fam_home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fam-home.page.html?ngResource */ 3913);
/* harmony import */ var _fam_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fam-home.page.scss?ngResource */ 662);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





let FamHomePage = class FamHomePage {
    constructor(router) {
        this.router = router;
        this.genero = false;
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
    ngOnInit() {
    }
};
FamHomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FamHomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-fam-home',
        template: _fam_home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fam_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FamHomePage);



/***/ }),

/***/ 662:
/*!***************************************************************!*\
  !*** ./src/app/family/fam-home/fam-home.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".main_user_div {\n  padding: 20px;\n  width: 100%;\n  height: 260px;\n  display: flex;\n  padding-top: 40px;\n  justify-content: space-between;\n  --background: linear-gradient(to right, #08A6AC, #36BDBC);\n}\n.main_user_div .first_div {\n  padding-top: 35px;\n}\n.main_user_div .first_div .welcome {\n  font-size: 18px;\n  color: white;\n  font-weight: 500;\n}\n.main_user_div .first_div .username {\n  font-size: 24px;\n  color: white;\n  font-weight: 600;\n}\n.main_user_div .second_div {\n  height: 100px;\n  width: 100px;\n  border: 3px solid white;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 50%;\n}\n.main_user_div .image_male {\n  background: url('studentboy.png') content-box no-repeat;\n  background-size: cover;\n}\n.main_user_div .image_female {\n  background: url('student.png') content-box no-repeat;\n  background-size: cover;\n}\n.main_content_div {\n  background: white;\n  width: 100%;\n  border-top-right-radius: 15px;\n  margin-top: -90px;\n  padding-top: 30px;\n}\n.main_content_div .hello_lbl {\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n  margin-left: 30px;\n  margin-top: 10px;\n  color: #08A6AC;\n}\n.main_content_div .col_div {\n  background: linear-gradient(to right, #08A6AC, #36BDBC);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 200px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n.main_content_div .col_div img {\n  width: 100px;\n}\n.main_content_div .col_div ion-label {\n  color: white;\n  margin-top: 5px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.animated {\n  --webkit-animation-duration: 5s;\n  animation-duration: 5s;\n  --webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.bounceInUp {\n  --webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n  }\n  80% {\n    -webkit-transform: translateY(10px);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbS1ob21lLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlbWVzdHJlJTIwNVxcY3Vyc29zJTIwZXh0cmFjdXJyaWN1bGFyZXNcXGNhbGlkYWQlMjBlZHVjYXRpdmFcXHNpc3RlbWEtbGVjdHVyYWxcXGFwcGxlY3R1cmEtYW5ndWxhcjE0LWlvbmljNi1jYXBhY2l0b3JcXHNyY1xcYXBwXFxmYW1pbHlcXGZhbS1ob21lXFxmYW0taG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUlBLHlEQUFBO0FDRkY7QURXRTtFQUNFLGlCQUFBO0FDVEo7QURVSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNSTjtBRFVJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1JOO0FEV0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNUSjtBRFdFO0VBQ0UsdURBQUE7RUFDQSxzQkFBQTtBQ1RKO0FEWUU7RUFDRSxvREFBQTtFQUNBLHNCQUFBO0FDVko7QURjQTtFQUVFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1pGO0FEYUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFJQSxjQUFBO0FDZEo7QUR3QkU7RUFJRSx1REFBQTtFQVNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUVBLDRCQUFBO0VBQ0EsZ0NBQUE7QUNsQ0o7QURtQ0k7RUFDRSxZQUFBO0FDakNOO0FEbUNJO0VBWUUsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUM1Q047QURrREE7RUFDRSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtBQy9DRjtBRG9FQTtFQUNFLG1DQUFBO0VBQ0EsMEJBQUE7QUNqREY7QURvREE7RUFDRTtJQUNFLFVBQUE7SUFDQSxxQ0FBQTtFQ2pERjtFRG1EQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtFQ2pERjtFRG1EQTtJQUNFLG1DQUFBO0VDakRGO0VEbURBO0lBQ0UsZ0NBQUE7RUNqREY7QUFDRiIsImZpbGUiOiJmYW0taG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl91c2VyX2RpdiB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI2MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC8vIHByaW1lcmEgb3BjaW9uXHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNiOTFkNzMsICNmOTUzYzYpO1xyXG4gIC8vIHNlZ3VuZGEgb3BjaW9uXHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwOEE2QUMsICMzNkJEQkMpO1xyXG4gIC8vIHRlcmNlcmEgb3BjaW9uXHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2NjdlZWEsICM3NjRiYTIpO1xyXG4gIC8vIGN1YXJ0YSBvcGNpb25cclxuICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI0Mzk0OSwgIzUxN2ZhNCk7XHJcbiAgLy8gcXVpbnRhIG9wY2lvblxyXG4gIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjQ2YjQ1LCAjZWVhODQ5KTtcclxuICAvLyBzZXh0YSBvcGNpb25cclxuICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJmMDc0MywgIzQxMjk1YSk7XHJcbiAgLmZpcnN0X2RpdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzVweDtcclxuICAgIC53ZWxjb21lIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAudXNlcm5hbWUge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNlY29uZF9kaXYge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5pbWFnZV9tYWxlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaWNvbm9zL3N0dWRlbnRib3kucG5nKSBjb250ZW50LWJveCBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLy8gYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ub3MvbWFsZS5wbmcpIGNvbnRlbnQtYm94IG5vLXJlcGVhdDtcclxuICB9XHJcbiAgLmltYWdlX2ZlbWFsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ljb25vcy9zdHVkZW50LnBuZykgY29udGVudC1ib3ggbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC8vIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbm9zL2ZlbWFsZS5wbmcpIGNvbnRlbnQtYm94IG5vLXJlcGVhdDtcclxuICB9XHJcbn1cclxuLm1haW5fY29udGVudF9kaXYge1xyXG5cclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICBtYXJnaW4tdG9wOiAtOTBweDtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAuaGVsbG9fbGJsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLy8gcHJpbWVyYSBvcGNpb25cclxuICAgIC8vIGNvbG9yOiAjYjkxZDczO1xyXG4gICAgLy8gc2VndW5kYSBvcGNpb25cclxuICAgIGNvbG9yOiAjMDhBNkFDO1xyXG4gICAgLy8gdGVyY2VyYSBvcGNpb25cclxuICAgIC8vIGNvbG9yOiAjNjY3ZWVhO1xyXG4gICAgLy8gY3VhcnRhIG9wY2lvblxyXG4gICAgLy8gY29sb3I6ICMyNDM5NDk7XHJcbiAgICAvLyBxdWludGEgb3BjaW9uXHJcbiAgICAvLyBjb2xvcjogI2Y0NmI0NTtcclxuICAgIC8vIHNleHRhIG9wY2lvblxyXG4gICAgLy8gY29sb3I6ICMyZjA3NDM7XHJcbiAgfVxyXG4gIC5jb2xfZGl2IHtcclxuICAgIC8vIHByaW1lcmEgb3BjaW9uXHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2I5MWQ3MywgI2Y5NTNjNik7XHJcbiAgICAvLyBzZWd1bmRhIG9wY2lvblxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDhBNkFDLCAjMzZCREJDKTtcclxuICAgIC8vIHRlcmNlcmEgb3BjaW9uXHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzY2N2VlYSwgIzc2NGJhMik7XHJcbiAgICAvLyBjdWFydGEgb3BjaW9uXHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI0Mzk0OSwgIzUxN2ZhNCk7XHJcbiAgICAvLyBxdWludGEgb3BjaW9uXHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y0NmI0NSwgI2VlYTg0OSk7XHJcbiAgICAvLyBzZXh0YSBvcGNpb25cclxuICAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmYwNzQzLCAjNDEyOTVhKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIC8vIHByaW1lcmEgb3BjaW9uXHJcbiAgICAgIC8vIGNvbG9yOiAjYjkxZDczO1xyXG4gICAgICAvLyBzZWd1bmRhIG9wY2lvblxyXG4gICAgICAvLyBjb2xvcjogIzA4QTZBQztcclxuICAgICAgLy8gdGVyY2VyYSBvcGNpb25cclxuICAgICAgLy8gY29sb3I6ICM2NjdlZWE7XHJcbiAgICAgIC8vIGN1YXJ0YSBvcGNpb25cclxuICAgICAgLy8gY29sb3I6ICMyNDM5NDk7XHJcbiAgICAgIC8vIHF1aW50YSBvcGNpb25cclxuICAgICAgLy8gY29sb3I6ICNmNDZiNDU7XHJcbiAgICAgIC8vIHNleHRhIG9wY2lvblxyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5hbmltYXRlZCB7XHJcbiAgLS13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gIC0td2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJblVwIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzApO1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmJvdW5jZUluVXAge1xyXG4gIC0td2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZUluVXAge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG4iLCIubWFpbl91c2VyX2RpdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA4QTZBQywgIzM2QkRCQyk7XG59XG4ubWFpbl91c2VyX2RpdiAuZmlyc3RfZGl2IHtcbiAgcGFkZGluZy10b3A6IDM1cHg7XG59XG4ubWFpbl91c2VyX2RpdiAuZmlyc3RfZGl2IC53ZWxjb21lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubWFpbl91c2VyX2RpdiAuZmlyc3RfZGl2IC51c2VybmFtZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fdXNlcl9kaXYgLnNlY29uZF9kaXYge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5tYWluX3VzZXJfZGl2IC5pbWFnZV9tYWxlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29ub3Mvc3R1ZGVudGJveS5wbmcpIGNvbnRlbnQtYm94IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tYWluX3VzZXJfZGl2IC5pbWFnZV9mZW1hbGUge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ljb25vcy9zdHVkZW50LnBuZykgY29udGVudC1ib3ggbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC05MHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWxsb19sYmwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogIzA4QTZBQztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDhBNkFDLCAjMzZCREJDKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2IGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5hbmltYXRlZCB7XG4gIC0td2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIC0td2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJblVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcbiAgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwKTtcbiAgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmJvdW5jZUluVXAge1xuICAtLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlSW5VcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XG4gIH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59Il19 */";

/***/ }),

/***/ 3913:
/*!***************************************************************!*\
  !*** ./src/app/family/fam-home/fam-home.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main_content_div_child\">\r\n  <div class=\"main_user_div\">\r\n    <div class=\"first_div\">\r\n      <ion-label class=\"welcome\">\r\n        Bienvenido\r\n      </ion-label>\r\n      <br>\r\n      <ion-label class=\"username\">\r\n        Daigo\r\n      </ion-label>\r\n    </div>\r\n    <div *ngIf=\"!genero\" class=\"second_div image_male\">\r\n    </div>\r\n    <div *ngIf=\"genero\" class=\"second_div image_female\">\r\n    </div>\r\n  </div>\r\n  <div class=\"main_content_div animated bounceInUp\">\r\n    <ion-label class=\"hello_lbl\">\r\n      Hola\r\n    </ion-label>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <!-- <ion-col size=\"6\" (click)=\"readbook()\">\r\n          <div class=\"col_div\">\r\n            <img *ngIf=\"genero\" src=\"../../../assets/iconos/readgirl.png\" alt=\"girl read\">\r\n            <img *ngIf=\"!genero\" src=\"../../../assets/iconos/readboy.png\" alt=\"boy read\">\r\n            <ion-label>\r\n              Leer libro\r\n            </ion-label>\r\n          </div>\r\n        </ion-col> -->\r\n        <ion-col size=\"6\" (click)=\"addbook()\">\r\n          <div class=\"col_div\">\r\n            <img src=\"../../../assets/iconos/book.png\" alt=\"nuevo libro\">\r\n            <ion-label>\r\n              Agregar Libro\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\" (click)=\"viewstatics()\">\r\n          <div class=\"col_div\">\r\n            <img *ngIf=\"genero\" src=\"../../../assets/iconos/student.png\" alt=\"girl\">\r\n            <img *ngIf=\"!genero\" src=\"../../../assets/iconos/studentboy.png\" alt=\"boy\">\r\n            <ion-label>\r\n              Estadisticas de mis hijos\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_family_fam-home_fam-home_module_ts.js.map