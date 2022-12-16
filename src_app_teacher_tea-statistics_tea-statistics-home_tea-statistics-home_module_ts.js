"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_teacher_tea-statistics_tea-statistics-home_tea-statistics-home_module_ts"],{

/***/ 5379:
/*!**************************************************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics-home/tea-statistics-home-routing.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeaStatisticsHomePageRoutingModule": () => (/* binding */ TeaStatisticsHomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tea_statistics_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tea-statistics-home.page */ 8603);




const routes = [
    {
        path: '',
        component: _tea_statistics_home_page__WEBPACK_IMPORTED_MODULE_0__.TeaStatisticsHomePage
    }
];
let TeaStatisticsHomePageRoutingModule = class TeaStatisticsHomePageRoutingModule {
};
TeaStatisticsHomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TeaStatisticsHomePageRoutingModule);



/***/ }),

/***/ 663:
/*!******************************************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics-home/tea-statistics-home.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeaStatisticsHomePageModule": () => (/* binding */ TeaStatisticsHomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tea_statistics_home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tea-statistics-home-routing.module */ 5379);
/* harmony import */ var _tea_statistics_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tea-statistics-home.page */ 8603);







let TeaStatisticsHomePageModule = class TeaStatisticsHomePageModule {
};
TeaStatisticsHomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tea_statistics_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.TeaStatisticsHomePageRoutingModule
        ],
        declarations: [_tea_statistics_home_page__WEBPACK_IMPORTED_MODULE_1__.TeaStatisticsHomePage]
    })
], TeaStatisticsHomePageModule);



/***/ }),

/***/ 8603:
/*!****************************************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics-home/tea-statistics-home.page.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeaStatisticsHomePage": () => (/* binding */ TeaStatisticsHomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tea_statistics_home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tea-statistics-home.page.html?ngResource */ 1723);
/* harmony import */ var _tea_statistics_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tea-statistics-home.page.scss?ngResource */ 5353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_grado_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/grado.service */ 6339);
/* harmony import */ var src_app_services_reporte_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/reporte.service */ 7218);
/* harmony import */ var src_app_services_profesor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profesor.service */ 9847);
/* harmony import */ var src_app_services_estudiante_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/estudiante.service */ 4378);



/* eslint-disable @typescript-eslint/naming-convention */






let TeaStatisticsHomePage = class TeaStatisticsHomePage {
    constructor(router, gradoService, reporteService, profesorService, estudianteService) {
        this.router = router;
        this.gradoService = gradoService;
        this.reporteService = reporteService;
        this.profesorService = profesorService;
        this.estudianteService = estudianteService;
        this.grados = [];
        this.estudiantes = [];
        this.secciones = [
            { name: 'A' },
            { name: 'B' },
            { name: 'C' },
        ];
        this.profesor = {
            id: 0,
            Nombre: '',
            Apellido: '',
            Genero: '',
            Documento: '',
            Seccion: '',
            GradoId: 0
        };
        this.fechainicio = new Date();
        this.fechafin = new Date();
        this.parametro = {
            inicio: '',
            fin: ''
        };
        this.reporte = {
            intentos: 0,
            lecturas: 0,
            nota: 0,
            progreso: 0
        };
    }
    getgrados() {
        this.gradoService.getGrados().subscribe(resgrados => {
            this.grados = resgrados;
        }, err => {
            console.log('Error get all grados');
        });
    }
    onOptionsSelectGrado(event) {
        const value = event.target.value;
        this.gradoelegido = value;
    }
    onOptionsSelectSeccion(event) {
        const value = event.target.value;
        this.seccionelegida = value;
    }
    ngOnInit() {
        this.getgrados();
        this.cliente = JSON.parse(localStorage.getItem('usuario'));
        this.profesor = this.cliente;
        this.gradoelegido = this.profesor.GradoId;
        this.seccionelegida = this.profesor.Seccion;
        this.getestudiantes(this.gradoelegido, this.seccionelegida);
    }
    botonfiltrador() {
        this.getestudiantes(this.gradoelegido, this.seccionelegida);
    }
    generarestadisticas() {
        const inicio = new Date(this.fechainicio);
        const fin = new Date(this.fechafin);
        this.parametro.inicio = inicio.toISOString().split('T')[0];
        this.parametro.fin = fin.toISOString().split('T')[0];
        console.log(this.fechainicio, this.fechafin);
        console.log(this.parametro);
        // eslint-disable-next-line max-len
        this.reporteService.getstatisticsbygradeandsecccion(this.gradoelegido, this.seccionelegida.toString(), this.parametro.inicio, this.parametro.fin).subscribe(resstatics => {
            this.reporte = resstatics[0][0];
            console.log(this.reporte);
        }, err => {
            console.log('Error get estadisticas');
        });
    }
    getestudiantes(a, b) {
        this.estudianteService.getsearchEstudiantebygrado(a, b).subscribe(resestudiantes => {
            this.estudiantes = resestudiantes;
            console.log(this.estudiantes);
        }, err => {
            console.log('Error get estudiantes by grado and seccion elegida');
        });
    }
    goToStudent(parametro) {
        this.router.navigate([
            'teacher',
            'tea-statistics',
            'tea-statistics-forstudent',
            this.parametro.inicio,
            this.parametro.fin,
            parametro
        ]);
    }
};
TeaStatisticsHomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_grado_service__WEBPACK_IMPORTED_MODULE_2__.GradoService },
    { type: src_app_services_reporte_service__WEBPACK_IMPORTED_MODULE_3__.ReporteService },
    { type: src_app_services_profesor_service__WEBPACK_IMPORTED_MODULE_4__.ProfesorService },
    { type: src_app_services_estudiante_service__WEBPACK_IMPORTED_MODULE_5__.EstudianteService }
];
TeaStatisticsHomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tea-statistics-home',
        template: _tea_statistics_home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tea_statistics_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TeaStatisticsHomePage);



