(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cursos-mas-vistos-cursos-mas-vistos-module"],{

/***/ "17UB":
/*!***************************************************************!*\
  !*** ./src/app/cursos-mas-vistos/cursos-mas-vistos.module.ts ***!
  \***************************************************************/
/*! exports provided: CursosMasVistosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosMasVistosPageModule", function() { return CursosMasVistosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cursos_mas_vistos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cursos-mas-vistos-routing.module */ "Op+n");
/* harmony import */ var _cursos_mas_vistos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cursos-mas-vistos.page */ "uyAL");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/shared-directives.module */ "Fgaq");








let CursosMasVistosPageModule = class CursosMasVistosPageModule {
};
CursosMasVistosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cursos_mas_vistos_routing_module__WEBPACK_IMPORTED_MODULE_5__["CursosMasVistosPageRoutingModule"],
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__["SharedDirectivesModule"]
        ],
        declarations: [_cursos_mas_vistos_page__WEBPACK_IMPORTED_MODULE_6__["CursosMasVistosPage"]]
    })
], CursosMasVistosPageModule);



/***/ }),

/***/ "ApDA":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cursos-mas-vistos/cursos-mas-vistos.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\">Volver</ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\"><img src=\"assets/img/logo.png\" height=\"70\"></ion-title>\n\n\n  </ion-toolbar>\n\n\n</ion-header> -->\n<ion-header #header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\">Volver</ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title >Cursos mas Vistos</ion-title> -->\n    <img class=\"logo\" src=\"/assets/img/logo.png\">\n    <!-- <ion-row class=\"ion-justify-content-center ion-text-center\">\n      <ion-col size=\"4\" class=\"ion-text-right\">\n        TV Shows\n      </ion-col>\n      <ion-col size=\"4\">\n        Movies\n      </ion-col>\n      <ion-col size=\"4\" tappable (click)=\"openCategories()\" class=\"ion-text-left\">\n        Categories <ion-icon name=\"caret-down-outline\"></ion-icon>\n      </ion-col>\n    </ion-row> -->\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" [appHideHeader]=\"header\" style=\"top: 76px;\">\n  \n  <ion-grid *ngIf=\"spinnerFeatured\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-spinner *ngIf=\"spinnerFeatured\" name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n        <ion-list >\n       \n               \n         \n<ion-grid>\n \n\n  <ion-row *ngIf=\"categories\" >\n\n    <ion-col size=\"12\">\n  \n\n        <ion-grid>\n          <ion-row >\n\n    \n            <ion-col size=\"4\" *ngFor=\"let item of arregloCursos\" style=\"height: 168px;\">\n\n              <a (click)=\"cursosVistos(item.id)\" routerLink=\"/tabs/detailCurso/{{item.id}}\">\n                <img class=\"tamanoImg\"  [src]=\"item && item.url_image==null ? 'assets/img/portada.jpg' : item.url_image\">\n                <ion-grid class=\"claGrid\" *ngIf=\"item && item.tags!='' || item.tags!=null\">\n                  <ion-row>\n                    <ion-col size=\"12\" class=\"esteIos\" style=\"text-align: center;\" >\n                      <ion-chip class=\"bckChip\" >\n              \n                        <ion-icon *ngIf=\"item.tags=='Lecciones'\" name=\"school-outline\" color=\"primary\"></ion-icon>\n                        <ion-icon *ngIf=\"item.tags=='Preguntas'\" name=\"chatbubble-ellipses-outline\" color=\"primary\"></ion-icon>\n                        <ion-icon *ngIf=\"item.tags=='Dosis diaria'\" name=\"sunny-outline\" color=\"primary\"></ion-icon>\n                        <ion-icon *ngIf=\"item.tags=='Programa'\" name=\"bulb-outline\" color=\"primary\"></ion-icon>\n                        <ion-icon *ngIf=\"item.tags=='Bienvenida'\" name=\"rocket-outline\" color=\"primary\"></ion-icon>\n                        <ion-icon *ngIf=\"item.tags=='Muy pronto'\" name=\"time-outline\" color=\"primary\"></ion-icon>\n                        <ion-icon *ngIf=\"item.tags=='Caso real'\" name=\"storefront-outline\" color=\"primary\"></ion-icon>\n                        <ion-icon *ngIf=\"item.tags=='Audio'\" name=\"mic-outline\" color=\"primary\"></ion-icon>\n                        <ion-label>{{item.tags}}</ion-label>\n                      </ion-chip>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n\n                <ion-grid class=\"coraPremiun\">\n                  <ion-row>\n                    \n                      <ion-col size=\"6\" style=\"text-align: left;\" *ngIf=\"item.premiun==1\">\n                        <a href=\"#\" >\n                          <img src=\"/assets/img/premiun.png\" style=\"width: 18px;\"/>\n                        </a> \n                      </ion-col>\n                    \n                    \n                    <!-- <ion-col size=\"6\" style=\"text-align: right;\">\n                      <a (click)=\"storeGuardado(series.id)\">\n                        <ion-icon name=\"heart\" color=\"danger\"></ion-icon>\n                      </a> \n                    </ion-col> -->\n                 \n                  </ion-row>\n                </ion-grid>\n                </a>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-col>\n   \n    \n    \n  </ion-row>\n</ion-grid>\n\n  \n         \n        </ion-list>\n     \n\n\n\n</ion-content>");

