import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

//import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
 
// Init for the web
 import "@capacitor-community/firebase-analytics";
 import { FirebaseAnalytics } from "@capacitor-community/firebase-analytics";
import { Plugins } from "@capacitor/core";
const { Device } = Plugins;
 
@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  analyticsEnabled = true;
 
  constructor( private router: Router) {

    //  this.initFb();
    // this.datos()
    this.router.events.pipe(
      filter((e: RouterEvent) => e instanceof NavigationEnd),
    ).subscribe((e: RouterEvent) => {
      console.log('route changed: ', e.url);
      this.setScreenName(e.url)
    });

  }

  
 
  // async initFb() {
  //   if ((await Device.getInfo()).platform == 'web') {
  //     FirebaseAnalytics.initializeFirebase(environment.firebaseConfig);
  //   }
  // }
 
  // setUser() {
  //   // Use Firebase Auth uid
  //   FirebaseAnalytics.setUserId({
  //     userId: "test_123",
  //   });
  // }
 
  // setProperty(param) {
  //   FirebaseAnalytics.setUserProperty({
  //     name: "buscador",
  //     value: param,
  //   });
  // }

  
 
  logEvent(valor) {

//     const eventParams = {};
// eventParams['my-prop'] = 29;
// this.firebaseAnalytics.logEvent("select_content", {content_type: "page", item_id: "home"})
//   .then(() => console.log('Event successfully tracked'))
//   .catch(err => console.log('Error tracking event:', err));

// this.firebaseAnalytics.logEvent("buscador", {buscador: "value1"});
//     this.firebaseAnalytics.setUserProperty("name1", "value1");

    // this.FirebaseAnalytics.logEvent('buscador', {page: valor})
    // .then((res: any) => console.log('este es el buscador',res))
    // .catch((error: any) => console.error(error));
    
    // this.FirebaseAnalytics.logEvent('buscador',{
    //   name: "buscador",
    //   params: {
    //     method: 'parametro'
    //   }
    // })  .then(() => console.log('si se traqueo'))
    // .catch(err => console.log('Error event:', err));
  }
 
  setScreenName(screenName) {
    
    FirebaseAnalytics.setScreenName({
      screenName,
      // nameOverride
    });
    // FirebaseAnalytics.setCurrentScreen(screenName).then((res: any) => console.log('esta es  la apgina guardada',res))
    // .catch((error: any) => console.error(error));
  }

  // datos(){
  //   this.firebaseAnalytics.setEnabled(true);
  // }
 
  toggleAnalytics() {
    this.analyticsEnabled = !this.analyticsEnabled;
    FirebaseAnalytics.setCollectionEnabled({
      enabled: this.analyticsEnabled,
    });    
  }
  
}