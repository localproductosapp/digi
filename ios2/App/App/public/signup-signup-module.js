(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "6h0i":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding >\n  <ion-grid class=\"fondo-login\">\n    <ion-row>\n        <ion-col size=\"12\" class=\"ion-text-center ion-margin-vertical\">\n          <img src=\"assets/img/logo_login.png\" height=\"70\">\n        </ion-col>\n    </ion-row>\n    <ion-row class=\"form ion-margin ion-padding\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-list lines=\"none\">\n          <ion-item>\n            <ion-input placeholder=\"Usuario\" type=\"text\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder=\"Telefono\" type=\"text\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder=\"Contraseña\" type=\"password\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder=\"Confirmar contraseña\" type=\"password\"></ion-input>\n          </ion-item>\n        </ion-list>\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-text-center\">\n            <ion-button color=\"green\" class=\"btn\">Registrarse</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-text-center ion-no-padding ion-no-margin\">\n            <ion-button routerLink=\"/\" color=\"light\" fill=\"clear\" size=\"small\" class=\"btn fs-min\">Ya poseo un cuenta</ion-button>\n          </ion-col>\n        </ion-row>\n       </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ "RPFs":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "yL7A");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "T9iC":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "RPFs");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "yL7A");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "fJgH":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sc-ion-input-md-h {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\nion-list {\n  background: transparent;\n}\n\nion-item {\n  --background: #000;\n  color: #fff;\n  opacity: 0.4;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.form {\n  position: relative;\n  top: 10%;\n}\n\n.btn {\n  color: #fff;\n}\n\n.fs-min {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQUdKOztBQUFBO0VBQ0ksV0FBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtBQUlKIiwiZmlsZSI6InNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2MtaW9uLWlucHV0LW1kLWh7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuaW9uLWxpc3R7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvcm17XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTAlO1xufVxuXG4uYnRue1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmZzLW1pbntcbiAgICBmb250LXNpemU6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "yL7A":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup.page.html */ "6h0i");
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.scss */ "fJgH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SignupPage = class SignupPage {
    constructor() { }
    ngOnInit() {
    }
};
SignupPage.ctorParameters = () => [];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map