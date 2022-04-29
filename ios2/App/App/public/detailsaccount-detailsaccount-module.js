(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detailsaccount-detailsaccount-module"],{

/***/ "84lM":
/*!*********************************************************!*\
  !*** ./src/app/detailsaccount/detailsaccount.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailsaccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsaccountPageModule", function() { return DetailsaccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detailsaccount_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detailsaccount-routing.module */ "zX1V");
/* harmony import */ var _detailsaccount_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detailsaccount.page */ "uJLV");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/shared-directives.module */ "Fgaq");








let DetailsaccountPageModule = class DetailsaccountPageModule {
};
DetailsaccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detailsaccount_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsaccountPageRoutingModule"],
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__["SharedDirectivesModule"]
        ],
        declarations: [_detailsaccount_page__WEBPACK_IMPORTED_MODULE_6__["DetailsaccountPage"]]
    })
], DetailsaccountPageModule);



/***/ }),

/***/ "ZNPr":
/*!*********************************************************!*\
  !*** ./src/app/detailsaccount/detailsaccount.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imageBig {\n  max-height: 300px;\n  width: 100%;\n}\n\nion-grid {\n  padding: 0;\n}\n\nion-card.cardito {\n  margin-top: -129px !important;\n  max-width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: -5px 2px 143px 0px rgba(245, 241, 241, 0.75);\n  -webkit-box-shadow: -5px 2px 143px 0px #f7f7f7;\n  -moz-box-shadow: -5px 2px 143px 0px rgba(245, 241, 241, 0.75);\n}\n\nion-text {\n  margin-bottom: 20px;\n}\n\n.colorPrincipal {\n  color: #11d1d3;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\n.ptpb20 {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.capsule {\n  background: black;\n  color: white;\n  padding: 5px;\n  border-radius: 10px;\n}\n\n.swiper-slide img {\n  width: 100%;\n  max-width: 100%;\n  height: 150px;\n  max-height: 100%;\n}\n\n.mb-20 {\n  margin-bottom: 20px;\n}\n\n.colorText {\n  color: #00ced1;\n}\n\n.tag2 {\n  position: absolute;\n  left: 84px;\n  top: 30px;\n  width: 60px;\n  height: 60px;\n}\n\n@media (min-width: 425px) {\n  .tag2 {\n    position: absolute;\n    top: 30px;\n    left: 107px;\n    width: 60px;\n    height: 60px;\n  }\n}\n\n.ios {\n  background: white;\n}\n\nion-card.cardito.ios {\n  margin-top: -129px !important;\n  max-width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: -5px 2px 143px 0px rgba(245, 241, 241, 0.75);\n  -webkit-box-shadow: -5px 2px 143px 0px #f7f7f7;\n  -moz-box-shadow: -5px 2px 143px 0px rgba(245, 241, 241, 0.75);\n}\n\n.ios > .tag2 {\n  left: 57px;\n}\n\n.tag3 {\n  position: absolute;\n  background-color: #00ced1;\n  padding: 10px;\n  color: white;\n}\n\n.avat {\n  width: 150px;\n  height: 150px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.txt-Title {\n  text-align: center;\n  color: black;\n}\n\n.txt-center {\n  text-align: center;\n}\n\n.valignIcon {\n  vertical-align: bottom;\n}\n\nion-slide {\n  height: 300px;\n}\n\n.item-inner {\n  border: 0 !important;\n}\n\n:root {\n  /* Set the background of the entire app */\n  --ion-background-color: #FFFFFF !important;\n  /* Set the font family of the entire app */\n  --ion-text-color: #000 !important;\n}\n\nion-content, ion-card {\n  --background: white;\n}\n\n.item .item-content {\n  background-color: transparent !important;\n}\n\n.light {\n  background: white;\n}\n\n.item-native {\n  background: transparent !important;\n}\n\nion-list, ion-item {\n  background: white !important;\n}\n\n.item-background-color {\n  --ion-item-background:white;\n}\n\nion-buttons.ios {\n  background: transparent !important;\n}\n\nion-back-button.ios {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RldGFpbHNhY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtBQUVKOztBQUFBO0VBSUksNkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLHdEQUFBO0VBQ0EsOENBQUE7RUFDQSw2REFBQTtBQUFKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFBQTtFQUNJLG1CQUFBO0FBR0o7O0FBQUE7RUFDSSxjQUFBO0FBR0o7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHSjs7QUFDQTtFQUVJO0lBQ0ksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBQ047QUFDRjs7QUFHQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFFSSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsd0RBQUE7RUFDQSw4Q0FBQTtFQUNBLDZEQUFBO0FBRko7O0FBS0E7RUFDSSxVQUFBO0FBRko7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFESjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBRUksa0JBQUE7RUFDQSxZQUFBO0FBREo7O0FBS0E7RUFDSSxrQkFBQTtBQUZKOztBQUlBO0VBQ0ksc0JBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7QUFESjs7QUFJQTtFQUNJLG9CQUFBO0FBREo7O0FBS0E7RUFDSSx5Q0FBQTtFQUNBLDBDQUFBO0VBRUEsMENBQUE7RUFDQSxpQ0FBQTtBQUhKOztBQU1FO0VBQ0UsbUJBQUE7QUFISjs7QUFNRTtFQUNFLHdDQUFBO0FBSEo7O0FBT0U7RUFDSSxpQkFBQTtBQUpOOztBQU9FO0VBQ0ksa0NBQUE7QUFKTjs7QUFPRTtFQUNFLDRCQUFBO0FBSko7O0FBT0U7RUFDRSwyQkFBQTtBQUpKOztBQU9BO0VBQ0ksa0NBQUE7QUFKSjs7QUFPQTtFQUNJLGtDQUFBO0FBSkoiLCJmaWxlIjoiZGV0YWlsc2FjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlQmlne1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuaW9uLWdyaWR7XG4gICAgcGFkZGluZzogMDtcbn1cbmlvbi1jYXJkLmNhcmRpdG97XG4gICAgLy8gbWFyZ2luLXRvcDogLTMwcHggIWltcG9ydGFudDtcbiAgICAvLyBtaW4td2lkdGg6OTUlO1xuXG4gICAgbWFyZ2luLXRvcDogLTEyOXB4IWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgLW1vei1ib3gtc2hhZG93OiAtNXB4IDJweCA5MHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIGJveC1zaGFkb3c6IC01cHggMnB4IDE0M3B4IDBweCByZ2JhKDI0NSwyNDEsMjQxLDAuNzUpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTVweCAycHggMTQzcHggMHB4IHJnYigyNDcgMjQ3IDI0Nyk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAtNXB4IDJweCAxNDNweCAwcHggcmdiYSgyNDUsMjQxLDI0MSwwLjc1KTtcbn1cbmlvbi10ZXh0e1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY29sb3JQcmluY2lwYWx7XG4gICAgY29sb3I6IzExZDFkMztcbn1cblxuaW9uLWljb257XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucHRwYjIwe1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNhcHN1bGV7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnN3aXBlci1zbGlkZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5tYi0yMHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29sb3JUZXh0e1xuICAgIGNvbG9yOiMwMGNlZDE7XG59XG5cbi50YWcye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA4NHB4O1xuICAgIHRvcDogMzBweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG5cbn1cblxuQG1lZGlhKG1pbi13aWR0aDo0MjVweCl7XG5cbiAgICAudGFnMntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgIGxlZnQ6IDEwN3B4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuXG4gICAgIH1cbn1cblxuLmlvc3tcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLWNhcmQuY2FyZGl0by5pb3N7XG4gICAgLy8gbWluLXdpZHRoOiA5MSU7XG4gICAgbWFyZ2luLXRvcDogLTEyOXB4IWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgLW1vei1ib3gtc2hhZG93OiAtNXB4IDJweCA5MHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIGJveC1zaGFkb3c6IC01cHggMnB4IDE0M3B4IDBweCByZ2JhKDI0NSwyNDEsMjQxLDAuNzUpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTVweCAycHggMTQzcHggMHB4IHJnYigyNDcgMjQ3IDI0Nyk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAtNXB4IDJweCAxNDNweCAwcHggcmdiYSgyNDUsMjQxLDI0MSwwLjc1KTtcbn1cblxuLmlvcz4udGFnMntcbiAgICBsZWZ0OiA1N3B4O1xufVxuLnRhZzN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGNlZDE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uYXZhdHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi50eHQtVGl0bGV7XG4gICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4udHh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udmFsaWduSWNvbntcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG5pb24tc2xpZGV7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLml0ZW0taW5uZXJ7XG4gICAgYm9yZGVyOjAgIWltcG9ydGFudDtcbn1cblxuXG46cm9vdCB7XG4gICAgLyogU2V0IHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSBlbnRpcmUgYXBwICovXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xuICAgXG4gICAgLyogU2V0IHRoZSBmb250IGZhbWlseSBvZiB0aGUgZW50aXJlIGFwcCAqL1xuICAgIC0taW9uLXRleHQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1jb250ZW50LCBpb24tY2FyZHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG5cbiAgLml0ZW0gLml0ZW0tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgfVxuXG5cbiAgLmxpZ2h0e1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cblxuICAuaXRlbS1uYXRpdmV7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLWxpc3QsIGlvbi1pdGVte1xuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaXRlbS1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDp3aGl0ZTtcbn1cblxuaW9uLWJ1dHRvbnMuaW9ze1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbi5pb3N7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuIl19 */");

