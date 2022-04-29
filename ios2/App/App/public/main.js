(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/user/Desktop/digital/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    mapBoxToken: "pk.eyJ1IjoibWVucGhpc2oyMyIsImEiOiJja2tjejVwcG0wNjNvMnVxYnB2NHh2cGE0In0.sz-4ABwLtuP1M__ceyARbg",
    // firebaseConfig: {
    //   apiKey: "",
    //   authDomain: "",
    //   databaseURL: "",
    //   projectId: "localproductos-1c4c0",
    //   storageBucket: "",
    //   messagingSenderId: "",
    //   appId: "1:211018570882:android:ae5ac04444dbbe1740689b",
    //   measurementId: ""
    // },
    // ApiUrl:'http://localhost/digitalitzap-backend/backend/',
    ApiStripe: 'https://digitalizap.herokuapp.com/',
    ApiUrl: 'https://digitalizap.com/backend/backend/public/index.php/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");









let ApiService = class ApiService {
    constructor(http, http2, navCtrl, toastController) {
        this.http = http;
        this.http2 = http2;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.dataObserved = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.currentEvent = this.dataObserved.asObservable();
    }
    publish(param) {
        this.dataObserved.next(param);
    }
    canActivate() {
        //Validamos que existe un usuario en el localstorage almacenado
        let token = localStorage.getItem('token');
        let usuario = localStorage.getItem('user');
        if (token && usuario) {
            return true;
        }
        else {
            this.navCtrl.navigateRoot('/login');
            return false;
        }
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(error);
        };
    }
    /** Log a HeroService message with the MessageService */
    log(message) {
        console.log(message);
    }
    // signup(data,params?) : Observable<any>{
    //   let parseParams = new HttpParams();
    //   const header1= {'Content-Type':'application/json',};
    //   if (params) {
    //     Object.keys(params).forEach(p => {
    //       parseParams = parseParams.append(p, params[p]);
    //     });
    //   }
    //   return this.http.post(
    //     environment.apiUrlCars + "/api/v1/signup/customer",data, {params : parseParams, headers:{},
    //     observe: 'response',
    //     responseType: 'json'})
    //     .pipe(
    //       tap(_ => this.log('response received')),
    //       catchError(this.handleError('signup'))
    //     );
    // }
    login(data, params) {
        let parseParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        const header1 = { 'Content-Type': 'application/json' };
        if (params) {
            Object.keys(params).forEach(p => {
                parseParams = parseParams.append(p, params[p]);
            });
        }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/auth/login", data, {})
            .then(data => {
            return JSON.parse(data.data);
        })
            .catch(error => {
            console.log('este  es el error', error);
            this.handleError('product add', []);
        });
        /* return this.http2.post(
           environment.ApiUrl + "api/auth/login",data)
           .pipe(
             tap(_ => this.log('response received')),
             catchError(this.handleError('signup', []))
           );*/
    }
    // logout(data,params?) : Observable<any>{
    //   let parseParams = new HttpParams();
    //   const headers1= {'Authorization':data};
    //   const headers = new HttpHeaders()
    //   .set('Access-Control-Allow-Origin' , '*')
    //   .set('Accept', '*/*')
    //   .set('Content-type', '*/*')
    //   .set('Authorization', data);
    //   if (params) {
    //     Object.keys(params).forEach(p => {
    //       parseParams = parseParams.append(p, params[p]);
    //     });
    //   }
    //   return this.http.delete(
    //     environment.apiUrlCars + "/api/v1/logout", {params : parseParams, headers: headers,
    //       observe: 'response',
    //       responseType: 'json'
    //       })
    //     .pipe(
    //       tap(_ => this.log('response received')),
    //       catchError(this.handleError('logout', []))
    //     );
    // }
    // ApiUrl
    categories(params) {
        let header;
        let parseParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (params) {
            Object.keys(params).forEach(p => {
                parseParams = parseParams.append(p, params[p]);
            });
        }
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/categories", {}, params)
            .then(data => {
            return JSON.parse(data.data);
        })
            .catch(error => {
            this.handleError('stores', []);
        });
        //  return this.http2.get(
        //   environment.ApiUrl+"api/categories",params)
        //   .pipe(
        //     tap(_ => this.log('response received')),
        //     catchError(this.handleError('busqueda', []))
        //   );
    }
    categoriesIndex(param) {
        // if (params) {
        //   Object.keys(params).forEach(p => {
        //     parseParams = parseParams.append(p, params[p]);
        //   });
        // }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/obtenerTodas", param, {})
            .then(data => {
            return JSON.parse(data.data);
        })
            .catch(error => {
            this.handleError('stores', []);
        });
        //   return this.http2.post(
        // environment.ApiUrl+"api/obtenerTodas",param)
        // .pipe(
        //   tap(_ => this.log('response received')),
        //   catchError(this.handleError('busqueda', []))
        // );
    }
    updateImgPerfil(param) {
        // if (params) {
        //   Object.keys(params).forEach(p => {
        //     parseParams = parseParams.append(p, params[p]);
        //   });
        // }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/updateImgPerfil", param, {})
            .then(data => {
            return JSON.parse(data.data);
        })
            .catch(error => {
            this.handleError('stores', []);
        });
        //   return this.http2.post(
        // environment.ApiUrl+"api/obtenerTodas",param)
        // .pipe(
        //   tap(_ => this.log('response received')),
        //   catchError(this.handleError('busqueda', []))
        // );
    }
    PlayPorPersona(param) {
        // if (params) {
        //   Object.keys(params).forEach(p => {
        //     parseParams = parseParams.append(p, params[p]);
        //   });
        // }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/addPlayPersona", param, {})
            .then(data => {
            return JSON.parse(data.data);
        })
            .catch(error => {
            this.handleError('stores', []);
        });
        //   return this.http2.post(
        // environment.ApiUrl+"api/obtenerTodas",param)
        // .pipe(
        //   tap(_ => this.log('response received')),
        //   catchError(this.handleError('busqueda', []))
        // );
    }
    consultarUser(idUser) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + `api/users/${idUser}`, {}, {})
            .then(data => {
            return JSON.parse(data.data);
        })
            .catch(error => {
            this.handleError('stores', []);
        });
        //   return this.http2.get(
        // environment.ApiUrl+`api/users/${idUser}`,{})
        // .pipe(
        //   tap(_ => this.log('response received')),
        //   catchError(this.handleError('busqueda', []))
        // );
    }
    CursoPorPersona(param) {
        // if (params) {
        //   Object.keys(params).forEach(p => {
        //     parseParams = parseParams.append(p, params[p]);
        //   });
        // }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/addCursoPersona", param, {})
            .then(data => {
            return JSON.parse(data.data);
        })
            .catch(error => {
            this.handleError('stores', []);
        });
        //   return this.http2.post(
        // environment.ApiUrl+"api/obtenerTodas",param)
        // .pipe(
        //   tap(_ => this.log('response received')),
        //   catchError(this.handleError('busqueda', []))
        // );
    }
    recuperarPassword(param) {
        // if (params) {
        //   Object.keys(params).forEach(p => {
        //     parseParams = parseParams.append(p, params[p]);
        //   });
        // }
        let headers = {
            'Content-Type': 'application/json'
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/password/email", param, headers)
            .then(data => {
            // console.log('esta es la maldita data',data)
            return JSON.parse(data.data);
        })
            .catch(error => {
            this.handleError('stores', []);
        });
        //   return this.http2.post(
        // environment.ApiUrl+"api/password/email",param)
        // .pipe(
        //   tap(_ => this.log('response received')),
        //   catchError(this.handleError('busqueda', []))
        // );
    }
    changePassword(param) {
        // if (params) {
        //   Object.keys(params).forEach(p => {
        //     parseParams = parseParams.append(p, params[p]);
        //   });
        // }
        let headers = {
            'Content-Type': 'application/json'
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/password/reset", param, headers)
            .then(data => {
            return JSON.parse(data.data);
        })
            .catch(error => {
            this.handleError('stores', []);
        });
        //   return this.http2.post(
        // environment.ApiUrl+"api/password/reset",param)
        // .pipe(
        //   tap(_ => this.log('response received')),
        //   catchError(this.handleError('busqueda', []))
        // );
    }
    obtenerCurso(idCurso) {
        let header;
        let parseParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + `api/courses/${idCurso}`, {}, {})
            .then(data => {
            return JSON.parse(data.data);
        })
            .catch(error => {
            this.handleError('stores', []);
        });
        //   return this.http2.get(
        // environment.ApiUrl+`api/courses/${idCurso}`,{})
        // .pipe(
        //   tap(_ => this.log('response received')),
        //   catchError(this.handleError('busqueda', []))
        // );
    }
    addCart(data, params) {
        let parseParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        let options = {
            headers: headers
        };
        // let options = new HttpHeaders({ headers: headers, withCredentials: true });
        if (params) {
            Object.keys(params).forEach(p => {
                parseParams = parseParams.append(p, params[p]);
            });
        }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/categories/obtenerTodas", data, {})
            .then(data => {
            return JSON.parse(data.data);
        })
            .catch(error => {
            console.log('este  es el error', error);
            this.handleError('product add', []);
        });
        //  return this.http2.post(
        //       environment.ApiUrl+"api/categories/obtenerTodas",data,{})
        //   .pipe(
        //     tap(_ => this.log('response received')),
        //     catchError(this.handleError('signup', []))
        //   );
    }
    // login(params) {
    //   return this.http.post(
    //     `https://localproductos.es/wp-json/custom-plugin/login`,params,{})
    //     .then(data =>{
    //       //  return data
    //        return JSON.parse(data.data);
    //     })
    //     .catch(error => {
    //       this.handleError('login', [])
    //     });
    // return this.http2.post(
    //   `https://localproductos.es/wp-json/custom-plugin/login`,params,{})
    //   .pipe(
    //     tap(_ => this.log('response received')),
    //     catchError(this.handleError('login', []))
    //   );
    // }
    search(params) {
        return this.http.get(`https://localproductos.es/wp-json/swp_api/search?s=${params}`, {}, {})
            .then(data => {
            // return data
            return JSON.parse(data.data);
        })
            .catch(error => {
            this.handleError('login', []);
        });
        // return this.http2.get(
        //   `https://localproductos.es/wp-json/swp_api/search?s=${params}`)
        //   .pipe(
        //     tap(_ => this.log('response received')),
        //     catchError(this.handleError('busqueda', []))
        //   );
    }
    registerUser(dato) {
        this.http.setDataSerializer("json");
        console.log(dato);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/auth/register", dato, {})
            .then(data => {
            // return data
            return JSON.parse(data.data);
        })
            .catch(error => {
            console.log(error);
            this.handleError('login', []);
        });
        // return this.http2.post(
        //   environment.ApiUrl + "api/auth/register",dato)
        //   .pipe(
        //     tap(_ => this.log('response received')),
        //     catchError(this.handleError('signup', []))
        //   );
    }
    cursosMasVistos(idCurso) {
        let header;
        let parseParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + `api/courses/view/${idCurso}`, {}, {})
            .then(data => {
            return JSON.parse(data.data);
        })
            .catch(error => {
            this.handleError('stores', []);
        });
        //   return this.http2.get(
        // environment.ApiUrl+`api/courses/view/${idCurso}`,{})
        // .pipe(
        //   tap(_ => this.log('response received')),
        //   catchError(this.handleError('busqueda', []))
        // );
    }
    // storeGuardados
    storeGuardados(dato) {
        console.log(dato);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/storeGuardados", dato, {})
            .then(data => {
            // return data
            return JSON.parse(data.data);
        })
            .catch(error => {
            console.log(error);
            this.handleError('login', []);
        });
        // return this.http2.post(
        //   environment.ApiUrl + "api/storeGuardados",dato)
        //   .pipe(
        //     tap(_ => this.log('response received')),
        //     catchError(this.handleError('signup', []))
        //   );
    }
    getGuardados(dato) {
        console.log(dato);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/getGuardados", dato, {})
            .then(data => {
            // return data
            return JSON.parse(data.data);
        })
            .catch(error => {
            console.log(error);
            this.handleError('login', []);
        });
        // return this.http2.post(
        //   environment.ApiUrl + "api/getGuardados",dato)
        //   .pipe(
        //     tap(_ => this.log('response received')),
        //     catchError(this.handleError('signup', []))
        //   );
    }
    getQuestions(params) {
        let header;
        let parseParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (params) {
            Object.keys(params).forEach(p => {
                parseParams = parseParams.append(p, params[p]);
            });
        }
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/questions", params, {})
            .then(data => {
            return JSON.parse(data.data);
        })
            .catch(error => {
            this.handleError('stores', []);
        });
        //   return this.http2.get(
        // environment.ApiUrl+"api/questions",params)
        // .pipe(
        //   tap(_ => this.log('response received')),
        //   catchError(this.handleError('busqueda', []))
        // );
    }
    responder(dato) {
        console.log(dato);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/answers", dato, {})
            .then(data => {
            // return data
            return JSON.parse(data.data);
        })
            .catch(error => {
            console.log(error);
            this.handleError('login', []);
        });
        // return this.http2.post(
        //   environment.ApiUrl + "api/answers",dato)
        //   .pipe(
        //     tap(_ => this.log('response received')),
        //     catchError(this.handleError('signup', []))
        //   );
    }
    preguntar(dato) {
        console.log(dato);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/questions", dato, {})
            .then(data => {
            // return data
            return JSON.parse(data.data);
        })
            .catch(error => {
            console.log(error);
            this.handleError('login', []);
        });
        // return this.http2.post(
        //   environment.ApiUrl + "api/questions",dato)
        //   .pipe(
        //     tap(_ => this.log('response received')),
        //     catchError(this.handleError('signup', []))
        //   );
    }
    pagar(dato) {
        // console.log(dato);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiStripe + "pay", dato, {})
            .then(data => {
            // return data
            return JSON.parse(data.data);
        })
            .catch(error => {
            console.log(error);
            this.handleError('login', []);
        });
        // return this.http2.post(
        //   environment.ApiStripe + "pay",dato)
        //   .pipe(
        //     tap(_ => this.log('response received')),
        //     catchError(this.handleError('signup', []))
        //   );
    }
    addCarro(dato) {
        // console.log(dato);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/addCartCurso", dato, {})
            .then(data => {
            // return data
            return JSON.parse(data.data);
        })
            .catch(error => {
            console.log(error);
            this.handleError('login', []);
        });
        // return this.http2.post(
        //   environment.ApiUrl + "api/addCartCurso",dato)
        //   .pipe(
        //     tap(_ => this.log('response received')),
        //     catchError(this.handleError('signup', []))
        //   );
    }
    getCartUser(dato) {
        // console.log(dato);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/getCartUser", dato, {})
            .then(data => {
            // return data
            return JSON.parse(data.data);
        })
            .catch(error => {
            console.log(error);
            this.handleError('login', []);
        });
        // return this.http2.post(
        //   environment.ApiUrl + "api/getCartUser",dato)
        //   .pipe(
        //     tap(_ => this.log('response received')),
        //     catchError(this.handleError('signup', []))
        //   );
    }
    deleteCartUser(dato) {
        // console.log(dato);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/quitarCarro", dato, {})
            .then(data => {
            // return data
            return JSON.parse(data.data);
        })
            .catch(error => {
            console.log(error);
            this.handleError('login', []);
        });
        // return this.http2.post(
        //   environment.ApiUrl + "api/quitarCarro",dato)
        //   .pipe(
        //     tap(_ => this.log('response received')),
        //     catchError(this.handleError('signup', []))
        //   );
    }
    addCursoPremiun(dato) {
        // console.log(dato);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/saveCursosPremiun", dato, {})
            .then(data => {
            // return data
            return JSON.parse(data.data);
        })
            .catch(error => {
            console.log(error);
            this.handleError('login', []);
        });
        // return this.http2.post(
        //   environment.ApiUrl + "api/saveCursosPremiun",dato)
        //   .pipe(
        //     tap(_ => this.log('response received')),
        //     catchError(this.handleError('signup', []))
        //   );
    }
    getCursoPremiun(dato) {
        // console.log(dato);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/getCursosPremiun", dato, {})
            .then(data => {
            // return data
            return JSON.parse(data.data);
        })
            .catch(error => {
            console.log(error);
            this.handleError('login', []);
        });
        // return this.http2.post(
        //   environment.ApiUrl + "api/getCursosPremiun",dato)
        //   .pipe(
        //     tap(_ => this.log('response received')),
        //     catchError(this.handleError('signup', []))
        //   );
    }
    saberPremiun(dato) {
        // console.log(dato);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl + "api/saberSiCursoPremiun", dato, {})
            .then(data => {
            // return data
            return JSON.parse(data.data);
        })
            .catch(error => {
            console.log(error);
            this.handleError('login', []);
        });
        // return this.http2.post(
        //   environment.ApiUrl + "api/saberSiCursoPremiun",dato)
        //   .pipe(
        //     tap(_ => this.log('response received')),
        //     catchError(this.handleError('signup', []))
        //   );
    }
};
ApiService.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "KwcL":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pwa-action-sheet.entry.js": [
		"jDxf",
		43
	],
	"./pwa-camera-modal-instance.entry.js": [
		"37vE",
		44
	],
	"./pwa-camera-modal.entry.js": [
		"cJxf",
		45
	],
	"./pwa-camera.entry.js": [
		"eGHz",
		46
	],
	"./pwa-toast.entry.js": [
		"fHjd",
		47
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "KwcL";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/api.service */ "H+bZ");






