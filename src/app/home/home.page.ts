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

import { Plugins } from '@capacitor/core';
const { FacebookAnalytics } = Plugins;

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
spinnerGeneral=false
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
let arreglo=localStorage.getItem('user')

this.idUsuario=JSON.parse(arreglo).id
console.log('idusuario',this.idUsuario)

    this.getCategories()
    this.cursosMasVistos()



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
  this.spinnerGeneral=true
        this.service.categories()
            .subscribe(res => {
              this.spinnerGeneral=false
              console.log('esta categoria cursois',res);
              this.categories = JSON.parse(JSON.stringify(res)).data;
              if(JSON.parse(JSON.stringify(res)).data.cursos2!=''){
                this.categories.forEach((elementPrincipal,index) => {
                  elementPrincipal.cursos2.forEach((elementCursos2,index2) => {
                    elementPrincipal.cursos.push(elementCursos2)
                  });
                });
              }
        console.log('arreglo definitivo',this.categories)
           
            }, err => {
             this.spinnerGeneral=false
              console.log(err);
            });
        }

        cursosMasVistos(){
          // this.cateSpinner=true
                  this.service.categories({orderBy:'View',sortBy:'asc'})
                      .subscribe(res => {
                        // this.cateSpinner=false

                        console.log('el curso mas visto portada',res)
                        
                         this.cursoMasVisto = JSON.parse(JSON.stringify(res)).data[0].cursos[0];
                         console.log('esta categoria cursos mas vistos',this.cursoMasVisto);
                      }, err => {
                      //  this.cateSpinner=false
                        console.log(err);
                      });
                  }


        cursosVistos(id){
          // this.cateSpinner=true
          this.CursoPersona(id)
                  this.service.cursosMasVistos(id)
                      .subscribe(res => {
                        // this.cateSpinner=false
                        console.log('esta categoria cursos mas vistos',res);
                        // this.categories = JSON.parse(JSON.stringify(res)).data;
                     
                      }, err => {
                      //  this.cateSpinner=false
                        console.log(err);
                      });
                  }

                  CursoPersona(id){
                    // storeGuardados
                    this.service.CursoPorPersona({idCursoFk:id,idUsuarioFk:this.idUsuario})
                    .subscribe(res => {
                      // this.cateSpinner=false
                      console.log('hizo play',res);
                      // this.presentToast('Ha guardado el curso!')
                      // this.categories = JSON.parse(JSON.stringify(res)).data;
                   
                    }, err => {
                    //  this.cateSpinner=false
                      console.log(err);
                    });
                  }
              


        async storeGuardado(id){
          await FacebookAnalytics.logEvent({ event: 'Guardo el curso'+id });
          // storeGuardados
          this.service.storeGuardados({idVideo:id,idUsuario:this.idUsuario})
          .subscribe(res => {
            // this.cateSpinner=false
            console.log('guardo el video',res);
            if(JSON.parse(JSON.stringify(res)).message){
              this.presentToast('Ya tiene este curso guardado') 
            }else{
              this.presentToast('Ha guardado el curso!')
            }
           
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
