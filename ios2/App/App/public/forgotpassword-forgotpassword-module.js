(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpassword-forgotpassword-module"],{

/***/ "/oEb":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header #header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" >\n      <ion-back-button defaultHref=\"/login\">Volver</ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title >Cursos mas Vistos</ion-title> -->\n    <img class=\"logo\" src=\"/assets/img/logo.png\">\n    <!-- <ion-row class=\"ion-justify-content-center ion-text-center\">\n      <ion-col size=\"4\" class=\"ion-text-right\">\n        TV Shows\n      </ion-col>\n      <ion-col size=\"4\">\n        Movies\n      </ion-col>\n      <ion-col size=\"4\" tappable (click)=\"openCategories()\" class=\"ion-text-left\">\n        Categories <ion-icon name=\"caret-down-outline\"></ion-icon>\n      </ion-col>\n    </ion-row> -->\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" style=\"top: 76px;\">\n  <ion-grid class=\"fondo-login\" >\n    <ion-row *ngIf=\"Sesion\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-margin-vertical\">\n          <ion-text class=\"labelTitle\"><h2 class=\"labelTitle\">Reestablezca su contraseña</h2> </ion-text> \n        </ion-col>\n    </ion-row >\n    <ion-row class=\"form ion-margin ion-padding\" style=\"background: white;\" >\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-list lines=\"none\">\n          <!-- <ion-item class=\"confondo\"> -->\n            <ion-input class=\"confondo\" [(ngModel)]=\"email\" placeholder=\"Email\" type=\"email\"></ion-input>\n          <!-- </ion-item> -->\n          <!-- <ion-item class=\"confondo\"> -->\n          <!-- </ion-item> -->\n          <!-- <ion-input class=\"confondo\" *ngIf=\"mostrarCampos\" [(ngModel)]=\"code\" placeholder=\"Código enviado al email\" type=\"text\"></ion-input> -->\n          <ion-input class=\"confondo\" *ngIf=\"mostrarCampos\" [(ngModel)]=\"codego\" placeholder=\"Código\" type=\"text\"></ion-input>\n          <ion-input class=\"confondo\" *ngIf=\"mostrarCampos\" [(ngModel)]=\"password\" placeholder=\"Contraseña\" type=\"password\"></ion-input>\n        </ion-list>\n        <!-- <ion-row>\n          <ion-col size=\"12\" class=\"ion-text-right ion-no-padding ion-no-margin\">\n            <ion-button color=\"light\" fill=\"clear\" size=\"small\" class=\"btn fs-min\">olvide mi contraseña</ion-button>\n          </ion-col>\n        </ion-row> -->\n        <ion-row>\n\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-button *ngIf=\"!mostrarCampos\"  class=\"btn negroLocal\" (click)=\"resetpassword()\">Reestablecer contraseña</ion-button>\n        </ion-col>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-button *ngIf=\"mostrarCampos\"  class=\"btn negroLocal\" (click)=\"changepassword()\">Cambiar contraseña</ion-button>\n        </ion-col>\n  \n      </ion-row>\n      <!-- <ion-row>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-button routerLink=\"/signup\" color=\"orange\" class=\"btn\">Registro</ion-button>\n        </ion-col>\n      </ion-row> -->\n       </ion-col>\n       <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-spinner *ngIf=\"spinner\" name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "IoKB":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
  \*********************************************************/
/*! exports provided: ForgotpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpassword-routing.module */ "yrZY");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpassword.page */ "Nmh1");







let ForgotpasswordPageModule = class ForgotpasswordPageModule {
};
ForgotpasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPageRoutingModule"]
        ],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordPage"]]
    })
], ForgotpasswordPageModule);



/***/ }),

