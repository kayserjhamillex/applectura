"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_student_stu-content_stu-content-audio_stu-content-audio_module_ts"],{

/***/ 6453:
/*!*******************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-audio/stu-content-audio-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentAudioPageRoutingModule": () => (/* binding */ StuContentAudioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stu_content_audio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-audio.page */ 4179);




const routes = [
    {
        path: '',
        component: _stu_content_audio_page__WEBPACK_IMPORTED_MODULE_0__.StuContentAudioPage
    }
];
let StuContentAudioPageRoutingModule = class StuContentAudioPageRoutingModule {
};
StuContentAudioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StuContentAudioPageRoutingModule);



/***/ }),

/***/ 9312:
/*!***********************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-audio/stu-content-audio.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentAudioPageModule": () => (/* binding */ StuContentAudioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stu_content_audio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-audio-routing.module */ 6453);
/* harmony import */ var _stu_content_audio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-content-audio.page */ 4179);







let StuContentAudioPageModule = class StuContentAudioPageModule {
};
StuContentAudioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stu_content_audio_routing_module__WEBPACK_IMPORTED_MODULE_0__.StuContentAudioPageRoutingModule
        ],
        declarations: [_stu_content_audio_page__WEBPACK_IMPORTED_MODULE_1__.StuContentAudioPage]
    })
], StuContentAudioPageModule);



/***/ }),

/***/ 4179:
/*!*********************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-audio/stu-content-audio.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuContentAudioPage": () => (/* binding */ StuContentAudioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stu_content_audio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stu-content-audio.page.html?ngResource */ 9492);
/* harmony import */ var _stu_content_audio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stu-content-audio.page.scss?ngResource */ 1127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_libro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/libro.service */ 7809);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_progreso_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/progreso.service */ 6421);
/* harmony import */ var src_app_services_cuestionario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cuestionario.service */ 6743);
/* harmony import */ var yt_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yt-player */ 7613);
/* harmony import */ var yt_player__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yt_player__WEBPACK_IMPORTED_MODULE_5__);



/* eslint-disable @typescript-eslint/naming-convention */






