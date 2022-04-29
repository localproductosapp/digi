(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "54LC":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/drawer/drawer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"drawer ion-padding\" #drawer>\n \n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"10\">\n      <h2>{{ title }}</h2>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-text-right\">\n      <ion-button fill=\"clear\" (click)=\"closeDrawer()\" color=\"medium\" size=\"large\">\n        <ion-icon name=\"close-circle\"></ion-icon>\n      </ion-button>\n    </ion-col>\n \n    <ion-col size=\"2\">\n      <ion-icon name=\"information-circle-outline\" size=\"large\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      Episodes And info\n    </ion-col>\n \n    <ion-col size=\"2\">\n      <ion-icon name=\"download-outline\" size=\"large\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      Download Episode\n    </ion-col>\n \n    <ion-col size=\"2\">\n      <ion-icon name=\"thumbs-up-outline\" size=\"large\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      Like\n    </ion-col>\n \n    <ion-col size=\"2\">\n      <ion-icon name=\"thumbs-down-outline\" size=\"large\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      Not For Me\n    </ion-col>\n \n  </ion-row>\n</div>");

/***/ }),

/***/ "AHrv":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"cursosMasVistos\">\n      <ion-icon name=\"trophy\"></ion-icon>\n      <ion-label>+ vistos</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"foro\">\n      <ion-icon name=\"cafe\"></ion-icon>\n      <ion-label>Cafetería</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"videosGuardado\">\n      <ion-icon name=\"heart\"></ion-icon>\n      <ion-label>Guardados</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"detailsaccount\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Perfil</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs> -->\n\n<ion-tabs class=\"colorFondo\" (ionTabsDidChange)=\"setSelectedTab()\">\n  <div class=\"backdrop\" [ngClass]=\"backdropVisible ? 'fade-in' : 'fade'\"\n  tappable (click)=\"closeDrawer()\"></div>\n \n   <ion-tab-bar slot=\"bottom\" color=\"dark\">\n     <ion-tab-button tab=\"home\">\n       <ion-icon [name]=\"selected == 'home' ? 'home' : 'home-outline'\"></ion-icon>\n       <ion-label>Home</ion-label>\n     </ion-tab-button>\n  \n     <!-- <ion-tab-button tab=\"cursosMasVistos\">\n       <ion-icon [name]=\"selected == 'cursosMasVistos' ? 'trophy' : 'trophy-outline'\"></ion-icon>\n       <ion-label>+ vistos</ion-label>\n     </ion-tab-button> -->\n  \n     <ion-tab-button tab=\"foro\" *ngIf=\"subscripcion==1\">\n       <ion-icon [name]=\"selected == 'foro' ? 'cafe' : 'cafe-outline'\"></ion-icon>\n       <ion-label>Cafetería</ion-label>\n     </ion-tab-button>\n  \n     <ion-tab-button tab=\"videosGuardado\">\n       <ion-icon [name]=\"selected == 'videosGuardado' ? 'heart' : 'heart-outline'\"></ion-icon>\n       <ion-label>Guardados</ion-label>\n     </ion-tab-button>\n\n     <ion-tab-button tab=\"cursosPremiun\">\n      <ion-icon [name]=\"selected == 'cursosPremiun' ? 'star' : 'star-outline'\"></ion-icon>\n      <ion-label>Premium</ion-label>\n    </ion-tab-button>\n\n     <ion-tab-button tab=\"detailsaccount\">\n      <ion-icon [name]=\"selected == 'detailsaccount' ? 'person' : 'person-outline'\"></ion-icon>\n      <ion-label>Perfil</ion-label>\n    </ion-tab-button>\n   </ion-tab-bar>\n  \n </ion-tabs>\n \n <app-drawer (openStateChanged)=\"toggleBackdrop($event)\"></app-drawer>\n");

/***/ }),

/***/ "IA6j":
/*!********************************************************!*\
  !*** ./src/app/components/shared-components.module.ts ***!
  \********************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer/drawer.component */ "LcY4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let SharedComponentsModule = class SharedComponentsModule {
};
SharedComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_1__["DrawerComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        exports: [_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_1__["DrawerComponent"]]
    })
], SharedComponentsModule);