let AppComponent = class AppComponent {
    constructor(menu, service) {
        this.menu = menu;
        this.service = service;
    }
    ngOnInit() {
        // external required step
        // register for push
        // // Get FCM token instead the APN one returned by Capacitor
        // FCM.getToken()
        //   .then((r) => console.log(`Token ${r.token}`))
        //   .catch((err) => console.log(err));
    }
    closeMenu() {
        this.menu.close();
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-menu side=\"end\" contentId=\"main\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title class=\"ion-text-center\"><img src=\"assets/img/logo.png\" height=\"70\"></ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-grid>\n        <ion-row *ngIf=\"categories\">\n          <ion-col size=\"12\" class=\"ion-text-center mb30\">\n            <ion-text>CATEGORIAS</ion-text>\n          </ion-col>\n      \n          <!-- <ion-col size=\"12\" class=\"ion-text-center colorCol\" *ngFor=\"let category of categories\">\n\n            <a routerLink=\"/tabs/products/{{category.id}}\" (click)=\"closeMenu()\">\n      \n           \n               <p color=\"dark\" class=\"labelVertical\" [innerHTML]=\"category.name\"></p> \n             \n            </a>\n          </ion-col> -->\n        \n        </ion-row>\n      </ion-grid>\n      <ion-item *ngFor=\"let category of categories\" routerLink=\"/tabs/products/{{category.id}}\" (click)=\"closeMenu()\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"category.image.src\" *ngIf=\"category.image\">\n        </ion-avatar>\n        <ion-label [innerHTML]=\"category.name\">\n       \n        </ion-label>\n      </ion-item>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _services_httpConfig_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/httpConfig.interceptor */ "lMBn");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _login_route_guard_login_route_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login-route-guard/login-route-guard */ "dHwV");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "RU0F");
/* harmony import */ var _awesome_cordova_plugins_stripe_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/stripe/ngx */ "4NZp");
/* harmony import */ var _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/in-app-purchase-2/ngx */ "7DPu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");











