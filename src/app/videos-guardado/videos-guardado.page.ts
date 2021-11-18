import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { LocalNotificationActionType } from '@capacitor/core';
import { NavParams,LoadingController,NavController, AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs/operators';
// import { AnalyticsService } from '../services/analytics.service';
// import { FCM } from '@capacitor-community/fcm';

import { Platform } from '@ionic/angular';
import { DomController } from "@ionic/angular";

@Component({
  selector: 'app-videos-guardado',
  templateUrl: './videos-guardado.page.html',
  styleUrls: ['./videos-guardado.page.scss'],
})
export class VideosGuardadoPage implements OnInit {

  params
  cart
  spinnerFeatured=false
  spinnerDecoration=false
  spinnerCosmetic=false
  spinnerBook=false
  idUsuario
  cateSpinner=false
  categories
    productFeatured
    slideOpts = {
      slidesPerView: 2,
      pagination: false,
      initialSlide: 0,
      speed: 400
    };
  
    slideOpts2 = {
      slidesPerView: 3,
      pagination: false,
      initialSlide: 0,
      autoplay:true,
      speed: 300
    };
  
    constructor(
      private navCtrl: NavController,
      private menu: MenuController,
      private service: ApiService,
      private route: ActivatedRoute,
      public platform: Platform,
      private router: Router,
      private domCtrl: DomController,
      //  private analyticsService: AnalyticsService
    ) { }
  
    ngOnInit() {
  
  
  // PushNotifications.register();
  
  
    }
    ionViewWillEnter() {

      let arreglo=localStorage.getItem('user')

      this.idUsuario=JSON.parse(arreglo).id
      console.log('idusuario',this.idUsuario)
  
      this.getCursosGuardados()

    }
  
  
  
  
  
    openMenu(){
      console.log('entro')
      this.menu.open('custom');
    }
  
    gotopoliticas() {
      this.navCtrl.navigateForward('politicas');
    }
  
  
  
  
        getCursosGuardados(){
  this.cateSpinner=true
          this.service.getGuardados({idUsuario:this.idUsuario})
              .then(res => {
                this.cateSpinner=false
                
                this.categories = res;
                console.log('estos son los videos guardados',this.categories );
             
              }, err => {
               this.cateSpinner=false
                console.log(err);
              });
          }
  
  
          cursosVistos(id){
            this.cateSpinner=true
                    this.service.cursosMasVistos(id)
                        .then(res => {
                          // this.cateSpinner=false
                          console.log('esta categoria cursois',res);
                          // this.categories = JSON.parse(JSON.stringify(res)).data;
                       
                        }, err => {
                        //  this.cateSpinner=false
                          console.log(err);
                        });
                    }
  

}
