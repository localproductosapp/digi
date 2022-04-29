(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-categorias-home-categorias-module"],{

/***/ "itcH":
/*!*******************************************************************!*\
  !*** ./src/app/home-categorias/home-categorias-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: HomeCategoriasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCategoriasPageRoutingModule", function() { return HomeCategoriasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_categorias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-categorias.page */ "vrN4");




const routes = [
    {
        path: '',
        component: _home_categorias_page__WEBPACK_IMPORTED_MODULE_3__["HomeCategoriasPage"]
    }
];
let HomeCategoriasPageRoutingModule = class HomeCategoriasPageRoutingModule {
};
HomeCategoriasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeCategoriasPageRoutingModule);



/***/ }),

/***/ "nHwc":
/*!***********************************************************!*\
  !*** ./src/app/home-categorias/home-categorias.module.ts ***!
  \***********************************************************/
/*! exports provided: HomeCategoriasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCategoriasPageModule", function() { return HomeCategoriasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-categorias-routing.module */ "itcH");
/* harmony import */ var _home_categorias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-categorias.page */ "vrN4");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/shared-directives.module */ "Fgaq");








let HomeCategoriasPageModule = class HomeCategoriasPageModule {
};
HomeCategoriasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__["SharedDirectivesModule"],
            _home_categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeCategoriasPageRoutingModule"]
        ],
        declarations: [_home_categorias_page__WEBPACK_IMPORTED_MODULE_6__["HomeCategoriasPage"]]
    })
], HomeCategoriasPageModule);



/***/ }),

