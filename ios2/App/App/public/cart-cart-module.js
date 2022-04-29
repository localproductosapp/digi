(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "SNM6":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Xo8k":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart.page.html */ "ehlK");
/* harmony import */ var _cart_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.page.scss */ "SNM6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _awesome_cordova_plugins_stripe_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/stripe/ngx */ "4NZp");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pagomodal_pagomodal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pagomodal/pagomodal.page */ "z1j3");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");













let CartPage = class CartPage {
    constructor(http2, http, navCtrl, stripe, routerOutlet, modalController, service, toastController) {
        // Stripe.initialize({
        //   publishableKey: "pk_test_51K7hlpGPfZahrmfPjpVX1KxmRtWqr3UNiqov7pO0sswLMoXRJhsceulNSjacflHABhjT5CfABaZbiCs7TNpDIpvB003866cfYb",
        // });
        this.http2 = http2;
        this.http = http;
        this.navCtrl = navCtrl;
        this.stripe = stripe;
        this.routerOutlet = routerOutlet;
        this.modalController = modalController;
        this.service = service;
        this.toastController = toastController;
        this.processSheet = 'willReady';
        this.processFlow = 'willReady';
        this.processApplePay = 'willReady';
        this.processGooglePay = 'willReady';
        this.isApplePayAvailable = false;
        this.isGooglePayAvailable = false;
        this.valorTotal = 0;
    }
    ngOnInit() {
        let arreglo = localStorage.getItem('user');
        this.idUsuario = JSON.parse(arreglo).id;
    }
    ngAfterViewInit() {
        this.gteCart();
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pagomodal_pagomodal_page__WEBPACK_IMPORTED_MODULE_8__["PagomodalPage"],
                componentProps: {
                    'monto': this.valorTotal,
                    'cursos': this.cart
                },
            });
            modal.onDidDismiss()
                .then((data) => {
                // console.log('se cerro la puta modal',data)
                this.gteCart();
                this.navCtrl.navigateForward(['/tabs/cursosPremiun']);
            });
            return yield modal.present();
        });
    }
    // getCartUser
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
    delete(id) {
        // deleteCartUser
        this.service.deleteCartUser({ id: id })
            .then(res => {
            // this.cateSpinner=false
            console.log('respuesta del delete carrito', res);
            //  this.presentToast('Agregado correctamente al carrito')
            // this.categories = JSON.parse(JSON.stringify(res)).data;
            // this.cart=res;
            this.gteCart();
            this.presentToast(JSON.parse(JSON.stringify(res)).message);
        }, err => {
            //  this.cateSpinner=false
            console.log(err);
        });
    }
};
CartPage.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _awesome_cordova_plugins_stripe_ngx__WEBPACK_IMPORTED_MODULE_6__["Stripe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRouterOutlet"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] }
];
CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart',
        template: _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartPage);



/***/ }),

/***/ "cP+M":
/*!*********************************************!*\
  !*** ./src/app/cart/cart-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function() { return CartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.page */ "Xo8k");




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CartPageRoutingModule);



/***/ }),

/***/ "ehlK":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header #header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\">Volver</ion-back-button>\n    </ion-buttons>\n    <img class=\"logo\" src=\"/assets/img/logo.png\">\n    <!-- <ion-row class=\"ion-justify-content-center ion-text-center\">\n      <ion-col size=\"4\" class=\"ion-text-right\">\n        TV Shows\n      </ion-col>\n      <ion-col size=\"4\">\n        Movies\n      </ion-col>\n      <ion-col size=\"4\" tappable (click)=\"openCategories()\" class=\"ion-text-left\">\n        Categories <ion-icon name=\"caret-down-outline\"></ion-icon>\n      </ion-col>\n    </ion-row> -->\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" style=\"top: 76px;\">\n\n  <ion-list>\n    <ion-list-header>\n      Carrito de compras\n    </ion-list-header>\n\n    <ion-item *ngFor=\"let carro of cart\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"carro.url_image\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{carro.name}}</h2>\n        <h3 style=\"color:red\">{{carro.precioCurso}} €</h3>\n        <p>{{carro.descripcion}}</p>\n  \n      </ion-label>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"delete(carro.id)\" >\n          <ion-icon name=\"close-circle-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n \n  \n  </ion-list>\n\n  <ion-list>\n    <!-- <ion-list-header><ion-label>PaymentSheet</ion-label></ion-list-header> -->\n    <!-- <ion-button  (click)=\"presentModal()\" style=\"    width: 100%;\" *ngIf=\"cart!=''\">Total a pagar {{valorTotal}} €</ion-button> -->\n   \n  </ion-list>\n\n  <div class=\"ion-padding\">\n    <ion-button expand=\"block\"  (click)=\"presentModal()\" type=\"button\" *ngIf=\"cart!='' && valorTotal\" class=\"ion-no-margin\">Comprar por {{valorTotal}} €</ion-button>\n  </div>\n\n\n</ion-content>");

/***/ }),

/***/ "v35Q":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-routing.module */ "cP+M");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "Xo8k");







let CartPageModule = class CartPageModule {
};
CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"]
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })
], CartPageModule);



/***/ })

}]);
//# sourceMappingURL=cart-cart-module.js.map