/***/ }),

/***/ "LcY4":
/*!*******************************************************!*\
  !*** ./src/app/components/drawer/drawer.component.ts ***!
  \*******************************************************/
/*! exports provided: DrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerComponent", function() { return DrawerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_drawer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./drawer.component.html */ "54LC");
/* harmony import */ var _drawer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawer.component.scss */ "TJXD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DrawerComponent = class DrawerComponent {
    constructor() {
        this.title = '#';
        this.openState = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() { }
    openDrawer(title) {
        this.title = title;
        const drawer = this.drawer.nativeElement;
        drawer.style.transition = '.2s ease-in';
        drawer.style.transform = `translateY(-300px) `;
        this.openState.emit(true);
    }
    closeDrawer() {
        const drawer = this.drawer.nativeElement;
        drawer.style.transition = '.2s ease-out';
        drawer.style.transform = '';
        this.openState.emit(false);
    }
};
DrawerComponent.ctorParameters = () => [];
DrawerComponent.propDecorators = {
    drawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['drawer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }],
    openState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['openStateChanged',] }]
};
DrawerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-drawer',
        template: _raw_loader_drawer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_drawer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DrawerComponent);



/***/ }),

/***/ "MJr+":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "AHrv");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "PkIa");
/* harmony import */ var _components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/drawer/drawer.component */ "LcY4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_drawer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/drawer.service */ "5qeJ");







let TabsPage = class TabsPage {
    constructor(drawerService, changeDetectorRef) {
        this.drawerService = drawerService;
        this.changeDetectorRef = changeDetectorRef;
        this.selected = '';
        this.backdropVisible = false;
        this.drawerService.drawerOpen.subscribe(drawerData => {
            if (drawerData && drawerData.open) {
                this.drawer.openDrawer(drawerData.title);
            }
        });
    }
    ionViewWillEnter() {
        let arreglo = localStorage.getItem('user');
        this.subscripcion = JSON.parse(arreglo).subscription_id;
        console.log('esta es la subscricion', this.subscripcion);
    }
    setSelectedTab() {
        this.selected = this.tabs.getSelected();
    }
    closeDrawer() {
        this.drawer.closeDrawer();
    }
    toggleBackdrop(isVisible) {
        this.backdropVisible = isVisible;
        this.changeDetectorRef.detectChanges();
    }
};
TabsPage.ctorParameters = () => [
    { type: _services_drawer_service__WEBPACK_IMPORTED_MODULE_6__["DrawerService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
TabsPage.propDecorators = {
    tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTabs"],] }],
    drawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_3__["DrawerComponent"],] }]
};
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabsPage);



/***/ }),

/***/ "PkIa":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backdrop {\n  width: 100%;\n  height: 100%;\n  background: #000;\n  z-index: 10;\n  position: absolute;\n}\n\n.fade {\n  transition: 0.4s linear all;\n  opacity: 0;\n  z-index: -1;\n}\n\n.fade-in {\n  transition: 0.4s linear all;\n  opacity: 1;\n}\n\nion-tab-bar, ion-tab-button {\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8715861345) 0%, rgba(0, 0, 0, 0.8463760504) 57%, rgba(0, 0, 0, 0.6923144258) 80%, rgba(0, 0, 0, 0.24) 89%, rgba(0, 0, 0, 0) 100%) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdFO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdFO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0FBQUo7O0FBSUU7RUFDRSxnTUFBQTtBQURKIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYmFja2Ryb3Age1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICBcbiAgLmZhZGUge1xuICAgIHRyYW5zaXRpb246IDAuNHMgbGluZWFyIGFsbDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG4gIFxuICAuZmFkZS1pbiB7XG4gICAgdHJhbnNpdGlvbjogMC40cyBsaW5lYXIgYWxsO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuXG4gIGlvbi10YWItYmFyLCBpb24tdGFiLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuODcxNTg2MTM0NDUzNzgxNSkgMCUsIHJnYmEoMCwgMCwgMCwgMC44NDYzNzYwNTA0MjAxNjgxKSA1NyUsIHJnYmEoMCwgMCwgMCwgMC42OTIzMTQ0MjU3NzAzMDgxKSA4MCUsIHJnYmEoMCwgMCwgMCwgMC4yNCkgODklLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpICFpbXBvcnRhbnQ7XG4gICB9XG4gICJdfQ== */");

/***/ }),