/***/ "qGwF":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-categorias/home-categorias.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\">Volver</ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\"><img src=\"assets/img/logo.png\" height=\"70\"></ion-title>\n\n\n  </ion-toolbar>\n\n\n</ion-header> -->\n<ion-header #header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\">Volver</ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title >Cursos mas Vistos</ion-title> -->\n    <img class=\"logo\" src=\"/assets/img/logo.png\">\n    <!-- <ion-row class=\"ion-justify-content-center ion-text-center\">\n      <ion-col size=\"4\" class=\"ion-text-right\">\n        TV Shows\n      </ion-col>\n      <ion-col size=\"4\">\n        Movies\n      </ion-col>\n      <ion-col size=\"4\" tappable (click)=\"openCategories()\" class=\"ion-text-left\">\n        Categories <ion-icon name=\"caret-down-outline\"></ion-icon>\n      </ion-col>\n    </ion-row> -->\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" [appHideHeader]=\"header\" style=\"top: 76px;\">\n  \n  \n        <ion-list >\n       \n               \n         \n<ion-grid>\n \n\n  <ion-row *ngIf=\"categories\" >\n\n    <ion-col size=\"12\">\n      <ion-grid *ngIf=\"spinnerFeatured\">\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-text-center\">\n            <ion-spinner *ngIf=\"spinnerFeatured\" name=\"crescent\"></ion-spinner>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n        <ion-grid *ngIf=\"tagsss==0\">\n          <ion-row *ngFor=\"let items of categories\">\n\n    \n            <ion-col size=\"4\" *ngFor=\"let item of items.cursos\" style=\"height: 168px;\">\n\n              <a (click)=\"cursosVistos(item.id)\" routerLink=\"/tabs/detailCurso/{{item.id}}\">\n                <img class=\"tamanoImg\"  [src]=\"item && item.url_image==null ? 'assets/img/portada.jpg' : item.url_image\">\n                <ion-grid class=\"claGrid\" *ngIf=\"item && item.tags!='' || item.tags!=null\">\n                  <ion-row>\n                    <ion-col size=\"12\" style=\"text-align: center;\" >\n                      <ion-chip class=\"bckChip\" >\n              \n                        <ion-icon *ngIf=\"item.tags=='Lecciones'\" name=\"school-outline\" color=\"primary\"></ion-icon>\n                        <ion-icon *ngIf=\"item.tags=='Preguntas'\" name=\"chatbubble-ellipses-outline\" color=\"primary\"></ion-icon>\n                        <ion-icon *ngIf=\"item.tags=='Dosis diaria'\" name=\"sunny-outline\" color=\"primary\"></ion-icon>\n                        <ion-icon *ngIf=\"item.tags=='Programa'\" name=\"bulb-outline\" color=\"primary\"></ion-icon>\n                        <ion-icon *ngIf=\"item.tags=='Bienvenida'\" name=\"rocket-outline\" color=\"primary\"></ion-icon>\n                        <ion-icon *ngIf=\"item.tags=='Muy pronto'\" name=\"time-outline\" color=\"primary\"></ion-icon>\n                        <ion-icon *ngIf=\"item.tags=='Audio'\" name=\"mic-outline\" color=\"primary\"></ion-icon>\n                        <ion-label>{{item.tags}}</ion-label>\n                      </ion-chip>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n\n                <ion-grid class=\"coraPremiun\">\n                  <ion-row>\n                    \n                      <ion-col size=\"6\" style=\"text-align: left;\" *ngIf=\"item.premiun==1\">\n                        <a href=\"#\" >\n                          <img src=\"/assets/img/premiun.png\" style=\"width: 18px;\"/>\n                        </a> \n                      </ion-col>\n                    \n                    \n                    <!-- <ion-col size=\"6\" style=\"text-align: right;\">\n                      <a (click)=\"storeGuardado(series.id)\">\n                        <ion-icon name=\"heart\" color=\"danger\"></ion-icon>\n                      </a> \n                    </ion-col> -->\n                 \n                  </ion-row>\n                </ion-grid>\n                </a>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n      <ion-grid *ngIf=\"tagsss==1\">\n        <ion-row >\n\n  \n          <ion-col size=\"4\" *ngFor=\"let item of categories\" style=\"height: 168px;\">\n\n            <a (click)=\"cursosVistos(item.id)\" routerLink=\"/tabs/detailCurso/{{item.id}}\">\n              <img class=\"tamanoImg\"  [src]=\"item && item.url_image==null ? 'assets/img/portada.jpg' : item.url_image\">\n              <ion-grid class=\"claGrid\" *ngIf=\"item && item.tags!='' || item.tags!=null\">\n                <ion-row>\n                  <ion-col size=\"12\" style=\"text-align: center;\" >\n                    <ion-chip class=\"bckChip\" >\n            \n                      <ion-icon *ngIf=\"item.tags=='Lecciones'\" name=\"school-outline\" color=\"primary\"></ion-icon>\n                      <ion-icon *ngIf=\"item.tags=='Preguntas'\" name=\"chatbubble-ellipses-outline\" color=\"primary\"></ion-icon>\n                      <ion-icon *ngIf=\"item.tags=='Dosis diaria'\" name=\"sunny-outline\" color=\"primary\"></ion-icon>\n                      <ion-icon *ngIf=\"item.tags=='Programa'\" name=\"bulb-outline\" color=\"primary\"></ion-icon>\n                      <ion-icon *ngIf=\"item.tags=='Bienvenida'\" name=\"rocket-outline\" color=\"primary\"></ion-icon>\n                      <ion-icon *ngIf=\"item.tags=='Muy pronto'\" name=\"time-outline\" color=\"primary\"></ion-icon>\n                      <ion-icon *ngIf=\"item.tags=='Audio'\" name=\"mic-outline\" color=\"primary\"></ion-icon>\n                      <ion-label>{{item.tags}}</ion-label>\n                    </ion-chip>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n              <ion-grid class=\"coraPremiun\">\n                <ion-row>\n                  \n                    <ion-col size=\"6\" style=\"text-align: left;\" *ngIf=\"item.premiun==1\">\n                      <a href=\"#\" >\n                        <img src=\"/assets/img/premiun.png\" style=\"width: 18px;\"/>\n                      </a> \n                    </ion-col>\n                  \n                  \n                  <!-- <ion-col size=\"6\" style=\"text-align: right;\">\n                    <a (click)=\"storeGuardado(series.id)\">\n                      <ion-icon name=\"heart\" color=\"danger\"></ion-icon>\n                    </a> \n                  </ion-col> -->\n               \n                </ion-row>\n              </ion-grid>\n              </a>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    </ion-col>\n   \n    \n    \n  </ion-row>\n</ion-grid>\n\n  \n         \n        </ion-list>\n     \n\n\n\n</ion-content>");

/***/ }),

/***/ "vrN4":
/*!*********************************************************!*\
  !*** ./src/app/home-categorias/home-categorias.page.ts ***!
  \*********************************************************/
/*! exports provided: HomeCategoriasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCategoriasPage", function() { return HomeCategoriasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_categorias_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-categorias.page.html */ "qGwF");
/* harmony import */ var _home_categorias_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-categorias.page.scss */ "xWsI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");





// import { LocalNotificationActionType } from '@capacitor/core';




// import { AnalyticsService } from '../services/analytics.service';
// import { FCM } from '@capacitor-community/fcm';


