"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_services_global_service_ts-src_app_student_stu-content_stu-content-list_stu-content-l-ba4a2a"],{

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

/***/ 568:
/*!*****************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-list/stu-content-list-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentListPageRoutingModule": () => (/* binding */ StuContentListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stu_content_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-list.page */ 2508);




const routes = [
    {
        path: '',
        component: _stu_content_list_page__WEBPACK_IMPORTED_MODULE_0__.StuContentListPage
    }
];
let StuContentListPageRoutingModule = class StuContentListPageRoutingModule {
};
StuContentListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StuContentListPageRoutingModule);



/***/ }),

/***/ 755:
/*!*********************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-list/stu-content-list.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentListPageModule": () => (/* binding */ StuContentListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stu_content_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-list-routing.module */ 568);
/* harmony import */ var _stu_content_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-content-list.page */ 2508);







let StuContentListPageModule = class StuContentListPageModule {
};
StuContentListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stu_content_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.StuContentListPageRoutingModule
        ],
        declarations: [_stu_content_list_page__WEBPACK_IMPORTED_MODULE_1__.StuContentListPage]
    })
], StuContentListPageModule);



/***/ }),

/***/ 2508:
/*!*******************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-list/stu-content-list.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentListPage": () => (/* binding */ StuContentListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stu_content_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-list.page.html?ngResource */ 4866);
/* harmony import */ var _stu_content_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-content-list.page.scss?ngResource */ 2263);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var src_app_services_grado_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/grado.service */ 6339);
/* harmony import */ var src_app_services_publicacion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/publicacion.service */ 3203);









let StuContentListPage = class StuContentListPage {
    constructor(router, toast, datoService, gradoService, cuentoService) {
        this.router = router;
        this.toast = toast;
        this.datoService = datoService;
        this.gradoService = gradoService;
        this.cuentoService = cuentoService;
        this.libros = [];
        this.grados = [];
        this.librosfiltrados = [];
        this.vistaeleccion = true;
        this.vistalibros = false;
        this.nohaydisponibles = false;
        this.ruta = 'lectura';
    }
    home() {
        this.router.navigate([
            'student',
            'stu-home'
        ]);
    }
    toasteleccion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Cuento o libro seleccionado',
                duration: 1000,
                animated: true,
                color: 'success',
                position: 'top'
            });
            toast.present();
        });
    }
    getgrados() {
        this.gradoService.getGrados().subscribe(res => {
            this.grados = res;
            console.log(this.grados);
        }, err => {
            console.log('error get all grados');
        });
    }
    getlibros() {
        const parametro = 'interna';
        this.cuentoService.getsearchPublicacionbyprocedencia(parametro).subscribe(res => {
            this.libros = res;
            console.log(this.libros);
            this.vistaeleccion = true;
            this.vistalibros = false;
        }, err => {
            console.log('Error get publicaciones internas');
        });
    }
    getlibrobygrade(parametro) {
        this.cuentoService.getsearchPublicacionbygrado(parametro).subscribe(res => {
            this.libros = res;
            console.log(this.libros);
            this.vistaeleccion = true;
            this.vistalibros = false;
        }, err => {
            console.log('Error get publicaciones internas y grado');
        });
    }
    porlectura() {
        const array = [];
        for (const item of this.libros) {
            if (item.libro.Video === '' && item.libro.Audio === '') {
                array.push(item);
                this.librosfiltrados = array;
            }
        }
        this.vistalibros = true;
        this.vistaeleccion = false;
        this.ruta = 'lectura';
    }
    porvideo() {
        const array = [];
        for (const item of this.libros) {
            if (item.libro.Video !== '') {
                array.push(item);
                this.librosfiltrados = array;
            }
        }
        console.log(this.librosfiltrados);
        this.vistalibros = true;
        this.vistaeleccion = false;
        this.ruta = 'video';
    }
    poraudio() {
        const array = [];
        for (const item of this.libros) {
            if (item.libro.Audio !== '') {
                array.push(item);
                this.librosfiltrados = array;
            }
        }
        console.log(this.librosfiltrados);
        this.vistalibros = true;
        this.vistaeleccion = false;
        this.ruta = 'audio';
    }
    ngOnInit() {
        this.getgrados();
        this.getlibros();
    }
    seleccion(dato) {
        this.datoService.rentedbook(dato);
        if (this.ruta === 'lectura') {
            this.router.navigate([
                'student',
                'stu-content',
                'stu-content-reading'
            ]);
        }
        else if (this.ruta === 'video') {
            this.router.navigate([
                'student',
                'stu-content',
                'stu-content-video'
            ]);
        }
        else if (this.ruta === 'audio') {
            this.router.navigate([
                'student',
                'stu-content',
                'stu-content-audio'
            ]);
        }
    }
};
StuContentListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: src_app_services_grado_service__WEBPACK_IMPORTED_MODULE_3__.GradoService },
    { type: src_app_services_publicacion_service__WEBPACK_IMPORTED_MODULE_4__.PublicacionService }
];
StuContentListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-stu-content-list',
        template: _stu_content_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stu_content_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StuContentListPage);



