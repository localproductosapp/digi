import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { LocalNotificationActionType } from '@capacitor/core';
import { NavParams,LoadingController,NavController, AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs/operators';
import { AnalyticsService } from '../services/analytics.service';
//import { FCM } from '@capacitor-community/fcm';
// import { PushNotifications } from '@capacitor/push-notifications';

/*import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from '@capacitor/core'*/

//const { PushNotifications } = Plugins;

import { Platform } from '@ionic/angular';

//  const { PushNotifications } = Plugins;

@Component({
  selector: 'app-permission',
  templateUrl: './permission.page.html',
  styleUrls: ['./permission.page.scss'],
})
export class PermissionPage implements OnInit {

  constructor(   private navCtrl: NavController,
    private menu: MenuController,
    private service: ApiService,
    private route: ActivatedRoute,
    public platform: Platform,
    
    // public PushNotifications:Plugins,
    private router: Router) { }

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

  openMenu(){
    console.log('entro')
    this.menu.open('custom');
  }

//  async preguntar(){
//   PushNotifications.requestPermissions();
//   // await PushNotifications.requestPermission();
  
//  }

   Aceptar(){
    localStorage.setItem('notification', 'true')
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

   rechazar(){
    localStorage.setItem('notification', 'false')
    this.navCtrl.navigateRoot('/tabs/home');
   }

}
