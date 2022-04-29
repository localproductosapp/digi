(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagomodal-pagomodal-module"],{

/***/ "Gtik":
/*!*******************************************************!*\
  !*** ./src/app/pagomodal/pagomodal-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PagomodalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagomodalPageRoutingModule", function() { return PagomodalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pagomodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagomodal.page */ "z1j3");




const routes = [
    {
        path: '',
        component: _pagomodal_page__WEBPACK_IMPORTED_MODULE_3__["PagomodalPage"]
    }
];
let PagomodalPageRoutingModule = class PagomodalPageRoutingModule {
};
PagomodalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PagomodalPageRoutingModule);



/***/ }),

/***/ "ablm":
/*!***********************************************!*\
  !*** ./src/app/pagomodal/pagomodal.module.ts ***!
  \***********************************************/
/*! exports provided: PagomodalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagomodalPageModule", function() { return PagomodalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pagomodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagomodal-routing.module */ "Gtik");
/* harmony import */ var _pagomodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagomodal.page */ "z1j3");







let PagomodalPageModule = class PagomodalPageModule {
};
PagomodalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pagomodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PagomodalPageRoutingModule"]
        ],
        declarations: [_pagomodal_page__WEBPACK_IMPORTED_MODULE_6__["PagomodalPage"]]
    })
], PagomodalPageModule);



/***/ })

}]);
//# sourceMappingURL=pagomodal-pagomodal-module.js.map