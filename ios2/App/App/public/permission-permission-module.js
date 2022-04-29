(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["permission-permission-module"],{

/***/ "S7xH":
/*!*************************************************!*\
  !*** ./src/app/permission/permission.module.ts ***!
  \*************************************************/
/*! exports provided: PermissionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionPageModule", function() { return PermissionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _permission_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permission-routing.module */ "sITN");
/* harmony import */ var _permission_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./permission.page */ "l+wA");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/shared-directives.module */ "Fgaq");








let PermissionPageModule = class PermissionPageModule {
};
PermissionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _permission_routing_module__WEBPACK_IMPORTED_MODULE_5__["PermissionPageRoutingModule"],
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__["SharedDirectivesModule"]
        ],
        declarations: [_permission_page__WEBPACK_IMPORTED_MODULE_6__["PermissionPage"]]
    })
], PermissionPageModule);



/***/ }),

/***/ "UtFy":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/permission/permission.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header #header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\" *ngIf=\"ver\">\n      <ion-back-button defaultHref=\"/\">Volver</ion-back-button>\n    </ion-buttons> -->\n    <!-- <ion-title >Cursos mas Vistos</ion-title> -->\n    <img class=\"logo\" src=\"/assets/img/logo.png\">\n    <!-- <ion-row class=\"ion-justify-content-center ion-text-center\">\n      <ion-col size=\"4\" class=\"ion-text-right\">\n        TV Shows\n      </ion-col>\n      <ion-col size=\"4\">\n        Movies\n      </ion-col>\n      <ion-col size=\"4\" tappable (click)=\"openCategories()\" class=\"ion-text-left\">\n        Categories <ion-icon name=\"caret-down-outline\"></ion-icon>\n      </ion-col>\n    </ion-row> -->\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" [appHideHeader]=\"header\" style=\"top: 76px;\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" style=\"text-align:right\">\n        <ion-icon (click)=\"Aceptar()\" name=\"close-circle-outline\" size=\"large\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <img src=\"assets/img/cohete_rojo.png\">\n      </ion-col>\n      \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-text color=\"light\" class=\"ion-text-center\">\n          <h1>¡Qué emoción verte por aquí!</h1>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-text color=\"light\" class=\"ion-text-center\">\n          <p>Me llamo Digi y estoy aquí para ayudarte con la primera toma de contacto con Digitalizap.</p>\n          <p><b>Esta app aun está en desarrollo y es una prueba.</b> Si algo te resulta extraño o no está claro, tu opinión nos ayuda mucho a mejorar. Nos puedes escribir a: hola@digitalizap.com. Gracias por estar aquí. </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center mb\">\n        <a (click)=\"Aceptar()\" class=\"activarNoti\">Empezar Ahora</a>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center mb \" style=\"margin-bottom: 52px;\">\n        <p>Trastea por toda la app tranquilo..</p>\n        <p>¡No puedes romper nada!</p>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "l+wA":
/*!***********************************************!*\
  !*** ./src/app/permission/permission.page.ts ***!
  \***********************************************/
/*! exports provided: PermissionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionPage", function() { return PermissionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_permission_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./permission.page.html */ "UtFy");
/* harmony import */ var _permission_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permission.page.scss */ "uz2U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");





// import { LocalNotificationActionType } from '@capacitor/core';



//import { FCM } from '@capacitor-community/fcm';
// import { PushNotifications } from '@capacitor/push-notifications';
/*import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from '@capacitor/core'*/
//const { PushNotifications } = Plugins;

//  const { PushNotifications } = Plugins;
let PermissionPage = class PermissionPage {
    constructor(navCtrl, menu, service, route, platform, 
    // public PushNotifications:Plugins,
    router) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.service = service;
        this.route = route;
        this.platform = platform;
        this.router = router;
    }
    ngOnInit() {
        // this.preguntar()
        // (PushNotifications as any).requestPermission().then( result => {
        //   if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        //     PushNotifications.register();
        // //   } else {
        // //     // Show some error
        // //   }
        // // });
        // // On success, we should be able to receive notifications
        // PushNotifications.addListener('registration',
        //   (token: PushNotificationToken) => {
        //     alert('Push registration success, token: ' + token.value);
        //   }
        // );
        // // Some issue with our setup and push will not work
        // PushNotifications.addListener('registrationError',
        //   (error: any) => {
        //     alert('Error on registration: ' + JSON.stringify(error));
        //   }
        // );
        // // Show us the notification payload if the app is open on our device
        // PushNotifications.addListener('pushNotificationReceived',
        //   (notification: PushNotification) => {
        //     alert('Push received: ' + JSON.stringify(notification));
        //   }
        // );
        // // Method called when tapping on a notification
        // PushNotifications.addListener('pushNotificationActionPerformed',
        //   (notification: PushNotificationActionPerformed) => {
        //     alert('Push action performed: ' + JSON.stringify(notification));
        //   }
        // );
    }
    openMenu() {
        console.log('entro');
        this.menu.open('custom');
    }
    //  async preguntar(){
    //   PushNotifications.requestPermissions();
    //   // await PushNotifications.requestPermission();
    //  }
    Aceptar() {
        localStorage.setItem('notification', 'true');
        this.navCtrl.navigateRoot('/tabs/home');
        //   // PushNotifications.requestPermissions();
        //    // Request permission to use push notifications
        //   // iOS will prompt user and return if they granted permission or not
        //   // Android will just grant without prompting
        //   if(this.platform.is('ios')){
        //     PushNotifications.requestPermissions().then( result => {
        //       // if (result.results.) {
        //       //     // Register with Apple / Google to receive push via APNS/FCM
        //       //     PushNotifications.register();
        //       //     localStorage.setItem('notification', 'true')
        //       //     this.navCtrl.navigateRoot('/tabs/home');
        //       // } else {
        //       //     // Show some error
        //       //     localStorage.setItem('notification', 'false')
        //       //     this.navCtrl.navigateRoot('/tabs/home');
        //       // }
        //       });
        //   }else{
        //     PushNotifications.addListener("registration", (token) => {
        //       console.log('este s el toke',token);
        //     });
        //     // Plugins.PushNotifications.register();
        //     localStorage.setItem('notification', 'true')
        //     this.navCtrl.navigateRoot('/tabs/home');
        //   }
    }
    rechazar() {
        localStorage.setItem('notification', 'false');
        this.navCtrl.navigateRoot('/tabs/home');
    }
};
PermissionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PermissionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-permission',
        template: _raw_loader_permission_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_permission_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PermissionPage);



/***/ }),

/***/ "sITN":
/*!*********************************************************!*\
  !*** ./src/app/permission/permission-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PermissionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionPageRoutingModule", function() { return PermissionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _permission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permission.page */ "l+wA");




const routes = [
    {
        path: '',
        component: _permission_page__WEBPACK_IMPORTED_MODULE_3__["PermissionPage"]
    }
];
let PermissionPageRoutingModule = class PermissionPageRoutingModule {
};
PermissionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PermissionPageRoutingModule);



/***/ }),

/***/ "uz2U":
/*!*************************************************!*\
  !*** ./src/app/permission/permission.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".activarNoti {\n  padding: 15px;\n  background: #00ced1;\n  color: white;\n}\n\n.mb {\n  margin-bottom: 15px;\n}\n\n.rechazar {\n  color: #cccccc;\n}\n\nion-col {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Blcm1pc3Npb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJwZXJtaXNzaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmFyTm90aXtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICMwMGNlZDE7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWJ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnJlY2hhemFye1xuICAgIGNvbG9yOiAjY2NjY2NjO1xufVxuXG5pb24tY29se1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=permission-permission-module.js.map