/***/ }),

/***/ "Bsix":
/*!***************************************************************!*\
  !*** ./src/app/cursos-mas-vistos/cursos-mas-vistos.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-image {\n  --background: url('Comercios_locales.png') 0 0/100% 100% no-repeat;\n}\n\n.background-imageProducts {\n  --background: url('Productos_.png') 0 0/100% 100% no-repeat;\n}\n\n.background-imageSostenible {\n  --background: url('Comercios_sostenibles.png') 0 0/100% 100% no-repeat;\n}\n\n.pd-20 {\n  background: #ffffffb8;\n  padding: 10px;\n}\n\n.iimg2 {\n  --min-height:150px;\n  margin-bottom: 20px;\n  padding: 5px;\n  border-radius: 25px;\n}\n\n.colorText {\n  color: #00ced1;\n}\n\n.tag {\n  position: relative;\n  top: 25px;\n  background: #000000ba;\n  color: white;\n  width: 70%;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 5px;\n}\n\n.valignIcon {\n  vertical-align: bottom;\n}\n\n.swiper-slide img {\n  width: 100%;\n  max-width: 100%;\n  height: 150px;\n  max-height: 100%;\n}\n\n.tag2 {\n  position: absolute;\n  left: 109px;\n  width: 60px;\n  height: 60px;\n}\n\n@media (min-width: 425px) {\n  .tag2 {\n    position: absolute;\n    left: 130px;\n    width: 60px;\n    height: 60px;\n  }\n}\n\na {\n  color: black;\n}\n\nion-item {\n  --min-height: 90px;\n  margin-bottom: 20px;\n  padding: 5px;\n  border-radius: 25px;\n}\n\n.classCol {\n  padding-left: 20px;\n  text-align: left;\n}\n\n.ios .title-large {\n  font-size: 20px;\n}\n\n.ios > .tag2 {\n  left: 85px;\n}\n\nion-item.ios {\n  margin-bottom: 30px;\n}\n\n.tag3 {\n  position: absolute;\n  background-color: #00ced1;\n  padding: 10px;\n  color: white;\n}\n\n.txt-center {\n  text-align: center;\n}\n\n.dplb {\n  display: inline-block;\n}\n\n.wdt100 {\n  width: 100%;\n}\n\n.avater {\n  width: 100px;\n  height: 100px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.imgFondito {\n  width: 98%;\n  border-radius: 10px;\n}\n\n.tituloCard {\n  font-size: 19px;\n  text-align: center;\n}\n\n.letrasTitulo {\n  top: -31px;\n  color: black;\n  font-weight: 600;\n  background: #ffffff7d;\n}\n\np {\n  margin: 0;\n}\n\n.pdtop {\n  padding-top: 0px;\n}\n\n.wdt-100 {\n  width: 100%;\n}\n\n.bckChip {\n  background: #e0e2e1;\n}\n\n.mxh {\n  max-height: 155px;\n}\n\n.logo {\n  margin-left: 16px;\n  width: 45%;\n}\n\nion-content {\n  --offset-top: 0px;\n  position: absolute;\n}\n\n.spotlight {\n  width: 100%;\n  height: 60%;\n  background-position: center;\n  background-size: cover;\n  margin-bottom: 20px;\n  position: relative;\n}\n\n.spotlight .gradient {\n  background: linear-gradient(#ffffff00 40%, #000000c2, #000 95%);\n  width: 100%;\n  height: 100%;\n}\n\n.spotlight .info {\n  width: 100%;\n  position: absolute;\n  bottom: 10px;\n  text-align: center;\n}\n\n.spotlight img {\n  max-width: 50%;\n}\n\n.spotlight .rating {\n  display: block;\n  font-weight: 700;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  z-index: 1000;\n  color: white;\n}\n\n.spotlight .btn-vertical {\n  font-weight: 500;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.spotlight .btn-play {\n  background: #fff;\n  font-weight: 500;\n  border-radius: 2px;\n  color: #000;\n  padding: 4px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\nion-toolbar {\n  --background: linear-gradient(180deg, rgba(0, 0, 0, 0.8715861344537815) 0%, rgba(0, 0, 0, 0.8463760504201681) 57%, rgba(0, 0, 0, 0.6923144257703081) 80%, rgba(0, 0, 0, 0.5438550420168067) 89%, rgba(0, 0, 0, 0) 100%);\n}\n\n.section-title {\n  font-weight: 600;\n  font-size: large;\n}\n\n.claGrid {\n  position: relative;\n  bottom: 150px !important;\n}\n\n@media (min-width: 425px) {\n  .claGrid {\n    bottom: 150px !important;\n  }\n\n  ion-chip {\n    font-size: 11px;\n  }\n}\n\n@media (max-width: 320px) {\n  .claGrid {\n    bottom: 150px !important;\n  }\n\n  ion-chip {\n    font-size: 9px;\n  }\n}\n\n@media (max-width: 375px) {\n  .claGrid {\n    bottom: 150px !important;\n  }\n\n  ion-chip {\n    font-size: 9px;\n  }\n}\n\n.tamanoImg {\n  width: 162px;\n  height: 325px;\n}\n\n.coraPremiun {\n  height: 10px;\n  top: -102px;\n  position: relative;\n}\n\n@media (max-width: 400px) {\n  ion-chip {\n    font-size: 11px;\n  }\n}\n\nion-grid.claGrid.ios {\n  padding-left: 0;\n  padding-right: 0;\n}\n\nion-col.esteIos.ios {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.tamanoImg {\n  width: 100% !important;\n  height: 135px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2N1cnNvcy1tYXMtdmlzdG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtFQUFBO0FBQ0o7O0FBQ0E7RUFDSSwyREFBQTtBQUVKOztBQUNBO0VBQ0ksc0VBQUE7QUFFSjs7QUFBQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQUdKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFBQTtFQUNJLHNCQUFBO0FBR0o7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHSjs7QUFDQTtFQUVJO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFDTjtBQUNGOztBQUdBO0VBQ0ksWUFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtBQURKOztBQUlBO0VBRVEsVUFBQTtBQUZSOztBQU1BO0VBQ0ksbUJBQUE7QUFISjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7QUFISjs7QUFNQTtFQUNBLHFCQUFBO0FBSEE7O0FBTUE7RUFDSSxXQUFBO0FBSEo7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFJQTtFQUNJLFNBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0FBREo7O0FBSUE7RUFFSSxtQkFBQTtBQUZKOztBQVNBO0VBQ0ksaUJBQUE7QUFOSjs7QUFVQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQVBKOztBQVVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQVBKOztBQVVFO0VBQ0UsV0FBQTtFQUVBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVJKOztBQVVJO0VBQ0UsK0RBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVJOOztBQVdJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBVE47O0FBWUk7RUFDRSxjQUFBO0FBVk47O0FBYUk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFYTjs7QUFjSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFaTjs7QUFlSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWROOztBQWtCRTtFQUNFLHVOQUFBO0FBZko7O0FBbUJFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQWhCSjs7QUFtQkU7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0FBaEJKOztBQW1CQTtFQUVJO0lBQ0ksd0JBQUE7RUFqQk47O0VBbUJFO0lBQ0ksZUFBQTtFQWhCTjtBQUNGOztBQW9CQTtFQUVJO0lBQ0ksd0JBQUE7RUFuQk47O0VBcUJFO0lBQ0ksY0FBQTtFQWxCTjtBQUNGOztBQXFCQTtFQUVJO0lBQ0ksd0JBQUE7RUFwQk47O0VBc0JFO0lBQ0ksY0FBQTtFQW5CTjtBQUNGOztBQXNCQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBcEJKOztBQXdCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFyQko7O0FBd0JFO0VBQ0U7SUFDRSxlQUFBO0VBckJKO0FBQ0Y7O0FBd0JFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBdEJKOztBQXlCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXRCSjs7QUEyQkE7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0FBeEJKIiwiZmlsZSI6ImN1cnNvcy1tYXMtdmlzdG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLWltYWdle1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvQ29tZXJjaW9zX2xvY2FsZXMucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCA7XG59XG4uYmFja2dyb3VuZC1pbWFnZVByb2R1Y3Rze1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvUHJvZHVjdG9zXy5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0IDtcbn1cblxuLmJhY2tncm91bmQtaW1hZ2VTb3N0ZW5pYmxle1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvQ29tZXJjaW9zX3Nvc3RlbmlibGVzLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQgO1xufVxuLnBkLTIwe1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmZiODtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5cbi5paW1nMntcbiAgICAtLW1pbi1oZWlnaHQ6MTUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmNvbG9yVGV4dHtcbiAgICBjb2xvcjojMDBjZWQxO1xufVxuLnRhZ3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAyNXB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDBiYTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi52YWxpZ25JY29ue1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4udGFnMntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTA5cHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuXG59XG5cbkBtZWRpYShtaW4td2lkdGg6NDI1cHgpe1xuXG4gICAgLnRhZzJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMTMwcHg7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG5cbiAgICAgfVxufVxuXG5he1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWl0ZW17XG4gICAgLS1taW4taGVpZ2h0OiA5MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5jbGFzc0NvbHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmlvcyAudGl0bGUtbGFyZ2V7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaW9zID4gLnRhZzJ7XG5cbiAgICAgICAgbGVmdDogODVweDtcbiBcbn1cblxuaW9uLWl0ZW0uaW9ze1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi50YWcze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZWQxO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4udHh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kcGxie1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ud2R0MTAwe1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmF2YXRlcntcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5pbWdGb25kaXRve1xuICAgIHdpZHRoOiA5OCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRpdHVsb0NhcmR7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxldHJhc1RpdHVsb3tcbiAgICB0b3A6IC0zMXB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY3ZDtcbn1cbnB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ucGR0b3B7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLndkdC0xMDB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5iY2tDaGlwe1xuICAgIFxuICAgIGJhY2tncm91bmQ6ICNlMGUyZTE7XG5cbn1cbi8vIC5jbGFHcmlke1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICB0b3A6IC0xNTVweDtcbi8vIH1cbi5teGh7XG4gICAgbWF4LWhlaWdodDogMTU1cHg7XG59XG5cblxuLmxvZ28ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cbiAgXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLW9mZnNldC10b3A6IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgXG4gIC5zcG90bGlnaHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIGhlaWdodDogNTB2aDtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gICAgLmdyYWRpZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmZmZmMDAgNDAlLCAjMDAwMDAwYzIsICMwMDAgOTUlKTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgXG4gICAgLmluZm8ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDEwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICBcbiAgICBpbWcge1xuICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgfVxuICBcbiAgICAucmF0aW5nIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgXG4gICAgLmJ0bi12ZXJ0aWNhbCB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgXG4gICAgLmJ0bi1wbGF5IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gIFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG4gIFxuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuODcxNTg2MTM0NDUzNzgxNSkgMCUsIHJnYmEoMCwgMCwgMCwgMC44NDYzNzYwNTA0MjAxNjgxKSA1NyUsIHJnYmEoMCwgMCwgMCwgMC42OTIzMTQ0MjU3NzAzMDgxKSA4MCUsIHJnYmEoMCwgMCwgMCwgMC41NDM4NTUwNDIwMTY4MDY3KSA4OSUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XG4gIH1cbiAgXG4gIFxuICAuc2VjdGlvbi10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG5cbiAgLmNsYUdyaWR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMTUwcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhKG1pbi13aWR0aDo0MjVweCl7XG5cbiAgICAuY2xhR3JpZHtcbiAgICAgICAgYm90dG9tOiAxNTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tY2hpcHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cbn1cblxuXG5AbWVkaWEobWF4LXdpZHRoOjMyMHB4KXtcblxuICAgIC5jbGFHcmlke1xuICAgICAgICBib3R0b206IDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1jaGlwe1xuICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6Mzc1cHgpe1xuXG4gICAgLmNsYUdyaWR7XG4gICAgICAgIGJvdHRvbTogMTUwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWNoaXB7XG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIH1cbn1cblxuLnRhbWFub0ltZ3tcbiAgICB3aWR0aDogMTYycHg7XG4gICAgaGVpZ2h0OiAzMjVweDtcbn1cblxuXG4uY29yYVByZW1pdW57XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHRvcDogLTEwMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIEBtZWRpYShtYXgtd2lkdGg6NDAwcHgpe1xuICAgIGlvbi1jaGlwe1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cbiAgfVxuXG4gIGlvbi1ncmlkLmNsYUdyaWQuaW9ze1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG5cbiAgaW9uLWNvbC5lc3RlSW9zLmlvc3tcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuXG4gIFxuXG4udGFtYW5vSW1nIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTM1cHggIWltcG9ydGFudDtcblxufVxuIl19 */");