let HomeCategoriasPage = class HomeCategoriasPage {
    constructor(navCtrl, menu, service, route, platform, router, domCtrl, toastController) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.service = service;
        this.route = route;
        this.platform = platform;
        this.router = router;
        this.domCtrl = domCtrl;
        this.toastController = toastController;
        this.tagsss = 0;
        this.spinnerFeatured = false;
        this.spinnerDecoration = false;
        this.spinnerCosmetic = false;
        this.spinnerBook = false;
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
    }
    ionViewWillEnter() {
        let arreglo = localStorage.getItem('user');
        this.idUsuario = JSON.parse(arreglo).id;
        console.log('idusuario', this.idUsuario);
        console.log('esta es la categoria', this.route.snapshot.paramMap.get('id'));
        this.getCursos();
    }
    openMenu() {
        console.log('entro');
        this.menu.open('custom');
    }
    gotopoliticas() {
        this.navCtrl.navigateForward('politicas');
    }
    getCursos() {
        this.cateSpinner = true;
        if (this.route.snapshot.paramMap.get('id')) {
            this.tagsss = 0;
            console.log('aqui entramos en id');
            this.service.categoriesIndex({ category_id: this.route.snapshot.paramMap.get('id') })
                .then(res => {
                this.cateSpinner = false;
                this.categories = JSON.parse(JSON.stringify(res)).data;
                console.log('esta categoria cursois', this.categories);
            }, err => {
                this.cateSpinner = false;
                console.log(err);
            });
        }
        if (this.route.snapshot.paramMap.get('tag')) {
            this.tagsss = 1;
            console.log('aqui entramos en tag');
            this.service.categoriesIndex({ tag: this.route.snapshot.paramMap.get('tag') })
                .then(res => {
                this.cateSpinner = false;
                this.categories = JSON.parse(JSON.stringify(res)).data;
                console.log('esta categoria cursois', this.categories);
            }, err => {
                this.cateSpinner = false;
                console.log(err);
            });
        }
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
            this.presentToast('Ha guardado el curso!');
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
HomeCategoriasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["DomController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
HomeCategoriasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-categorias',
        template: _raw_loader_home_categorias_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_categorias_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeCategoriasPage);



/***/ }),