/***/ }),

/***/ 5353:
/*!*****************************************************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics-home/tea-statistics-home.page.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "section {\n  margin: 10px;\n}\n\n.title {\n  color: #ffffff;\n  margin: 30px auto 20px auto;\n  text-align: center;\n}\n\n.card-container {\n  --background: #ffffff;\n  border-radius: 5px;\n  color: #08A6AC;\n  margin: 20px;\n  padding: 15px;\n}\n\n.card {\n  color: black;\n  font-size: 15px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.button-io {\n  background-color: #b7ede7;\n  border-radius: 8px;\n  color: #08A6AC;\n  font-size: 12px;\n  height: 60px;\n  margin: 10px 20px 0 20px;\n}\n\nion-list {\n  background-color: transparent;\n  color: black;\n  margin: 20px;\n}\n\nion-item {\n  --background: #ffffff;\n  color: black;\n}\n\nion-select {\n  padding-left: 35%;\n}\n\n.date {\n  margin: 0 30px;\n  display: flex;\n  justify-content: space-around;\n}\n\n.date input {\n  border-radius: 10px;\n  color: #FFFFFF;\n  font-size: 13px;\n  width: 120px;\n  height: 40px;\n  text-transform: uppercase;\n}\n\n.date label {\n  color: #ffffff;\n  display: block;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYS1zdGF0aXN0aWNzLWhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlbWVzdHJlJTIwNVxcY3Vyc29zJTIwZXh0cmFjdXJyaWN1bGFyZXNcXGNhbGlkYWQlMjBlZHVjYXRpdmFcXHNpc3RlbWEtbGVjdHVyYWxcXGFwcGxlY3R1cmEtYW5ndWxhcjE0LWlvbmljNi1jYXBhY2l0b3JcXHNyY1xcYXBwXFx0ZWFjaGVyXFx0ZWEtc3RhdGlzdGljc1xcdGVhLXN0YXRpc3RpY3MtaG9tZVxcdGVhLXN0YXRpc3RpY3MtaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDSUY7O0FERkE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUNLRjs7QURIQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNNRjs7QURKQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQ09GOztBRExBO0VBQ0UsaUJBQUE7QUNRRjs7QURKQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNPRjs7QURMQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDUUY7O0FETkE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ1NGIiwiZmlsZSI6InRlYS1zdGF0aXN0aWNzLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6ICMwOEE2QUM7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLmNhcmQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmJ1dHRvbi1pbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3ZWRlNztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY29sb3I6ICMwOEE2QUM7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBtYXJnaW46IDEwcHggMjBweCAwIDIwcHg7XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuaW9uLXNlbGVjdHtcclxuICBwYWRkaW5nLWxlZnQ6IDM1JTtcclxufVxyXG5cclxuXHJcbi5kYXRle1xyXG4gIG1hcmdpbjogMCAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLmRhdGUgaW5wdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uZGF0ZSBsYWJlbCB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIiwic2VjdGlvbiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMzBweCBhdXRvIDIwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICMwOEE2QUM7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmNhcmQge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYnV0dG9uLWlvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3ZWRlNztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogIzA4QTZBQztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMTBweCAyMHB4IDAgMjBweDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDIwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBwYWRkaW5nLWxlZnQ6IDM1JTtcbn1cblxuLmRhdGUge1xuICBtYXJnaW46IDAgMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5kYXRlIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5kYXRlIGxhYmVsIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */";