let StuContentAudioPage = class StuContentAudioPage {
    constructor(router, libroService, progresoService, cuestionarioService) {
        this.router = router;
        this.libroService = libroService;
        this.progresoService = progresoService;
        this.cuestionarioService = cuestionarioService;
        /* eslint-disable @typescript-eslint/naming-convention */
        this.libro = {
            id: 0,
            Titulo: '',
            Audio: '',
            Video: '',
            Imagen: '',
            Autor: ''
        };
        this.progreso = {
            id: 0,
            Progreso: 0,
            Reaccion: '',
            Comentario: '',
            FinalAlternativo: '',
            FechaLectura: new Date(),
            NotaCuestionario: 0,
            NumeroIntento: 0,
            LibroId: 0,
            EstudianteId: 0
        };
        this.progresocreate = {
            id: 0,
            Progreso: 0,
            Reaccion: '',
            Comentario: '',
            FinalAlternativo: '',
            FechaLectura: new Date(),
            NotaCuestionario: 0,
            NumeroIntento: 0,
            LibroId: 0,
            EstudianteId: 0
        };
        this.estudiante = {
            id: 0,
            Nombre: '',
            Apellido: '',
            Genero: '',
            Documento: '',
            GradoId: 0,
            grado: {
                id: 0,
                Nombre: '',
            },
        };
        this.existencia = 'no existe';
        this.estado = '';
        this.haycuestionario = true;
        this.resolviocuestionario = false;
        this.cuestionarios = [];
    }
    ngOnInit() {
        const player = new yt_player__WEBPACK_IMPORTED_MODULE_5__('#player', {
            height: '250',
            width: '310', controls: false
        });
        player.setVolume(100);
        player.on('timeupdate', (seconds) => {
            const procc = seconds / player.getDuration();
            if (procc >= 0.95) {
                console.log('Video completado');
                if (this.progreso.Progreso === 0) {
                    this.progreso.Progreso = 50;
                }
            }
        });
        const parametro = JSON.parse(localStorage.getItem('ellibro'));
        const parestudiante = JSON.parse(localStorage.getItem('usuario'));
        console.log(parametro);
        this.libroService.getLibro(parametro).subscribe(reslibro => {
            this.libro = reslibro;
            console.log(this.libro);
            const par = this.libro.Audio;
            player.load(par); //URL
            this.cuestionarioService.getsearchCuestionariobylibro(parametro).subscribe(rescuestionarios => {
                if (Object.entries(rescuestionarios).length > 0) {
                    this.cuestionarios = rescuestionarios;
                    this.haycuestionario = true;
                }
                else {
                    console.log('No hay Cuestionarios');
                }
            });
            this.progresoService.getProgresoidividual(parametro, parestudiante.id).subscribe(resprogreso => {
                if (resprogreso !== null) {
                    this.progreso = resprogreso;
                }
                else {
                    this.progresocreate.LibroId = parametro;
                    this.progresocreate.EstudianteId = parestudiante;
                    this.progresocreate.Progreso = 0;
                    this.progresoService.saveProgreso(this.progresocreate).subscribe(resnewprogreso => {
                        this.progreso = resnewprogreso;
                        this.estado = 'iniciado';
                        window.location.reload();
                    }, err => {
                        console.log('Error create progreso');
                    });
                }
            }, err => {
                console.log('Error get proceso by libro y alumno');
            });
        }, err => {
            console.log('Error get libro by id');
        });
    }
    elegir(dato) {
        this.progreso.Reaccion = dato;
    }
    deselegir() {
        this.progreso.Reaccion = '';
    }
    validarprogreso() {
        if (this.progreso.Progreso < 100) {
            if (this.progreso.Progreso === 50) {
                if (this.progreso.Comentario.length > 10) {
                    this.progreso.Progreso = this.progreso.Progreso + 20;
                }
                if (this.progreso.FinalAlternativo.length > 20) {
                    this.progreso.Progreso = this.progreso.Progreso + 30;
                }
            }
            if (this.progreso.Progreso === 70) {
                if (this.progreso.FinalAlternativo.length > 20) {
                    this.progreso.Progreso = this.progreso.Progreso + 30;
                }
            }
            if (this.progreso.Progreso === 80) {
                if (this.progreso.Comentario.length > 10) {
                    this.progreso.Progreso = this.progreso.Progreso + 20;
                }
            }
        }
        else {
            this.progreso.Progreso = 100;
        }
    }
    actualizar(dato) {
        this.validarprogreso();
        this.progresoService.updateProgreso(dato, this.progreso).subscribe(resupdate => {
            this.mensaje = resupdate;
        }, err => {
            console.log('Error Update Progreso');
        });
    }
    iracuestionario(dato) {
        this.actualizar(dato);
        this.router.navigate([
            'student',
            'stu-content',
            'stu-content-evaluation'
        ]);
    }
    terminar(dato) {
        this.actualizar(dato);
        this.router.navigate([
            'student',
            'stu-content'
        ]);
    }
};
StuContentAudioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_libro_service__WEBPACK_IMPORTED_MODULE_2__.LibroService },
    { type: src_app_services_progreso_service__WEBPACK_IMPORTED_MODULE_3__.ProgresoService },
    { type: src_app_services_cuestionario_service__WEBPACK_IMPORTED_MODULE_4__.CuestionarioService }
];
StuContentAudioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-stu-content-audio',
        template: _stu_content_audio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stu_content_audio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StuContentAudioPage);



/***/ }),