/***/ }),

/***/ "Op+n":
/*!***********************************************************************!*\
  !*** ./src/app/cursos-mas-vistos/cursos-mas-vistos-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CursosMasVistosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosMasVistosPageRoutingModule", function() { return CursosMasVistosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cursos_mas_vistos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cursos-mas-vistos.page */ "uyAL");




const routes = [
    {
        path: '',
        component: _cursos_mas_vistos_page__WEBPACK_IMPORTED_MODULE_3__["CursosMasVistosPage"]
    }
];
let CursosMasVistosPageRoutingModule = class CursosMasVistosPageRoutingModule {
};
CursosMasVistosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CursosMasVistosPageRoutingModule);



/***/ }),

/***/ "uyAL":
/*!*************************************************************!*\
  !*** ./src/app/cursos-mas-vistos/cursos-mas-vistos.page.ts ***!
  \*************************************************************/
/*! exports provided: CursosMasVistosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosMasVistosPage", function() { return CursosMasVistosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cursos_mas_vistos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cursos-mas-vistos.page.html */ "ApDA");
/* harmony import */ var _cursos_mas_vistos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cursos-mas-vistos.page.scss */ "Bsix");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");





// import { LocalNotificationActionType } from '@capacitor/core';




// import { AnalyticsService } from '../services/analytics.service';
// import { FCM } from '@capacitor-community/fcm';


