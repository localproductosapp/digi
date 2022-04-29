(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "+OVq":
/*!***********************************************!*\
  !*** ./src/app/modal/modal-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageRoutingModule", function() { return ModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.page */ "Af+r");




const routes = [
    {
        path: '',
        component: _modal_page__WEBPACK_IMPORTED_MODULE_3__["ModalPage"]
    }
];
let ModalPageRoutingModule = class ModalPageRoutingModule {
};
ModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalPageRoutingModule);



/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "Af+r":
/*!*************************************!*\
  !*** ./src/app/modal/modal.page.ts ***!
  \*************************************/
/*! exports provided: ModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPage", function() { return ModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal.page.html */ "wwHD");
/* harmony import */ var _modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.page.scss */ "qdCT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");





// import categoryData from '../../assets/mockdata/categories.json';

let ModalPage = class ModalPage {
    constructor(modalCtrl, apiService) {
        this.modalCtrl = modalCtrl;
        this.apiService = apiService;
    }
    ngOnInit() {
        this.categorias();
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    categorias() {
        this.apiService.categories()
            .then(res => {
            // this.cateSpinner=false
            this.categories = JSON.parse(JSON.stringify(res)).data;
            console.log('cat menu', this.categories);
        }, err => {
            //  this.cateSpinner=false
            console.log(err);
        });
    }
};
ModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
ModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal',
        template: _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalPage);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header #header class=\"ion-no-border\">\n  <ion-toolbar>\n    <img class=\"logo\" src=\"/assets/img/logo.png\">\n    <ion-row class=\"ion-justify-content-center ion-text-center\">\n      <ion-col size=\"4\" class=\"ion-text-right\">\n        <a routerLink=\"/tabs/tag/Dosis diaria\" >Dosis diaria</a>\n      </ion-col>\n      <ion-col size=\"4\">\n        <a routerLink=\"/tabs/tag/Programa\" > Programa</a>\n      </ion-col>\n      <ion-col size=\"4\" tappable (click)=\"openCategories()\" class=\"ion-text-left\">\n        Categorias <ion-icon name=\"caret-down-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" [appHideHeader]=\"header\">\n\n  <div class=\"spotlight\" *ngIf=\"cursoMasVisto && cursoMasVisto.portada2!=null\" style=\"background-image: url({{cursoMasVisto.portada2}})\" >\n    <div class=\"gradient\" s></div>\n    \n    <div class=\"info\" *ngIf=\"cursoMasVisto\">\n      <!-- <img class=\"title\" [src]=\"cursoMasVisto && cursoMasVisto.url_image==null ? 'assets/img/portada.jpg' : cursoMasVisto.url_image\">  -->\n      <span class=\"titleMasvisto\">{{cursoMasVisto.name}}</span>\n     <!-- <span class=\"rating\"><ion-icon name=\"star-outline\"></ion-icon> {{ cursoMasVisto.view }}</span>  -->\n\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"4\" class=\"ion-tex-center\">\n          <div class=\"btn-vertical\" style=\"color: white;\">\n            \n              <ion-icon name=\"heart-outline\" (click)=\"storeGuardado(cursoMasVisto.id)\"></ion-icon>\n              <span (click)=\"storeGuardado(cursoMasVisto.id)\">Guardar</span>\n           \n          </div>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-tex-center\">\n          <a (click)=\"cursosVistos(cursoMasVisto.id)\" routerLink=\"/detailCurso/{{cursoMasVisto.id}}\">\n            <div class=\"btn-play\">\n              <ion-icon name=\"play\" color=\"danger\"></ion-icon>\n              <span>Reproducir</span>\n            \n            </div>\n          </a>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-tex-center\">\n          <!-- <div class=\"btn-vertical\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>Info</span>\n          </div> -->\n        </ion-col>\n      </ion-row>\n\n    </div>\n  </div>\n\n\n\n\n  <div class=\"spotlight\" *ngIf=\"cursoMasVisto && cursoMasVisto.portada2==null\" style=\"background-image: url(assets/img/banner_vistos.png)\" >\n    <div class=\"gradient\" style=\"height: 275px;\"></div>\n    \n    <div class=\"info\" *ngIf=\"cursoMasVisto\">\n      <!-- <img class=\"title\" [src]=\"cursoMasVisto && cursoMasVisto.url_image==null ? 'assets/img/portada.jpg' : cursoMasVisto.url_image\">  -->\n      <span class=\"titleMasvisto\">{{cursoMasVisto.name}}</span>\n     <!-- <span class=\"rating\"><ion-icon name=\"star-outline\"></ion-icon> {{ cursoMasVisto.view }}</span>  -->\n\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"4\" class=\"ion-tex-center\">\n          <div class=\"btn-vertical\" style=\"color: white;\">\n            \n              <ion-icon name=\"heart-outline\" (click)=\"storeGuardado(cursoMasVisto.id)\"></ion-icon>\n              <span (click)=\"storeGuardado(cursoMasVisto.id)\">Guardar</span>\n           \n          </div>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-tex-center\">\n          <a (click)=\"cursosVistos(cursoMasVisto.id)\" routerLink=\"/detailCurso/{{cursoMasVisto.id}}\">\n            <div class=\"btn-play\">\n              <ion-icon name=\"play\" color=\"danger\"></ion-icon>\n              <span>Reproducir</span>\n            \n            </div>\n          </a>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-tex-center\">\n          <div class=\"btn-vertical\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>Info</span>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </div>\n  </div>\n\n\n  <ion-grid *ngIf=\"spinnerGeneral\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-spinner *ngIf=\"spinnerGeneral\" name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <div *ngFor=\"let section of categories\" class=\"ion-padding\">\n \n    <span class=\"section-title\">{{ section.name }}</span>\n    <ion-slides [options]=\"slideOpts\" style=\"margin-bottom: -71px;\">\n\n      <ion-slide *ngFor=\"let series of section.cursos\">\n        <div >\n        <img (click)=\"cursosVistos(series.id)\" routerLink=\"/tabs/detailCurso/{{series.id}}\" class=\"tamanoImg\"  [src]=\"series && series.url_image==null ? 'assets/img/portada.jpg' : series.url_image\">\n        <ion-grid class=\"claGrid\" *ngIf=\"series && series.tags!='' || series.tags!=null\">\n          <ion-row>\n            <ion-col size=\"12\" class=\"esteIos\" style=\"text-align: right;\" >\n              <ion-chip class=\"bckChip\" >\n      \n                <ion-icon *ngIf=\"series.tags=='Lecciones'\" name=\"school-outline\" color=\"primary\"></ion-icon>\n                <ion-icon *ngIf=\"series.tags=='Preguntas'\" name=\"chatbubble-ellipses-outline\" color=\"primary\"></ion-icon>\n                <ion-icon *ngIf=\"series.tags=='Dosis diaria'\" name=\"sunny-outline\" color=\"primary\"></ion-icon>\n                <ion-icon *ngIf=\"series.tags=='Programa'\" name=\"bulb-outline\" color=\"primary\"></ion-icon>\n                <ion-icon *ngIf=\"series.tags=='Bienvenida'\" name=\"rocket-outline\" color=\"primary\"></ion-icon>\n                <ion-icon *ngIf=\"series.tags=='Muy pronto'\" name=\"time-outline\" color=\"primary\"></ion-icon>\n                <ion-icon *ngIf=\"series.tags=='Caso real'\" name=\"storefront-outline\" color=\"primary\"></ion-icon>\n                <ion-icon *ngIf=\"series.tags=='Audio'\" name=\"mic-outline\" color=\"primary\"></ion-icon>\n                \n                <!-- <ion-icon name=\"bulb\"></ion-icon> -->\n                <ion-label>{{series.tags}}</ion-label>\n              </ion-chip>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-grid class=\"coraPremiun\">\n          <ion-row>\n            \n              <ion-col size=\"6\" style=\"text-align: left;\">\n                <a href=\"#\"  *ngIf=\"series.premiun==1\">\n                  <img src=\"/assets/img/premiun.png\" style=\"width: 18px;\"/>\n                </a> \n              </ion-col>\n            \n            \n            <ion-col size=\"6\" style=\"text-align: right;\">\n              <a (click)=\"storeGuardado(series.id)\">\n                <ion-icon name=\"heart\" color=\"danger\"></ion-icon>\n              </a> \n            </ion-col>\n         \n          </ion-row>\n        </ion-grid>\n        <ion-text class=\"nombreCurso\">{{series.name}}</ion-text>\n      </div>\n       \n        <!-- <div class=\"continue\" >\n \n          <img [src]=\"'/assets/mockdata/'+section.type+'-'+series.id+'.jpg'\">\n          <div class=\"progress-bar\">\n            <div class=\"progress\" [style.width]=\"series.progress + '%'\"></div>\n          </div>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\" class=\"ion-text-left ion-no-padding\">\n              <ion-button fill=\"clear\" color=\"medium\" size=\"small\">\n                <ion-icon name=\"information-circle-outline\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-text-right ion-no-padding\">\n              <ion-button fill=\"clear\" (click)=\"openInfo(series)\" color=\"medium\" size=\"small\">\n                <ion-icon name=\"ellipsis-vertical\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </div> -->\n   \n      </ion-slide>\n\n    </ion-slides>\n    \n  </div>\n</ion-content>");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/shared-directives.module */ "Fgaq");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/modal.module */ "hVeP");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.page */ "zpKS");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_6__["SharedDirectivesModule"],
            _modal_modal_module__WEBPACK_IMPORTED_MODULE_7__["ModalPageModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 425px) {\n  .claGrid {\n    bottom: 170px !important;\n  }\n}\n.pdtop {\n  padding-top: 0px;\n}\n.textoti {\n  font-size: 13px;\n}\n.bckChip {\n  background: #e0e2e1;\n}\n.claGrid {\n  position: relative;\n  bottom: 170px;\n}\n.logo {\n  margin-left: 16px;\n  width: 45%;\n}\nion-content {\n  --offset-top: 0px;\n  position: absolute;\n}\n.spotlight {\n  background-position: center;\n  background-size: cover;\n  margin-bottom: 20px;\n  position: relative;\n  background-repeat: no-repeat;\n  width: 425px;\n  height: 350px;\n  top: 36px;\n}\n.spotlight .gradient {\n  background: linear-gradient(#ffffff00 40%, #000000c2, #000 95%);\n  width: 100%;\n  height: 100%;\n}\n.spotlight .info {\n  width: 100%;\n  position: absolute;\n  bottom: 10px;\n  text-align: center;\n}\n.spotlight img {\n  max-width: 50%;\n}\n.spotlight .rating {\n  display: block;\n  font-weight: 700;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  z-index: 1000;\n  color: white;\n}\n.spotlight .btn-vertical {\n  font-weight: 500;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.spotlight .btn-play {\n  background: #fff;\n  font-weight: 500;\n  border-radius: 2px;\n  color: #000;\n  padding: 4px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\nion-toolbar {\n  --background: linear-gradient(180deg, rgba(0, 0, 0, 0.8715861344537815) 0%, rgba(0, 0, 0, 0.8463760504201681) 57%, rgba(0, 0, 0, 0.6923144257703081) 80%, rgba(0, 0, 0, 0.5438550420168067) 89%, rgba(0, 0, 0, 0) 100%);\n}\n.section-title {\n  font-weight: 600;\n  font-size: large;\n}\nion-slides {\n  margin-top: 4px;\n}\n.continue {\n  background: #191919;\n}\n.progress-bar {\n  height: 2px;\n  width: 100%;\n  background: #262626;\n}\n.progress-bar .progress {\n  background: #E40A15;\n  height: 100%;\n}\n.titleMasvisto {\n  color: white;\n  background: #f5f5dc2e;\n  border-radius: 5px;\n}\n@media (max-width: 400px) {\n  ion-chip {\n    font-size: 11px;\n  }\n}\n.nombreCurso {\n  top: -52px;\n  position: relative;\n  color: white;\n}\n.coraPremiun {\n  height: 10px;\n  top: -102px;\n  position: relative;\n}\na {\n  color: white;\n}\nion-grid.claGrid.ios {\n  padding-left: 0;\n  padding-right: 0;\n}\nion-col.esteIos.ios {\n  padding-left: 0;\n  padding-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEQTtFQUVJO0lBQ0ksd0JBQUE7RUF4RE47QUFDRjtBQThJQTtFQUNJLGdCQUFBO0FBNUlKO0FBK0lBO0VBQ0ksZUFBQTtBQTVJSjtBQStJQTtFQUVJLG1CQUFBO0FBN0lKO0FBZ0pBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FBN0lKO0FBaUpBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FBOUlKO0FBaUpFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQTlJSjtBQWlKRTtFQUNFLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUE5SUo7QUFnSkk7RUFDRSwrREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBOUlOO0FBaUpJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBL0lOO0FBa0pJO0VBQ0UsY0FBQTtBQWhKTjtBQW1KSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQWpKTjtBQW9KSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFsSk47QUFxSkk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFwSk47QUF3SkU7RUFDRSx1TkFBQTtBQXJKSjtBQXdKRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFySko7QUF3SkU7RUFDRSxlQUFBO0FBckpKO0FBd0pFO0VBQ0UsbUJBQUE7QUFySko7QUF3SkU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBckpKO0FBdUpJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBckpOO0FBd0pFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFySko7QUF3SkU7RUFFRTtJQUNFLGVBQUE7RUF0Sko7QUFDRjtBQTBKRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUF4Sko7QUEySkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBeEpKO0FBMkpFO0VBQ0UsWUFBQTtBQXhKSjtBQTJKRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXhKSjtBQTJKRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXhKSiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5iYWNrZ3JvdW5kLWltYWdle1xuLy8gICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvQ29tZXJjaW9zX2xvY2FsZXMucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCA7XG4vLyB9XG4vLyAuYmFja2dyb3VuZC1pbWFnZVByb2R1Y3Rze1xuLy8gICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvUHJvZHVjdG9zXy5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0IDtcbi8vIH1cblxuLy8gLmJhY2tncm91bmQtaW1hZ2VTb3N0ZW5pYmxle1xuLy8gICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvQ29tZXJjaW9zX3Nvc3RlbmlibGVzLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQgO1xuLy8gfVxuLy8gLnBkLTIwe1xuLy8gICAgIGJhY2tncm91bmQ6ICNmZmZmZmZiODtcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xuLy8gfVxuXG5cbi8vIC5paW1nMntcbi8vICAgICAtLW1pbi1oZWlnaHQ6MTUwcHg7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbi8vICAgICBwYWRkaW5nOiA1cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbi8vIH1cblxuLy8gLmNvbG9yVGV4dHtcbi8vICAgICBjb2xvcjojMDBjZWQxO1xuLy8gfVxuLy8gLnRhZ3tcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgdG9wOiAyNXB4O1xuLy8gICAgIGJhY2tncm91bmQ6ICMwMDAwMDBiYTtcbi8vICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgd2lkdGg6IDcwJTtcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbi8vICAgICBwYWRkaW5nOiA1cHg7XG4vLyB9XG5cbi8vIC52YWxpZ25JY29ue1xuLy8gICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4vLyB9XG5cbi8vIC5zd2lwZXItc2xpZGUgaW1nIHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBtYXgtd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiAxNTBweDtcbi8vICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuLy8gfVxuXG4vLyAudGFnMntcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgbGVmdDogMTA5cHg7XG4vLyAgICAgd2lkdGg6IDYwcHg7XG4vLyAgICAgaGVpZ2h0OiA2MHB4O1xuXG4vLyB9XG5cbkBtZWRpYShtaW4td2lkdGg6NDI1cHgpe1xuXG4gICAgLmNsYUdyaWR7XG4gICAgICAgIGJvdHRvbTogMTcwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbi8vICAgICAudGFnMntcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICAgICBsZWZ0OiAxMzBweDtcbi8vICAgICAgICAgd2lkdGg6IDYwcHg7XG4vLyAgICAgICAgIGhlaWdodDogNjBweDtcblxuLy8gICAgICB9XG4vLyB9XG5cbi8vIGF7XG4vLyAgICAgY29sb3I6IGJsYWNrO1xufVxuXG4vLyBpb24taXRlbXtcbi8vICAgICAtLW1pbi1oZWlnaHQ6IDkwcHg7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbi8vICAgICBwYWRkaW5nOiA1cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbi8vIH1cblxuLy8gLmNsYXNzQ29se1xuLy8gICAgIHBhZGRpbmctbGVmdDogMjBweDtcbi8vICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuLy8gfVxuXG4vLyAuaW9zIC50aXRsZS1sYXJnZXtcbi8vICAgICBmb250LXNpemU6IDIwcHg7XG4vLyB9XG5cbi8vIC5pb3MgPiAudGFnMntcblxuLy8gICAgICAgICBsZWZ0OiA4NXB4O1xuIFxuLy8gfVxuXG4vLyBpb24taXRlbS5pb3N7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbi8vIH1cblxuLy8gLnRhZzN7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGNlZDE7XG4vLyAgICAgcGFkZGluZzogMTBweDtcbi8vICAgICBjb2xvcjogd2hpdGU7XG4vLyB9XG5cbi8vIC50eHQtY2VudGVye1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cblxuLy8gLmRwbGJ7XG4vLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyB9XG5cbi8vIC53ZHQxMDB7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyB9XG4vLyAuYXZhdGVye1xuLy8gICAgIHdpZHRoOiAxMDBweDtcbi8vICAgICBoZWlnaHQ6IDEwMHB4O1xuLy8gICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuLy8gICAgIG1hcmdpbi1yaWdodDogYXV0bztcbi8vIH1cblxuLy8gLmltZ0ZvbmRpdG97XG4vLyAgICAgd2lkdGg6IDk4JTtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gfVxuXG4vLyAudGl0dWxvQ2FyZHtcbi8vICAgICBmb250LXNpemU6IDE5cHg7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gfVxuXG4vLyAubGV0cmFzVGl0dWxve1xuLy8gICAgIHRvcDogLTMxcHg7XG4vLyAgICAgY29sb3I6IGJsYWNrO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjdkO1xuLy8gfVxuLy8gcHtcbi8vICAgICBtYXJnaW46IDA7XG4vLyB9XG5cbi5wZHRvcHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4udGV4dG90aXtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5iY2tDaGlwe1xuICAgIFxuICAgIGJhY2tncm91bmQ6ICNlMGUyZTE7XG5cbn1cbi5jbGFHcmlke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDE3MHB4O1xufVxuXG5cbi5sb2dvIHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB3aWR0aDogNDUlO1xuICB9XG4gIFxuICBpb24tY29udGVudCB7XG4gICAgLS1vZmZzZXQtdG9wOiAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIFxuICAuc3BvdGxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiA0MjVweDtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIHRvcDogMzZweDtcbiAgXG4gICAgLmdyYWRpZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmZmZmMDAgNDAlLCAjMDAwMDAwYzIsICMwMDAgOTUlKTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgXG4gICAgLmluZm8ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDEwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICBcbiAgICBpbWcge1xuICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgfVxuICBcbiAgICAucmF0aW5nIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgXG4gICAgLmJ0bi12ZXJ0aWNhbCB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgXG4gICAgLmJ0bi1wbGF5IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gIFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG4gIFxuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuODcxNTg2MTM0NDUzNzgxNSkgMCUsIHJnYmEoMCwgMCwgMCwgMC44NDYzNzYwNTA0MjAxNjgxKSA1NyUsIHJnYmEoMCwgMCwgMCwgMC42OTIzMTQ0MjU3NzAzMDgxKSA4MCUsIHJnYmEoMCwgMCwgMCwgMC41NDM4NTUwNDIwMTY4MDY3KSA4OSUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XG4gIH1cbiAgXG4gIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIH1cbiAgXG4gIGlvbi1zbGlkZXMge1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgfVxuICBcbiAgLmNvbnRpbnVlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xuICB9XG4gIFxuICAucHJvZ3Jlc3MtYmFyIHtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMjYyNjI2O1xuICBcbiAgICAucHJvZ3Jlc3Mge1xuICAgICAgYmFja2dyb3VuZDogI0U0MEExNTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbiAgLnRpdGxlTWFzdmlzdG97XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZGMyZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICBAbWVkaWEobWF4LXdpZHRoOjQwMHB4KXtcblxuICAgIGlvbi1jaGlwe1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cblxuICB9XG5cbiAgLm5vbWJyZUN1cnNve1xuICAgIHRvcDogLTUycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5jb3JhUHJlbWl1bntcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgdG9wOiAtMTAycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgYXtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICBpb24tZ3JpZC5jbGFHcmlkLmlvc3tcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuXG4gIGlvbi1jb2wuZXN0ZUlvcy5pb3N7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cblxuXG4iXX0= */");

