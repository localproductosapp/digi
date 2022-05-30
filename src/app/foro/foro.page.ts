import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { LocalNotificationActionType } from '@capacitor/core';
import { NavParams,LoadingController,NavController, AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs/operators';
import { AnalyticsService } from '../services/analytics.service';
// import { FCM } from '@capacitor-community/fcm';

import { ToastController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { DomController } from "@ionic/angular";

// const { PushNotifications } = Plugins;

@Component({
  selector: 'app-foro',
  templateUrl: './foro.page.html',
  styleUrls: ['./foro.page.scss'],
})
export class ForoPage implements OnInit {

   // enabled = this.analyticsService.analyticsEnabled;
params
cart
preguntas
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
spinnerGeneral=false
categories
idUsuario
respuesta
preguntar
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
     public alertController: AlertController,
     private analyticsService: AnalyticsService
  ) { }

  ngOnInit() {


// PushNotifications.register();



  }
  ionViewWillEnter() {
    let arreglo=localStorage.getItem('user')

this.idUsuario=JSON.parse(arreglo).id
console.log('idusuario',this.idUsuario)

    this.preguntasRespuestas()
  }





  openMenu(){
    console.log('entro')
    this.menu.open('custom');
  }

  gotopoliticas() {
    this.navCtrl.navigateForward('politicas');
  }




        preguntasRespuestas(){
           this.spinnerGeneral=true
                  this.service.getQuestions()
                      .then(res => {
                         this.spinnerGeneral=false
                        this.preguntas=JSON.parse(JSON.stringify(res)).data
                        console.log('esta anwers',res);
                        // this.categories = JSON.parse(JSON.stringify(res)).data;
                     
                      }, err => {
                       this.spinnerGeneral=false
                        console.log(err);
                      });
                  }


        storeGuardado(id){
          // storeGuardados
          this.service.storeGuardados({idVideo:id,idUsuario:this.idUsuario})
          .then(res => {
            // this.cateSpinner=false
            console.log('guardo el video',res);
            // this.categories = JSON.parse(JSON.stringify(res)).data;
         
          }, err => {
          //  this.cateSpinner=false
            console.log(err);
          });
        }


        enviarRespuesta(idpregunta){

          // responder
          let respoesta= (<HTMLInputElement>document.getElementById("respuesta"+idpregunta)).value
       
          console.log('esta es la respuesta',respoesta)
      // console.log('respues',this.respuesta)
          this.service.responder({answer:respoesta,question_id:idpregunta,user_id:this.idUsuario})
          .then(res => {
            // this.cateSpinner=false
            console.log('guardo la respoesta',res);
            // this.categories = JSON.parse(JSON.stringify(res)).data;
            this.presentToast('Has enviado una respuesta')
            this.preguntasRespuestas()
            this.respuesta=''
         
          }, err => {
          //  this.cateSpinner=false
            console.log(err);
          });

        }

        enviarPregunta(){

          // responder
      console.log('respues',this.respuesta)
          this.service.preguntar({question:this.preguntar,user_id:this.idUsuario})
          .then(res => {
            // this.cateSpinner=false
            console.log('guardo la pregunta',res);
            // this.categories = JSON.parse(JSON.stringify(res)).data;
            this.presentToast('Has enviado una respuesta')
            this.preguntasRespuestas()
            this.respuesta=''
         
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