//import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';





let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
                useClass: _services_httpConfig_interceptor__WEBPACK_IMPORTED_MODULE_8__["HttpConfigInterceptor"],
                multi: true
            },
            _login_route_guard_login_route_guard__WEBPACK_IMPORTED_MODULE_10__["LoginRouteLogged"],
            //FirebaseAnalytics,
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__["AndroidPermissions"],
            _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_12__["StreamingMedia"],
            _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_14__["InAppPurchase2"],
            _awesome_cordova_plugins_stripe_ngx__WEBPACK_IMPORTED_MODULE_13__["Stripe"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "dHwV":
/*!********************************************************!*\
  !*** ./src/app/login-route-guard/login-route-guard.ts ***!
  \********************************************************/
/*! exports provided: LoginRouteLogged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRouteLogged", function() { return LoginRouteLogged; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let LoginRouteLogged = class LoginRouteLogged {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    canActivate() {
        //Validamos que existe un usuario en el localstorage almacenado
        let notification = localStorage.getItem('notification');
        if (notification) {
            console.log('entro en que tiene notificacion');
            return true;
        }
        else {
            console.log('entro en que no tiene notificacion');
            this.navCtrl.navigateRoot('/permission');
            return false;
        }
    }
};
LoginRouteLogged.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
LoginRouteLogged = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoginRouteLogged);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lMBn":
/*!****************************************************!*\
  !*** ./src/app/services/httpConfig.interceptor.ts ***!
  \****************************************************/
/*! exports provided: HttpConfigInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptor", function() { return HttpConfigInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






const { Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];

let HttpConfigInterceptor = class HttpConfigInterceptor {
    constructor(toastController) {
        this.toastController = toastController;
    }
    intercept(request, next) {
        //   const token = "my-token-string-from-server";
        //   //Authentication by setting header with token value
        //   if (token) {
        //     request = request.clone({
        //       setHeaders: {
        //         'Authorization': token
        //       }
        //     });
        //   }
        if (!navigator.onLine) {
            this.presentToast("No hay conexion a internet");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Network Error");
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'Content-type': 'application/json'
                }
            });
        }
        if (!request.headers.has('Accept')) {
            request = request.clone({
                headers: request.headers.set('Accept', 'application/json')
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                // console.log('event--->>>', event);
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            //  console.error('este es el errorrr',error.status);
            if (navigator.onLine && error.status == 500) {
                this.presentToast("Error inesperado, contacte con soporte!");
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
    presentToast(msj) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msj,
                duration: 2000
            });
            toast.present();
        });
    }
};
HttpConfigInterceptor.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
HttpConfigInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()
], HttpConfigInterceptor);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/api.service */ "H+bZ");