/***/ "xWsI":
/*!***********************************************************!*\
  !*** ./src/app/home-categorias/home-categorias.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-image {\n  --background: url('Comercios_locales.png') 0 0/100% 100% no-repeat;\n}\n\n.background-imageProducts {\n  --background: url('Productos_.png') 0 0/100% 100% no-repeat;\n}\n\n.background-imageSostenible {\n  --background: url('Comercios_sostenibles.png') 0 0/100% 100% no-repeat;\n}\n\n.pd-20 {\n  background: #ffffffb8;\n  padding: 10px;\n}\n\n.iimg2 {\n  --min-height:150px;\n  margin-bottom: 20px;\n  padding: 5px;\n  border-radius: 25px;\n}\n\n.colorText {\n  color: #00ced1;\n}\n\n.tag {\n  position: relative;\n  top: 25px;\n  background: #000000ba;\n  color: white;\n  width: 70%;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 5px;\n}\n\n.valignIcon {\n  vertical-align: bottom;\n}\n\n.swiper-slide img {\n  width: 100%;\n  max-width: 100%;\n  height: 150px;\n  max-height: 100%;\n}\n\n.tag2 {\n  position: absolute;\n  left: 109px;\n  width: 60px;\n  height: 60px;\n}\n\n@media (min-width: 425px) {\n  .tag2 {\n    position: absolute;\n    left: 130px;\n    width: 60px;\n    height: 60px;\n  }\n}\n\na {\n  color: black;\n}\n\nion-item {\n  --min-height: 90px;\n  margin-bottom: 20px;\n  padding: 5px;\n  border-radius: 25px;\n}\n\n.classCol {\n  padding-left: 20px;\n  text-align: left;\n}\n\n.ios .title-large {\n  font-size: 20px;\n}\n\n.ios > .tag2 {\n  left: 85px;\n}\n\nion-item.ios {\n  margin-bottom: 30px;\n}\n\n.tag3 {\n  position: absolute;\n  background-color: #00ced1;\n  padding: 10px;\n  color: white;\n}\n\n.txt-center {\n  text-align: center;\n}\n\n.dplb {\n  display: inline-block;\n}\n\n.wdt100 {\n  width: 100%;\n}\n\n.avater {\n  width: 100px;\n  height: 100px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.imgFondito {\n  width: 98%;\n  border-radius: 10px;\n}\n\n.tituloCard {\n  font-size: 19px;\n  text-align: center;\n}\n\n.letrasTitulo {\n  top: -31px;\n  color: black;\n  font-weight: 600;\n  background: #ffffff7d;\n}\n\np {\n  margin: 0;\n}\n\n.pdtop {\n  padding-top: 0px;\n}\n\n.wdt-100 {\n  width: 100%;\n}\n\n.bckChip {\n  background: #e0e2e1;\n}\n\n.mxh {\n  max-height: 155px;\n}\n\n.logo {\n  margin-left: 16px;\n  width: 45%;\n}\n\nion-content {\n  --offset-top: 0px;\n  position: absolute;\n}\n\n.spotlight {\n  width: 100%;\n  height: 50vh;\n  background-position: center;\n  background-size: cover;\n  margin-bottom: 20px;\n  position: relative;\n}\n\n.spotlight .gradient {\n  background: linear-gradient(#ffffff00 40%, #000000c2, #000 95%);\n  width: 100%;\n  height: 100%;\n}\n\n.spotlight .info {\n  width: 100%;\n  position: absolute;\n  bottom: 10px;\n  text-align: center;\n}\n\n.spotlight img {\n  max-width: 50%;\n}\n\n.spotlight .rating {\n  display: block;\n  font-weight: 700;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  z-index: 1000;\n  color: white;\n}\n\n.spotlight .btn-vertical {\n  font-weight: 500;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.spotlight .btn-play {\n  background: #fff;\n  font-weight: 500;\n  border-radius: 2px;\n  color: #000;\n  padding: 4px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\nion-toolbar {\n  --background: linear-gradient(180deg, rgba(0, 0, 0, 0.8715861344537815) 0%, rgba(0, 0, 0, 0.8463760504201681) 57%, rgba(0, 0, 0, 0.6923144257703081) 80%, rgba(0, 0, 0, 0.5438550420168067) 89%, rgba(0, 0, 0, 0) 100%);\n}\n\n.section-title {\n  font-weight: 600;\n  font-size: large;\n}\n\n.claGrid {\n  position: relative;\n  bottom: 170px !important;\n}\n\n@media (min-width: 425px) {\n  .claGrid {\n    bottom: 170px !important;\n  }\n\n  ion-chip {\n    font-size: 11px;\n  }\n}\n\n@media (max-width: 320px) {\n  .claGrid {\n    bottom: 170px !important;\n  }\n\n  ion-chip {\n    font-size: 9px;\n  }\n}\n\n@media (max-width: 375px) {\n  .claGrid {\n    bottom: 170px !important;\n  }\n\n  ion-chip {\n    font-size: 9px;\n  }\n}\n\n.tamanoImg {\n  width: 162px;\n  height: 325px;\n}\n\n.coraPremiun {\n  height: 10px;\n  top: -102px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUtY2F0ZWdvcmlhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrRUFBQTtBQUNKOztBQUNBO0VBQ0ksMkRBQUE7QUFFSjs7QUFDQTtFQUNJLHNFQUFBO0FBRUo7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7QUFHSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBR0o7O0FBQUE7RUFDSSxzQkFBQTtBQUdKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR0o7O0FBQ0E7RUFFSTtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBQ047QUFDRjs7QUFHQTtFQUNJLFlBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7QUFESjs7QUFJQTtFQUVRLFVBQUE7QUFGUjs7QUFNQTtFQUNJLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLGtCQUFBO0FBSEo7O0FBTUE7RUFDQSxxQkFBQTtBQUhBOztBQU1BO0VBQ0ksV0FBQTtBQUhKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBRko7O0FBSUE7RUFDSSxTQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtBQURKOztBQUlBO0VBRUksbUJBQUE7QUFGSjs7QUFTQTtFQUNJLGlCQUFBO0FBTko7O0FBVUE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUFQSjs7QUFVRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFQSjs7QUFVRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFQSjs7QUFTSTtFQUNFLCtEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFQTjs7QUFVSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVJOOztBQVdJO0VBQ0UsY0FBQTtBQVROOztBQVlJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBVk47O0FBYUk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBWE47O0FBY0k7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFiTjs7QUFpQkU7RUFDRSx1TkFBQTtBQWRKOztBQWtCRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFmSjs7QUFrQkU7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0FBZko7O0FBa0JBO0VBRUk7SUFDSSx3QkFBQTtFQWhCTjs7RUFrQkU7SUFDSSxlQUFBO0VBZk47QUFDRjs7QUFtQkE7RUFFSTtJQUNJLHdCQUFBO0VBbEJOOztFQW9CRTtJQUNJLGNBQUE7RUFqQk47QUFDRjs7QUFvQkE7RUFFSTtJQUNJLHdCQUFBO0VBbkJOOztFQXFCRTtJQUNJLGNBQUE7RUFsQk47QUFDRjs7QUFxQkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQW5CSjs7QUF1QkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBcEJKIiwiZmlsZSI6ImhvbWUtY2F0ZWdvcmlhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1pbWFnZXtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL0NvbWVyY2lvc19sb2NhbGVzLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQgO1xufVxuLmJhY2tncm91bmQtaW1hZ2VQcm9kdWN0c3tcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL1Byb2R1Y3Rvc18ucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCA7XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlU29zdGVuaWJsZXtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL0NvbWVyY2lvc19zb3N0ZW5pYmxlcy5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0IDtcbn1cbi5wZC0yMHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmYjg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuXG4uaWltZzJ7XG4gICAgLS1taW4taGVpZ2h0OjE1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5jb2xvclRleHR7XG4gICAgY29sb3I6IzAwY2VkMTtcbn1cbi50YWd7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwYmE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4udmFsaWduSWNvbntcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLnRhZzJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwOXB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcblxufVxuXG5AbWVkaWEobWluLXdpZHRoOjQyNXB4KXtcblxuICAgIC50YWcye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDEzMHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuXG4gICAgIH1cbn1cblxuYXtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pdGVte1xuICAgIC0tbWluLWhlaWdodDogOTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uY2xhc3NDb2x7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5pb3MgLnRpdGxlLWxhcmdle1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmlvcyA+IC50YWcye1xuXG4gICAgICAgIGxlZnQ6IDg1cHg7XG4gXG59XG5cbmlvbi1pdGVtLmlvc3tcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGFnM3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2VkMTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnR4dC1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZHBsYntcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLndkdDEwMHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5hdmF0ZXJ7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uaW1nRm9uZGl0b3tcbiAgICB3aWR0aDogOTglO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50aXR1bG9DYXJke1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sZXRyYXNUaXR1bG97XG4gICAgdG9wOiAtMzFweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmN2Q7XG59XG5we1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnBkdG9we1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi53ZHQtMTAwe1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYmNrQ2hpcHtcbiAgICBcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMmUxO1xuXG59XG4vLyAuY2xhR3JpZHtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgdG9wOiAtMTU1cHg7XG4vLyB9XG4ubXhoe1xuICAgIG1heC1oZWlnaHQ6IDE1NXB4O1xufVxuXG5cbi5sb2dvIHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB3aWR0aDogNDUlO1xuICB9XG4gIFxuICBpb24tY29udGVudCB7XG4gICAgLS1vZmZzZXQtdG9wOiAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIFxuICAuc3BvdGxpZ2h0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAgIC5ncmFkaWVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZmZmZjAwIDQwJSwgIzAwMDAwMGMyLCAjMDAwIDk1JSk7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIFxuICAgIC5pbmZvIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgXG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogNTAlO1xuICAgIH1cbiAgXG4gICAgLnJhdGluZyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIFxuICAgIC5idG4tdmVydGljYWwge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIFxuICAgIC5idG4tcGxheSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgcGFkZGluZzogNHB4O1xuICBcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwLjg3MTU4NjEzNDQ1Mzc4MTUpIDAlLCByZ2JhKDAsIDAsIDAsIDAuODQ2Mzc2MDUwNDIwMTY4MSkgNTclLCByZ2JhKDAsIDAsIDAsIDAuNjkyMzE0NDI1NzcwMzA4MSkgODAlLCByZ2JhKDAsIDAsIDAsIDAuNTQzODU1MDQyMDE2ODA2NykgODklLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xuICB9XG4gIFxuICBcbiAgLnNlY3Rpb24tdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuXG4gIC5jbGFHcmlke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDE3MHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYShtaW4td2lkdGg6NDI1cHgpe1xuXG4gICAgLmNsYUdyaWR7XG4gICAgICAgIGJvdHRvbTogMTcwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWNoaXB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG59XG5cblxuQG1lZGlhKG1heC13aWR0aDozMjBweCl7XG5cbiAgICAuY2xhR3JpZHtcbiAgICAgICAgYm90dG9tOiAxNzBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tY2hpcHtcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjM3NXB4KXtcblxuICAgIC5jbGFHcmlke1xuICAgICAgICBib3R0b206IDE3MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1jaGlwe1xuICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICB9XG59XG5cbi50YW1hbm9JbWd7XG4gICAgd2lkdGg6IDE2MnB4O1xuICAgIGhlaWdodDogMzI1cHg7XG59XG5cblxuLmNvcmFQcmVtaXVue1xuICAgIGhlaWdodDogMTBweDtcbiAgICB0b3A6IC0xMDJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=home-categorias-home-categorias-module.js.map