/***/ }),

/***/ "hVeP":
/*!***************************************!*\
  !*** ./src/app/modal/modal.module.ts ***!
  \***************************************/
/*! exports provided: ModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-routing.module */ "+OVq");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.page */ "Af+r");







let ModalPageModule = class ModalPageModule {
};
ModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalPageRoutingModule"]
        ],
        declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"]]
    })
], ModalPageModule);



/***/ }),

/***/ "l8aY":
/*!************************************!*\
  !*** ./src/app/modal-animation.ts ***!
  \************************************/
/*! exports provided: modalEnterAnimation, modalLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalEnterAnimation", function() { return modalEnterAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalLeaveAnimation", function() { return modalLeaveAnimation; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");

//
// ENTER
//
const modalEnterAnimation = (baseEl, presentingEl) => {
    const backdropAnimation = Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])()
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
        .beforeStyles({
        'pointer-events': 'none'
    })
        .afterClearStyles(['pointer-events']);
    const wrapperAnimation = Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])()
        .addElement(baseEl.querySelectorAll('.modal-wrapper, .modal-shadow'))
        .beforeStyles({ 'opacity': 0, 'transform': 'translateY(0)' })
        .fromTo('opacity', 0, 1);
    const baseAnimation = Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])()
        .addElement(baseEl)
        .easing('cubic-bezier(0.32,0.72,0,1)')
        .duration(400)
        .addAnimation([wrapperAnimation, backdropAnimation]);
    return baseAnimation;
};
//
// LEAVE
//
const modalLeaveAnimation = (baseEl, presentingEl, duration = 500) => {
    const backdropAnimation = Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])()
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 'var(--backdrop-opacity)', 0.0);
    const wrapperAnimation = Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])()
        .addElement(baseEl.querySelectorAll('.modal-wrapper, .modal-shadow'))
        .beforeStyles({ 'opacity': 0 })
        .fromTo('opacity', 1, 0);
    const baseAnimation = Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["createAnimation"])()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(300)
        .addAnimation([wrapperAnimation, backdropAnimation]);
    return baseAnimation;
};


/***/ }),