/***/ }),

/***/ 1723:
/*!*****************************************************************************************************!*\
  !*** ./src/app/teacher/tea-statistics/tea-statistics-home/tea-statistics-home.page.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"body\">\r\n\r\n  <!-- <section>\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-select placeholder=\"GRADOS\">\r\n          <ion-select-option value=\"1\">1er año</ion-select-option>\r\n          <ion-select-option value=\"2\">2do año</ion-select-option>\r\n          <ion-select-option value=\"3\">3er año</ion-select-option>\r\n          <ion-select-option value=\"4\">4to año</ion-select-option>\r\n          <ion-select-option value=\"5\">5to año</ion-select-option>\r\n          <ion-select-option value=\"6\">6to año</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-list>\r\n  </section> -->\r\n  <section class=\"date\">\r\n    <div>\r\n      <label>DESDE:</label>\r\n      <input type=\"date\" name=\"fechainicio\"\r\n      [(ngModel)]=\"fechainicio\"\r\n      required autofocus tabindex=\"1\">\r\n    </div>\r\n    <div>\r\n      <label>HASTA:</label>\r\n      <input type=\"date\" name=\"fechafin\"\r\n      [(ngModel)]=\"fechafin\"\r\n      required tabindex=\"2\">\r\n    </div>\r\n    <br>\r\n  </section>\r\n  <ion-button  expand=\"block\" shape=\"round\" (click)=\"generarestadisticas()\">\r\n    Ver Estadisticas Generales\r\n  </ion-button>\r\n\r\n  <section>\r\n    <div>\r\n      <ion-card class=\"card-container\">\r\n        <ion-card-title class=\"card\">\r\n          {{reporte.intentos}} Intentos de Cuestionarios\r\n          </ion-card-title>\r\n      </ion-card>\r\n      <ion-card class=\"card-container\">\r\n        <ion-card-title class=\"card\">\r\n          {{reporte.lecturas}} libros leidos\r\n        </ion-card-title>\r\n      </ion-card>\r\n      <ion-card class=\"card-container\">\r\n        <ion-card-title class=\"card\">\r\n          {{reporte.nota}} Nota Promedio\r\n        </ion-card-title>\r\n      </ion-card>\r\n      <ion-card class=\"card-container\">\r\n        <ion-card-title class=\"card\">\r\n          {{reporte.progreso}} Progreso Promedio\r\n        </ion-card-title>\r\n      </ion-card>\r\n    </div>\r\n  </section>\r\n\r\n  <section>\r\n    <h2 class=\"title\">Alumnos</h2>\r\n\r\n    <div>\r\n      <ion-button *ngFor=\"let item of estudiantes\"\r\n        class=\"button button-io\"\r\n        expand=\"block\"\r\n        color=\"ion-color-tertiary-shade\"\r\n        (click)=\"goToStudent(item.id)\"\r\n        [disabled]=\"(reporte.progreso === 0)? true:false\"\r\n        > {{item.Nombre + ' ' + item.Apellido}} -\r\n        {{item.Documento}}\r\n        </ion-button\r\n      >\r\n    </div>\r\n  </section>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_teacher_tea-statistics_tea-statistics-home_tea-statistics-home_module_ts.js.map