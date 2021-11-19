import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse} from '@angular/common/http';
import { merge, observable, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CanActivate } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { environment } from "../../environments/environment";
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { inject } from '@angular/core/testing';
import { HTTP } from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root'
})
export class ApiService implements CanActivate{

  private dataObserved = new BehaviorSubject<any>('');
  currentEvent = this.dataObserved.asObservable();

  constructor(
    private http: HTTP, 
    private http2: HttpClient, 
    private navCtrl: NavController, 
    private toastController : ToastController,
  ) { }

  publish(param):void {
    this.dataObserved.next(param);
  }
  
canActivate() {
  //Validamos que existe un usuario en el localstorage almacenado
  let token = localStorage.getItem('token');
  let usuario = localStorage.getItem('user'); 
  if (token && usuario) {
      return true;
  } else {
    this.navCtrl.navigateRoot('/login');
    return false;  
  }
}
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(error as T);
  };
}

/** Log a HeroService message with the MessageService */
private log(message: string) {
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


login(data,params?) {
  let parseParams = new HttpParams();
  const header1= {'Content-Type':'application/json'};
  if (params) {
    Object.keys(params).forEach(p => {
      parseParams = parseParams.append(p, params[p]);
    });
  }

  return this.http.post(
    environment.ApiUrl + "api/auth/login",data,{})
    .then(data =>{
      return JSON.parse(data.data);
    })
    .catch(error => {
      console.log('este  es el error',error)
      this.handleError('product add', [])
    });



  // return this.http2.post(
  //   environment.ApiUrl + "api/auth/login",data)
  //   .pipe(
  //     tap(_ => this.log('response received')),
  //     catchError(this.handleError('signup', []))
  //   );
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

categories(params?){
  let header
  let parseParams = new HttpParams();
  if (params) {
    Object.keys(params).forEach(p => {
      parseParams = parseParams.append(p, params[p]);
    });
  }
  return this.http.get(
    environment.ApiUrl+"api/categories", {},params)
    .then(data =>{
      return JSON.parse(data.data);
    })
    .catch(error => {
      this.handleError('stores', [])
    });
   

    //   return this.http2.get(
    // environment.ApiUrl+"api/categories",params)
    // .pipe(
    //   tap(_ => this.log('response received')),
    //   catchError(this.handleError('busqueda', []))
    // );
}

categoriesIndex(param?){

  // if (params) {
  //   Object.keys(params).forEach(p => {
  //     parseParams = parseParams.append(p, params[p]);
  //   });
  // }
  return this.http.post(
    environment.ApiUrl+"api/obtenerTodas", param,{})
    .then(data =>{
      return JSON.parse(data.data);
    })
    .catch(error => {
      this.handleError('stores', [])
    });
   

    //   return this.http2.post(
    // environment.ApiUrl+"api/obtenerTodas",param)
    // .pipe(
    //   tap(_ => this.log('response received')),
    //   catchError(this.handleError('busqueda', []))
    // );
}

obtenerCurso(idCurso){
  let header
  let parseParams = new HttpParams();

  return this.http.get(
    environment.ApiUrl+`api/courses/${idCurso}`, {},{})
    .then(data =>{
      return JSON.parse(data.data);
    })
    .catch(error => {
      this.handleError('stores', [])
    });
   

    //   return this.http2.get(
    // environment.ApiUrl+`api/courses/${idCurso}`,{})
    // .pipe(
    //   tap(_ => this.log('response received')),
    //   catchError(this.handleError('busqueda', []))
    // );
}




 addCart(data,params?){
  let parseParams = new HttpParams();
  let headers = new HttpHeaders({
    'Content-Type': 'application/json'
 });
 let options = {
    headers: headers
 }
  // let options = new HttpHeaders({ headers: headers, withCredentials: true });
 
  if (params) {
    Object.keys(params).forEach(p => {
      parseParams = parseParams.append(p, params[p]);
    });
  }
  
  return this.http.post(
    environment.ApiUrl+"api/categories/obtenerTodas",data,{})
    .then(data =>{
      return JSON.parse(data.data);
    })
    .catch(error => {
      console.log('este  es el error',error)
      this.handleError('product add', [])
    });




    //   return this.http2.post(
    //     environment.ApiUrl+"api/categories/obtenerTodas",data,{})
    // .pipe(
    //   tap(_ => this.log('response received')),
    //   catchError(this.handleError('signup', []))
    // );
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

search(params){

  return this.http.get(
    `https://localproductos.es/wp-json/swp_api/search?s=${params}`,{},{})
    .then(data =>{
      // return data
       return JSON.parse(data.data);
    })
    .catch(error => {
      this.handleError('login', [])
    });
 
  // return this.http2.get(
  //   `https://localproductos.es/wp-json/swp_api/search?s=${params}`)
  //   .pipe(
  //     tap(_ => this.log('response received')),
  //     catchError(this.handleError('busqueda', []))
  //   );
}







registerUser(dato) {

  this.http.setDataSerializer("json")

  console.log(dato);
 
  return this.http.post(
    environment.ApiUrl + "api/auth/register",dato,{})
    .then(data =>{
        // return data
       return JSON.parse(data.data);
    })
    .catch(error => {
      console.log(error);
      this.handleError('login', [])
    });

  // return this.http2.post(
  //   environment.ApiUrl + "api/auth/register",dato)
  //   .pipe(
  //     tap(_ => this.log('response received')),
  //     catchError(this.handleError('signup', []))
  //   );
}


cursosMasVistos(idCurso){
  let header
  let parseParams = new HttpParams();

  return this.http.get(
    environment.ApiUrl+`api/courses/view/${idCurso}`, {},{})
    .then(data =>{
      return JSON.parse(data.data);
    })
    .catch(error => {
      this.handleError('stores', [])
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
 
  return this.http.post(
    environment.ApiUrl + "api/storeGuardados",dato,{})
    .then(data =>{
        // return data
       return JSON.parse(data.data);
    })
    .catch(error => {
      console.log(error);
      this.handleError('login', [])
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
 
  return this.http.post(
    environment.ApiUrl + "api/getGuardados",dato,{})
    .then(data =>{
        // return data
       return JSON.parse(data.data);
    })
    .catch(error => {
      console.log(error);
      this.handleError('login', [])
    });

  // return this.http2.post(
  //   environment.ApiUrl + "api/getGuardados",dato)
  //   .pipe(
  //     tap(_ => this.log('response received')),
  //     catchError(this.handleError('signup', []))
  //   );
}


getQuestions(params?){
  let header
  let parseParams = new HttpParams();
  if (params) {
    Object.keys(params).forEach(p => {
      parseParams = parseParams.append(p, params[p]);
    });
  }
  return this.http.get(
    environment.ApiUrl+"api/questions", params,{})
    .then(data =>{
      return JSON.parse(data.data);
    })
    .catch(error => {
      this.handleError('stores', [])
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
 
  return this.http.post(
    environment.ApiUrl + "api/answers",dato,{})
    .then(data =>{
        // return data
       return JSON.parse(data.data);
    })
    .catch(error => {
      console.log(error);
      this.handleError('login', [])
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
 
  return this.http.post(
    environment.ApiUrl + "api/questions",dato,{})
    .then(data =>{
        // return data
       return JSON.parse(data.data);
    })
    .catch(error => {
      console.log(error);
      this.handleError('login', [])
    });

  // return this.http2.post(
  //   environment.ApiUrl + "api/questions",dato)
  //   .pipe(
  //     tap(_ => this.log('response received')),
  //     catchError(this.handleError('signup', []))
  //   );
}


}