/***/ "qdCT":
/*!***************************************!*\
  !*** ./src/app/modal/modal.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-row {\n  margin-top: 15vh;\n  padding-bottom: 30px;\n}\n\nion-col {\n  margin-bottom: 30px;\n  color: var(--ion-color-medium);\n}\n\nion-toolbar {\n  --background: transparent;\n  --border-style: none;\n}\n\nion-toolbar ion-button ion-icon {\n  font-size: 50px;\n}\n\na {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFTTtFQUNFLGVBQUE7QUFBUjs7QUFNRTtFQUNFLFlBQUE7QUFISiIsImZpbGUiOiJtb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcm93IHtcbiAgbWFyZ2luLXRvcDogMTV2aDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4gXG5pb24tY29sIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgIFxuICAgIGlvbi1idXR0b24ge1xuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDUwcHg7IFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgYXtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgfSJdfQ== */");

/***/ }),

/***/ "wwHD":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" >\n  <ion-row>\n    <ion-col size=\"12\" *ngFor=\"let cat of categories\" class=\"ion-text-center\">\n      <a routerLink=\"/tabs/home-categorias/{{cat.id}}\" (click)=\"dismiss()\"><b>{{ cat.name }}</b></a>\n    </ion-col>\n  </ion-row>\n</ion-content>\n \n<ion-footer class=\"ion-text-center\">\n  <ion-toolbar>\n    <ion-button (click)=\"dismiss()\" fill=\"clear\" color=\"light\">\n      <ion-icon name=\"close-circle\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/analytics.service */ "Y9WU");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../modal/modal.page */ "Af+r");
/* harmony import */ var _services_drawer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/drawer.service */ "5qeJ");
/* harmony import */ var _modal_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modal-animation */ "l8aY");





