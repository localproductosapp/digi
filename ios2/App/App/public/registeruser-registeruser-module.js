(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registeruser-registeruser-module"],{

/***/ "NuqB":
/*!*************************************************************!*\
  !*** ./src/app/registeruser/registeruser-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RegisteruserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteruserPageRoutingModule", function() { return RegisteruserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _registeruser_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registeruser.page */ "U5s6");




const routes = [
    {
        path: '',
        component: _registeruser_page__WEBPACK_IMPORTED_MODULE_3__["RegisteruserPage"]
    }
];
let RegisteruserPageRoutingModule = class RegisteruserPageRoutingModule {
};
RegisteruserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisteruserPageRoutingModule);



/***/ }),

/***/ "TXw2":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registeruser/registeruser.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header #header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/profile2\">Volver</ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title >Cursos mas Vistos</ion-title> -->\n    <img class=\"logo\" src=\"/assets/img/logo.png\">\n    <!-- <ion-row class=\"ion-justify-content-center ion-text-center\">\n      <ion-col size=\"4\" class=\"ion-text-right\">\n        TV Shows\n      </ion-col>\n      <ion-col size=\"4\">\n        Movies\n      </ion-col>\n      <ion-col size=\"4\" tappable (click)=\"openCategories()\" class=\"ion-text-left\">\n        Categories <ion-icon name=\"caret-down-outline\"></ion-icon>\n      </ion-col>\n    </ion-row> -->\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\"  style=\"top: 76px;\">\n  <ion-grid class=\"fondo-login\" >\n    <ion-row *ngIf=\"Sesion\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-margin-vertical\">\n          <ion-text class=\"labelTitle\"><h2 class=\"labelTitle\">Nuevo usuario</h2> </ion-text> \n        </ion-col>\n    </ion-row >\n    <ion-row class=\"form ion-margin ion-padding\" >\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-list lines=\"none\">\n          <!-- <ion-item class=\"confondo\"> -->\n            <ion-input class=\"confondo\" [(ngModel)]=\"names\" placeholder=\"Nombre\" type=\"text\"></ion-input>\n          <!-- </ion-item> -->\n          <!-- <ion-item class=\"confondo\"> -->\n            <ion-input class=\"confondo\"  [(ngModel)]=\"email\" placeholder=\"Email\" type=\"email\"></ion-input>\n            <ion-input class=\"confondo\"  [(ngModel)]=\"password\" placeholder=\"Contraseña\" type=\"password\"></ion-input>\n          <!-- </ion-item> -->\n        </ion-list>\n        <!-- <ion-row>\n          <ion-col size=\"12\" class=\"ion-text-right ion-no-padding ion-no-margin\">\n            <ion-button color=\"light\" fill=\"clear\" size=\"small\" class=\"btn fs-min\">olvide mi contraseña</ion-button>\n          </ion-col>\n        </ion-row> -->\n        <ion-row>\n\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-button  class=\"btn negroLocal\" (click)=\"register()\">Registrarse</ion-button>\n        </ion-col>\n  \n      </ion-row>\n      <!-- <ion-row>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-button routerLink=\"/signup\" color=\"orange\" class=\"btn\">Registro</ion-button>\n        </ion-col>\n      </ion-row> -->\n       </ion-col>\n       <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-spinner *ngIf=\"spinner\" name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "U5s6":
/*!***************************************************!*\
  !*** ./src/app/registeruser/registeruser.page.ts ***!
  \***************************************************/
/*! exports provided: RegisteruserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteruserPage", function() { return RegisteruserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registeruser_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registeruser.page.html */ "TXw2");
/* harmony import */ var _registeruser_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registeruser.page.scss */ "tXB/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/analytics.service */ "Y9WU");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "FUe0");










const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"];