const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | tabs-tabs-module */[__webpack_require__.e("common"), __webpack_require__.e("tabs-tabs-module")]).then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule),
        canActivate: [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]]
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() | signup-signup-module */ "signup-signup-module").then(__webpack_require__.bind(null, /*! ./signup/signup.module */ "T9iC")).then(m => m.SignupPageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: 'detailCurso/:id',
        loadChildren: () => Promise.all(/*! import() | detail-cursos-detail-cursos-module */[__webpack_require__.e("default~cart-cart-module~detail-cursos-detail-cursos-module~pagomodal-pagomodal-module"), __webpack_require__.e("common"), __webpack_require__.e("detail-cursos-detail-cursos-module")]).then(__webpack_require__.bind(null, /*! ./detail-cursos/detail-cursos.module */ "RSUX")).then(m => m.DetailCursosPageModule)
    },
    // {
    //   path: 'stores',
    //   loadChildren: () => import('./stores/stores.module').then( m => m.StoresPageModule)
    // },
    // {
    //   path: 'detail/:id',
    //   loadChildren: () => import('./store-detail/store-detail.module').then( m => m.StoreDetailPageModule)
    // },
    // {
    //   path: 'products',
    //   loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
    // },
    // {
    //   path: 'detailProduct/:id',
    //   loadChildren: () => import('./detail-product/detail-product.module').then( m => m.DetailProductPageModule)
    // },
    // {
    //   path: 'cart',
    //   loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
    // },
    // {
    //   path: 'wishlist',
    //   loadChildren: () => import('./wishlist/wishlist.module').then( m => m.WishlistPageModule)
    // },
    {
        path: 'permission',
        loadChildren: () => Promise.all(/*! import() | permission-permission-module */[__webpack_require__.e("common"), __webpack_require__.e("permission-permission-module")]).then(__webpack_require__.bind(null, /*! ./permission/permission.module */ "S7xH")).then(m => m.PermissionPageModule)
    },
    // {
    //   path: 'categories',
    //   loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
    // },
    // {
    //   path: 'search',
    //   loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
    // },
    // {
    //   path: 'productstore',
    //   loadChildren: () => import('./productstore/productstore.module').then( m => m.ProductstorePageModule)
    // },
    {
        path: 'forgotpassword',
        loadChildren: () => Promise.all(/*! import() | forgotpassword-forgotpassword-module */[__webpack_require__.e("common"), __webpack_require__.e("forgotpassword-forgotpassword-module")]).then(__webpack_require__.bind(null, /*! ./forgotpassword/forgotpassword.module */ "IoKB")).then(m => m.ForgotpasswordPageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() | registeruser-registeruser-module */[__webpack_require__.e("common"), __webpack_require__.e("registeruser-registeruser-module")]).then(__webpack_require__.bind(null, /*! ./registeruser/registeruser.module */ "a8AL")).then(m => m.RegisteruserPageModule)
    },
    {
        path: 'cursos-mas-vistos',
        loadChildren: () => Promise.all(/*! import() | cursos-mas-vistos-cursos-mas-vistos-module */[__webpack_require__.e("common"), __webpack_require__.e("cursos-mas-vistos-cursos-mas-vistos-module")]).then(__webpack_require__.bind(null, /*! ./cursos-mas-vistos/cursos-mas-vistos.module */ "17UB")).then(m => m.CursosMasVistosPageModule)
    },
    {
        path: 'videos-guardado',
        loadChildren: () => Promise.all(/*! import() | videos-guardado-videos-guardado-module */[__webpack_require__.e("common"), __webpack_require__.e("videos-guardado-videos-guardado-module")]).then(__webpack_require__.bind(null, /*! ./videos-guardado/videos-guardado.module */ "Himn")).then(m => m.VideosGuardadoPageModule)
    },
    {
        path: 'foro',
        loadChildren: () => Promise.all(/*! import() | foro-foro-module */[__webpack_require__.e("common"), __webpack_require__.e("foro-foro-module")]).then(__webpack_require__.bind(null, /*! ./foro/foro.module */ "/LvK")).then(m => m.ForoPageModule)
    },
    {
        path: 'home-categorias',
        loadChildren: () => Promise.all(/*! import() | home-categorias-home-categorias-module */[__webpack_require__.e("common"), __webpack_require__.e("home-categorias-home-categorias-module")]).then(__webpack_require__.bind(null, /*! ./home-categorias/home-categorias.module */ "nHwc")).then(m => m.HomeCategoriasPageModule)
    },
    {
        path: 'terminoscondiciones',
        loadChildren: () => Promise.all(/*! import() | terminoscondiciones-terminoscondiciones-module */[__webpack_require__.e("common"), __webpack_require__.e("terminoscondiciones-terminoscondiciones-module")]).then(__webpack_require__.bind(null, /*! ./terminoscondiciones/terminoscondiciones.module */ "T8fg")).then(m => m.TerminoscondicionesPageModule)
    },
    {
        path: 'cart',
        loadChildren: () => Promise.all(/*! import() | cart-cart-module */[__webpack_require__.e("default~cart-cart-module~detail-cursos-detail-cursos-module~pagomodal-pagomodal-module"), __webpack_require__.e("cart-cart-module")]).then(__webpack_require__.bind(null, /*! ./cart/cart.module */ "v35Q")).then(m => m.CartPageModule)
    },
    {
        path: 'pagomodal',
        loadChildren: () => Promise.all(/*! import() | pagomodal-pagomodal-module */[__webpack_require__.e("default~cart-cart-module~detail-cursos-detail-cursos-module~pagomodal-pagomodal-module"), __webpack_require__.e("pagomodal-pagomodal-module")]).then(__webpack_require__.bind(null, /*! ./pagomodal/pagomodal.module */ "ablm")).then(m => m.PagomodalPageModule)
    },
    {
        path: 'cursos-premiun',
        loadChildren: () => Promise.all(/*! import() | cursos-premiun-cursos-premiun-module */[__webpack_require__.e("common"), __webpack_require__.e("cursos-premiun-cursos-premiun-module")]).then(__webpack_require__.bind(null, /*! ./cursos-premiun/cursos-premiun.module */ "8CHM")).then(m => m.CursosPremiunPageModule)
    },
    {
        path: 'detail-premiun',
        loadChildren: () => Promise.all(/*! import() | detail-premiun-detail-premiun-module */[__webpack_require__.e("common"), __webpack_require__.e("detail-premiun-detail-premiun-module")]).then(__webpack_require__.bind(null, /*! ./detail-premiun/detail-premiun.module */ "VB3T")).then(m => m.DetailPremiunPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu {\n  --width: 100%;\n}\n\n.colorPrincipal {\n  color: #11d1d3;\n}\n\nion-text {\n  font-size: 20px;\n}\n\n.iconSize {\n  font-size: 20px;\n  vertical-align: bottom;\n}\n\n.colorCol {\n  background: white;\n  border-radius: 20px;\n  margin-bottom: 20px;\n  padding: 12px;\n}\n\nion-row {\n  margin-top: 20px;\n}\n\n.mbp {\n  margin-bottom: 50px;\n}\n\n.mb30 {\n  margin-bottom: 30px;\n}\n\n.labelVertical {\n  vertical-align: super;\n}\n\n.imgIcon {\n  width: 10%;\n}\n\na {\n  color: black;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtBQUNKOztBQU9BO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUpKOztBQU9BO0VBQ0ksZ0JBQUE7QUFKSjs7QUFPQTtFQUNJLG1CQUFBO0FBSko7O0FBT0E7RUFDSSxtQkFBQTtBQUpKOztBQU1BO0VBQ0kscUJBQUE7QUFISjs7QUFNQTtFQUVRLFVBQUE7QUFKUjs7QUFPQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBSkoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnV7XG4gICAgLS13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb2xvclByaW5jaXBhbHtcbiAgICBjb2xvcjojMTFkMWQzO1xufVxuXG5pb24tdGV4dHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pY29uU2l6ZXtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cblxuLy8gaW9uLWNvbnRlbnR7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiMzYjQ4NGU7XG4vLyAgICAgLS1jb2xvcjojZmZmZmZmO1xuLy8gfVxuXG4uY29sb3JDb2x7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG59XG5cbmlvbi1yb3d7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm1icHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ubWIzMHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmxhYmVsVmVydGljYWx7XG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xufVxuXG4uaW1nSWNvbntcbiAgICBcbiAgICAgICAgd2lkdGg6IDEwJTtcblxufVxuYXtcbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LXNpemU6MTZweDtcbn0iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ "2Zi2");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));
// Call the element loader after the platform has been bootstrapped
Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map