/***/ }),

/***/ 2263:
/*!********************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-list/stu-content-list.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = ".main_content_div_grados {\n  background: transparent;\n  width: 100%;\n  border-top-right-radius: 75px;\n  padding-top: 5px;\n}\n.main_content_div_grados ion-button {\n  --ion-color: white;\n}\n.main_content_div {\n  background: white;\n  width: 95%;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  margin-top: 20px;\n  padding-top: 30px;\n  padding: 10px;\n}\n.main_content_div .hello_lbl {\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n  margin-left: 5px;\n  margin-top: 10px;\n  color: #36BDBC;\n}\n.main_content_div .col_div {\n  background: linear-gradient(to right, #08A6AC, #36BDBC);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  text-align: center;\n  min-height: 150px;\n  max-width: 100%;\n  height: auto;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 20px;\n}\n.main_content_div .col_div img {\n  width: 100px;\n}\n.main_content_div .col_div ion-label {\n  padding: 5px;\n  color: white;\n  margin-top: 5px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.main_content_div .col_div p {\n  color: white;\n  margin-top: 5px;\n  font-size: 15px;\n  font-weight: 600;\n}\n.animated {\n  --webkit-animation-duration: 5s;\n  animation-duration: 5s;\n  --webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.bounceInUp {\n  --webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n  }\n  80% {\n    -webkit-transform: translateY(10px);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dS1jb250ZW50LWxpc3QucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlbWVzdHJlJTIwNVxcY3Vyc29zJTIwZXh0cmFjdXJyaWN1bGFyZXNcXGNhbGlkYWQlMjBlZHVjYXRpdmFcXHNpc3RlbWEtbGVjdHVyYWxcXGFwcGxlY3R1cmEtYW5ndWxhcjE0LWlvbmljNi1jYXBhY2l0b3JcXHNyY1xcYXBwXFxzdHVkZW50XFxzdHUtY29udGVudFxcc3R1LWNvbnRlbnQtbGlzdFxcc3R1LWNvbnRlbnQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0FDRUo7QURDQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0VGO0FEREU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDR0o7QURERTtFQUNFLHVEQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0FDR0o7QURGSTtFQUNFLFlBQUE7QUNJTjtBREZJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSU47QURGSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSU47QURDQTtFQUNFLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0FDRUY7QURrQkE7RUFDRSxtQ0FBQTtFQUNBLDBCQUFBO0FDQ0Y7QURFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHFDQUFBO0VDQ0Y7RURDQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtFQ0NGO0VEQ0E7SUFDRSxtQ0FBQTtFQ0NGO0VEQ0E7SUFDRSxnQ0FBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3R1LWNvbnRlbnQtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2Rpdl9ncmFkb3Mge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3NXB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWlvbi1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcbi5tYWluX2NvbnRlbnRfZGl2IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB3aWR0aDogOTUlO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICAuaGVsbG9fbGJsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogIzM2QkRCQztcclxuICB9XHJcbiAgLmNvbF9kaXYge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDhBNkFDLCAjMzZCREJDKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hbmltYXRlZCB7XHJcbiAgLS13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gIC0td2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluVXAge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYm91bmNlSW5VcCB7XHJcbiAgLS13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlSW5VcCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluX2NvbnRlbnRfZGl2X2dyYWRvcyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDc1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2Rpdl9ncmFkb3MgaW9uLWJ1dHRvbiB7XG4gIC0taW9uLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDk1JTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWxsb19sYmwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjMzZCREJDO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXYge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwOEE2QUMsICMzNkJEQkMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTUwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2RpdiBpbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2RpdiBpb24tbGFiZWwge1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2RpdiBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmFuaW1hdGVkIHtcbiAgLS13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgLS13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluVXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xuICB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzApO1xuICB9XG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4uYm91bmNlSW5VcCB7XG4gIC0td2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcbn1cblxuQGtleWZyYW1lcyBib3VuY2VJblVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcbiAgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICB9XG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 4866:
/*!********************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-list/stu-content-list.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main_content_div_child\">\r\n  <div class=\"main_content_div_grados\">\r\n    <ion-grid fixed>\r\n      <ion-row class=\"ion-justify-content-between\">\r\n        <ion-col size=\"1\">\r\n          <ion-button color=\"light\" (click)=\"getlibros()\">\r\n            <ion-icon name=\"library-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"1\">\r\n          <ion-button color=\"light\" (click)=\"getlibrobygrade('primero')\">\r\n            1°\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"1\">\r\n          <ion-button color=\"light\" (click)=\"getlibrobygrade('segundo')\">\r\n            2°\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"1\">\r\n          <ion-button color=\"light\" (click)=\"getlibrobygrade('tercero')\">\r\n            3°\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"1\">\r\n          <ion-button color=\"light\" (click)=\"getlibrobygrade('cuarto')\">\r\n            4°\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"1\">\r\n          <ion-button color=\"light\" (click)=\"getlibrobygrade('quinto')\">\r\n            5°\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"1\">\r\n          <ion-button color=\"light\" (click)=\"getlibrobygrade('sexto')\">\r\n            6°\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <div class=\"main_content_div animated bounceInUp\">\r\n    <ion-label *ngIf=\"vistaeleccion\" class=\"hello_lbl\">\r\n      Como Prefiere su Libro o Cuento\r\n    </ion-label>\r\n    <ion-grid *ngIf=\"vistaeleccion\" fixed>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <div class=\"col_div\" (click)=\"porlectura()\">\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <img src=\"../../../../assets/iconos/book.png\" alt=\"libro\">\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-label>\r\n                  Lectura Textual\r\n                </ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col *ngIf=\"true\" size=\"12\">\r\n          <div class=\"col_div\" (click)=\"porvideo()\">\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <img src=\"../../../../assets/iconos/video-book.png\" alt=\"libro\">\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-label>\r\n                  Mediante Video\r\n                </ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col *ngIf=\"true\" size=\"12\">\r\n          <div class=\"col_div\" (click)=\"poraudio()\">\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <img src=\"../../../../assets/iconos/audio-book.png\" alt=\"libro\">\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-label>\r\n                  Mediante Audio\r\n                </ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-label *ngIf=\"vistalibros\" class=\"hello_lbl\">\r\n      Libros Disponibles\r\n    </ion-label>\r\n    <ion-grid *ngIf=\"vistalibros\" fixed>\r\n      <ion-row>\r\n        <ion-col size=\"12\" *ngFor=\"let item of librosfiltrados\">\r\n          <div (click)=\"seleccion(item.LibroId)\" class=\"col_div\">\r\n            <img [src]=\"item.libro.Imagen\" alt=\"libro\">\r\n            <ion-label>\r\n              {{item.libro.Titulo}}\r\n            </ion-label>\r\n            <p>\r\n              {{item.libro.Autor}}\r\n            </p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_services_global_service_ts-src_app_student_stu-content_stu-content-list_stu-content-l-ba4a2a.js.map