import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { LocalNotificationActionType } from '@capacitor/core';
import { NavParams,LoadingController,NavController, AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import {  Capacitor  } from '@capacitor/core';

import * as WebVPPlugin from 'capacitor-video-player';
import { CapacitorVideoPlayer } from 'capacitor-video-player';
import { ModalController } from '@ionic/angular';





@Component({
  selector: 'app-detail-cursos',
  templateUrl: './detail-cursos.page.html',
  styleUrls: ['./detail-cursos.page.scss'],
})
export class DetailCursosPage implements OnInit {
  curso
 subscripcion
 idUsuario
 spinnerFeatured=false
  

  constructor( private navCtrl: NavController,
    private menu: MenuController,
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private streamingMedia: StreamingMedia,


    public toastController: ToastController,public modalCtrl: ModalController) { 

    }

    
      ngOnInit() {
      this.getProduct()
      
      let arreglo=localStorage.getItem('user')

      this.idUsuario=JSON.parse(arreglo).id
     
        // define the video url
        // this._url = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        // add listeners to the plugin
       
    }

    
     ngAfterViewInit() {

      let arreglo=localStorage.getItem('user')

      this.subscripcion=JSON.parse(arreglo).subscription_id
      // console.log('idusuario',this.idUsuario)
     
   
    }

     reproducir(url,suscripcion,videoId){

      this.PlayPersona(videoId)

      if(suscripcion==1 && this.subscripcion==2){
        this.presentToast('Este video es solo para usuarios Premiun')
        return;
      }
      
   console.log('entre')
   let options: StreamingVideoOptions = {
    successCallback: () => { console.log('Video played') },
    errorCallback: (e) => { console.log('Error streaming',e) },
    orientation: 'landscape',
    shouldAutoClose: false,
    controls: true
    };
  this.streamingMedia.playVideo(url, options);
      
    }


  
       

  getProduct(){
this.spinnerFeatured=true
    this.service.obtenerCurso(this.route.snapshot.paramMap.get('id'))
        .then(res => {

          this.spinnerFeatured=false
          
           this.curso = res;
      
          

        }, err => {

          this.spinnerFeatured=false
         
          console.log(err);
        });
    }

  
    async presentToast(message) {
      const toast = await this.toastController.create({
        message: message,
        duration: 3000,
        color:'danger'
      });
      toast.present();
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

    PlayPersona(id){
      // storeGuardados
      this.service.PlayPorPersona({idVideoFk:id,idUsuarioFk:this.idUsuario})
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

    

    

}
