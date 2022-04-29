(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-cursos-detail-cursos-module"],{

/***/ "4ts1":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail-cursos/detail-cursos.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header #header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\">Volver</ion-back-button>\n    </ion-buttons>\n    <img class=\"logo\" src=\"/assets/img/logo.png\">\n    <!-- <ion-row class=\"ion-justify-content-center ion-text-center\">\n      <ion-col size=\"4\" class=\"ion-text-right\">\n        TV Shows\n      </ion-col>\n      <ion-col size=\"4\">\n        Movies\n      </ion-col>\n      <ion-col size=\"4\" tappable (click)=\"openCategories()\" class=\"ion-text-left\">\n        Categories <ion-icon name=\"caret-down-outline\"></ion-icon>\n      </ion-col>\n    </ion-row> -->\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" [appHideHeader]=\"header\">\n<!-- \n  <div fullscreen *ngIf=\"curso\" class=\"tarjeta\">\n\n    <img src=\"assets/img/lerning.jpg\" />\n\n\n    <div class=\"bandita\">\n\n      <ion-card-title class=\"txt-center\">{{curso.name}}</ion-card-title>\n    </div>\n\n  </div> -->\n\n  <!-- [style.background-image]=\"'url(assets/img/lerning.jpg)'\" -->\n\n  <div class=\"spotlight\" *ngIf=\"curso && curso.portada2!=null\" style=\"background-image: url({{curso.portada2}})\"  >\n    <!-- <div class=\"spotlight\" *ngIf=\"curso && curso.url_image==''\" style=\"background-image: url(assets/img/lerning.jpg)\"  > -->\n    <div class=\"gradient\" ></div>\n    \n    <div class=\"info\" *ngIf=\"curso\">\n      <!-- <img class=\"title\" [src]=\"cursoMasVisto && cursoMasVisto.url_image==null ? 'assets/img/portada.jpg' : cursoMasVisto.url_image\">  -->\n      <!-- <span class=\"titleMasvisto\">{{curso.name}}</span>\n     <span class=\"rating\"><ion-icon name=\"star-outline\"></ion-icon> {{ curso.view }}</span>  -->\n\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"4\" class=\"ion-tex-center\">\n          <div class=\"btn-vertical\">\n           <img  class=\"claseMinimagen\" [src]=\"curso.url_image==null || curso.url_image=='' ? 'assets/img/portada.jpg' : curso.url_image\" />\n          </div>\n        </ion-col>\n        <ion-col size=\"3\" class=\"ion-tex-center\">\n          <!-- <span class=\"rating\">Visto: {{ curso.view }}</span><br> -->\n          <a (click)=\"purchase(curso)\" *ngIf=\"curso.premiun!=0\">\n            <ion-icon name=\"cart\" ></ion-icon><p class=\"textoti\"><b>Comprar</b></p>\n          </a> \n      \n          <a (click)=\"storeGuardado(curso.id)\">\n            <ion-icon name=\"heart\" color=\"danger\"></ion-icon><p class=\"textoti\"><b>Guardar</b></p>\n          </a> \n        </ion-col>\n        <ion-col size=\"5\" class=\"ion-text-center\">\n          <div class=\"btn-vertical\">\n            <ion-chip style=\"margin-bottom: 64px;\">\n              \n              <ion-icon *ngIf=\"curso.tags=='Lecciones'\" name=\"school-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Preguntas'\" name=\"chatbubble-ellipses-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Dosis diaria'\" name=\"sunny-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Bienvenida'\" name=\"rocket-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Muy pronto'\" name=\"time-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Caso real'\" name=\"storefront-outline\" color=\"primary\"></ion-icon>\n              <ion-label>{{curso.tags}}</ion-label>\n            </ion-chip><br>\n            <div></div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </div>\n \n  </div>\n  <div id=\"fullscreen\" slot=\"fixed\"></div>\n  <!-- <div class=\"spotlight\" *ngIf=\"curso && curso.url_image!=''\" style=\"background-image: url({{curso.url_image}})\"  > -->\n    <div class=\"spotlight\" *ngIf=\"curso && curso.portada2==null\" style=\"background-image: url(assets/img/lerning.jpg)\"  >\n    <div class=\"gradient\" ></div>\n    \n    <div class=\"info\" *ngIf=\"curso\">\n      <!-- <img class=\"title\" [src]=\"cursoMasVisto && cursoMasVisto.url_image==null ? 'assets/img/portada.jpg' : cursoMasVisto.url_image\">  -->\n      <!-- <span class=\"titleMasvisto\">{{curso.name}}</span>\n     <span class=\"rating\"><ion-icon name=\"star-outline\"></ion-icon> {{ curso.view }}</span>  -->\n\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"4\" class=\"ion-tex-center\">\n          <div class=\"btn-vertical\">\n           <img  class=\"claseMinimagen\" [src]=\"curso.url_image==null || curso.url_image=='' ? 'assets/img/portada.jpg' : curso.url_image\" />\n          </div>\n        </ion-col>\n        <ion-col size=\"3\" class=\"ion-tex-center\">\n          <!-- <span class=\"rating\">Visto: {{ curso.view }}</span><br> -->\n          <a (click)=\"purchase(curso)\" *ngIf=\"curso.premiun!=0\">\n            <ion-icon name=\"cart\" ></ion-icon><p class=\"textoti\"><b>Comprar</b></p>\n          </a> \n          <a (click)=\"storeGuardado(curso.id)\">\n            <ion-icon name=\"heart\" color=\"danger\"></ion-icon><p class=\"textoti\"><b>Guardar</b></p>\n          </a> \n        </ion-col>\n        <ion-col size=\"5\" class=\"ion-text-center\">\n          <div class=\"btn-vertical\">\n            <ion-chip style=\"margin-bottom: 64px;\">\n              \n              <ion-icon *ngIf=\"curso.tags=='Lecciones'\" name=\"school-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Preguntas'\" name=\"chatbubble-ellipses-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Dosis diaria'\" name=\"sunny-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Programa'\" name=\"bulb-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Bienvenida'\" name=\"rocket-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Muy pronto'\" name=\"time-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"curso.tags=='Audio'\" name=\"mic-outline\" color=\"primary\"></ion-icon>\n              <ion-label>{{curso.tags}}</ion-label>\n            </ion-chip><br>\n            <div></div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </div>\n \n  </div>\n\n  <ion-row>\n    <ion-col size=\"12\" *ngIf=\"curso && curso.descripcion!=''\" style=\"padding: 20px;\">\n      <p>{{curso.descripcion}}</p>\n    </ion-col>\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <a (click)=\"reproducir(curso.videos[0].url,curso.videos[0].suscription_id,curso.videos[0].id)\">\n        <div class=\"botonPlay\">\n          <ion-icon name=\"play\" color=\"light\"></ion-icon>\n          <span>Reproducir</span>\n        \n        </div>\n      </a>\n    </ion-col>\n  </ion-row>\n  \n  <ion-grid>\n\n    <ion-grid *ngIf=\"spinnerFeatured\">\n      <ion-row>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-spinner *ngIf=\"spinnerFeatured\" name=\"crescent\"></ion-spinner>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   \n    <ion-row *ngIf=\"curso\">\n      <ion-card *ngFor=\"let video of curso.videos\" style=\"border-radius: 10px;\">\n        <a (click)=\"reproducir(video.url,video.suscription_id,video.id)\">\n          <img [src]=\"video.url_image==null || video.url_image=='' ? 'assets/img/portada_vacia.jpg' : video.url_image\" />\n        </a>\n        <ion-card-header class=\"estiloCard\">\n          <ion-card-subtitle>\n            <ion-chip>\n              \n              <ion-icon *ngIf=\"video.tags=='Lecciones'\" name=\"school-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"video.tags=='Preguntas'\" name=\"chatbubble-ellipses-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"video.tags=='Dosis diaria'\" name=\"sunny-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"video.tags=='Programa'\" name=\"bulb-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"video.tags=='Bienvenida'\" name=\"rocket-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"video.tags=='Muy pronto'\" name=\"time-outline\" color=\"primary\"></ion-icon>\n              <ion-icon *ngIf=\"video.tags=='Audio'\" name=\"mic-outline\" color=\"primary\"></ion-icon>\n\n              <ion-label>{{video.tags}}</ion-label>\n            </ion-chip>\n          </ion-card-subtitle>\n          <ion-card-title>{{video.name}}</ion-card-title>\n        </ion-card-header>\n      </ion-card>\n\n    </ion-row>\n  </ion-grid>\n\n  \n    <!-- fab placed to the bottom end -->\n    <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"curso && curso.premiun!=0\" style=\"margin-bottom: 56px;\">\n      <ion-fab-button class=\"colorAzul\" (click)=\"irCarro()\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab> -->\n  \n \n\n  <div id=\"fullscreen\" slot=\"fixed\"></div>\n</ion-content>\n");

/***/ }),

