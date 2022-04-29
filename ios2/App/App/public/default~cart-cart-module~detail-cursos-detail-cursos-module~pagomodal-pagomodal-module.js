(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cart-cart-module~detail-cursos-detail-cursos-module~pagomodal-pagomodal-module"],{

/***/ "deyf":
/*!***********************************************!*\
  !*** ./src/app/pagomodal/pagomodal.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --border-color: white;\n}\n\n.sinborder {\n  --border-color: transparent;\n}\n\nion-checkbox {\n  --background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ29tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoicGFnb21vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNpbmJvcmRlcntcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IFxufVxuXG5pb24tY2hlY2tib3h7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "fSeI":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagomodal/pagomodal.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header #header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\">\n      \n    </ion-buttons> -->\n    <ion-button (click)=\" dismiss();borrarCarro()\" style=\"    --background: transparent;margin-top: -62px;\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\n    <img class=\"logo\" src=\"/assets/img/logo.png\">\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" style=\"top: 76px;\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n\n        <h3>Cantidad total: {{montoTotal}} €</h3>\n\n          <div>\n            <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n              <ion-item>\n                <ion-label position=\"stacked\">Nombre <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input required type=\"text\" ></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"stacked\">Número de tarjeta <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input required type=\"tel\" [(ngModel)]=\"numeroTarjeta\" maxlength=\"16\" ></ion-input>\n              </ion-item>\n       \n\n              <ion-item>\n                <ion-label position=\"stacked\">Mes</ion-label>\n                <ion-input required [(ngModel)]=\"expMonth\" maxlength=\"2\"   placeholder=\"xx\" type=\"tel\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Año</ion-label>\n                <ion-input required [(ngModel)]=\"expYear\" placeholder=\"xxxx\" maxlength=\"4\"  type=\"tel\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">CCV</ion-label>\n                <ion-input [(ngModel)]=\"cvc\" required type=\"number\"></ion-input>\n              </ion-item>\n            </ion-list>\n\n            <ion-list>\n              <ion-item class=\"sinborder\">\n                <ion-label>Acepto los términos y condiciones</ion-label>\n                <ion-checkbox slot=\"end\" (click)=\"valorCheck()\" [(ngModel)]=\"terminos\"></ion-checkbox>\n              </ion-item>\n            </ion-list>\n\n            <div class=\"ion-padding\">\n              <ion-button expand=\"block\" [disabled]=\"spinnerFeatured || !terminos\" (click)=\"pagar()\" type=\"button\" class=\"ion-no-margin\">Tramitar pedido</ion-button>\n              <!-- <ion-button expand=\"block\"  (click)=\"dismiss()\" type=\"button\" class=\"ion-no-margin\">Volver</ion-button> -->\n            </div>\n\n            <ion-grid *ngIf=\"spinnerFeatured\">\n              <ion-row>\n                <ion-col size=\"12\" class=\"ion-text-center\">\n                  <ion-spinner *ngIf=\"spinnerFeatured\" name=\"crescent\"></ion-spinner>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "z1j3":
/*!*********************************************!*\
  !*** ./src/app/pagomodal/pagomodal.page.ts ***!
  \*********************************************/
/*! exports provided: PagomodalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagomodalPage", function() { return PagomodalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pagomodal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pagomodal.page.html */ "fSeI");
/* harmony import */ var _pagomodal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagomodal.page.scss */ "deyf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _awesome_cordova_plugins_stripe_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/stripe/ngx */ "4NZp");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");




// import { NavParams } from '@ionic/angular';





