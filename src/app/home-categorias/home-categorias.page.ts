import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { LocalNotificationActionType } from '@capacitor/core';
import { NavParams,LoadingController,NavController, AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
// import { AnalyticsService } from '../services/analytics.service';
// import { FCM } from '@capacitor-community/fcm';

import { Platform } from '@ionic/angular';
import { DomController } from "@ionic/angular";

@Component({
  selector: 'app-home-categorias',
  templateUrl: './home-categorias.page.html',
  styleUrls: ['./home-categorias.page.scss'],
})
export class HomeCategoriasPage implements OnInit {

  params
  cart
  tagsss=0;
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
      public toastController: ToastController,
      //  private analyticsService: AnalyticsService
    ) { }
  
    ngOnInit() {
  
  
  // PushNotifications.register();
  
  
    }
    ionViewWillEnter() {

      let arreglo=localStorage.getItem('user')

      this.idUsuario=JSON.parse(arreglo).id
      console.log('idusuario',this.idUsuario)
      
      console.log('esta es la categoria',this.route.snapshot.paramMap.get('id'))
      this.getCursos()
    }
  
  
  
  
  
    openMenu(){
      console.log('entro')
      this.menu.open('custom');
    }
  
    gotopoliticas() {
      this.navCtrl.navigateForward('politicas');
    }
  
  
  
  
        getCursos(){
  this.cateSpinner=true
          if(this.route.snapshot.paramMap.get('id')){
            this.tagsss=0
            console.log('aqui entramos en id')
            this.service.categoriesIndex({category_id:this.route.snapshot.paramMap.get('id')})
            .then(res => {
              this.cateSpinner=false
              
              this.categories = JSON.parse(JSON.stringify(res)).data;
              console.log('esta categoria cursois',this.categories );
           
            }, err => {
             this.cateSpinner=false
              console.log(err);
            });
          }
          if(this.route.snapshot.paramMap.get('tag')){
            this.tagsss=1
            console.log('aqui entramos en tag')
            this.service.categoriesIndex({tag:this.route.snapshot.paramMap.get('tag')})
            .then(res => {
              this.cateSpinner=false
              
              this.categories = JSON.parse(JSON.stringify(res)).data;
              console.log('esta categoria cursois',this.categories );
           
            }, err => {
             this.cateSpinner=false
              console.log(err);
            });
         
          }

        }
  
  
          cursosVistos(id){
            this.cateSpinner=true
                    this.service.cursosMasVistos(id)
                        .then(res => {
                          // this.cateSpinner=false
                          console.log('esta categoria cursois',res);
                           this.categories = JSON.parse(JSON.stringify(res)).data;
                       
                        }, err => {
                        //  this.cateSpinner=false
                          console.log(err);
                        });
                    }

                    storeGuardado(id){
                      // storeGuardados
                      this.service.storeGuardados({idVideo:id,idUsuario:this.idUsuario})
                      .then(res => {
                        // this.cateSpinner=false
                        console.log('guardo el video',res);
                        this.presentToast('Ha guardado el curso!')
                        // this.categories = JSON.parse(JSON.stringify(res)).data;
                     
                      }, err => {
                      //  this.cateSpinner=false
                        console.log(err);
                      });
                    }

                    async presentToast(message) {
                      const toast = await this.toastController.create({
                        message: message,
                        duration: 3000,
                        color:'success'
                      });
                      toast.present();
                    }
  


}