/***/ "Fo0J":
/*!*****************************************************!*\
  !*** ./src/app/detail-cursos/detail-cursos.page.ts ***!
  \*****************************************************/
/*! exports provided: DetailCursosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCursosPage", function() { return DetailCursosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_cursos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail-cursos.page.html */ "4ts1");
/* harmony import */ var _detail_cursos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-cursos.page.scss */ "P7qH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "RU0F");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _pagomodal_pagomodal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pagomodal/pagomodal.page */ "z1j3");
/* harmony import */ var _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/in-app-purchase-2/ngx */ "7DPu");





// import { LocalNotificationActionType } from '@capacitor/core';





// import { CapacitorVideoPlayer } from 'capacitor-video-player';




const { CapacitorVideoPlayer, Toast } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"];

const PRODUCT_PRO_KEY = 'curso';
let DetailCursosPage = class DetailCursosPage {
    constructor(navCtrl, menu, service, route, router, streamingMedia, modalController, toastController, modalCtrl, store, ref, alertController, platform) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.service = service;
        this.route = route;
        this.router = router;
        this.streamingMedia = streamingMedia;
        this.modalController = modalController;
        this.toastController = toastController;
        this.modalCtrl = modalCtrl;
        this.store = store;
        this.ref = ref;
        this.alertController = alertController;
        this.platform = platform;
        this.spinnerFeatured = false;
        this.valorTotal = 0;
        this._first = false;
        this._testApi = true;
        this.platform.ready().then(() => {
            // Only for debugging!
            this.store.verbosity = this.store.DEBUG;
            this.registerProducts();
            this.setupListeners();
            // Get the real product information
            this.store.ready(() => {
                this.products = this.curso;
                this.ref.detectChanges();
            });
        });
    }
    registerProducts() {
        this.store.register({
            id: PRODUCT_PRO_KEY,
            type: this.store.NON_CONSUMABLE,
        });
        this.store.refresh();
    }
    setupListeners() {
        // General query to all products
        this.store.when('product')
            .approved((p) => {
            // Handle the product deliverable
            if (p.id === PRODUCT_PRO_KEY) {
                console.log('compro');
            }
            this.ref.detectChanges();
            return p.verify();
        })
            .verified((p) => p.finish());
        // Specific query for one ID
        this.store.when(PRODUCT_PRO_KEY).owned((p) => {
            console.log('compro el curso', p);
        });
    }
    purchase(product) {
        this.store.order(product).then(p => {
            // Purchase in progress!
            console.log('esto retorna', p);
        }, e => {
            this.presentAlert('Failed', `Failed to purchase: ${e}`);
        });
    }
    // To comply with AppStore rules
    restore() {
        this.store.refresh();
    }
    presentAlert(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['OK']
            });
            yield alert.present();
        });
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
    ionViewWillEnter() {
        let arreglo = localStorage.getItem('user');
        this.subscripcion = JSON.parse(arreglo).subscription_id;
        // console.log('idusuario',this.idUsuario)
        this.sabercurso();
        if (this.platform.is('ios')) {
            console.log('es ios');
        }
        else {
            console.log('no es ios');
        }
    }
    reproducir(url, suscripcion, videoId) {
        this.PlayPersona(videoId);
        if (suscripcion == 1) {
            if (this.tienePremiun == 0) {
                if (suscripcion == 1 && this.subscripcion == 2) {
                    console.log('estee s el tiene premiun', this.tienePremiun);
                    console.log('estee s el subscricion 1 ', suscripcion);
                    console.log('estee s el subscricion 2 ', this.subscripcion);
                    this.presentToast('Este video es solo para usuarios Premium');
                    return;
                }
            }
        }
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
            console.log('aqui tengo el detalle del curso', JSON.parse(JSON.stringify(res)).premiun);
            this.pre = JSON.parse(JSON.stringify(res)).premiun;
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
            // console.log('esto retorna el carro',res)
            if (res) {
                this.gteCart();
            }
            // if(JSON.parse(JSON.stringify(res)).message){
            //   this.presentToast(JSON.parse(JSON.stringify(res)).message)
            //   return;
            // }else{
            //   this.presentToast('Agregado correctamente al carrito')
            // }
            // console.log('respuesta del agregar carrito',JSON.parse(JSON.stringify(res)).message);
            // this.categories = JSON.parse(JSON.stringify(res)).data;
        }, err => {
            //  this.cateSpinner=false
            console.log(err);
        });
    }
    sabercurso() {
        // 
        this.service.saberPremiun({ idUsuarioFk: this.idUsuario, idCursoFk: this.route.snapshot.paramMap.get('id') })
            .then(res => {
            // this.cateSpinner=false
            console.log('respuesta dde si existe  o no ', res);
            this.tienePremiun = res;
            // this.categories = JSON.parse(JSON.stringify(res)).data;
        }, err => {
            //  this.cateSpinner=false
            console.log(err);
        });
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pagomodal_pagomodal_page__WEBPACK_IMPORTED_MODULE_9__["PagomodalPage"],
                componentProps: {
                    'monto': this.valorTotal,
                    'cursos': this.cart
                },
            });
            modal.onDidDismiss()
                .then((data) => {
                // console.log('se cerro la puta modal',data)
                // this.gteCart()
                this.navCtrl.navigateForward(['/tabs/home']);
            });
            return yield modal.present();
        });
    }
    gteCart() {
        this.service.getCartUser({ idUsuarioFk: this.idUsuario })
            .then(res => {
            // this.cateSpinner=false
            //  this.presentToast('Agregado correctamente al carrito')
            // this.categories = JSON.parse(JSON.stringify(res)).data;
            this.cart = res;
            let totar = '';
            this.cart.forEach((element, index) => {
                console.log(element.precioCurso);
                let text = element.precioCurso;
                let result = text.replace(",", ".");
                let precioss = parseFloat(result);
                console.log('precios', result);
                totar += precioss.toFixed(2);
            });
            this.valorTotal = totar;
            console.log('este es el precio', this.valorTotal);
            if (this.valorTotal == '') {
                this.presentToast('Ya posee este curso');
                return;
            }
            this.presentModal();
        }, err => {
            //  this.cateSpinner=false
            console.log(err);
        });
    }
};
DetailCursosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__["StreamingMedia"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppPurchase2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
DetailCursosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail-cursos',
        template: _raw_loader_detail_cursos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_cursos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailCursosPage);



