"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_services_global_service_ts-src_app_student_stu-content_stu-content-accompanying_stu-c-188854"],{

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

/***/ 5959:
/*!*********************************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-accompanying/stu-content-accompanying-routing.module.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentAccompanyingPageRoutingModule": () => (/* binding */ StuContentAccompanyingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stu_content_accompanying_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-accompanying.page */ 3809);




const routes = [
    {
        path: '',
        component: _stu_content_accompanying_page__WEBPACK_IMPORTED_MODULE_0__.StuContentAccompanyingPage
    }
];
let StuContentAccompanyingPageRoutingModule = class StuContentAccompanyingPageRoutingModule {
};
StuContentAccompanyingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StuContentAccompanyingPageRoutingModule);



/***/ }),

/***/ 3221:
/*!*************************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-accompanying/stu-content-accompanying.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentAccompanyingPageModule": () => (/* binding */ StuContentAccompanyingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stu_content_accompanying_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-accompanying-routing.module */ 5959);
/* harmony import */ var _stu_content_accompanying_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-content-accompanying.page */ 3809);







let StuContentAccompanyingPageModule = class StuContentAccompanyingPageModule {
};
StuContentAccompanyingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stu_content_accompanying_routing_module__WEBPACK_IMPORTED_MODULE_0__.StuContentAccompanyingPageRoutingModule
        ],
        declarations: [_stu_content_accompanying_page__WEBPACK_IMPORTED_MODULE_1__.StuContentAccompanyingPage]
    })
], StuContentAccompanyingPageModule);



/***/ }),

/***/ 3809:
/*!***********************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-accompanying/stu-content-accompanying.page.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentAccompanyingPage": () => (/* binding */ StuContentAccompanyingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stu_content_accompanying_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-accompanying.page.html?ngResource */ 1367);
/* harmony import */ var _stu_content_accompanying_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-content-accompanying.page.scss?ngResource */ 8576);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var src_app_services_responsable_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/responsable.service */ 936);








let StuContentAccompanyingPage = class StuContentAccompanyingPage {
    constructor(router, toast, datoService, responsableService) {
        this.router = router;
        this.toast = toast;
        this.datoService = datoService;
        this.responsableService = responsableService;
        /* eslint-disable @typescript-eslint/naming-convention */
        this.dato = '';
        this.responsable = {
            id: 0,
            Nombre: '',
            Apellido: '',
            Genero: '',
            Documento: ''
        };
        this.responsable1 = {
            id: 0,
            Nombre: '',
            Apellido: '',
            Genero: '',
            Documento: ''
        };
        this.genero = [
            {
                id: 1,
                name: 'Masculino'
            },
            {
                id: 2,
                name: 'Femenino'
            }
        ];
        this.botones = true;
        this.verformulario = false;
    }
    toasteleccion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
    handleChange(ev) {
        this.responsable.Genero = ev.target.value;
    }
    ngOnInit() {
    }
    atras() {
        this.router.navigate([
            'student',
            'stu-content',
            'stu-content-list'
        ]);
    }
    solitario() {
        this.datoService.saveaconpaniante(1);
        this.router.navigate([
            'student',
            'stu-content',
            'stu-content-select'
        ]);
    }
    acompaniado() {
        this.verformulario = true;
        this.botones = false;
    }
    buscar(dato) {
        this.responsableService.getsearchResponsablebydoc(dato).subscribe(res => {
            this.responsable1 = res;
            console.log(res);
            this.datoService.saveaconpaniante(this.responsable1.id);
            this.iraseleccionar();
        }, err => {
            console.log('Error get search doc responsable');
        });
    }
    siguiente() {
        delete this.responsable.id;
        console.log(this.responsable);
        // this.responsableService.saveResponsable(this.responsable).subscribe(
        //   res => {
        //     this.responsable1 = res;
        //     console.log(res);
        //     this.datoService.saveaconpaniante(this.responsable1.id);
        //     this.iraseleccionar();
        //   }, err => {
        //     console.log('Error save responsable');
        //   }
        // );
    }
    iraseleccionar() {
        this.router.navigate([
            'student',
            'stu-content',
            'stu-content-select'
        ]);
    }
};
StuContentAccompanyingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: src_app_services_responsable_service__WEBPACK_IMPORTED_MODULE_3__.ResponsableService }
];
StuContentAccompanyingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-stu-content-accompanying',
        template: _stu_content_accompanying_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stu_content_accompanying_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StuContentAccompanyingPage);



/***/ }),