/***/ "M/+l":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sc-ion-input-md-h {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\nion-list {\n  background: transparent;\n}\n\nion-item.confondo {\n  --background: #fed690;\n  color: #000;\n  opacity: 0.4;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\nion-item {\n  --border-color:transparent;\n  --background:transparent;\n}\n\n.form {\n  position: relative;\n  top: 20%;\n}\n\n.btn {\n  color: #fff;\n}\n\n.fs-min {\n  font-size: 10px;\n}\n\n.azulLocal {\n  --background: #08cfd2;\n}\n\n.negroLocal {\n  --background: #00cdd0;\n  width: 100%;\n}\n\n.labelTitle {\n  color: white;\n  font-weight: 600;\n  font-size: 30px;\n  text-align: center;\n}\n\nion-avatar {\n  width: 50px;\n  height: 50px;\n  margin-right: 0px;\n}\n\nion-card.tarjeta {\n  --background:#fed690 ;\n}\n\n.centrar {\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-input {\n  --background:#fed690;\n  --color:#000;\n  margin-bottom: 20px;\n}\n\n.textLink {\n  color: #000;\n  text-decoration: underline;\n}\n\n.textLinkBlue {\n  color: #08cfd2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUFBO0VBQ0ksMEJBQUE7RUFDQSx3QkFBQTtBQUdKOztBQUFBO0VBRUksa0JBQUE7RUFDQSxRQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtBQUdKOztBQUFBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FBR0o7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGQTtFQUNJLHFCQUFBO0FBS0o7O0FBSEE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQU9KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0FBUUoiLCJmaWxlIjoiZm9yZ290cGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjLWlvbi1pbnB1dC1tZC1oe1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWl0ZW0uY29uZm9uZG97XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmVkNjkwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1pdGVte1xuICAgIC0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbn1cblxuLmZvcm17XG4gICAgLy8gbWFyZ2luLXRvcDogMTJyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMjAlO1xufVxuXG4uYnRue1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmZzLW1pbntcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5henVsTG9jYWx7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDhjZmQyO1xufVxuXG4ubmVncm9Mb2NhbHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMGNkZDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYWJlbFRpdGxle1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tYXZhdGFye1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cbmlvbi1jYXJkLnRhcmpldGF7XG4gICAgLS1iYWNrZ3JvdW5kOiNmZWQ2OTBcbn1cbi5jZW50cmFye1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbmlvbi1pbnB1dHtcbiAgICAtLWJhY2tncm91bmQ6I2ZlZDY5MDtcbiAgICAtLWNvbG9yOiMwMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRleHRMaW5re1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnRleHRMaW5rQmx1ZXtcbiAgICBjb2xvcjogIzA4Y2ZkMjtcbiAgICAvLyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */");

/***/ }),

/***/ "Nmh1":
/*!*******************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.ts ***!
  \*******************************************************/
/*! exports provided: ForgotpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function() { return ForgotpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgotpassword.page.html */ "/oEb");
/* harmony import */ var _forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgotpassword.page.scss */ "M/+l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/analytics.service */ "Y9WU");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "FUe0");










const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"];

let ForgotpasswordPage = class ForgotpasswordPage {
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
    resetpassword() {
        this.spinner = true;
        console.log('aqui vamos ', this.email);
        this.service.recuperarPassword({ email: this.email })
            .then(res => {
            this.spinner = false;
            console.log('aqui entre en la respuesta del login', res);
            if (JSON.parse(JSON.stringify(res)).codigo == 1) {
                this.mostrarCampos = true;
                this.presentToast(JSON.parse(JSON.stringify(res)).message);
            }
            else {
                this.presentToast(JSON.parse(JSON.stringify(res)).message);
            }
            // console.log('este es el status',JSON.parse(JSON.stringify(res)).data.status)
            // console.log('este es el status',JSON.parse(JSON.stringify(res)).message)
        }, err => {
            this.spinner = false;
            console.log(err);
        });
    }
    changepassword() {
        this.spinner = true;
        this.service.changePassword({ email: this.email, password: this.password, code: this.codego })
            .then(res => {
            this.spinner = false;
            console.log('este es la respuesta del cambio', res);
            if (JSON.parse(JSON.stringify(res)).codigo == 1) {
                this.presentToast(JSON.parse(JSON.stringify(res)).message);
                this.navCtrl.navigateRoot('/login');
            }
            else {
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
ForgotpasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_7__["AnalyticsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
ForgotpasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgotpassword',
        template: _raw_loader_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForgotpasswordPage);



/***/ }),

/***/ "yrZY":
/*!*****************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ForgotpasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageRoutingModule", function() { return ForgotpasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpassword.page */ "Nmh1");




const routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpasswordPage"]
    }
];
let ForgotpasswordPageRoutingModule = class ForgotpasswordPageRoutingModule {
};
ForgotpasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotpasswordPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=forgotpassword-forgotpassword-module.js.map