/***/ }),

/***/ "Lmnk":
/*!***************************************************************!*\
  !*** ./src/app/detail-cursos/detail-cursos-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DetailCursosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCursosPageRoutingModule", function() { return DetailCursosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail_cursos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-cursos.page */ "Fo0J");




const routes = [
    {
        path: '',
        component: _detail_cursos_page__WEBPACK_IMPORTED_MODULE_3__["DetailCursosPage"]
    }
];
let DetailCursosPageRoutingModule = class DetailCursosPageRoutingModule {
};
DetailCursosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailCursosPageRoutingModule);



/***/ }),

/***/ "P7qH":
/*!*******************************************************!*\
  !*** ./src/app/detail-cursos/detail-cursos.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tarjeta {\n  margin: 0;\n}\n\n.capsule {\n  background: #d9dadc;\n  padding: 4px;\n  border-radius: 10px;\n  color: black;\n}\n\n.txt-center {\n  text-align: center;\n}\n\n.bandita {\n  position: relative;\n  top: -8em;\n  background: #ffffff7a;\n}\n\n@media (max-width: 320px) {\n  .bandita {\n    top: -7em;\n  }\n}\n\n.pdtop {\n  padding-top: 0px;\n}\n\n.textoti {\n  font-size: 13px;\n  margin-top: 0;\n  color: white;\n}\n\n.bckChip {\n  background: #e0e2e1;\n}\n\n.claGrid {\n  position: relative;\n  top: -164px;\n}\n\n.logo {\n  margin-left: 16px;\n  width: 45%;\n}\n\nion-content {\n  --offset-top: 0px;\n  position: absolute;\n}\n\n.spotlight {\n  background-position: center;\n  background-size: cover;\n  margin-bottom: 20px;\n  position: relative;\n  background-repeat: no-repeat;\n  width: 425px;\n  height: 350px;\n  top: 36px;\n}\n\n.spotlight .gradient {\n  background: linear-gradient(#ffffff00 40%, #000000c2, #000 95%);\n  width: 100%;\n  height: 100%;\n}\n\n.spotlight .info {\n  width: 100%;\n  position: absolute;\n  bottom: 10px;\n  text-align: center;\n}\n\n.spotlight img {\n  max-width: 70%;\n}\n\n.spotlight .rating {\n  display: block;\n  font-weight: 700;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  z-index: 1000;\n  color: #00cdd0;\n}\n\n.spotlight .btn-vertical {\n  font-weight: 500;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.spotlight .btn-play {\n  background: #fff;\n  font-weight: 500;\n  border-radius: 2px;\n  color: #000;\n  padding: 4px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\nion-toolbar {\n  --background: linear-gradient(180deg, rgba(0, 0, 0, 0.8715861344537815) 0%, rgba(0, 0, 0, 0.8463760504201681) 57%, rgba(0, 0, 0, 0.6923144257703081) 80%, rgba(0, 0, 0, 0.5438550420168067) 89%, rgba(0, 0, 0, 0) 100%);\n}\n\n.section-title {\n  font-weight: 600;\n  font-size: large;\n}\n\nion-slides {\n  margin-top: 4px;\n}\n\n.continue {\n  background: #191919;\n}\n\n.progress-bar {\n  height: 2px;\n  width: 100%;\n  background: #262626;\n}\n\n.progress-bar .progress {\n  background: #E40A15;\n  height: 100%;\n}\n\n.titleMasvisto {\n  color: white;\n  background: #f5f5dc2e;\n  border-radius: 5px;\n}\n\n.btn-vertical > ion-chip {\n  background: #f3ececf2;\n}\n\n.botonPlay {\n  background: red;\n  padding: 10px;\n  border-radius: 15px;\n  color: white;\n}\n\n.claseMinimagen {\n  border-radius: 10px;\n  width: 140px;\n  height: 120px;\n}\n\n.estiloCard {\n  background: #ffffffd9;\n}\n\n.colorAzul {\n  --ion-color-base: #00cdd0 !important;\n}\n\nion-fab-button {\n  --background:#00cdd0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RldGFpbC1jdXJzb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFEQTtFQUNLO0lBQ0csU0FBQTtFQUlOO0FBQ0Y7O0FBZ0pBO0VBQ0ksZ0JBQUE7QUE5SUo7O0FBaUpBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBOUlKOztBQWlKQTtFQUVJLG1CQUFBO0FBL0lKOztBQWtKQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQS9JSjs7QUFtSkE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUFoSko7O0FBbUpFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQWhKSjs7QUFtSkU7RUFDRSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBaEpKOztBQWtKSTtFQUNFLCtEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFoSk47O0FBbUpJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBakpOOztBQW9KSTtFQUNFLGNBQUE7QUFsSk47O0FBcUpJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBbkpOOztBQXNKSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFwSk47O0FBdUpJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBdEpOOztBQTBKRTtFQUNFLHVOQUFBO0FBdkpKOztBQTBKRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUF2Sko7O0FBMEpFO0VBQ0UsZUFBQTtBQXZKSjs7QUEwSkU7RUFDRSxtQkFBQTtBQXZKSjs7QUEwSkU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBdkpKOztBQXlKSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQXZKTjs7QUEwSkU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQXZKSjs7QUF5SkU7RUFDRSxxQkFBQTtBQXRKSjs7QUF5SkU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQXRKSjs7QUF5SkU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQyxhQUFBO0FBdEpMOztBQXlKRTtFQUNFLHFCQUFBO0FBdEpKOztBQXlKRTtFQUNFLG9DQUFBO0FBdEpKOztBQXdKRTtFQUNFLCtCQUFBO0FBckpKIiwiZmlsZSI6ImRldGFpbC1jdXJzb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhcmpldGF7XG4gICAgbWFyZ2luOiAwO1xufVxuLmNhcHN1bGV7XG4gICAgYmFja2dyb3VuZDogI2Q5ZGFkYztcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4udHh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmFuZGl0YXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtOGVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY3YTtcbn1cblxuQG1lZGlhKG1heC13aWR0aDozMjBweCl7XG4gICAgIC5iYW5kaXRhe1xuICAgICAgICB0b3A6IC03ZW07ICBcbiAgICAgfVxufVxuXG5cblxuXG4vLyAuYmFja2dyb3VuZC1pbWFnZXtcbi8vICAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL0NvbWVyY2lvc19sb2NhbGVzLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQgO1xuLy8gfVxuLy8gLmJhY2tncm91bmQtaW1hZ2VQcm9kdWN0c3tcbi8vICAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL1Byb2R1Y3Rvc18ucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCA7XG4vLyB9XG5cbi8vIC5iYWNrZ3JvdW5kLWltYWdlU29zdGVuaWJsZXtcbi8vICAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL0NvbWVyY2lvc19zb3N0ZW5pYmxlcy5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0IDtcbi8vIH1cbi8vIC5wZC0yMHtcbi8vICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmYjg7XG4vLyAgICAgcGFkZGluZzogMTBweDtcbi8vIH1cblxuXG4vLyAuaWltZzJ7XG4vLyAgICAgLS1taW4taGVpZ2h0OjE1MHB4O1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4vLyAgICAgcGFkZGluZzogNXB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4vLyB9XG5cbi8vIC5jb2xvclRleHR7XG4vLyAgICAgY29sb3I6IzAwY2VkMTtcbi8vIH1cbi8vIC50YWd7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIHRvcDogMjVweDtcbi8vICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwYmE7XG4vLyAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgIHdpZHRoOiA3MCU7XG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4vLyAgICAgcGFkZGluZzogNXB4O1xuLy8gfVxuXG4vLyAudmFsaWduSWNvbntcbi8vICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuLy8gfVxuXG4vLyAuc3dpcGVyLXNsaWRlIGltZyB7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgbWF4LXdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogMTUwcHg7XG4vLyAgICAgbWF4LWhlaWdodDogMTAwJTtcbi8vIH1cblxuLy8gLnRhZzJ7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIGxlZnQ6IDEwOXB4O1xuLy8gICAgIHdpZHRoOiA2MHB4O1xuLy8gICAgIGhlaWdodDogNjBweDtcblxuLy8gfVxuXG4vLyBAbWVkaWEobWluLXdpZHRoOjQyNXB4KXtcblxuLy8gICAgIC50YWcye1xuLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICAgIGxlZnQ6IDEzMHB4O1xuLy8gICAgICAgICB3aWR0aDogNjBweDtcbi8vICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuXG4vLyAgICAgIH1cbi8vIH1cblxuLy8gYXtcbi8vICAgICBjb2xvcjogYmxhY2s7XG4vLyB9XG5cbi8vIGlvbi1pdGVte1xuLy8gICAgIC0tbWluLWhlaWdodDogOTBweDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuLy8gICAgIHBhZGRpbmc6IDVweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuLy8gfVxuXG4vLyAuY2xhc3NDb2x7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuLy8gICAgIHRleHQtYWxpZ246IGxlZnQ7XG4vLyB9XG5cbi8vIC5pb3MgLnRpdGxlLWxhcmdle1xuLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vIH1cblxuLy8gLmlvcyA+IC50YWcye1xuXG4vLyAgICAgICAgIGxlZnQ6IDg1cHg7XG4gXG4vLyB9XG5cbi8vIGlvbi1pdGVtLmlvc3tcbi8vICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuLy8gfVxuXG4vLyAudGFnM3tcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2VkMTtcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xuLy8gICAgIGNvbG9yOiB3aGl0ZTtcbi8vIH1cblxuLy8gLnR4dC1jZW50ZXJ7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gfVxuXG4vLyAuZHBsYntcbi8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vIH1cblxuLy8gLndkdDEwMHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vIH1cbi8vIC5hdmF0ZXJ7XG4vLyAgICAgd2lkdGg6IDEwMHB4O1xuLy8gICAgIGhlaWdodDogMTAwcHg7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4vLyAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuLy8gfVxuXG4vLyAuaW1nRm9uZGl0b3tcbi8vICAgICB3aWR0aDogOTglO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyB9XG5cbi8vIC50aXR1bG9DYXJke1xuLy8gICAgIGZvbnQtc2l6ZTogMTlweDtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyB9XG5cbi8vIC5sZXRyYXNUaXR1bG97XG4vLyAgICAgdG9wOiAtMzFweDtcbi8vICAgICBjb2xvcjogYmxhY2s7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbi8vICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmN2Q7XG4vLyB9XG4vLyBwe1xuLy8gICAgIG1hcmdpbjogMDtcbi8vIH1cblxuLnBkdG9we1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi50ZXh0b3Rpe1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJja0NoaXB7XG4gICAgXG4gICAgYmFja2dyb3VuZDogI2UwZTJlMTtcblxufVxuLmNsYUdyaWR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTE2NHB4O1xufVxuXG5cbi5sb2dvIHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB3aWR0aDogNDUlO1xuICB9XG4gIFxuICBpb24tY29udGVudCB7XG4gICAgLS1vZmZzZXQtdG9wOiAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIFxuICAuc3BvdGxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiA0MjVweDtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIHRvcDogMzZweDtcbiAgXG4gICAgLmdyYWRpZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmZmZmMDAgNDAlLCAjMDAwMDAwYzIsICMwMDAgOTUlKTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgXG4gICAgLmluZm8ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDEwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICBcbiAgICBpbWcge1xuICAgICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgfVxuICBcbiAgICAucmF0aW5nIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgY29sb3I6ICMwMGNkZDA7XG4gICAgfVxuICBcbiAgICAuYnRuLXZlcnRpY2FsIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICBcbiAgICAuYnRuLXBsYXkge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMCwgMCwgMC44NzE1ODYxMzQ0NTM3ODE1KSAwJSwgcmdiYSgwLCAwLCAwLCAwLjg0NjM3NjA1MDQyMDE2ODEpIDU3JSwgcmdiYSgwLCAwLCAwLCAwLjY5MjMxNDQyNTc3MDMwODEpIDgwJSwgcmdiYSgwLCAwLCAwLCAwLjU0Mzg1NTA0MjAxNjgwNjcpIDg5JSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcbiAgfVxuICBcbiAgLnNlY3Rpb24tdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuICBcbiAgaW9uLXNsaWRlcyB7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG4gIFxuICAuY29udGludWUge1xuICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XG4gIH1cbiAgXG4gIC5wcm9ncmVzcy1iYXIge1xuICAgIGhlaWdodDogMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMyNjI2MjY7XG4gIFxuICAgIC5wcm9ncmVzcyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjRTQwQTE1O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxuICAudGl0bGVNYXN2aXN0b3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVkYzJlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICAuYnRuLXZlcnRpY2FsID4gaW9uLWNoaXB7XG4gICAgYmFja2dyb3VuZDogI2YzZWNlY2YyO1xuICB9XG5cbiAgLmJvdG9uUGxheXtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5jbGFzZU1pbmltYWdlbntcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICAgaGVpZ2h0OiAxMjBweDtcbiAgfVxuXG4gIC5lc3RpbG9DYXJke1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmZkOTtcbiAgfVxuXG4gIC5jb2xvckF6dWx7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzAwY2RkMCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1mYWItYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDojMDBjZGQwICFpbXBvcnRhbnQ7XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ "RSUX":
/*!*******************************************************!*\
  !*** ./src/app/detail-cursos/detail-cursos.module.ts ***!
  \*******************************************************/
/*! exports provided: DetailCursosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCursosPageModule", function() { return DetailCursosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detail_cursos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-cursos-routing.module */ "Lmnk");
/* harmony import */ var _detail_cursos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-cursos.page */ "Fo0J");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/shared-directives.module */ "Fgaq");








let DetailCursosPageModule = class DetailCursosPageModule {
};
DetailCursosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_cursos_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailCursosPageRoutingModule"],
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__["SharedDirectivesModule"]
        ],
        declarations: [_detail_cursos_page__WEBPACK_IMPORTED_MODULE_6__["DetailCursosPage"]]
    })
], DetailCursosPageModule);



/***/ })

}]);
//# sourceMappingURL=detail-cursos-detail-cursos-module.js.map