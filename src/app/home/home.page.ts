import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { LocalNotificationActionType } from '@capacitor/core';
import { NavParams,LoadingController,NavController, AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs/operators';
import { AnalyticsService } from '../services/analytics.service';
// import { FCM } from '@capacitor-community/fcm';

import { Platform } from '@ionic/angular';
import { DomController } from "@ionic/angular";
import { ToastController } from '@ionic/angular';

import { ModalController } from '@ionic/angular';
import { ModalPage } from './../modal/modal.page';
import { DrawerService } from '../services/drawer.service';
import { modalEnterAnimation, modalLeaveAnimation } from '../modal-animation';
import { HideHeaderDirective } from '../directives/hide-header.directive';

// const { PushNotifications } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
   enabled = this.analyticsService.analyticsEnabled;
params
cart
spinnerFeatured=false
spinnerDecoration=false
spinnerCosmetic=false
spinnerBook=false
productsDecoration
productsCosmetic
precioPorcentajeBook:any=''
precioPorcentajeCosmetic:any=''
precioPorcentajeDecoration:any=''
precioPorcentajeFeature:any=''
productsBook
cateSpinner=false
categories
cursoMasVisto
idUsuario
  productFeatured
  slideOpts = {
    slidesPerView: 2.4,
    spaceBetween: 10,
    freeMode: true
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
     private analyticsService: AnalyticsService,
     private modalCtrl: ModalController, 
     private drawerService: DrawerService
  ) { }

  ngOnInit() {


// PushNotifications.register();



  }
  ionViewWillEnter() {
    let arreglo=localStorage.getItem('user')

this.idUsuario=JSON.parse(arreglo).id
console.log('idusuario',this.idUsuario)

    this.getCategories()
    this.cursosMasVistos()
  }





  openMenu(){
    console.log('entro')
    this.menu.open('custom');
  }

  gotopoliticas() {
    this.navCtrl.navigateForward('politicas');
  }


 


  


   

  


      search(event){
        let buscador = event.target.value
        console.log('este es la busqueda',buscador)

        if(buscador==''){
          this.cart=[]
        }else{

           this.analyticsService.logEvent(buscador)

              this.service.search(buscador) 
              .then(res => {
              this.cart=res

              
                console.log('esta e s la buisqueda2',res);
                
              }, err => {
              
                console.log(err);
              });
          }

      }


      eventHandler(codeKey,event){
        let buscador = event.target.value
        console.log('este es  la tecla tocada',codeKey)

        if(codeKey==13){
          this.navCtrl.navigateRoot(['/tabs/search',buscador]); 
        }
      }

      cat(event){
        let buscador = event.target.value
        if(buscador==''){
          this.cart=[]
        }
    
      }


      getCategories(){
  this.cateSpinner=true
        this.service.categories()
            .then(res => {
              this.cateSpinner=false
              console.log('esta categoria cursois',res);
              this.categories = JSON.parse(JSON.stringify(res)).data;
           
            }, err => {
             this.cateSpinner=false
              console.log(err);
            });
        }

        cursosMasVistos(){
          this.cateSpinner=true
                  this.service.categories({orderBy:'View',sortBy:'asc'})
                      .then(res => {
                        // this.cateSpinner=false
                        
                         this.cursoMasVisto = JSON.parse(JSON.stringify(res)).data[0].cursos[0];
                         console.log('esta categoria cursos mas vistos',this.cursoMasVisto);
                      }, err => {
                      //  this.cateSpinner=false
                        console.log(err);
                      });
                  }


        cursosVistos(id){
          this.cateSpinner=true
                  this.service.cursosMasVistos(id)
                      .then(res => {
                        // this.cateSpinner=false
                        console.log('esta categoria cursos mas vistos',res);
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

        async openCategories() {
          const modal = await this.modalCtrl.create({
            component: ModalPage,
            cssClass: 'transparent-modal',
            enterAnimation: modalEnterAnimation,
            leaveAnimation: modalLeaveAnimation
          });
      
          await modal.present();
        }
      
        openInfo(series) {
          this.drawerService.openDrawer(series.title);
        }    


}