let CursosMasVistosPage = class CursosMasVistosPage {
    constructor(navCtrl, menu, service, route, platform, router, domCtrl, toastController) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.service = service;
        this.route = route;
        this.platform = platform;
        this.router = router;
        this.domCtrl = domCtrl;
        this.toastController = toastController;
        this.spinnerFeatured = false;
        this.spinnerDecoration = false;
        this.spinnerCosmetic = false;
        this.spinnerBook = false;
        this.arregloCursos = [];
        this.cateSpinner = false;
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
        let arreglo = localStorage.getItem('user');
        this.idUsuario = JSON.parse(arreglo).id;
        console.log('idusuario', this.idUsuario);
        this.getCursos();
    }
    ionViewWillEnter() {
    }
    openMenu() {
        console.log('entro');
        this.menu.open('custom');
    }
    gotopoliticas() {
        this.navCtrl.navigateForward('politicas');
    }
    getCursos() {
        this.spinnerFeatured = true;
        this.service.categories({ orderBy: 'View', sortBy: 'asc' })
            .then(res => {
            this.spinnerFeatured = false;
            this.categories = JSON.parse(JSON.stringify(res)).data;
            this.categories.forEach(categorias => {
                // console.log('este es el primer elemento',categorias)
                categorias.cursos.forEach(element => {
                    this.arregloCursos.push(element);
                });
            });
            console.log('cursillos', this.arregloCursos);
            // console.log('esta categoria cursois',this.categories );
        }, err => {
            this.spinnerFeatured = false;
            console.log(err);
        });
    }
    cursosVistos(id) {
        this.cateSpinner = true;
        this.CursoPersona(id);
        this.service.cursosMasVistos(id)
            .then(res => {
            // this.cateSpinner=false
            console.log('esta categoria cursois', res);
            this.categories = JSON.parse(JSON.stringify(res)).data;
        }, err => {
            //  this.cateSpinner=false
            console.log(err);
        });
    }
    CursoPersona(id) {
        // storeGuardados
        this.service.CursoPorPersona({ idCursoFk: id, idUsuarioFk: this.idUsuario })
            .then(res => {
            // this.cateSpinner=false
            console.log('hizo play', res);
            // this.presentToast('Ha guardado el curso!')
            // this.categories = JSON.parse(JSON.stringify(res)).data;
        }, err => {
            //  this.cateSpinner=false
            console.log(err);
        });
    }
    storeGuardado(id) {
        // storeGuardados
        this.service.storeGuardados({ idVideo: id, idUsuario: this.idUsuario })
            .then(res => {
            // this.cateSpinner=false
            console.log('guardo el video', res);
            if (res.message) {
                this.presentToast('Ya tiene este curso guardado');
            }
            else {
                this.presentToast('Ha guardado el curso!');
            }
            // this.categories = JSON.parse(JSON.stringify(res)).data;
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
CursosMasVistosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["DomController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
CursosMasVistosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cursos-mas-vistos',
        template: _raw_loader_cursos_mas_vistos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cursos_mas_vistos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CursosMasVistosPage);



/***/ })

}]);
//# sourceMappingURL=cursos-mas-vistos-cursos-mas-vistos-module.js.map