/***/ }),

/***/ "dC/R":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detailsaccount/detailsaccount.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header #header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\">Volver</ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title >Cursos mas Vistos</ion-title> -->\n    <img class=\"logo\" src=\"/assets/img/logo.png\">\n    <!-- <ion-row class=\"ion-justify-content-center ion-text-center\">\n      <ion-col size=\"4\" class=\"ion-text-right\">\n        TV Shows\n      </ion-col>\n      <ion-col size=\"4\">\n        Movies\n      </ion-col>\n      <ion-col size=\"4\" tappable (click)=\"openCategories()\" class=\"ion-text-left\">\n        Categories <ion-icon name=\"caret-down-outline\"></ion-icon>\n      </ion-col>\n    </ion-row> -->\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid class=\"mb-20\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-spinner *ngIf=\"spinner\" name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n    <ion-row >\n      <img class=\"imageBig\" src=\"assets/img/elearning.jpg\">\n      <ion-card class=\"cardito\">\n        <ion-card-header>\n          <ion-avatar class=\"avat\" *ngIf=\"AvatarImg\">\n            <img [src]=\"AvatarImg && AvatarImg==1 ? 'assets/img/avatar.jpg' : 'assets/img/astronauta.png'\">\n          </ion-avatar>\n          <!-- <ion-item-divider>\n          <ion-card-title >{{store.store_name}}</ion-card-title>\n          </ion-item-divider> -->\n        </ion-card-header>\n      \n        <ion-card-content>\n\n          <ion-label>\n            <!-- <h1 class=\"txt-Title\">¡Hola!</h1> -->\n            <h1 class=\"txt-Title\">Hola, {{nombre}}</h1>\n            <!-- <p class=\"txt-center\">Plan:{{plan==2 ? 'Freemium' : 'Premium'}}</p> -->\n          </ion-label>\n         \n        \n\n        </ion-card-content>\n      </ion-card>\n  \n      \n      <ion-col size=\"12\">\n       \n        <ion-list > \n          <div class=\"item-content\">\n          <ion-item class=\"item-background-color\">\n            <a routerLink=\"/tabs/videosGuardado\">\n              <ion-label><ion-icon name=\"heart\" color=\"danger\"></ion-icon> Guardados</ion-label>\n            </a>\n          </ion-item>\n          <ion-item class=\"item-background-color\">\n            <a routerLink=\"/tabs/setting\">\n              <ion-label><ion-icon name=\"settings\" color=\"danger\"></ion-icon> Configuración</ion-label>\n            </a>\n          </ion-item>\n        </div>\n         \n        </ion-list>\n      \n      </ion-col>\n\n      <ion-col size=\"12\" class=\"txt-center\">\n        <img src=\"assets/img/digi.jpeg\" style=\"width: 50%;\">\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n\n\n \n  </ion-grid>\n\n\n \n</ion-content>\n");

