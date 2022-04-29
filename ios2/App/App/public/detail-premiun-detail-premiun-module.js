(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-premiun-detail-premiun-module"],{

/***/ "+3D3":
/*!*******************************************************!*\
  !*** ./src/app/detail-premiun/detail-premiun.page.ts ***!
  \*******************************************************/
/*! exports provided: DetailPremiunPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPremiunPage", function() { return DetailPremiunPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_premiun_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail-premiun.page.html */ "4y3V");
/* harmony import */ var _detail_premiun_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-premiun.page.scss */ "RQOk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "RU0F");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "FUe0");





// import { LocalNotificationActionType } from '@capacitor/core';





// import { CapacitorVideoPlayer } from 'capacitor-video-player';



//import * as WebVPPlugin from 'capacitor-video-player';
const { CapacitorVideoPlayer, Toast } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"];
let DetailPremiunPage = class DetailPremiunPage {
    constructor(navCtrl, menu, service, route, router, streamingMedia, toastController, modalCtrl, platform) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.service = service;
        this.route = route;
        this.router = router;
        this.streamingMedia = streamingMedia;
        this.toastController = toastController;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.spinnerFeatured = false;
        this._first = false;
        this._testApi = true;
    }
    ngOnInit() {
        this.getProduct();
        let arreglo = localStorage.getItem('user');
        this.idUsuario = JSON.parse(arreglo).id;
        this._videoPlayer = CapacitorVideoPlayer;
        // define the video url
        // this._url = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        // add listeners to the plugin
        this._addListenersToPlayerPlugin();
    }
    ngAfterViewInit() {
        let arreglo = localStorage.getItem('user');
        this.subscripcion = JSON.parse(arreglo).subscription_id;
        // console.log('idusuario',this.idUsuario)
        if (this.platform.is('ios')) {
            console.log('es ios');
        }
        else {
            console.log('no es ios');
        }
    }
    reproducir(url, suscripcion, videoId) {
        this.PlayPersona(videoId);
        // if(suscripcion==1 && this.subscripcion==2){
        //   this.presentToast('Este video es solo para usuarios Premiun')
        //   return;
        // }
        if (this.platform.is('ios')) {
            console.log('entre');
            let options = {
                successCallback: () => { console.log('Video played'); },
                errorCallback: (e) => { console.log('Error streaming', e); },
                orientation: 'landscape',
                shouldAutoClose: false,
                controls: true
            };
            this.streamingMedia.playVideo(url, options);
            // this.videoPlayer.play(url)
        }
        else {
            // Playing a video.
            this._videoPlayer.initPlayer({ mode: "fullscreen", url: url, playerId: "fullscreen", componentTag: "app-detail-cursos", subtitle: null, language: null, subtitleOption: null });
        }
    }
    getProduct() {
        this.spinnerFeatured = true;
        this.service.obtenerCurso(this.route.snapshot.paramMap.get('id'))
            .then(res => {
            this.spinnerFeatured = false;
            this.curso = res;
        }, err => {
            this.spinnerFeatured = false;
            console.log(err);
        });
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 3000,
                color: 'danger'
            });
            toast.present();
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
    PlayPersona(id) {
        // storeGuardados
        this.service.PlayPorPersona({ idVideoFk: id, idUsuarioFk: this.idUsuario })
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
    _addListenersToPlayerPlugin() {
        this._handlerPlay = this._videoPlayer.addListener('jeepCapVideoPlayerPlay', (data) => {
            console.log('Event jeepCapVideoPlayerPlay ', data);
        }, false);
        this._handlerPause = this._videoPlayer.addListener('jeepCapVideoPlayerPause', (data) => {
            console.log('Event jeepCapVideoPlayerPause ', data);
        }, false);
        this._handlerEnded = this._videoPlayer.addListener('jeepCapVideoPlayerEnded', (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Event jeepCapVideoPlayerEnded ', data);
        }), false);
        this._handlerExit = this._videoPlayer.addListener('jeepCapVideoPlayerExit', (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Event jeepCapVideoPlayerExit ', data);
        }), false);
        this._handlerReady = this._videoPlayer.addListener('jeepCapVideoPlayerReady', (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Event jeepCapVideoPlayerReady ', data);
            console.log("testVideoPlayerPlugin testAPI ", this._testApi);
            console.log("testVideoPlayerPlugin first ", this._first);
            if (this._testApi && this._first) {
                // test the API
                this._first = false;
                console.log("testVideoPlayerPlugin calling isPlaying ");
                const isPlaying = yield this._videoPlayer.isPlaying({ playerId: "fullscreen" });
                console.log('const isPlaying ', isPlaying);
                this._apiTimer1 = setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const pause = yield this._videoPlayer.pause({ playerId: "fullscreen" });
                    console.log('const pause ', pause);
                    const isPlaying = yield this._videoPlayer.isPlaying({ playerId: "fullscreen" });
                    console.log('const isPlaying after pause ', isPlaying);
                    let currentTime = yield this._videoPlayer.getCurrentTime({ playerId: "fullscreen" });
                    console.log('const currentTime ', currentTime);
                    let muted = yield this._videoPlayer.getMuted({ playerId: "fullscreen" });
                    console.log('initial muted ', muted);
                    const setMuted = yield this._videoPlayer.setMuted({ playerId: "fullscreen", muted: !muted.value });
                    console.log('setMuted ', setMuted);
                    muted = yield this._videoPlayer.getMuted({ playerId: "fullscreen" });
                    console.log('const muted ', muted);
                    const duration = yield this._videoPlayer.getDuration({ playerId: "fullscreen" });
                    console.log("duration ", duration);
                    // valid for movies havin a duration > 25
                    const seektime = currentTime.value + 0.5 * duration.value < duration.value - 25 ? currentTime.value + 0.5 * duration.value
                        : duration.value - 25;
                    const setCurrentTime = yield this._videoPlayer.setCurrentTime({ playerId: "fullscreen", seektime: (seektime) });
                    console.log('const setCurrentTime ', setCurrentTime);
                    const play = yield this._videoPlayer.play({ playerId: "fullscreen" });
                    console.log("play ", play);
                    this._apiTimer2 = setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        const setMuted = yield this._videoPlayer.setMuted({ playerId: "fullscreen", muted: false });
                        console.log('setMuted ', setMuted);
                        const setVolume = yield this._videoPlayer.setVolume({ playerId: "fullscreen", volume: 0.5 });
                        console.log("setVolume ", setVolume);
                        const volume = yield this._videoPlayer.getVolume({ playerId: "fullscreen" });
                        console.log("Volume ", volume);
                        this._apiTimer3 = setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const pause = yield this._videoPlayer.pause({ playerId: "fullscreen" });
                            console.log('const pause ', pause);
                            const duration = yield this._videoPlayer.getDuration({ playerId: "fullscreen" });
                            console.log("duration ", duration);
                            const volume = yield this._videoPlayer.setVolume({ playerId: "fullscreen", volume: 1.0 });
                            console.log("Volume ", volume);
                            const setCurrentTime = yield this._videoPlayer.setCurrentTime({ playerId: "fullscreen", seektime: (duration.value - 3) });
                            console.log('const setCurrentTime ', setCurrentTime);
                            const play = yield this._videoPlayer.play({ playerId: "fullscreen" });
                            console.log('const play ', play);
                        }), 10000);
                    }), 10000);
                }), 5000);
            }
        }), false);
    }
    irCarro() {
        this.navCtrl.navigateForward(['/tabs/cart']);
    }
    Addcart(idCurso, precio) {
        this.service.addCarro({ idUsuarioFk: this.idUsuario, idCursoFk: idCurso, precioCurso: precio })
            .then(res => {
            // this.cateSpinner=false
            console.log('respuesta del agregar carrito', res);
            this.presentToast('Agregado correctamente al carrito');
            // this.categories = JSON.parse(JSON.stringify(res)).data;
        }, err => {
            //  this.cateSpinner=false
            console.log(err);
        });
    }
};
DetailPremiunPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__["StreamingMedia"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
DetailPremiunPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail-premiun',
        template: _raw_loader_detail_premiun_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_premiun_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailPremiunPage);



