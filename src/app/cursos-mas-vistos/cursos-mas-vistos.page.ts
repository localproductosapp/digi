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
  selector: 'app-cursos-mas-vistos',
  templateUrl: './cursos-mas-vistos.page.html',
  styleUrls: ['./cursos-mas-vistos.page.scss'],
})
export class CursosMasVistosPage implements OnInit {

  params
  cart
  spinnerFeatured=false
  spinnerDecoration=false
  spinnerCosmetic=false
  spinnerBook=false
  idUsuario
  arregloCursos=[]
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
  
  let arreglo=localStorage.getItem('user')

  this.idUsuario=JSON.parse(arreglo).id
  console.log('idusuario',this.idUsuario)
  

  this.getCursos()
  
  
    }
    ionViewWillEnter() {

    }
  
  
  
  
  
    openMenu(){
      console.log('entro')
      this.menu.open('custom');
    }
  
    gotopoliticas() {
      this.navCtrl.navigateForward('politicas');
    }
  
  
  
  
        getCursos(){
  this.spinnerFeatured=true
          this.service.categories({orderBy:'View',sortBy:'asc'})
              .then(res => {
                this.spinnerFeatured=false
                
                this.categories = JSON.parse(JSON.stringify(res)).data;

                this.categories.forEach(categorias => {
                  // console.log('este es el primer elemento',categorias)
                     categorias.cursos.forEach(element => {

                     this.arregloCursos.push(element)

                   
               
                   
                     
                   });
             });

               console.log('cursillos',this.arregloCursos)
                // console.log('esta categoria cursois',this.categories );
             
              }, err => {
               this.spinnerFeatured=false
                console.log(err);
              });
          }
  
  
          cursosVistos(id){
            this.cateSpinner=true
            this.CursoPersona(id)
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

                    CursoPersona(id){
                      // storeGuardados
                      this.service.CursoPorPersona({idCursoFk:id,idUsuarioFk:this.idUsuario})
                      .then(res => {
                        // this.cateSpinner=false
                        console.log('hizo play',res);
                        // this.presentToast('Ha guardado el curso!')
                        // this.categories = JSON.parse(JSON.stringify(res)).data;
                     
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
