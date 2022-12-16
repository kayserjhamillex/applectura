"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_student_stu-book_stu-book-list_stu-book-list_module_ts"],{

/***/ 4442:
/*!********************************************************************************!*\
  !*** ./src/app/student/stu-book/stu-book-list/stu-book-list-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuBookListPageRoutingModule": () => (/* binding */ StuBookListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stu_book_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-book-list.page */ 4334);




const routes = [
    {
        path: '',
        component: _stu_book_list_page__WEBPACK_IMPORTED_MODULE_0__.StuBookListPage
    }
];
let StuBookListPageRoutingModule = class StuBookListPageRoutingModule {
};
StuBookListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StuBookListPageRoutingModule);



/***/ }),

/***/ 230:
/*!************************************************************************!*\
  !*** ./src/app/student/stu-book/stu-book-list/stu-book-list.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuBookListPageModule": () => (/* binding */ StuBookListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stu_book_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-book-list-routing.module */ 4442);
/* harmony import */ var _stu_book_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-book-list.page */ 4334);







let StuBookListPageModule = class StuBookListPageModule {
};
StuBookListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stu_book_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.StuBookListPageRoutingModule
        ],
        declarations: [_stu_book_list_page__WEBPACK_IMPORTED_MODULE_1__.StuBookListPage]
    })
], StuBookListPageModule);



/***/ }),

/***/ 4334:
/*!**********************************************************************!*\
  !*** ./src/app/student/stu-book/stu-book-list/stu-book-list.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuBookListPage": () => (/* binding */ StuBookListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stu_book_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-book-list.page.html?ngResource */ 2365);
/* harmony import */ var _stu_book_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-book-list.page.scss?ngResource */ 7351);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_publicacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/publicacion.service */ 3203);






let StuBookListPage = class StuBookListPage {
    constructor(router, publicacionService) {
        this.router = router;
        this.publicacionService = publicacionService;
        this.libros = [];
    }
    ngOnInit() {
        this.cliente = JSON.parse(localStorage.getItem('usuario'));
        const parametro = this.cliente.id;
        this.publicacionService.getsearchPublicacionbyautor(parametro).subscribe(reslibros => {
            if (reslibros != null) {
                this.libros = reslibros;
            }
        }, err => {
            console.log('Error get libros con autoria de estudiante');
        });
    }
    crear() {
        this.router.navigate([
            'student',
            'stu-book',
            'stu-book-create'
        ]);
    }
    edit(dato) {
        this.router.navigate([
            'student',
            'stu-book',
            'stu-book-update',
            dato
        ]);
    }
};
StuBookListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_publicacion_service__WEBPACK_IMPORTED_MODULE_2__.PublicacionService }
];
StuBookListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-stu-book-list',
        template: _stu_book_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stu_book_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StuBookListPage);



/***/ }),

/***/ 7351:
/*!***********************************************************************************!*\
  !*** ./src/app/student/stu-book/stu-book-list/stu-book-list.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ".main_content_div {\n  background: white;\n  width: 100%;\n  border-top-right-radius: 75px;\n  margin-top: 20px;\n  padding-top: 30px;\n  padding: 10px;\n}\n.main_content_div .hello_lbl {\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n  margin-left: 5px;\n  margin-top: 10px;\n  color: #36BDBC;\n}\n.main_content_div .col_div {\n  margin: 10px;\n  background: linear-gradient(to right, #08A6AC, #36BDBC);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  text-align: center;\n  min-height: 150px;\n  max-width: 100%;\n  height: auto;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 20px;\n}\n.main_content_div .col_div img {\n  width: 100px;\n}\n.main_content_div .col_div ion-label {\n  padding: 5px;\n  color: white;\n  margin-top: 5px;\n  font-size: 26px;\n  font-weight: 600;\n}\n.main_content_div .col_div p {\n  color: white;\n  margin-top: 5px;\n  font-size: 15px;\n  font-weight: 600;\n}\n.animated {\n  --webkit-animation-duration: 5s;\n  animation-duration: 5s;\n  --webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.bounceInUp {\n  --webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n  }\n  80% {\n    -webkit-transform: translateY(10px);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dS1ib29rLWxpc3QucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlbWVzdHJlJTIwNVxcY3Vyc29zJTIwZXh0cmFjdXJyaWN1bGFyZXNcXGNhbGlkYWQlMjBlZHVjYXRpdmFcXHNpc3RlbWEtbGVjdHVyYWxcXGFwcGxlY3R1cmEtYW5ndWxhcjE0LWlvbmljNi1jYXBhY2l0b3JcXHNyY1xcYXBwXFxzdHVkZW50XFxzdHUtYm9va1xcc3R1LWJvb2stbGlzdFxcc3R1LWJvb2stbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQ0Y7QURBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNFSjtBREFFO0VBQ0UsWUFBQTtFQUNBLHVEQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0FDRUo7QURESTtFQUNFLFlBQUE7QUNHTjtBRERJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDR047QURESTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDR047QURFQTtFQUNFLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0FDQ0Y7QURtQkE7RUFDRSxtQ0FBQTtFQUNBLDBCQUFBO0FDQUY7QURHQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHFDQUFBO0VDQUY7RURFQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtFQ0FGO0VERUE7SUFDRSxtQ0FBQTtFQ0FGO0VERUE7SUFDRSxnQ0FBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3R1LWJvb2stbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDc1cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC5oZWxsb19sYmwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiAjMzZCREJDO1xyXG4gIH1cclxuICAuY29sX2RpdiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwOEE2QUMsICMzNkJEQkMpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFuaW1hdGVkIHtcclxuICAtLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgLS13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5VcCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwKTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5ib3VuY2VJblVwIHtcclxuICAtLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcclxuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBib3VuY2VJblVwIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuIiwiLm1haW5fY29udGVudF9kaXYge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3NXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWxsb19sYmwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjMzZCREJDO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXYge1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA4QTZBQywgIzM2QkRCQyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2IGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2IGlvbi1sYWJlbCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2IHAge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYW5pbWF0ZWQge1xuICAtLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICAtLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5VcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XG4gIH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5ib3VuY2VJblVwIHtcbiAgLS13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZUluVXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xuICB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 2365:
/*!***********************************************************************************!*\
  !*** ./src/app/student/stu-book/stu-book-list/stu-book-list.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main_content_div_child\">\r\n  <div class=\"main_content_div animated bounceInUp\">\r\n    <ion-button (click)=\"crear()\">\r\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n    </ion-button>\r\n    <ion-label class=\"hello_lbl\">\r\n      Libros Creador por Mi\r\n    </ion-label>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"12\" *ngFor=\"let item of libros\">\r\n          <div class=\"col_div\">\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <img [src]=\"item.libro.Imagen\" alt=\"libro\">\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-label (click)=\"edit(item.LibroId)\">\r\n                  Titulo del Libro\r\n                </ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_student_stu-book_stu-book-list_stu-book-list_module_ts.js.map