let PagomodalPage = class PagomodalPage {
    constructor(navParams, stripe, service, modalController, toastController, navCtrl) {
        this.stripe = stripe;
        this.service = service;
        this.modalController = modalController;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.terminos = false;
        this.spinnerFeatured = false;
        console.log(navParams.get('monto'));
        console.log(navParams.get('cursos'));
        this.montoTotal = parseFloat(navParams.get('monto'));
        this.cursoss = navParams.get('cursos');
        let arreglo = localStorage.getItem('user');
        this.idUsuario = JSON.parse(arreglo).id;
    }
    ngOnInit() {
    }
    valorCheck() {
        console.log('este es el valor', this.terminos);
    }
    pagar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.spinnerFeatured = true;
            this.stripe.setPublishableKey('pk_test_51K7hlpGPfZahrmfPjpVX1KxmRtWqr3UNiqov7pO0sswLMoXRJhsceulNSjacflHABhjT5CfABaZbiCs7TNpDIpvB003866cfYb');
            let card = {
                number: this.numeroTarjeta,
                expMonth: this.expMonth,
                expYear: this.expYear,
                cvc: this.cvc
            };
            this.stripe.createCardToken(card)
                .then(token => {
                console.log('este es el toke', token.id);
                if (token.id) {
                    let numerito = this.montoTotal.toString();
                    console.log('este es el monto a  pagar', numerito);
                    let result = numerito.replace(".", "");
                    console.log('este es el monto que va a viajar', result);
                    this.service.pagar({ token: token.id, amount: result })
                        .then(res => {
                        // this.cateSpinner=false
                        console.log('esta es la respuesta del pago', res);
                        if (JSON.parse(JSON.stringify(res)).status == 'succeeded') {
                            this.spinnerFeatured = false;
                            this.presentToast('Pago procesado con éxito', 'success');
                            this.cursoss.forEach((element, index) => {
                                // console.log(element)
                                this.AgregarCurso({ idCursoFk: element.idCursoFk, idUsuarioFk: this.idUsuario, id: element.id });
                            });
                            //  this.navCtrl.navigateForward(['/tabs/cursosPremiun'])
                        }
                        else {
                            this.presentToast('Pago no procesado', 'danger');
                            this.spinnerFeatured = false;
                        }
                        this.dismiss();
                    }, err => {
                        //  this.cateSpinner=false
                        this.spinnerFeatured = false;
                        console.log(err);
                    });
                }
            })
                .catch(error => console.error(error));
        });
    }
    presentToast(message, color) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 3000,
                color: color
            });
            toast.present();
        });
    }
    AgregarCurso(dato) {
        this.service.addCursoPremiun(dato)
            .then(res => {
            // this.cateSpinner=false
            console.log('respuesta del agrego cursos', res);
            this.service.deleteCartUser({ id: dato.id }).then(res => {
                // this.cateSpinner=false
                console.log('respuesta del borro', res);
            });
        }, err => {
            //  this.cateSpinner=false
            console.log(err);
        });
    }
    borrarCarro() {
        this.cursoss.forEach((element, index) => {
            // console.log(element)
            // this.AgregarCurso({idCursoFk:element.idCursoFk,idUsuarioFk:this.idUsuario,id:element.id})
            this.service.deleteCartUser({ id: element.id }).then(res => {
                // this.cateSpinner=false
                console.log('respuesta del borro', res);
            });
        });
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    gteCart() {
        this.service.getCartUser({ idUsuarioFk: this.idUsuario })
            .then(res => {
            // this.cateSpinner=false
            console.log('respuesta del get carrito', res);
            //  this.presentToast('Agregado correctamente al carrito')
            // this.categories = JSON.parse(JSON.stringify(res)).data;
            this.cart = res;
            this.cart.forEach((element, index) => {
                // console.log(element)
                this.valorTotal += parseFloat(element.precioCurso);
                console.log('este es el precio', this.valorTotal);
            });
        }, err => {
            //  this.cateSpinner=false
            console.log(err);
        });
    }
};
PagomodalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _awesome_cordova_plugins_stripe_ngx__WEBPACK_IMPORTED_MODULE_5__["Stripe"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
PagomodalPage.propDecorators = {
    monto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    lastName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    middleInitial: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PagomodalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pagomodal',
        template: _raw_loader_pagomodal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pagomodal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PagomodalPage);



/***/ })

}]);
//# sourceMappingURL=default~cart-cart-module~detail-cursos-detail-cursos-module~pagomodal-pagomodal-module.js.map