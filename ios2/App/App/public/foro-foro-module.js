(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foro-foro-module"],{

/***/ "/LvK":
/*!*************************************!*\
  !*** ./src/app/foro/foro.module.ts ***!
  \*************************************/
/*! exports provided: ForoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForoPageModule", function() { return ForoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _foro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foro-routing.module */ "ElMH");
/* harmony import */ var _foro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foro.page */ "LO5Q");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/shared-directives.module */ "Fgaq");








let ForoPageModule = class ForoPageModule {
};
ForoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _foro_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForoPageRoutingModule"],
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__["SharedDirectivesModule"]
        ],
        declarations: [_foro_page__WEBPACK_IMPORTED_MODULE_6__["ForoPage"]]
    })
], ForoPageModule);



/***/ }),

/***/ "BR5Q":
/*!*************************************!*\
  !*** ./src/app/foro/foro.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".respuesta {\n  margin-left: 30px;\n}\n\n.colorTitulo {\n  color: darkturquoise;\n}\n\n.mb-30 {\n  margin-bottom: 30px;\n}\n\n.inputResponder {\n  border: 1px solid #c9c9c9;\n  border-radius: 10px;\n  padding: 5px;\n}\n\n.botonEnviar {\n  height: 37px;\n  width: 37px;\n  color: white;\n  background: transparent;\n}\n\nion-input {\n  --padding-start: 8px !important;\n}\n\n.tituloCard {\n  color: white;\n}\n\nion-content.ios {\n  top: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvcm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUFBO0VBQ0kseUJBQUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFHUjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBR0o7O0FBQUE7RUFDSSwrQkFBQTtBQUdKOztBQUFBO0VBQ0ksWUFBQTtBQUdKOztBQUFBO0VBQ0kscUJBQUE7QUFHSiIsImZpbGUiOiJmb3JvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNwdWVzdGF7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5jb2xvclRpdHVsb3tcbiAgICBjb2xvcjogZGFya3R1cnF1b2lzZTtcbn1cbi5tYi0zMHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmlucHV0UmVzcG9uZGVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOWM5Yzk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmJvdG9uRW52aWFye1xuICAgIGhlaWdodDogMzdweDtcbiAgICB3aWR0aDogMzdweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1pbnB1dHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDhweCAhaW1wb3J0YW50O1xufVxuXG4udGl0dWxvQ2FyZHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50Lmlvc3tcbiAgICB0b3A6IDEwMHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "ElMH":
/*!*********************************************!*\
  !*** ./src/app/foro/foro-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ForoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForoPageRoutingModule", function() { return ForoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _foro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foro.page */ "LO5Q");




const routes = [
    {
        path: '',
        component: _foro_page__WEBPACK_IMPORTED_MODULE_3__["ForoPage"]
    }
];
let ForoPageRoutingModule = class ForoPageRoutingModule {
};
ForoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForoPageRoutingModule);



/***/ }),

/***/ "LO5Q":
/*!***********************************!*\
  !*** ./src/app/foro/foro.page.ts ***!
  \***********************************/
/*! exports provided: ForoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForoPage", function() { return ForoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_foro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./foro.page.html */ "WrWd");
/* harmony import */ var _foro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foro.page.scss */ "BR5Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/analytics.service */ "Y9WU");





// import { LocalNotificationActionType } from '@capacitor/core';




// import { FCM } from '@capacitor-community/fcm';