/***/ }),

/***/ "4y3V":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail-premiun/detail-premiun.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header #header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\">Volver</ion-back-button>\n    </ion-buttons>\n    <img class=\"logo\" src=\"/assets/img/logo.png\">\n    <!-- <ion-row class=\"ion-justify-content-center ion-text-center\">\n      <ion-col size=\"4\" class=\"ion-text-right\">\n        TV Shows\n      </ion-col>\n      <ion-col size=\"4\">\n        Movies\n      </ion-col>\n      <ion-col size=\"4\" tappable (click)=\"openCategories()\" class=\"ion-text-left\">\n        Categories <ion-icon name=\"caret-down-outline\"></ion-icon>\n      </ion-col>\n    </ion-row> -->\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" [appHideHeader]=\"header\">\n<!-- \n  <div fullscreen *ngIf=\"curso\" class=\"tarjeta\">\n\n    <img src=\"assets/img/lerning.jpg\" />\n\n\n    <div class=\"bandita\">\n\n      <ion-card-title class=\"txt-center\">{{curso.name}}</ion-card-title>\n    </div>\n\n  </div> -->\n\n  <!-- [style.background-image]=\"'url(assets/img/lerning.jpg)'\" -->\n\n  <div class=\"spotlight\" *ngIf=\"curso && curso.portada2!=null\" style=\"background-image: url({{curso.portada2}})\"  >\n    <!-- <div class=\"spotlight\" *ngIf=\"curso && curso.url_image==''\" style=\"background-image: url(assets/img/lerning.jpg)\"  > -->\n    <div class=\"gradient\" ></div>\n    \n    <div class=\"info\" *ngIf=\"curso\">\n      <!-- <img class=\"title\" [src]=\"cursoMasVisto && cursoMasVisto.url_image==null ? 'assets/img/portada.jpg' : cursoMasVisto.url_image\">  -->\n      <!-- <span class=\"titleMasvisto\">{{curso.name}}</span>\n     <span class=\"rating\"><ion-icon name=\"star-outline\"></ion-icon> {{ curso.view }}</span>  -->\n\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"4\" class=\"ion-tex-center\">\n          <div class=\"btn-vertical\">\n           <img  class=\"claseMinimagen\" [src]=\"curso.url_image==null || curso.url_image=='' ? 'assets/img/portada.jpg' : curso.url_image\" />\n          </div>\n        </ion-col>\n        <ion-col size=\"3\" class=\"ion-tex-center\">\n          <!-- <span class=\"rating\">Visto: {{ curso.view }}</span><br> -->\n          <!-- <a (click)=\"Addcart(curso.id,curso.precio)\">\n            <ion-icon name=\"cart\" ></ion-icon><p class=\"textoti\"><b>Comprar</b></p>\n          </a> \n      \n          <a (click)=\"storeGuardado(curso.id)\">\n            <ion-icon name=\"heart\" color=\"danger\"></ion-icon><p class=\"textoti\"><b>Guardar</b></p>\n          </a>  -->\n        </ion-col>\n        <ion-col size=\"5\" class=\"ion-text-center\">\n          <div class=\"btn-vertical\">\n            <ion-chip style=\"margin-bottom: 64px;\">\n              \n              <ion-icon *ngIf=\"curso.tags=='Lecciones'\" name=\"school-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Preguntas'\" name=\"chatbubble-ellipses-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Dosis diaria'\" name=\"sunny-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Bienvenida'\" name=\"rocket-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Muy pronto'\" name=\"time-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Caso real'\" name=\"storefront-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Audio'\" name=\"mic-outline\" color=\"primary\"></ion-icon>\n              <ion-label>{{curso.tags}}</ion-label>\n            </ion-chip><br>\n            <div></div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </div>\n \n  </div>\n  <div id=\"fullscreen\" slot=\"fixed\"></div>\n  <!-- <div class=\"spotlight\" *ngIf=\"curso && curso.url_image!=''\" style=\"background-image: url({{curso.url_image}})\"  > -->\n    <div class=\"spotlight\" *ngIf=\"curso && curso.portada2==null\" style=\"background-image: url(assets/img/lerning.jpg)\"  >\n    <div class=\"gradient\" ></div>\n    \n    <div class=\"info\" *ngIf=\"curso\">\n      <!-- <img class=\"title\" [src]=\"cursoMasVisto && cursoMasVisto.url_image==null ? 'assets/img/portada.jpg' : cursoMasVisto.url_image\">  -->\n      <!-- <span class=\"titleMasvisto\">{{curso.name}}</span>\n     <span class=\"rating\"><ion-icon name=\"star-outline\"></ion-icon> {{ curso.view }}</span>  -->\n\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"4\" class=\"ion-tex-center\">\n          <div class=\"btn-vertical\">\n           <img  class=\"claseMinimagen\" [src]=\"curso.url_image==null || curso.url_image=='' ? 'assets/img/portada.jpg' : curso.url_image\" />\n          </div>\n        </ion-col>\n        <ion-col size=\"3\" class=\"ion-tex-center\">\n          <!-- <span class=\"rating\">Visto: {{ curso.view }}</span><br> -->\n          <!-- <a (click)=\"Addcart(curso.id,curso.precio)\">\n            <ion-icon name=\"cart\" ></ion-icon><p class=\"textoti\"><b>Comprar</b></p>\n          </a> \n          <a (click)=\"storeGuardado(curso.id)\">\n            <ion-icon name=\"heart\" color=\"danger\"></ion-icon><p class=\"textoti\"><b>Guardar</b></p>\n          </a>  -->\n        </ion-col>\n        <ion-col size=\"5\" class=\"ion-text-center\">\n          <div class=\"btn-vertical\">\n            <ion-chip style=\"margin-bottom: 64px;\">\n              \n              <ion-icon *ngIf=\"curso.tags=='Lecciones'\" name=\"school-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Preguntas'\" name=\"chatbubble-ellipses-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Dosis diaria'\" name=\"sunny-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Programa'\" name=\"bulb-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Bienvenida'\" name=\"rocket-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Muy pronto'\" name=\"time-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Audio'\" name=\"mic-outline\" color=\"primary\"></ion-icon>\n              <ion-label>{{curso.tags}}</ion-label>\n            </ion-chip><br>\n            <div></div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </div>\n \n  </div>\n\n  <ion-row>\n    <ion-col size=\"12\" *ngIf=\"curso && curso.descripcion!=''\" style=\"padding: 20px;\">\n      <p>{{curso.descripcion}}</p>\n    </ion-col>\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <a (click)=\"reproducir(curso.videos[0].url,curso.videos[0].suscription_id,curso.videos[0].id)\">\n        <div class=\"botonPlay\">\n          <ion-icon name=\"play\" color=\"light\"></ion-icon>\n          <span>Reproducir</span>\n        \n        </div>\n      </a>\n    </ion-col>\n  </ion-row>\n  \n  <ion-grid>\n\n    <ion-grid *ngIf=\"spinnerFeatured\">\n      <ion-row>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-spinner *ngIf=\"spinnerFeatured\" name=\"crescent\"></ion-spinner>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   \n    <ion-row *ngIf=\"curso\">\n      <ion-card *ngFor=\"let video of curso.videos\" style=\"border-radius: 10px;\">\n        <a (click)=\"reproducir(video.url,video.suscription_id,video.id)\">\n          <img [src]=\"video.url_image==null || video.url_image=='' ? 'assets/img/portada_vacia.jpg' : video.url_image\" />\n        </a>\n        <ion-card-header class=\"estiloCard\">\n          <ion-card-subtitle>\n            <ion-chip>\n              \n              <ion-icon *ngIf=\"video.tags=='Lecciones'\" name=\"school-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"video.tags=='Preguntas'\" name=\"chatbubble-ellipses-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"video.tags=='Dosis diaria'\" name=\"sunny-outline\" color=\"primary\"></ion-icon>\n              <ion-label>{{video.tags}}</ion-label>\n            </ion-chip>\n          </ion-card-subtitle>\n          <ion-card-title>{{video.name}}</ion-card-title>\n        </ion-card-header>\n      </ion-card>\n\n    </ion-row>\n  </ion-grid>\n\n  \n    <!-- fab placed to the bottom end -->\n    <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button color=\"danger\" (click)=\"irCarro()\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab> -->\n  \n \n\n  <div id=\"fullscreen\" slot=\"fixed\"></div>\n</ion-content>\n");