/***/ "TJXD":
/*!*********************************************************!*\
  !*** ./src/app/components/drawer/drawer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".drawer {\n  position: absolute;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n  width: 100%;\n  border-radius: 4px;\n  bottom: -300px;\n  height: 300px;\n  z-index: 11;\n  background: #ffffff;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RyYXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJkcmF3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJhd2VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvdHRvbTogLTMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgei1pbmRleDogMTE7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBjb2xvcjogI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ "hO9l":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "kB8F");
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shared-components.module */ "IA6j");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs.page */ "MJr+");








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "kB8F":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "MJr+");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "ct+p")).then(m => m.HomePageModule)
            },
            // {
            //   path: 'cart',
            //   loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)
            // },
            // {
            //   path: 'profile',
            //   loadChildren: () => import('../stores/stores.module').then( m => m.StoresPageModule)
            // },
            {
                path: 'profile2',
                loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ../login/login.module */ "X3zk")).then(m => m.LoginPageModule)
            },
            // {
            //   path: 'products/:category',
            //   loadChildren: () => import('../products/products.module').then( m => m.ProductsPageModule)
            // },
            {
                path: 'videosGuardado',
                loadChildren: () => Promise.all(/*! import() | videos-guardado-videos-guardado-module */[__webpack_require__.e("common"), __webpack_require__.e("videos-guardado-videos-guardado-module")]).then(__webpack_require__.bind(null, /*! ../videos-guardado/videos-guardado.module */ "Himn")).then(m => m.VideosGuardadoPageModule)
            },
            {
                path: 'foro',
                loadChildren: () => Promise.all(/*! import() | foro-foro-module */[__webpack_require__.e("common"), __webpack_require__.e("foro-foro-module")]).then(__webpack_require__.bind(null, /*! ../foro/foro.module */ "/LvK")).then(m => m.ForoPageModule)
            },
            // {
            //   path: 'search/:query',
            //   loadChildren: () => import('../search/search.module').then( m => m.SearchPageModule)
            // },
            // {
            //   path: 'productstore/:store',
            //   loadChildren: () => import('../productstore/productstore.module').then( m => m.ProductstorePageModule)
            // },
            // {
            //   path: 'forgotpassword',
            //   loadChildren: () => import('../forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
            // },
            // {
            //   path: 'register',
            //   loadChildren: () => import('../registeruser/registeruser.module').then( m => m.RegisteruserPageModule)
            // },
            // {
            //   path: 'orders/:usuario',
            //   loadChildren: () => import('../orders/orders.module').then( m => m.OrdersPageModule)
            // },
            {
                path: 'detailsaccount',
                loadChildren: () => Promise.all(/*! import() | detailsaccount-detailsaccount-module */[__webpack_require__.e("common"), __webpack_require__.e("detailsaccount-detailsaccount-module")]).then(__webpack_require__.bind(null, /*! ../detailsaccount/detailsaccount.module */ "84lM")).then(m => m.DetailsaccountPageModule)
            },
            {
                path: 'setting',
                loadChildren: () => Promise.all(/*! import() | setting-setting-module */[__webpack_require__.e("common"), __webpack_require__.e("setting-setting-module")]).then(__webpack_require__.bind(null, /*! ../setting/setting.module */ "nWY6")).then(m => m.SettingPageModule)
            },
            {
                path: 'privacypolicy',
                loadChildren: () => Promise.all(/*! import() | privacypolicy-privacypolicy-module */[__webpack_require__.e("common"), __webpack_require__.e("privacypolicy-privacypolicy-module")]).then(__webpack_require__.bind(null, /*! ../privacypolicy/privacypolicy.module */ "1w5g")).then(m => m.PrivacypolicyPageModule)
            },
            {
                path: 'terms',
                loadChildren: () => Promise.all(/*! import() | terminoscondiciones-terminoscondiciones-module */[__webpack_require__.e("common"), __webpack_require__.e("terminoscondiciones-terminoscondiciones-module")]).then(__webpack_require__.bind(null, /*! ../terminoscondiciones/terminoscondiciones.module */ "T8fg")).then(m => m.TerminoscondicionesPageModule)
            },
            // {
            //   path: 'returnpolicy',
            //   loadChildren: () => import('../returnpolicy/returnpolicy.module').then( m => m.ReturnpolicyPageModule)
            // },
            // {
            //   path: 'shippingpolicy',
            //   loadChildren: () => import('../shippingpolicy/shippingpolicy.module').then( m => m.ShippingpolicyPageModule)
            // },
            {
                path: 'cursosMasVistos',
                loadChildren: () => Promise.all(/*! import() | cursos-mas-vistos-cursos-mas-vistos-module */[__webpack_require__.e("common"), __webpack_require__.e("cursos-mas-vistos-cursos-mas-vistos-module")]).then(__webpack_require__.bind(null, /*! ../cursos-mas-vistos/cursos-mas-vistos.module */ "17UB")).then(m => m.CursosMasVistosPageModule)
            },
            {
                path: 'detailCurso/:id',
                loadChildren: () => Promise.all(/*! import() | detail-cursos-detail-cursos-module */[__webpack_require__.e("default~cart-cart-module~detail-cursos-detail-cursos-module~pagomodal-pagomodal-module"), __webpack_require__.e("common"), __webpack_require__.e("detail-cursos-detail-cursos-module")]).then(__webpack_require__.bind(null, /*! ../detail-cursos/detail-cursos.module */ "RSUX")).then(m => m.DetailCursosPageModule)
            },
            {
                path: 'detailPremiun/:id',
                loadChildren: () => Promise.all(/*! import() | detail-premiun-detail-premiun-module */[__webpack_require__.e("common"), __webpack_require__.e("detail-premiun-detail-premiun-module")]).then(__webpack_require__.bind(null, /*! ../detail-premiun/detail-premiun.module */ "VB3T")).then(m => m.DetailPremiunPageModule)
            },
            {
                path: 'home-categorias/:id',
                loadChildren: () => Promise.all(/*! import() | home-categorias-home-categorias-module */[__webpack_require__.e("common"), __webpack_require__.e("home-categorias-home-categorias-module")]).then(__webpack_require__.bind(null, /*! ../home-categorias/home-categorias.module */ "nHwc")).then(m => m.HomeCategoriasPageModule)
            },
            {
                path: 'tag/:tag',
                loadChildren: () => Promise.all(/*! import() | home-categorias-home-categorias-module */[__webpack_require__.e("common"), __webpack_require__.e("home-categorias-home-categorias-module")]).then(__webpack_require__.bind(null, /*! ../home-categorias/home-categorias.module */ "nHwc")).then(m => m.HomeCategoriasPageModule)
            },
            {
                path: 'cart',
                loadChildren: () => Promise.all(/*! import() | cart-cart-module */[__webpack_require__.e("default~cart-cart-module~detail-cursos-detail-cursos-module~pagomodal-pagomodal-module"), __webpack_require__.e("cart-cart-module")]).then(__webpack_require__.bind(null, /*! ../cart/cart.module */ "v35Q")).then(m => m.CartPageModule)
            },
            {
                path: 'cursosPremiun',
                loadChildren: () => Promise.all(/*! import() | cursos-premiun-cursos-premiun-module */[__webpack_require__.e("common"), __webpack_require__.e("cursos-premiun-cursos-premiun-module")]).then(__webpack_require__.bind(null, /*! ../cursos-premiun/cursos-premiun.module */ "8CHM")).then(m => m.CursosPremiunPageModule)
            },
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map