// import { LocalNotificationActionType } from '@capacitor/core';




// import { FCM } from '@capacitor-community/fcm';







// const { PushNotifications } = Plugins;
let HomePage = class HomePage {
    constructor(navCtrl, menu, service, route, platform, router, domCtrl, toastController, analyticsService, modalCtrl, drawerService) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.service = service;
        this.route = route;
        this.platform = platform;
        this.router = router;
        this.domCtrl = domCtrl;
        this.toastController = toastController;
        this.analyticsService = analyticsService;
        this.modalCtrl = modalCtrl;
        this.drawerService = drawerService;
        this.enabled = this.analyticsService.analyticsEnabled;
        this.spinnerFeatured = false;
        this.spinnerDecoration = false;
        this.spinnerCosmetic = false;
        this.spinnerBook = false;
        this.precioPorcentajeBook = '';
        this.precioPorcentajeCosmetic = '';
        this.precioPorcentajeDecoration = '';
        this.precioPorcentajeFeature = '';
        this.cateSpinner = false;
        this.spinnerGeneral = false;
        this.slideOpts = {
            slidesPerView: 2.4,
            spaceBetween: 10,
            freeMode: true
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
        this.getCategories();
        this.cursosMasVistos();
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
    search(event) {
        let buscador = event.target.value;
        console.log('este es la busqueda', buscador);
        if (buscador == '') {
            this.cart = [];
        }
        else {
            this.analyticsService.logEvent(buscador);
            this.service.search(buscador)
                .then(res => {
                this.cart = res;
                console.log('esta e s la buisqueda2', res);
            }, err => {
                console.log(err);
            });
        }
    }
    eventHandler(codeKey, event) {
        let buscador = event.target.value;
        console.log('este es  la tecla tocada', codeKey);
        if (codeKey == 13) {
            this.navCtrl.navigateRoot(['/tabs/search', buscador]);
        }
    }
    cat(event) {
        let buscador = event.target.value;
        if (buscador == '') {
            this.cart = [];
        }
    }
    getCategories() {
        this.spinnerGeneral = true;
        this.service.categories()
            .then(res => {
            this.spinnerGeneral = false;
            console.log('esta categoria cursois', res);
            this.categories = JSON.parse(JSON.stringify(res)).data;
            if (JSON.parse(JSON.stringify(res)).data.cursos2 != '') {
                this.categories.forEach((elementPrincipal, index) => {
                    elementPrincipal.cursos2.forEach((elementCursos2, index2) => {
                        elementPrincipal.cursos.push(elementCursos2);
                    });
                });
            }
            console.log('arreglo definitivo', this.categories);
        }, err => {
            this.spinnerGeneral = false;
            console.log(err);
        });
    }
    cursosMasVistos() {
        // this.cateSpinner=true
        this.service.categories({ orderBy: 'View', sortBy: 'asc' })
            .then(res => {
            // this.cateSpinner=false
            console.log('el curso mas visto portada', res);
            this.cursoMasVisto = JSON.parse(JSON.stringify(res)).data[0].cursos[0];
            console.log('esta categoria cursos mas vistos', this.cursoMasVisto);
        }, err => {
            //  this.cateSpinner=false
            console.log(err);
        });
    }
    cursosVistos(id) {
        // this.cateSpinner=true
        this.CursoPersona(id);
        this.service.cursosMasVistos(id)
            .then(res => {
            // this.cateSpinner=false
            console.log('esta categoria cursos mas vistos', res);
            // this.categories = JSON.parse(JSON.stringify(res)).data;
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
    openCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_8__["ModalPage"],
                cssClass: 'transparent-modal',
                enterAnimation: _modal_animation__WEBPACK_IMPORTED_MODULE_10__["modalEnterAnimation"],
                leaveAnimation: _modal_animation__WEBPACK_IMPORTED_MODULE_10__["modalLeaveAnimation"]
            });
            yield modal.present();
        });
    }
    openInfo(series) {
        this.drawerService.openDrawer(series.title);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["DomController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_7__["AnalyticsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_drawer_service__WEBPACK_IMPORTED_MODULE_9__["DrawerService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map