/***/ }),

/***/ "Qpjo":
/*!*****************************************************************!*\
  !*** ./src/app/detail-premiun/detail-premiun-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetailPremiunPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPremiunPageRoutingModule", function() { return DetailPremiunPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail_premiun_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-premiun.page */ "+3D3");




const routes = [
    {
        path: '',
        component: _detail_premiun_page__WEBPACK_IMPORTED_MODULE_3__["DetailPremiunPage"]
    }
];
let DetailPremiunPageRoutingModule = class DetailPremiunPageRoutingModule {
};
DetailPremiunPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailPremiunPageRoutingModule);



/***/ }),

/***/ "RQOk":
/*!*********************************************************!*\
  !*** ./src/app/detail-premiun/detail-premiun.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tarjeta {\n  margin: 0;\n}\n\n.capsule {\n  background: #d9dadc;\n  padding: 4px;\n  border-radius: 10px;\n  color: black;\n}\n\n.txt-center {\n  text-align: center;\n}\n\n.bandita {\n  position: relative;\n  top: -8em;\n  background: #ffffff7a;\n}\n\n@media (max-width: 320px) {\n  .bandita {\n    top: -7em;\n  }\n}\n\n.pdtop {\n  padding-top: 0px;\n}\n\n.textoti {\n  font-size: 13px;\n  margin-top: 0;\n  color: white;\n}\n\n.bckChip {\n  background: #e0e2e1;\n}\n\n.claGrid {\n  position: relative;\n  top: -164px;\n}\n\n.logo {\n  margin-left: 16px;\n  width: 45%;\n}\n\nion-content {\n  --offset-top: 0px;\n  position: absolute;\n}\n\n.spotlight {\n  background-position: center;\n  background-size: cover;\n  margin-bottom: 20px;\n  position: relative;\n  background-repeat: no-repeat;\n  width: 425px;\n  height: 350px;\n  top: 36px;\n}\n\n.spotlight .gradient {\n  background: linear-gradient(#ffffff00 40%, #000000c2, #000 95%);\n  width: 100%;\n  height: 100%;\n}\n\n.spotlight .info {\n  width: 100%;\n  position: absolute;\n  bottom: 10px;\n  text-align: center;\n}\n\n.spotlight img {\n  max-width: 70%;\n}\n\n.spotlight .rating {\n  display: block;\n  font-weight: 700;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  z-index: 1000;\n  color: #00cdd0;\n}\n\n.spotlight .btn-vertical {\n  font-weight: 500;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.spotlight .btn-play {\n  background: #fff;\n  font-weight: 500;\n  border-radius: 2px;\n  color: #000;\n  padding: 4px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\nion-toolbar {\n  --background: linear-gradient(180deg, rgba(0, 0, 0, 0.8715861344537815) 0%, rgba(0, 0, 0, 0.8463760504201681) 57%, rgba(0, 0, 0, 0.6923144257703081) 80%, rgba(0, 0, 0, 0.5438550420168067) 89%, rgba(0, 0, 0, 0) 100%);\n}\n\n.section-title {\n  font-weight: 600;\n  font-size: large;\n}\n\nion-slides {\n  margin-top: 4px;\n}\n\n.continue {\n  background: #191919;\n}\n\n.progress-bar {\n  height: 2px;\n  width: 100%;\n  background: #262626;\n}\n\n.progress-bar .progress {\n  background: #E40A15;\n  height: 100%;\n}\n\n.titleMasvisto {\n  color: white;\n  background: #f5f5dc2e;\n  border-radius: 5px;\n}\n\n.btn-vertical > ion-chip {\n  background: #f3ececf2;\n}\n\n.botonPlay {\n  background: red;\n  padding: 10px;\n  border-radius: 15px;\n  color: white;\n}\n\n.claseMinimagen {\n  border-radius: 10px;\n  width: 140px;\n  height: 120px;\n}\n\n.estiloCard {\n  background: #ffffffd9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RldGFpbC1wcmVtaXVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBSUo7O0FBREE7RUFDSztJQUNHLFNBQUE7RUFJTjtBQUNGOztBQWdKQTtFQUNJLGdCQUFBO0FBOUlKOztBQWlKQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQTlJSjs7QUFpSkE7RUFFSSxtQkFBQTtBQS9JSjs7QUFrSkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUEvSUo7O0FBbUpBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FBaEpKOztBQW1KRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFoSko7O0FBbUpFO0VBQ0UsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQWhKSjs7QUFrSkk7RUFDRSwrREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBaEpOOztBQW1KSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWpKTjs7QUFvSkk7RUFDRSxjQUFBO0FBbEpOOztBQXFKSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQW5KTjs7QUFzSkk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBcEpOOztBQXVKSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXRKTjs7QUEwSkU7RUFDRSx1TkFBQTtBQXZKSjs7QUEwSkU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBdkpKOztBQTBKRTtFQUNFLGVBQUE7QUF2Sko7O0FBMEpFO0VBQ0UsbUJBQUE7QUF2Sko7O0FBMEpFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQXZKSjs7QUF5Skk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUF2Sk47O0FBMEpFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUF2Sko7O0FBeUpFO0VBQ0UscUJBQUE7QUF0Sko7O0FBeUpFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUF0Sko7O0FBeUpFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0MsYUFBQTtBQXRKTDs7QUF5SkU7RUFDRSxxQkFBQTtBQXRKSiIsImZpbGUiOiJkZXRhaWwtcHJlbWl1bi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFyamV0YXtcbiAgICBtYXJnaW46IDA7XG59XG4uY2Fwc3VsZXtcbiAgICBiYWNrZ3JvdW5kOiAjZDlkYWRjO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi50eHQtY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5iYW5kaXRhe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC04ZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjdhO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOjMyMHB4KXtcbiAgICAgLmJhbmRpdGF7XG4gICAgICAgIHRvcDogLTdlbTsgIFxuICAgICB9XG59XG5cblxuXG5cbi8vIC5iYWNrZ3JvdW5kLWltYWdle1xuLy8gICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvQ29tZXJjaW9zX2xvY2FsZXMucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCA7XG4vLyB9XG4vLyAuYmFja2dyb3VuZC1pbWFnZVByb2R1Y3Rze1xuLy8gICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvUHJvZHVjdG9zXy5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0IDtcbi8vIH1cblxuLy8gLmJhY2tncm91bmQtaW1hZ2VTb3N0ZW5pYmxle1xuLy8gICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvQ29tZXJjaW9zX3Nvc3RlbmlibGVzLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQgO1xuLy8gfVxuLy8gLnBkLTIwe1xuLy8gICAgIGJhY2tncm91bmQ6ICNmZmZmZmZiODtcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xuLy8gfVxuXG5cbi8vIC5paW1nMntcbi8vICAgICAtLW1pbi1oZWlnaHQ6MTUwcHg7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbi8vICAgICBwYWRkaW5nOiA1cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbi8vIH1cblxuLy8gLmNvbG9yVGV4dHtcbi8vICAgICBjb2xvcjojMDBjZWQxO1xuLy8gfVxuLy8gLnRhZ3tcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgdG9wOiAyNXB4O1xuLy8gICAgIGJhY2tncm91bmQ6ICMwMDAwMDBiYTtcbi8vICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgd2lkdGg6IDcwJTtcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbi8vICAgICBwYWRkaW5nOiA1cHg7XG4vLyB9XG5cbi8vIC52YWxpZ25JY29ue1xuLy8gICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4vLyB9XG5cbi8vIC5zd2lwZXItc2xpZGUgaW1nIHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBtYXgtd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiAxNTBweDtcbi8vICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuLy8gfVxuXG4vLyAudGFnMntcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgbGVmdDogMTA5cHg7XG4vLyAgICAgd2lkdGg6IDYwcHg7XG4vLyAgICAgaGVpZ2h0OiA2MHB4O1xuXG4vLyB9XG5cbi8vIEBtZWRpYShtaW4td2lkdGg6NDI1cHgpe1xuXG4vLyAgICAgLnRhZzJ7XG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgbGVmdDogMTMwcHg7XG4vLyAgICAgICAgIHdpZHRoOiA2MHB4O1xuLy8gICAgICAgICBoZWlnaHQ6IDYwcHg7XG5cbi8vICAgICAgfVxuLy8gfVxuXG4vLyBhe1xuLy8gICAgIGNvbG9yOiBibGFjaztcbi8vIH1cblxuLy8gaW9uLWl0ZW17XG4vLyAgICAgLS1taW4taGVpZ2h0OiA5MHB4O1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4vLyAgICAgcGFkZGluZzogNXB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4vLyB9XG5cbi8vIC5jbGFzc0NvbHtcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4vLyAgICAgdGV4dC1hbGlnbjogbGVmdDtcbi8vIH1cblxuLy8gLmlvcyAudGl0bGUtbGFyZ2V7XG4vLyAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gfVxuXG4vLyAuaW9zID4gLnRhZzJ7XG5cbi8vICAgICAgICAgbGVmdDogODVweDtcbiBcbi8vIH1cblxuLy8gaW9uLWl0ZW0uaW9ze1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4vLyB9XG5cbi8vIC50YWcze1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZWQxO1xuLy8gICAgIHBhZGRpbmc6IDEwcHg7XG4vLyAgICAgY29sb3I6IHdoaXRlO1xuLy8gfVxuXG4vLyAudHh0LWNlbnRlcntcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyB9XG5cbi8vIC5kcGxie1xuLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gfVxuXG4vLyAud2R0MTAwe1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuLy8gLmF2YXRlcntcbi8vICAgICB3aWR0aDogMTAwcHg7XG4vLyAgICAgaGVpZ2h0OiAxMDBweDtcbi8vICAgICBtYXJnaW4tbGVmdDogYXV0bztcbi8vICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4vLyB9XG5cbi8vIC5pbWdGb25kaXRve1xuLy8gICAgIHdpZHRoOiA5OCU7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vIH1cblxuLy8gLnRpdHVsb0NhcmR7XG4vLyAgICAgZm9udC1zaXplOiAxOXB4O1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cblxuLy8gLmxldHJhc1RpdHVsb3tcbi8vICAgICB0b3A6IC0zMXB4O1xuLy8gICAgIGNvbG9yOiBibGFjaztcbi8vICAgICBmb250LXdlaWdodDogNjAwO1xuLy8gICAgIGJhY2tncm91bmQ6ICNmZmZmZmY3ZDtcbi8vIH1cbi8vIHB7XG4vLyAgICAgbWFyZ2luOiAwO1xuLy8gfVxuXG4ucGR0b3B7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLnRleHRvdGl7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmNrQ2hpcHtcbiAgICBcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMmUxO1xuXG59XG4uY2xhR3JpZHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTY0cHg7XG59XG5cblxuLmxvZ28ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cbiAgXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLW9mZnNldC10b3A6IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgXG4gIC5zcG90bGlnaHQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDQyNXB4O1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgdG9wOiAzNnB4O1xuICBcbiAgICAuZ3JhZGllbnQge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmZmZmYwMCA0MCUsICMwMDAwMDBjMiwgIzAwMCA5NSUpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICBcbiAgICAuaW5mbyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIFxuICAgIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICB9XG4gIFxuICAgIC5yYXRpbmcge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICBjb2xvcjogIzAwY2RkMDtcbiAgICB9XG4gIFxuICAgIC5idG4tdmVydGljYWwge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIFxuICAgIC5idG4tcGxheSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgcGFkZGluZzogNHB4O1xuICBcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwLjg3MTU4NjEzNDQ1Mzc4MTUpIDAlLCByZ2JhKDAsIDAsIDAsIDAuODQ2Mzc2MDUwNDIwMTY4MSkgNTclLCByZ2JhKDAsIDAsIDAsIDAuNjkyMzE0NDI1NzcwMzA4MSkgODAlLCByZ2JhKDAsIDAsIDAsIDAuNTQzODU1MDQyMDE2ODA2NykgODklLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xuICB9XG4gIFxuICAuc2VjdGlvbi10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG4gIFxuICBpb24tc2xpZGVzIHtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gIH1cbiAgXG4gIC5jb250aW51ZSB7XG4gICAgYmFja2dyb3VuZDogIzE5MTkxOTtcbiAgfVxuICBcbiAgLnByb2dyZXNzLWJhciB7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzI2MjYyNjtcbiAgXG4gICAgLnByb2dyZXNzIHtcbiAgICAgIGJhY2tncm91bmQ6ICNFNDBBMTU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG4gIC50aXRsZU1hc3Zpc3Rve1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWRjMmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIC5idG4tdmVydGljYWwgPiBpb24tY2hpcHtcbiAgICBiYWNrZ3JvdW5kOiAjZjNlY2VjZjI7XG4gIH1cblxuICAuYm90b25QbGF5e1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLmNsYXNlTWluaW1hZ2Vue1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgICBoZWlnaHQ6IDEyMHB4O1xuICB9XG5cbiAgLmVzdGlsb0NhcmR7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZmQ5O1xuICB9Il19 */");

/***/ }),

/***/ "VB3T":
/*!*********************************************************!*\
  !*** ./src/app/detail-premiun/detail-premiun.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailPremiunPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPremiunPageModule", function() { return DetailPremiunPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detail_premiun_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-premiun-routing.module */ "Qpjo");
/* harmony import */ var _detail_premiun_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-premiun.page */ "+3D3");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/shared-directives.module */ "Fgaq");








let DetailPremiunPageModule = class DetailPremiunPageModule {
};
DetailPremiunPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_premiun_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPremiunPageRoutingModule"],
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__["SharedDirectivesModule"]
        ],
        declarations: [_detail_premiun_page__WEBPACK_IMPORTED_MODULE_6__["DetailPremiunPage"]]
    })
], DetailPremiunPageModule);



/***/ })

}]);
//# sourceMappingURL=detail-premiun-detail-premiun-module.js.map