let RegisteruserPage = class RegisteruserPage {
    constructor(navCtrl, menu, service, route, router, analyticsService, toastController, alertController) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.service = service;
        this.route = route;
        this.router = router;
        this.analyticsService = analyticsService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.spinner = false;
        this.Sesion = true;
        this.ver = false;
        this.mostrarCampos = false;
    }
    ngOnInit() {
    }
    openMenu() {
        console.log('entro');
        this.menu.open('custom');
    }
    register() {
        this.spinner = true;
        this.service.registerUser({ "email": this.email, "names": this.names, "password": this.password })
            .then(res => {
            this.spinner = false;
            console.log('este es la respuesta', res);
            // console.log('este es el status',JSON.parse(JSON.stringify(res)).data.status)
            // console.log('este es el status',JSON.parse(JSON.stringify(res)).message)
            if (JSON.parse(JSON.stringify(res)).data) {
                this.color = 'success';
                this.presentToast(JSON.parse(JSON.stringify(res)).message);
                this.navCtrl.navigateRoot('/');
            }
            else {
                this.color = 'danger';
                this.presentToast(JSON.parse(JSON.stringify(res)).message);
            }
        }, err => {
            this.spinner = false;
            console.log(err);
        });
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 3000,
                color: this.color
            });
            toast.present();
        });
    }
};
RegisteruserPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_7__["AnalyticsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
RegisteruserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registeruser',
        template: _raw_loader_registeruser_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registeruser_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisteruserPage);



/***/ }),

/***/ "a8AL":
/*!*****************************************************!*\
  !*** ./src/app/registeruser/registeruser.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisteruserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteruserPageModule", function() { return RegisteruserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _registeruser_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registeruser-routing.module */ "NuqB");
/* harmony import */ var _registeruser_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registeruser.page */ "U5s6");







let RegisteruserPageModule = class RegisteruserPageModule {
};
RegisteruserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registeruser_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisteruserPageRoutingModule"]
        ],
        declarations: [_registeruser_page__WEBPACK_IMPORTED_MODULE_6__["RegisteruserPage"]]
    })
], RegisteruserPageModule);



/***/ }),

/***/ "tXB/":
/*!*****************************************************!*\
  !*** ./src/app/registeruser/registeruser.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sc-ion-input-md-h {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\nion-list {\n  background: transparent;\n}\n\nion-item.confondo {\n  --background: #fed690;\n  color: #000;\n  opacity: 0.4;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\nion-item {\n  --border-color:transparent;\n  --background:transparent;\n}\n\n.form {\n  position: relative;\n  top: 20%;\n}\n\n.btn {\n  color: #fff;\n}\n\n.fs-min {\n  font-size: 10px;\n}\n\n.azulLocal {\n  --background: #08cfd2;\n}\n\n.negroLocal {\n  --background: #000;\n  width: 100%;\n}\n\n.labelTitle {\n  color: black;\n  font-weight: 600;\n  font-size: 30px;\n  text-align: center;\n}\n\nion-avatar {\n  width: 50px;\n  height: 50px;\n  margin-right: 0px;\n}\n\nion-card.tarjeta {\n  --background:#fed690 ;\n}\n\n.centrar {\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-input {\n  --background:#fed690;\n  --color:#000;\n  margin-bottom: 20px;\n}\n\n.textLink {\n  color: #000;\n  text-decoration: underline;\n}\n\n.textLinkBlue {\n  color: #08cfd2;\n}\n\n.fondo-login {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlZ2lzdGVydXNlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtBQUVKOztBQUFBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFBQTtFQUNJLDBCQUFBO0VBQ0Esd0JBQUE7QUFHSjs7QUFBQTtFQUVJLGtCQUFBO0VBQ0EsUUFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQUFBO0VBQ0kscUJBQUE7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUdKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxxQkFBQTtBQUtKOztBQUhBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFKQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtBQVFKOztBQUpBO0VBQ0ksaUJBQUE7QUFPSiIsImZpbGUiOiJyZWdpc3RlcnVzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjLWlvbi1pbnB1dC1tZC1oe1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWl0ZW0uY29uZm9uZG97XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmVkNjkwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1pdGVte1xuICAgIC0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbn1cblxuLmZvcm17XG4gICAgLy8gbWFyZ2luLXRvcDogMTJyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMjAlO1xufVxuXG4uYnRue1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmZzLW1pbntcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5henVsTG9jYWx7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDhjZmQyO1xufVxuXG4ubmVncm9Mb2NhbHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYWJlbFRpdGxle1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tYXZhdGFye1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cbmlvbi1jYXJkLnRhcmpldGF7XG4gICAgLS1iYWNrZ3JvdW5kOiNmZWQ2OTBcbn1cbi5jZW50cmFye1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbmlvbi1pbnB1dHtcbiAgICAtLWJhY2tncm91bmQ6I2ZlZDY5MDtcbiAgICAtLWNvbG9yOiMwMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRleHRMaW5re1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnRleHRMaW5rQmx1ZXtcbiAgICBjb2xvcjogIzA4Y2ZkMjtcbiAgICAvLyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmZvbmRvLWxvZ2lue1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=registeruser-registeruser-module.js.map