/***/ }),

/***/ "uJLV":
/*!*******************************************************!*\
  !*** ./src/app/detailsaccount/detailsaccount.page.ts ***!
  \*******************************************************/
/*! exports provided: DetailsaccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsaccountPage", function() { return DetailsaccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detailsaccount_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detailsaccount.page.html */ "dC/R");
/* harmony import */ var _detailsaccount_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detailsaccount.page.scss */ "ZNPr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/analytics.service */ "Y9WU");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "FUe0");





// import { LocalNotificationActionType } from '@capacitor/core';





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"];
let DetailsaccountPage = class DetailsaccountPage {
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
        if (localStorage.getItem('user')) {
            this.Sesion = false;
            this.ver = true;
            let arreglo = localStorage.getItem('user');
            this.nombre = JSON.parse(arreglo).names;
            this.plan = JSON.parse(arreglo).subscription_id;
            this.avatar = JSON.parse(arreglo).avatar;
            this.idUsuario = JSON.parse(arreglo).id;
            // console.log('arreglo',JSON.parse(arreglo).names)
            //  console.log('nombres',this.nombre)
        }
        let nn1 = Storage.get({ key: 'name' });
        let ee1 = Storage.get({ key: 'email' });
        let rr1 = Storage.get({ key: 'registro' });
        this.getObject();
        // }
    }
    ionViewWillEnter() {
        this.consoltarUser();
    }
    openMenu() {
        console.log('entro');
        this.menu.open('custom');
    }
    setObject() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            Storage.set({
                key: 'name',
                value: JSON.stringify({
                    name: this.userLogin.data.display_name
                })
            });
            Storage.set({
                key: 'email',
                value: JSON.stringify({
                    name: this.userLogin.data.user_email
                })
            });
            Storage.set({
                key: 'registro',
                value: JSON.stringify({
                    name: this.userLogin.data.user_registered
                })
            });
            Storage.set({
                key: 'usuario',
                value: JSON.stringify({
                    name: this.user
                })
            });
            Storage.set({
                key: 'password',
                value: JSON.stringify({
                    name: this.password
                })
            });
            Storage.set({
                key: 'idUser',
                value: JSON.stringify({
                    name: this.userLogin.data.ID
                })
            });
        });
    }
    getObject() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ret = yield Storage.get({ key: 'name' });
            const user = JSON.parse(ret.value);
            const ret2 = yield Storage.get({ key: 'email' });
            const user2 = JSON.parse(ret2.value);
            const ret3 = yield Storage.get({ key: 'registro' });
            const user3 = JSON.parse(ret3.value);
            const ret4 = yield Storage.get({ key: 'idUser' });
            const user4 = JSON.parse(ret4.value);
            // console.log('aqui va el cart_hash',user2.name)
            this.nombre = user.name;
            this.correo = user2.name;
            this.registro = user3.name;
            // this.idUsuario=user4.name
        });
    }
    consoltarUser() {
        this.service.consultarUser(this.idUsuario)
            .then(res => {
            console.log('esta es la del usuario', res);
            this.AvatarImg = res.imgPerfil;
        }, err => {
            console.log(err);
        });
    }
};
DetailsaccountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_7__["AnalyticsService"] }
];
DetailsaccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detailsaccount',
        template: _raw_loader_detailsaccount_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detailsaccount_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailsaccountPage);



/***/ }),

/***/ "zX1V":
/*!*****************************************************************!*\
  !*** ./src/app/detailsaccount/detailsaccount-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetailsaccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsaccountPageRoutingModule", function() { return DetailsaccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detailsaccount_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detailsaccount.page */ "uJLV");




const routes = [
    {
        path: '',
        component: _detailsaccount_page__WEBPACK_IMPORTED_MODULE_3__["DetailsaccountPage"]
    }
];
let DetailsaccountPageRoutingModule = class DetailsaccountPageRoutingModule {
};
DetailsaccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsaccountPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=detailsaccount-detailsaccount-module.js.map