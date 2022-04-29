(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-setting-module"],{

/***/ "Dnt8":
/*!*****************************************!*\
  !*** ./src/app/setting/setting.page.ts ***!
  \*****************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./setting.page.html */ "q/tK");
/* harmony import */ var _setting_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting.page.scss */ "cA7n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/analytics.service */ "Y9WU");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "FUe0");





// import { LocalNotificationActionType } from '@capacitor/core';





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"];
let SettingPage = class SettingPage {
    constructor(navCtrl, menu, service, route, router, analyticsService) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.service = service;
        this.route = route;
        this.router = router;
        this.analyticsService = analyticsService;
        this.spinner = false;
        this.Sesion = true;
        this.ver = false;
    }
    ngOnInit() {
        let arreglo = localStorage.getItem('user');
        this.idUsuario = JSON.parse(arreglo).id;
        // this.consoltarUser()
    }
    ionViewWillEnter() {
        this.consoltarUser();
    }
    cerrarsession() {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }
    cambiarPerfil(valor) {
        console.log('este es el id de  usuario', this.idUsuario);
        console.log('este es el imgperfil', valor);
        this.service.updateImgPerfil({ id: this.idUsuario, imgPerfil: valor })
            .then(res => {
            console.log('esta es la respuesta', res);
            this.consoltarUser();
        }, err => {
            console.log(err);
        });
    }
    consoltarUser() {
        this.service.consultarUser(this.idUsuario)
            .then(res => {
            console.log('esta es la del usuario', res);
            this.Avatar = res.imgPerfil;
        }, err => {
            console.log(err);
        });
    }
};
SettingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_7__["AnalyticsService"] }
];
SettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-setting',
        template: _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_setting_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingPage);



/***/ }),

/***/ "Wef7":
/*!***************************************************!*\
  !*** ./src/app/setting/setting-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SettingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageRoutingModule", function() { return SettingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.page */ "Dnt8");




const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_3__["SettingPage"]
    }
];
let SettingPageRoutingModule = class SettingPageRoutingModule {
};
SettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingPageRoutingModule);



/***/ }),

/***/ "cA7n":
/*!*******************************************!*\
  !*** ./src/app/setting/setting.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  color: white;\n}\n\nion-content.ios {\n  top: 100px !important;\n}\n\n.mglamra {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.imagenSelect {\n  border: 4px solid #00cdd0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoic2V0dGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNvbnRlbnQuaW9ze1xuICAgIHRvcDogMTAwcHggIWltcG9ydGFudDtcbn1cblxuLm1nbGFtcmF7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uaW1hZ2VuU2VsZWN0e1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICMwMGNkZDA7XG59XG4iXX0= */");

/***/ }),

/***/ "nWY6":
/*!*******************************************!*\
  !*** ./src/app/setting/setting.module.ts ***!
  \*******************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting-routing.module */ "Wef7");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting.page */ "Dnt8");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/shared-directives.module */ "Fgaq");








let SettingPageModule = class SettingPageModule {
};
SettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingPageRoutingModule"],
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__["SharedDirectivesModule"]
        ],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
    })
], SettingPageModule);



/***/ }),

/***/ "q/tK":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header #header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\">Volver</ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title >Cursos mas Vistos</ion-title> -->\n    <img class=\"logo\" src=\"/assets/img/logo.png\">\n    <!-- <ion-row class=\"ion-justify-content-center ion-text-center\">\n      <ion-col size=\"4\" class=\"ion-text-right\">\n        TV Shows\n      </ion-col>\n      <ion-col size=\"4\">\n        Movies\n      </ion-col>\n      <ion-col size=\"4\" tappable (click)=\"openCategories()\" class=\"ion-text-left\">\n        Categories <ion-icon name=\"caret-down-outline\"></ion-icon>\n      </ion-col>\n    </ion-row> -->\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" [appHideHeader]=\"header\" style=\"top: 76px;\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12 \" class=\"ion-text-center\">\n        <p>Seleccione imagen de  perfil</p>\n      </ion-col>\n          <ion-col size=\"6\" >\n            \n            <ion-avatar class=\"avat mglamra\"   (click)=\"cambiarPerfil('1')\">\n              <img src=\"assets/img/avatar.jpg\" [ngClass]=\"Avatar && Avatar==1 ? 'imagenSelect' : ''\">\n            </ion-avatar>\n    </ion-col>\n    <ion-col size=\"6\">\n            <ion-avatar class=\"avat mglamra\" (click)=\"cambiarPerfil('2')\" >\n          <img src=\"assets/img/astronauta.png\" [ngClass]=\"Avatar && Avatar==2 ? 'imagenSelect' : ''\">\n        </ion-avatar>\n    </ion-col>\n    </ion-row>\n  \n  </ion-grid>\n  <ion-list>\n    <ion-item>\n      <ion-label><a routerLink=\"/tabs/privacypolicy\" class=\"labelList\">Política de Privacidad</a></ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label><a routerLink=\"/tabs/terms\" class=\"labelList\">Términos y Condiciones</a></ion-label>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-label><a routerLink=\"/tabs/returnpolicy\" class=\"labelList\">Política de Devoluciones</a></ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label><a routerLink=\"/tabs/shippingpolicy\" class=\"labelList\">Política de Envío</a></ion-label>\n    </ion-item>\n    <ion-item> -->\n      <ion-item>\n      <ion-label><a (click)=\"cerrarsession()\" class=\"labelList\">Cerrar Sesión</a></ion-label>\n    </ion-item>\n \n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=setting-setting-module.js.map