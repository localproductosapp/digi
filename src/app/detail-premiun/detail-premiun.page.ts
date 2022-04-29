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

// import { CapacitorVideoPlayer } from 'capacitor-video-player';
import { ModalController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
//import * as WebVPPlugin from 'capacitor-video-player';

const { CapacitorVideoPlayer, Toast } = Plugins;

@Component({
  selector: 'app-detail-premiun',
  templateUrl: './detail-premiun.page.html',
  styleUrls: ['./detail-premiun.page.scss'],
})
export class DetailPremiunPage implements OnInit {

  curso
 subscripcion
 idUsuario
 spinnerFeatured=false


 private _videoPlayer: any;
 private _url: string;
 private _handlerPlay: any;
 private _handlerPause: any;
 private _handlerEnded: any;
 private _handlerReady: any;
 private _handlerExit: any;
 private _first: boolean = false;
 private _apiTimer1: any;
 private _apiTimer2: any;
 private _apiTimer3: any;
 private _testApi: boolean = true;
  

  constructor( private navCtrl: NavController,
    private menu: MenuController,
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private streamingMedia: StreamingMedia,

    public toastController: ToastController,
    public modalCtrl: ModalController,
    public platform: Platform) { 

    }

    
      ngOnInit() {
      this.getProduct()
      
      let arreglo=localStorage.getItem('user')

      this.idUsuario=JSON.parse(arreglo).id
      this._videoPlayer = CapacitorVideoPlayer;
        // define the video url
        // this._url = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        // add listeners to the plugin
        this._addListenersToPlayerPlugin();
    }

    
     ngAfterViewInit() {

      let arreglo=localStorage.getItem('user')

      this.subscripcion=JSON.parse(arreglo).subscription_id
      // console.log('idusuario',this.idUsuario)
      if(this.platform.is('ios')){
        console.log('es ios')
      }else{
        console.log('no es ios')
      }
   
    }

    reproducir(url,suscripcion,videoId){

      this.PlayPersona(videoId)

 

      if(this.platform.is('ios')){
        console.log('entre')
        let options: StreamingVideoOptions = {
         successCallback: () => { console.log('Video played') },
         errorCallback: (e) => { console.log('Error streaming',e) },
         orientation: 'portrait',
         shouldAutoClose: false,
         controls: true
         };
       this.streamingMedia.playVideo(url, options);

      // this.videoPlayer.play(url)
  
     

    
 
    

     }else if(this.platform.is('android')){
       
       // Playing a video.
       this._videoPlayer.initPlayer({mode:"fullscreen",url:url,playerId:"fullscreen",componentTag:"app-detail-premiun",subtitle:null,language:null,subtitleOption:null})
       
     }else{
       //this._videoPlayer = PluginsLibrary.CapacitorVideoPlayer
       //this._videoPlayer.initPlayer({mode:"fullscreen",url:url,playerId:"fullscreen",componentTag:"app-detail-premiun",subtitle:null,language:null,subtitleOption:null})
     }
     
 
     
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


     _addListenersToPlayerPlugin() {
      this._handlerPlay = this._videoPlayer.addListener('jeepCapVideoPlayerPlay', (data:any) => {
        console.log('Event jeepCapVideoPlayerPlay ', data);
     
      }, false);
      this._handlerPause = this._videoPlayer.addListener('jeepCapVideoPlayerPause', (data:any) => {
        console.log('Event jeepCapVideoPlayerPause ', data);
     
      }, false);
      this._handlerEnded = this._videoPlayer.addListener('jeepCapVideoPlayerEnded', async (data:any) => {
        console.log('Event jeepCapVideoPlayerEnded ', data);
     
      }, false);
      this._handlerExit = this._videoPlayer.addListener('jeepCapVideoPlayerExit', async (data:any) => {
        console.log('Event jeepCapVideoPlayerExit ', data)
     
        }, false);
      this._handlerReady = this._videoPlayer.addListener('jeepCapVideoPlayerReady', async (data:any) => {
        console.log('Event jeepCapVideoPlayerReady ', data)
        console.log("testVideoPlayerPlugin testAPI ",this._testApi);
        console.log("testVideoPlayerPlugin first ",this._first);
        if(this._testApi && this._first) {
          // test the API
          this._first = false;
          console.log("testVideoPlayerPlugin calling isPlaying ");
          const isPlaying = await this._videoPlayer.isPlaying({playerId:"fullscreen"});
          console.log('const isPlaying ', isPlaying)
          this._apiTimer1 = setTimeout(async () => {
            const pause = await this._videoPlayer.pause({playerId:"fullscreen"});
            console.log('const pause ', pause)
            const isPlaying = await this._videoPlayer.isPlaying({playerId:"fullscreen"});
            console.log('const isPlaying after pause ', isPlaying)
            let currentTime = await this._videoPlayer.getCurrentTime({playerId:"fullscreen"});
            console.log('const currentTime ', currentTime);
            let muted = await this._videoPlayer.getMuted({playerId:"fullscreen"});
            console.log('initial muted ', muted);
            const setMuted = await this._videoPlayer.setMuted({playerId:"fullscreen",muted:!muted.value});
            console.log('setMuted ', setMuted);
            muted = await this._videoPlayer.getMuted({playerId:"fullscreen"});
            console.log('const muted ', muted);
            const duration = await this._videoPlayer.getDuration({playerId:"fullscreen"});
            console.log("duration ",duration);
            // valid for movies havin a duration > 25
            const seektime = currentTime.value + 0.5 * duration.value < duration.value -25 ? currentTime.value + 0.5 * duration.value
                            : duration.value -25;
            const setCurrentTime = await this._videoPlayer.setCurrentTime({playerId:"fullscreen",seektime:(seektime)});
            console.log('const setCurrentTime ', setCurrentTime);
            const play = await this._videoPlayer.play({playerId:"fullscreen"});
            console.log("play ",play);
            this._apiTimer2 = setTimeout(async () => {
              const setMuted = await this._videoPlayer.setMuted({playerId:"fullscreen",muted:false});
              console.log('setMuted ', setMuted);
              const setVolume = await this._videoPlayer.setVolume({playerId:"fullscreen",volume:0.5});
              console.log("setVolume ",setVolume);
              const volume = await this._videoPlayer.getVolume({playerId:"fullscreen"});
              console.log("Volume ",volume);
              this._apiTimer3 = setTimeout(async () => {
                const pause = await this._videoPlayer.pause({playerId:"fullscreen"});
                console.log('const pause ', pause);
                const duration = await this._videoPlayer.getDuration({playerId:"fullscreen"});
                console.log("duration ",duration);
                const volume = await this._videoPlayer.setVolume({playerId:"fullscreen",volume:1.0});
                console.log("Volume ",volume);
                const setCurrentTime = await this._videoPlayer.setCurrentTime({playerId:"fullscreen",seektime:(duration.value - 3)});
                console.log('const setCurrentTime ', setCurrentTime);
                const play = await this._videoPlayer.play({playerId:"fullscreen"});
                console.log('const play ', play);
              }, 10000);
            }, 10000);

          }, 5000);
        }
      }, false);

    }
  

    irCarro(){
      this.navCtrl.navigateForward(['/tabs/cart'])
    }

    Addcart(idCurso,precio){



      this.service.addCarro({idUsuarioFk:this.idUsuario,idCursoFk:idCurso,precioCurso:precio})
      .then(res => {
        // this.cateSpinner=false
        console.log('respuesta del agregar carrito',res);
         this.presentToast('Agregado correctamente al carrito')
        // this.categories = JSON.parse(JSON.stringify(res)).data;
     
      }, err => {
      //  this.cateSpinner=false
        console.log(err);
      });

    }
    

}