/***/ 8576:
/*!************************************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-accompanying/stu-content-accompanying.page.scss?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = ".main_content_div {\n  background: white;\n  width: 100%;\n  border-top-right-radius: 75px;\n  margin-top: 20px;\n  padding-top: 30px;\n  padding: 10px;\n}\n.main_content_div .hello_lbl {\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n  margin-left: 5px;\n  margin-top: 10px;\n  color: #36BDBC;\n}\n.main_content_div .col_div_accompanying {\n  background: linear-gradient(to right, #08A6AC, #36BDBC);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 50px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-top-left-radius: 75px;\n  border-bottom-right-radius: 75px;\n}\n.main_content_div .col_div_accompanying ion-label {\n  color: white;\n  margin-top: 5px;\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n}\n.main_content_div .col_div {\n  background: linear-gradient(to right, #08A6AC, #36BDBC);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 500px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-top-left-radius: 75px;\n  border-bottom-right-radius: 75px;\n}\n.main_content_div .col_div ion-list {\n  background: transparent;\n}\n.main_content_div .col_div ion-list ion-item {\n  --background: transparent;\n  --border-color: 2px solid white;\n}\n.main_content_div .col_div ion-list ion-item ion-label {\n  text-align: start;\n}\n.main_content_div .col_div ion-list ion-item ion-input {\n  font-size: 20px;\n  font-weight: 400;\n}\n.main_content_div .col_div ion-list ion-item ion-icon {\n  color: #000;\n}\n.main_content_div .col_div ion-list ion-item ion-select {\n  width: 100%;\n  max-width: 100%;\n  color: white;\n}\n.main_content_div .col_div ion-list ion-item ion-select ion-select-option {\n  width: 100%;\n  color: white;\n}\n.main_content_div .col_div img {\n  width: 100px;\n}\n.main_content_div .col_div ion-label {\n  color: white;\n  margin-top: 5px;\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n}\n.animated {\n  --webkit-animation-duration: 5s;\n  animation-duration: 5s;\n  --webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.bounceInUp {\n  --webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n  }\n  80% {\n    -webkit-transform: translateY(10px);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dS1jb250ZW50LWFjY29tcGFueWluZy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2VtZXN0cmUlMjA1XFxjdXJzb3MlMjBleHRyYWN1cnJpY3VsYXJlc1xcY2FsaWRhZCUyMGVkdWNhdGl2YVxcc2lzdGVtYS1sZWN0dXJhbFxcYXBwbGVjdHVyYS1hbmd1bGFyMTQtaW9uaWM2LWNhcGFjaXRvclxcc3JjXFxhcHBcXHN0dWRlbnRcXHN0dS1jb250ZW50XFxzdHUtY29udGVudC1hY2NvbXBhbnlpbmdcXHN0dS1jb250ZW50LWFjY29tcGFueWluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQ0Y7QURBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNFSjtBREFFO0VBQ0UsdURBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFFQSw0QkFBQTtFQUNBLGdDQUFBO0FDQ0o7QURBSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNFTjtBREVFO0VBQ0UsdURBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFFQSw0QkFBQTtFQUNBLGdDQUFBO0FDREo7QURFSTtFQUNFLHVCQUFBO0FDQU47QURDTTtFQUNFLHlCQUFBO0VBQ0EsK0JBQUE7QUNDUjtBREFRO0VBQ0UsaUJBQUE7QUNFVjtBREFRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDRVY7QURBUTtFQUVFLFdBQUE7QUNDVjtBRENRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ1Y7QURBVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRVo7QURNSTtFQUNFLFlBQUE7QUNKTjtBRE1JO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0pOO0FEVUE7RUFDRSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtBQ1BGO0FENEJBO0VBQ0UsbUNBQUE7RUFDQSwwQkFBQTtBQ1RGO0FEWUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxxQ0FBQTtFQ1RGO0VEV0E7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7RUNURjtFRFdBO0lBQ0UsbUNBQUE7RUNURjtFRFdBO0lBQ0UsZ0NBQUE7RUNURjtBQUNGIiwiZmlsZSI6InN0dS1jb250ZW50LWFjY29tcGFueWluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDc1cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC5oZWxsb19sYmwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiAjMzZCREJDO1xyXG4gIH1cclxuICAuY29sX2Rpdl9hY2NvbXBhbnlpbmcge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDhBNkFDLCAjMzZCREJDKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNzVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3NXB4O1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbF9kaXYge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDhBNkFDLCAjMzZCREJDKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDc1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNzVweDtcclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG5cclxuICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tc2VsZWN0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgaW9uLXNlbGVjdC1vcHRpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmFuaW1hdGVkIHtcclxuICAtLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgLS13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluVXAge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYm91bmNlSW5VcCB7XHJcbiAgLS13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlSW5VcCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNzVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVsbG9fbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogIzM2QkRCQztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2FjY29tcGFueWluZyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA4QTZBQywgIzM2QkRCQyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3NXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNzVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2FjY29tcGFueWluZyBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2RpdiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA4QTZBQywgIzM2QkRCQyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNzVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDc1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2RpdiBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXYgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXYgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2RpdiBpb24tbGlzdCBpb24taXRlbSBpb24taW5wdXQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2RpdiBpb24tbGlzdCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXYgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1zZWxlY3QgaW9uLXNlbGVjdC1vcHRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXYgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXYgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYW5pbWF0ZWQge1xuICAtLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICAtLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5VcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XG4gIH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5ib3VuY2VJblVwIHtcbiAgLS13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZUluVXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xuICB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 1367:
/*!************************************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-accompanying/stu-content-accompanying.page.html?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main_content_div_child\">\r\n  <div class=\"main_content_div animated bounceInUp\">\r\n    <ion-label class=\"hello_lbl\">\r\n      Como Realizara su Lectura\r\n    </ion-label>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <div class=\"col_div_accompanying\">\r\n            <ion-label>\r\n              Solitari@\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <div class=\"col_div_accompanying\">\r\n            <ion-label>\r\n              Acompañad@\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col *ngIf=\"!verformulario\" size=\"12\">\r\n          <div class=\"col_div\">\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-label slot=\"start\">\r\n                  Documento:\r\n                </ion-label>\r\n                <ion-input\r\n                  type=\"text\"\r\n                  name=\"dni\"\r\n                  required\r\n                  auto-focus\r\n                  tabindex=\"1\"\r\n                  onKeypress=\"if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;\"\r\n                  [(ngModel)]=\"dato\"></ion-input>\r\n                <ion-button\r\n                  slot=\"end\"\r\n                  color=\"primary\">\r\n                  <ion-icon\r\n                    name=\"arrow-redo-outline\"></ion-icon>\r\n                </ion-button>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item>\r\n                <ion-label slot=\"start\">\r\n                  Nombre:\r\n                </ion-label>\r\n                <ion-input\r\n                  type=\"text\"\r\n                  name=\"Nombre\"\r\n                  required\r\n                  auto-focus\r\n                  tabindex=\"1\"\r\n                  [(ngModel)]=\"responsable.Nombre\">\r\n                </ion-input>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item>\r\n                <ion-label slot=\"start\">\r\n                  Apellido:\r\n                </ion-label>\r\n                <ion-input\r\n                  type=\"text\"\r\n                  name=\"Apellido\"\r\n                  required\r\n                  tabindex=\"2\"\r\n                  [(ngModel)]=\"responsable.Apellido\">\r\n                </ion-input>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item>\r\n                <ion-label slot=\"start\">\r\n                  Documento:\r\n                </ion-label>\r\n                <ion-input\r\n                  type=\"text\"\r\n                  name=\"Documento\"\r\n                  required\r\n                  tabindex=\"3\"\r\n                  onKeypress=\"if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;\"\r\n                  [(ngModel)]=\"responsable.Documento\">\r\n                </ion-input>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item>\r\n                <ion-label slot=\"start\">\r\n                  Genero:\r\n                </ion-label>\r\n                <ion-select slot=\"end\"\r\n                  interface=\"popover\"\r\n                  required\r\n                  [(ngModel)]=\"responsable.Genero\"\r\n                  placeholder=\"Genero?\"\r\n                  (ionChange)=\"handleChange($event)\"\r\n                  tabindex=\"4\">\r\n                  <ion-select-option\r\n                    *ngFor=\"let item of genero\"\r\n                    [value]=\"item.name\">\r\n                    {{ item.name }}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item>\r\n                <ion-button\r\n                color=\"light\"\r\n                expand=\"block\"\r\n                  shape=\"round\"\r\n                  size=\"large\"\r\n                  (click)=\"siguiente()\"\r\n                  [disabled]=\"(responsable.Nombre === '' || responsable.Apellido === '' || responsable.Genero === '' || responsable.Documento === '')? true:false\">\r\n                  Siguiente\r\n                </ion-button>\r\n                <!-- <ion-button\r\n                  color=\"primary\"\r\n                  expand=\"block\"\r\n                  shape=\"round\"\r\n                  size=\"large\"\r\n                  (click)=\"siguiente()\"\r\n                  [disabled]=\"(responsable.Nombre === '' || responsable.Apellido === '' || responsable.Genero === '' || responsable.Documento === '')? true:false\">\r\n                  Siguiente\r\n                </ion-button> -->\r\n              </ion-item>\r\n            </ion-list>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_services_global_service_ts-src_app_student_stu-content_stu-content-accompanying_stu-c-188854.js.map