// const { PushNotifications } = Plugins;
let ForoPage = class ForoPage {
    constructor(navCtrl, menu, service, route, platform, router, domCtrl, toastController, alertController, analyticsService) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.service = service;
        this.route = route;
        this.platform = platform;
        this.router = router;
        this.domCtrl = domCtrl;
        this.toastController = toastController;
        this.alertController = alertController;
        this.analyticsService = analyticsService;
        this.spinnerFeatured = false;
        this.spinnerDecoration = false;
        this.spinnerCosmetic = false;
        this.spinnerBook = false;
        this.precioPorcentajeBook = '';
        this.precioPorcentajeCosmetic = '';
        this.precioPorcentajeDecoration = '';
        this.precioPorcentajeFeature = '';
        this.spinnerGeneral = false;
        this.slideOpts = {
            slidesPerView: 2,
            pagination: false,
            initialSlide: 0,
            speed: 400
        };
        this.slideOpts2 = {
            slidesPerView: 3,
            pagination: false,
            initialSlide: 0,
            autoplay: true,
            speed: 300
        };
    }
    ngOnInit() {
        // PushNotifications.register();
    }
    ionViewWillEnter() {
        let arreglo = localStorage.getItem('user');
        this.idUsuario = JSON.parse(arreglo).id;
        console.log('idusuario', this.idUsuario);
        this.preguntasRespuestas();
    }
    openMenu() {
        console.log('entro');
        this.menu.open('custom');
    }
    gotopoliticas() {
        this.navCtrl.navigateForward('politicas');
    }
    preguntasRespuestas() {
        this.spinnerGeneral = true;
        this.service.getQuestions()
            .then(res => {
            this.spinnerGeneral = false;
            this.preguntas = JSON.parse(JSON.stringify(res)).data;
            console.log('esta anwers', res);
            // this.categories = JSON.parse(JSON.stringify(res)).data;
        }, err => {
            this.spinnerGeneral = false;
            console.log(err);
        });
    }
    storeGuardado(id) {
        // storeGuardados
        this.service.storeGuardados({ idVideo: id, idUsuario: this.idUsuario })
            .then(res => {
            // this.cateSpinner=false
            console.log('guardo el video', res);
            // this.categories = JSON.parse(JSON.stringify(res)).data;
        }, err => {
            //  this.cateSpinner=false
            console.log(err);
        });
    }
    enviarRespuesta(idpregunta) {
        // responder
        let respoesta = document.getElementById("respuesta" + idpregunta).value;
        console.log('esta es la respuesta', respoesta);
        // console.log('respues',this.respuesta)
        this.service.responder({ answer: respoesta, question_id: idpregunta, user_id: this.idUsuario })
            .then(res => {
            // this.cateSpinner=false
            console.log('guardo la respoesta', res);
            // this.categories = JSON.parse(JSON.stringify(res)).data;
            this.presentToast('Has enviado una respuesta');
            this.preguntasRespuestas();
            this.respuesta = '';
        }, err => {
            //  this.cateSpinner=false
            console.log(err);
        });
    }
    enviarPregunta() {
        // responder
        console.log('respues', this.respuesta);
        this.service.preguntar({ question: this.preguntar, user_id: this.idUsuario })
            .then(res => {
            // this.cateSpinner=false
            console.log('guardo la pregunta', res);
            // this.categories = JSON.parse(JSON.stringify(res)).data;
            this.presentToast('Has enviado una respuesta');
            this.preguntasRespuestas();
            this.respuesta = '';
        }, err => {
            //  this.cateSpinner=false
            console.log(err);
        });
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 3000,
                color: 'success'
            });
            toast.present();
        });
    }
};
ForoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["DomController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_7__["AnalyticsService"] }
];
ForoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-foro',
        template: _raw_loader_foro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_foro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForoPage);



/***/ }),

/***/ "WrWd":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/foro/foro.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header #header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\">Volver</ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title >Cursos mas Vistos</ion-title> -->\n    <img class=\"logo\" src=\"/assets/img/logo.png\">\n    <!-- <ion-row class=\"ion-justify-content-center ion-text-center\">\n      <ion-col size=\"4\" class=\"ion-text-right\">\n        TV Shows\n      </ion-col>\n      <ion-col size=\"4\">\n        Movies\n      </ion-col>\n      <ion-col size=\"4\" tappable (click)=\"openCategories()\" class=\"ion-text-left\">\n        Categories <ion-icon name=\"caret-down-outline\"></ion-icon>\n      </ion-col>\n    </ion-row> -->\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" [appHideHeader]=\"header\" style=\"top: 76px;\">\n\n\n  <ion-list>\n    <ion-card-title class=\"tituloCard ion-text-center\">CAFETERÍA VIRTUAL</ion-card-title>\n\n    \n  <ion-grid *ngIf=\"spinnerGeneral\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-spinner *ngIf=\"spinnerGeneral\" name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n    <ion-grid *ngIf=\"preguntas\" style=\"    margin-bottom: 50px;\">\n      <ion-row *ngFor=\"let item of preguntas\" class=\"mb-30\">\n        <ion-col size=\"12\">\n\n    \n\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img src=\"assets/img/avatar.jpg\">\n        </ion-avatar>\n        <ion-label>\n          <h2 class=\"colorTitulo\">{{item.question}}</h2>\n          <!-- <h3>I'm a big deal</h3> -->\n          <p>{{item.user.names}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item class=\"respuesta\" *ngFor=\"let respuestas of item.answers\">\n        <ion-avatar slot=\"start\">\n          <img src=\"assets/img/avatar.jpg\">\n        </ion-avatar>\n        <ion-label>\n          <h2>{{respuestas.answer}}</h2>\n          <!-- <h3>Look, kid...</h3> -->\n          <p>{{respuestas.user.names}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input type=\"text\" class=\"inputResponder\" id=\"respuesta{{item.id}}\" placeholder=\"Responder...\"></ion-input>\n        <button clear item-right class=\"botonEnviar\" (click)=\"enviarRespuesta(item.id)\"><ion-icon name=\"send\"></ion-icon></button>\n       </ion-item>\n    </ion-col>\n  </ion-row>\n\n  </ion-grid>\n    \n\n\n  </ion-list>\n\n\n  \n\n\n</ion-content>\n\n<ion-footer>\n \n  <ion-toolbar>\n    <ion-item>\n      <ion-input type=\"text\" class=\"inputResponder\" [(ngModel)]=\"preguntar\" placeholder=\"Realiza una nueva pregunta...\"></ion-input>\n      <button clear item-right class=\"botonEnviar\" (click)=\"enviarPregunta()\"><ion-icon name=\"send\"></ion-icon></button>\n     </ion-item>\n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ })

}]);
//# sourceMappingURL=foro-foro-module.js.map