/***/ 1127:
/*!**********************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-audio/stu-content-audio.page.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = ".col_div_notificacion {\n  position: relative;\n  float: right;\n  height: 40px;\n  width: 40px;\n  top: -45px;\n  color: #ffffff;\n}\n.col_div_notificacion ion-icon {\n  width: 30px;\n  height: 30px;\n}\n.main_content_div {\n  background: white;\n  width: 100%;\n  height: auto;\n  min-height: 600px;\n  max-height: 2000px;\n  border-top-right-radius: 20px;\n  margin-top: 10px;\n  padding-top: 10px;\n}\n.main_content_div .col_div_titulo {\n  height: auto;\n}\n.main_content_div .col_div_titulo h1 {\n  font-weight: bold;\n  font-size: 30px;\n  color: #ffffff;\n  font-style: italic;\n}\n.main_content_div .col_div_lectura {\n  min-height: 300px;\n  max-height: 500px;\n  height: auto;\n  color: #36BDBC;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n.main_content_div .col_div_lectura ion-slides {\n  height: 100%;\n  width: 100%;\n  --bullet-background: #ededeb;\n  --bullet-background-active: #36BDBC;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide {\n  color: #000;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide h1 {\n  font-weight: bold;\n  font-size: 24px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide h2 {\n  font-weight: bold;\n  font-size: 22px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide h3 {\n  font-weight: bold;\n  font-size: 20px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide h4 {\n  font-weight: bold;\n  font-size: 18px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide h5 {\n  font-weight: bold;\n  font-size: 16px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide h6 {\n  font-weight: bold;\n  font-size: 14px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide p {\n  font-weight: bold;\n  font-size: 12px;\n}\n.main_content_div .col_div_lectura ion-slides ion-slide img {\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .col_div_video {\n  height: 250px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n.main_content_div .col_div_video iframe {\n  width: 100%;\n  height: 100%;\n  border-radius: 25px;\n}\n.main_content_div .col_div_audio {\n  height: 50px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n.main_content_div .col_div_audio audio {\n  width: 100%;\n}\n.main_content_div .col_div_reaccion {\n  height: 65px;\n}\n.main_content_div .col_div_reaccion ion-grid ion-row ion-col {\n  padding: 5px;\n}\n.main_content_div .col_div_reaccion ion-grid ion-row ion-col .elegible {\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .col_div_reaccion ion-grid ion-row ion-col .elegible img {\n  width: 60px;\n  margin: auto;\n}\n.main_content_div .col_div_reaccion ion-grid ion-row ion-col .elegido {\n  z-index: 1;\n  margin-top: -35px;\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .col_div_reaccion ion-grid ion-row ion-col .elegido img {\n  width: 60px;\n  height: 50px;\n  margin: 4px;\n}\n.main_content_div .col_div_formulario {\n  min-height: 400px;\n  max-height: 900px;\n  height: auto;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n.main_content_div .col_div_formulario ion-list {\n  width: 100%;\n  background: transparent;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group {\n  width: 100%;\n  background: transparent;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group ion-item-divider {\n  width: 100%;\n  background: transparent;\n  border-bottom: none;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group ion-item-divider ion-label {\n  width: 100%;\n  text-align: start;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 24px;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group ion-item {\n  --background: transparent;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group ion-item ion-label {\n  text-align: start;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 24px;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group ion-item ion-textarea {\n  padding: 5px;\n  font-size: 20px;\n  font-weight: 400;\n  color: #08A6AC;\n  border-radius: 15px;\n  width: 100%;\n  height: 125px;\n  background-color: #ffffff;\n}\n.main_content_div .col_div_formulario ion-list ion-item-group ion-item ion-icon {\n  color: #000;\n}\n.main_content_div .col_div_final_cuestionario {\n  height: 50px;\n  border-radius: 50px;\n}\n.main_content_div .col_div_final_cuestionario ion-button {\n  --background: linear-gradient(to right, #08A6AC, #36BDBC);\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .col_div_final_cuestionario ion-button:hover {\n  --background: linear-gradient(to right, #36BDBC, #08A6AC);\n}\n.main_content_div .col_div_final_finalizar {\n  height: 50px;\n  border-radius: 50px;\n}\n.main_content_div .col_div_final_finalizar ion-button {\n  --background: linear-gradient(to right, #08A6AC, #36BDBC);\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .col_div_final_finalizar ion-button:hover {\n  --background: linear-gradient(to right, #36BDBC, #08A6AC);\n}\n.main_content_div .col_div {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 20px;\n  background: linear-gradient(to top, #23A0AD, #30D6CC);\n}\n.main_content_div .col_div img {\n  width: 100px;\n}\n.main_content_div .col_div ion-label {\n  color: white;\n  margin-top: 25px;\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n}\n.animated {\n  --webkit-animation-duration: 5s;\n  animation-duration: 5s;\n  --webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.no-border {\n  border-color: 0px solid black !important;\n}\n.size-portada {\n  height: 270px;\n  width: auto !important;\n}\n.bounceInUp {\n  --webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n  }\n  80% {\n    -webkit-transform: translateY(10px);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n  }\n}\n.content-center {\n  align-content: center;\n  display: flex;\n}\n.border-bottom {\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dS1jb250ZW50LWF1ZGlvLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzZW1lc3RyZSUyMDVcXGN1cnNvcyUyMGV4dHJhY3VycmljdWxhcmVzXFxjYWxpZGFkJTIwZWR1Y2F0aXZhXFxzaXN0ZW1hLWxlY3R1cmFsXFxhcHBsZWN0dXJhLWFuZ3VsYXIxNC1pb25pYzYtY2FwYWNpdG9yXFxzcmNcXGFwcFxcc3R1ZGVudFxcc3R1LWNvbnRlbnRcXHN0dS1jb250ZW50LWF1ZGlvXFxzdHUtY29udGVudC1hdWRpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRUo7QURDQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRUY7QURERTtFQUNFLFlBQUE7QUNHSjtBREZJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDSU47QURERTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0FDR0o7QURGSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtBQ0lOO0FESE07RUFDRSxXQUFBO0FDS1I7QURKUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ01WO0FESlE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNNVjtBREpRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDTVY7QURKUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ01WO0FESlE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNNVjtBREpRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDTVY7QURKUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ01WO0FESlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ01WO0FEREU7RUFDRSxhQUFBO0VBQ0EsMENBQUE7QUNHSjtBREZJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0lOO0FEREU7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUNHSjtBREZJO0VBQ0UsV0FBQTtBQ0lOO0FEREU7RUFDRSxZQUFBO0FDR0o7QURBUTtFQUNFLFlBQUE7QUNFVjtBRERVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNHWjtBREZZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNJZDtBRERVO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHWjtBREZZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSWQ7QURHRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUNESjtBREVJO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FDQU47QURDTTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtBQ0NSO0FEQVE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VWO0FERFU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDR1o7QURBUTtFQUNFLHlCQUFBO0FDRVY7QUREVTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0daO0FERFU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0daO0FERFU7RUFDRSxXQUFBO0FDR1o7QURHRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0RKO0FERUk7RUFDRSx5REFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQU47QURFSTtFQUNFLHlEQUFBO0FDQU47QURHRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0RKO0FERUk7RUFDRSx5REFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQU47QURFSTtFQUNFLHlEQUFBO0FDQU47QURHRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0FDREo7QURFSTtFQUNFLFlBQUE7QUNBTjtBREVJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBTjtBREtBO0VBQ0UsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUNGRjtBREtBO0VBQ0Usd0NBQUE7QUNGRjtBREtBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDRkY7QURzQkE7RUFDRSxtQ0FBQTtFQUNBLDBCQUFBO0FDSEY7QURNQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHFDQUFBO0VDSEY7RURLQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtFQ0hGO0VES0E7SUFDRSxtQ0FBQTtFQ0hGO0VES0E7SUFDRSxnQ0FBQTtFQ0hGO0FBQ0Y7QURNQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQ0pGO0FET0E7RUFDRSxvQkFBQTtBQ0pGIiwiZmlsZSI6InN0dS1jb250ZW50LWF1ZGlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xfZGl2X25vdGlmaWNhY2lvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgdG9wOiAtNDVweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBpb24taWNvbiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICB9XHJcbn1cclxuLm1haW5fY29udGVudF9kaXYge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICBtYXgtaGVpZ2h0OiAyMDAwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAuY29sX2Rpdl90aXR1bG8ge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29sX2Rpdl9sZWN0dXJhIHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogIzM2QkRCQztcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGlvbi1zbGlkZXMge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjZWRlZGViO1xyXG4gICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogIzM2QkRCQztcclxuICAgICAgaW9uLXNsaWRlIHtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2xfZGl2X3ZpZGVvIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBpZnJhbWUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29sX2Rpdl9hdWRpbyB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBhdWRpbyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29sX2Rpdl9yZWFjY2lvbiB7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBpb24tZ3JpZCB7XHJcbiAgICAgIGlvbi1yb3cge1xyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgLmVsZWdpYmxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5lbGVnaWRvIHtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTM1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2xfZGl2X2Zvcm11bGFyaW8ge1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBpb24taXRlbS1ncm91cCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgaW9uLWl0ZW0tZGl2aWRlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpb24tdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMwOEE2QUM7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNvbF9kaXZfZmluYWxfY3Vlc3Rpb25hcmlvIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwOEE2QUMsICMzNkJEQkMpO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbjpob3ZlciB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzZCREJDLCAjMDhBNkFDKTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbF9kaXZfZmluYWxfZmluYWxpemFyIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwOEE2QUMsICMzNkJEQkMpO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbjpob3ZlciB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzZCREJDLCAjMDhBNkFDKTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbF9kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMjNBMEFELCAjMzBENkNDKTtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYW5pbWF0ZWQge1xyXG4gIC0td2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuICAtLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbi5uby1ib3JkZXIge1xyXG4gIGJvcmRlci1jb2xvcjogMHB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaXplLXBvcnRhZGEge1xyXG4gIGhlaWdodDogMjcwcHg7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJblVwIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzApO1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmJvdW5jZUluVXAge1xyXG4gIC0td2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZUluVXAge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQtY2VudGVye1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYm9yZGVyLWJvdHRvbXtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufSIsIi5jb2xfZGl2X25vdGlmaWNhY2lvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICB0b3A6IC00NXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jb2xfZGl2X25vdGlmaWNhY2lvbiBpb24taWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICBtYXgtaGVpZ2h0OiAyMDAwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X3RpdHVsbyB7XG4gIGhlaWdodDogYXV0bztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X3RpdHVsbyBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9sZWN0dXJhIHtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjMzZCREJDO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9sZWN0dXJhIGlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjZWRlZGViO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogIzM2QkRCQztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2xlY3R1cmEgaW9uLXNsaWRlcyBpb24tc2xpZGUge1xuICBjb2xvcjogIzAwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2xlY3R1cmEgaW9uLXNsaWRlcyBpb24tc2xpZGUgaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfbGVjdHVyYSBpb24tc2xpZGVzIGlvbi1zbGlkZSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9sZWN0dXJhIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGgzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2xlY3R1cmEgaW9uLXNsaWRlcyBpb24tc2xpZGUgaDQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfbGVjdHVyYSBpb24tc2xpZGVzIGlvbi1zbGlkZSBoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9sZWN0dXJhIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGg2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2xlY3R1cmEgaW9uLXNsaWRlcyBpb24tc2xpZGUgcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9sZWN0dXJhIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl92aWRlbyB7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X3ZpZGVvIGlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9hdWRpbyB7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfYXVkaW8gYXVkaW8ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X3JlYWNjaW9uIHtcbiAgaGVpZ2h0OiA2NXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfcmVhY2Npb24gaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfcmVhY2Npb24gaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5lbGVnaWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9yZWFjY2lvbiBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmVsZWdpYmxlIGltZyB7XG4gIHdpZHRoOiA2MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9yZWFjY2lvbiBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmVsZWdpZG8ge1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tdG9wOiAtMzVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X3JlYWNjaW9uIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuZWxlZ2lkbyBpbWcge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2Zvcm11bGFyaW8ge1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgbWF4LWhlaWdodDogOTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfZm9ybXVsYXJpbyBpb24tbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2Zvcm11bGFyaW8gaW9uLWxpc3QgaW9uLWl0ZW0tZ3JvdXAge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9mb3JtdWxhcmlvIGlvbi1saXN0IGlvbi1pdGVtLWdyb3VwIGlvbi1pdGVtLWRpdmlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9mb3JtdWxhcmlvIGlvbi1saXN0IGlvbi1pdGVtLWdyb3VwIGlvbi1pdGVtLWRpdmlkZXIgaW9uLWxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2Zvcm11bGFyaW8gaW9uLWxpc3QgaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfZm9ybXVsYXJpbyBpb24tbGlzdCBpb24taXRlbS1ncm91cCBpb24taXRlbSBpb24tbGFiZWwge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9mb3JtdWxhcmlvIGlvbi1saXN0IGlvbi1pdGVtLWdyb3VwIGlvbi1pdGVtIGlvbi10ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzA4QTZBQztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9mb3JtdWxhcmlvIGlvbi1saXN0IGlvbi1pdGVtLWdyb3VwIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9maW5hbF9jdWVzdGlvbmFyaW8ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9maW5hbF9jdWVzdGlvbmFyaW8gaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDhBNkFDLCAjMzZCREJDKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2X2ZpbmFsX2N1ZXN0aW9uYXJpbyBpb24tYnV0dG9uOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNkJEQkMsICMwOEE2QUMpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfZmluYWxfZmluYWxpemFyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXZfZmluYWxfZmluYWxpemFyIGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA4QTZBQywgIzM2QkRCQyk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29sX2Rpdl9maW5hbF9maW5hbGl6YXIgaW9uLWJ1dHRvbjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzZCREJDLCAjMDhBNkFDKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb2xfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMyM0EwQUQsICMzMEQ2Q0MpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXYgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbF9kaXYgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkIHtcbiAgLS13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgLS13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLm5vLWJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogMHB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5zaXplLXBvcnRhZGEge1xuICBoZWlnaHQ6IDI3MHB4O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5VcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XG4gIH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5ib3VuY2VJblVwIHtcbiAgLS13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZUluVXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xuICB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmNvbnRlbnQtY2VudGVyIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 9492:
/*!**********************************************************************************************!*\
  !*** ./src/app/student/stu-content/stu-content-audio/stu-content-audio.page.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main_content_div_child\">\r\n  <div class=\"col_div_notificacion\">\r\n    <ion-icon name=\"notifications-outline\"></ion-icon>\r\n  </div>\r\n  <div class=\"main_content_div animated bounceInUp\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <div class=\"col_div col_div_titulo\">\r\n            <h1>\r\n              {{libro.Titulo}}\r\n            </h1>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" >\r\n          <div class=\"col_div col_div_video\">\r\n              <div id=\"player\"></div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <div class=\"col_div col_div_reaccion\">\r\n            <ion-grid fixed>\r\n              <ion-row>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"elegible\">\r\n                    <img *ngIf=\"progreso.Reaccion !== 'like'\"\r\n                    src=\"../../../../assets/reacciones/like.png\"\r\n                    alt=\"me gusta\" srcset=\"\" (click)=\"elegir('like')\">\r\n                  </div>\r\n                  <div class=\"elegido\">\r\n                    <img *ngIf=\"progreso.Reaccion === 'like'\"\r\n                    src=\"../../../../assets/reacciones/like-active.png\"\r\n                    alt=\"me gusta activado\" srcset=\"\" (click)=\"deselegir()\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"elegible\" (click)=\"elegir('smile')\">\r\n                    <img *ngIf=\"progreso.Reaccion === '' || progreso.Reaccion !== 'smile'\"\r\n                    src=\"../../../../assets/reacciones/smile.png\"\r\n                    alt=\"me alegra\" srcset=\"\">\r\n                  </div>\r\n                  <div class=\"elegido\" (click)=\"deselegir()\">\r\n                    <img *ngIf=\"progreso.Reaccion === 'smile'\"\r\n                    src=\"../../../../assets/reacciones/smile-active.png\"\r\n                    alt=\"me alegra activado\" srcset=\"\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"elegible\" (click)=\"elegir('sad')\">\r\n                    <img *ngIf=\"progreso.Reaccion === '' || progreso.Reaccion !== 'sad'\"\r\n                    src=\"../../../../assets/reacciones/sad.png\"\r\n                    alt=\"me entristece\" srcset=\"\">\r\n                  </div>\r\n                  <div class=\"elegido\" (click)=\"deselegir()\">\r\n                    <img *ngIf=\"progreso.Reaccion === 'sad'\"\r\n                    src=\"../../../../assets/reacciones/sad-active.png\"\r\n                    alt=\"me entristece activado\" srcset=\"\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"elegible\" (click)=\"elegir('angry')\">\r\n                    <img *ngIf=\"progreso.Reaccion === '' || progreso.Reaccion !== 'angry'\"\r\n                    src=\"../../../../assets/reacciones/angry.png\"\r\n                    alt=\"me enoja\" srcset=\"\">\r\n                  </div>\r\n                  <div class=\"elegido\" (click)=\"deselegir()\">\r\n                    <img *ngIf=\"progreso.Reaccion === 'angry'\"\r\n                    src=\"../../../../assets/reacciones/angry-active.png\"\r\n                    alt=\"me enoja activado\" srcset=\"\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"elegible\" (click)=\"elegir('confused')\">\r\n                    <img *ngIf=\"progreso.Reaccion === '' || progreso.Reaccion !== 'confused'\"\r\n                    src=\"../../../../assets/reacciones/confused.png\"\r\n                    alt=\"me confunde\" srcset=\"\">\r\n                  </div>\r\n                  <div class=\"elegido\" (click)=\"deselegir()\">\r\n                    <img *ngIf=\"progreso.Reaccion === 'confused'\"\r\n                    src=\"../../../../assets/reacciones/confused-active.png\"\r\n                    alt=\"me confunde activado\" srcset=\"\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"elegible\" (click)=\"elegir('amazed')\">\r\n                    <img *ngIf=\"progreso.Reaccion === '' || progreso.Reaccion !== 'amazed'\"\r\n                    src=\"../../../../assets/reacciones/amazed.png\"\r\n                    alt=\"me asombra\" srcset=\"\">\r\n                  </div>\r\n                  <div class=\"elegido\" (click)=\"deselegir()\">\r\n                    <img *ngIf=\"progreso.Reaccion === 'amazed'\"\r\n                    src=\"../../../../assets/reacciones/amazed-active.png\"\r\n                    alt=\"me asombra activado\" srcset=\"\">\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <div class=\"col_div col_div_formulario\">\r\n            <ion-list>\r\n              <ion-item-group>\r\n                <ion-item-divider>\r\n                  <ion-label>\r\n                    Comentario:\r\n                  </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item class=\"no-border\">\r\n                  <ion-textarea\r\n                    type=\"text\"\r\n                    name=\"Comentario\"\r\n                    required\r\n                    auto-focus\r\n                    tabindex=\"1\"\r\n                    minlength=\"10\"\r\n                    #Comentario=\"ngModel\"\r\n                    [(ngModel)]=\"progreso.Comentario\">\r\n                  </ion-textarea>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-text color=\"danger\" *ngIf=\"Comentario.errors?.minlength\">\r\n                    Escribir un comentario de mas de 10 letras\r\n                  </ion-text>\r\n                </ion-item>\r\n              </ion-item-group>\r\n              <ion-item-group>\r\n                <ion-item-divider>\r\n                  <ion-label>\r\n                    Final Alternativo:\r\n                  </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item>\r\n                  <ion-textarea\r\n                    type=\"text\"\r\n                    name=\"FinalAlternativo\"\r\n                    required\r\n                    tabindex=\"2\"\r\n                    minlength=\"20\"\r\n                    #FinalAlternativo=\"ngModel\"\r\n                    [(ngModel)]=\"progreso.FinalAlternativo\">\r\n                  </ion-textarea>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-text color=\"danger\" *ngIf=\"FinalAlternativo.errors?.minlength\">\r\n                    Escribir un final alternativo de mas de 20 letras\r\n                  </ion-text>\r\n                </ion-item>\r\n              </ion-item-group>\r\n            </ion-list>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" *ngIf=\"haycuestionario\">\r\n          <div class=\"col_div col_div_final_cuestionario\">\r\n            <ion-button\r\n            [disabled]=\"(progreso.Reaccion === '' || progreso.Comentario.length < 10 || progreso.FinalAlternativo.length < 20)? true:false\"\r\n            shape=\"round\"\r\n            (click)=\"iracuestionario(progreso.id)\">\r\n                Cuestionario\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" *ngIf=\"haycuestionario\">\r\n          <div\r\n          class=\"col_div col_div_final_finalizar\">\r\n          <ion-button\r\n            shape=\"round\"\r\n            [disabled]=\"(progreso.Progreso === 0 || progreso.Reaccion === '')? true:false\"\r\n            (click)=\"terminar(progreso.id)\">\r\n                Finalizar sin Cuestionario\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_student_stu-content_stu-content-audio_stu-content-audio_module_ts.js.map