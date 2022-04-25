import { Component, OnInit,AfterViewInit,ChangeDetectorRef } from '@angular/core';
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
import * as WebVPPlugin from 'capacitor-video-player';
import * as PluginsLibrary from 'capacitor-video-player';
import { IonRouterOutlet } from '@ionic/angular';
import { PagomodalPage } from '../pagomodal/pagomodal.page';
import { modalEnterAnimation, modalLeaveAnimation } from '../modal-animation';
import { ModalPage } from './../modal/modal.page';


const { FacebookAnalytics } = Plugins;

const { CapacitorVideoPlayer, Toast } = Plugins;
import { AdMob, AdOptions, AdLoadInfo, InterstitialAdPluginEvents } from '@capacitor-community/admob';
// import { InAppPurchase2, IAPProduct } from '@ionic-native/in-app-purchase-2/ngx';


const PRODUCT_PRO_KEY = 'curso';

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
 tienePremiun
 products
 pre
totalPorcentaje

 cart
 valorTotal: any=0;

 Duracion
 currentTime
 idDelvideo

 asociados
 videosCurso
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
    public modalController: ModalController ,
    public toastController: ToastController,
    public modalCtrl: ModalController,
    // private store: InAppPurchase2,
    private ref: ChangeDetectorRef,
    private alertController: AlertController,
    public platform: Platform) { 

      AdMob.addListener(InterstitialAdPluginEvents.Loaded, (info: AdLoadInfo) => {
        // Subscribe prepared interstitial
        console.log('cargo el video',info)
      });



      this.platform.ready().then(() => {
        // Only for debugging!
        // this.store.verbosity = this.store.DEBUG;
   
        // this.registerProducts();
        // this.setupListeners();
        
        // // Get the real product information
        // this.store.ready(() => {
        //   this.products = this.curso;
        //   this.ref.detectChanges();
        // });
      });

    

    }

    registerProducts() {

      // this.store.register({
      //   id: PRODUCT_PRO_KEY,
      //   type: this.store.NON_CONSUMABLE,
      // });
   
      // this.store.refresh();
    }

    setupListeners() {
      // General query to all products
      // this.store.when('product')
      //   .approved((p: IAPProduct) => {
      //     // Handle the product deliverable
      //     if (p.id === PRODUCT_PRO_KEY) {
      //       console.log('compro');
      //     } 
      //     this.ref.detectChanges();
   
      //     return p.verify();
      //   })
      //   .verified((p: IAPProduct) => p.finish());
   
   
      // // Specific query for one ID
      // this.store.when(PRODUCT_PRO_KEY).owned((p: IAPProduct) => {
      //   console.log('compro el curso',p)
      // });
    }

    purchase() {
      // this.store.order(product).then(p => {
      //   // Purchase in progress!
      //   console.log('esto retorna',p)
      // }, e => {
      //   this.presentAlert('Failed', `Failed to purchase: ${e}`);
      // });
    }
   
    // To comply with AppStore rules
    restore() {
      // this.store.refresh();
    }

    async presentAlert(header, message) {
      const alert = await this.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
   
      await alert.present();
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


 

    
    ionViewWillEnter() {

      let arreglo=localStorage.getItem('user')

      this.subscripcion=JSON.parse(arreglo).subscription_id
      // console.log('idusuario',this.idUsuario)
      this.sabercurso()
      if(this.platform.is('ios')){
        console.log('es ios')
      }else{
        console.log('no es ios')
      }
   
    }

    async reproducir(url,suscripcion,videoId){

      console.log('videoID',videoId)

      this.idDelvideo=videoId

      

  
    if(suscripcion==1){
      if( this.tienePremiun==0){
        if(suscripcion==1 && this.subscripcion==2){
          console.log('estee s el tiene premiun',this.tienePremiun)
          console.log('estee s el subscricion 1 ',suscripcion)
          console.log('estee s el subscricion 2 ',this.subscripcion)
           this.presentToast('Este video es solo para usuarios Premium')
          return;
        }
       
      }
    }
 

      if(this.platform.is('ios')){
        console.log('entre')
        let options: StreamingVideoOptions = {
         successCallback: () => { console.log('Video played') },
         errorCallback: (e) => { console.log('Error streaming',e) },
         orientation: 'landscape',
         shouldAutoClose: false,
         controls: true
         };
       this.streamingMedia.playVideo(url, options);

      // this.videoPlayer.play(url)
  
     

      }else if(this.platform.is('android')){
        
        // Playing a video.
        this._videoPlayer.initPlayer({mode:"fullscreen",url:url,playerId:"fullscreen",componentTag:"app-detail-cursos",subtitle:null,language:null,subtitleOption:null})
        
      }else{
        this._videoPlayer = PluginsLibrary.CapacitorVideoPlayer
        this._videoPlayer.initPlayer({mode:"fullscreen",url:url,playerId:"fullscreen",componentTag:"app-detail-cursos",subtitle:null,language:null,subtitleOption:null})
      }
      
  
      
    }


  
       

  async getProduct(){
this.spinnerFeatured=true
// await FacebookAnalytics.logEvent({ event: 'Detalle del curso '+this.route.snapshot.paramMap.get('id')});
    this.service.obtenerCurso(this.route.snapshot.paramMap.get('id'))
        .subscribe(res => {

          this.spinnerFeatured=false
          this.asociados=JSON.parse(JSON.stringify(res)).asociados
           this.curso = res;

           console.log('aqui tengo el detalle del curso',JSON.parse(JSON.stringify(res)).premiun)
      
          this.pre=JSON.parse(JSON.stringify(res)).premiun

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

    PlayPersona(id,porcentaje){
      // storeGuardados
      this.service.PlayPorPersona({idVideoFk:id,idUsuarioFk:this.idUsuario,porcentajeVisto:porcentaje})
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


     _addListenersToPlayerPlugin() {
      this._handlerPlay = this._videoPlayer.addListener('jeepCapVideoPlayerPlay', (data:any) => {
        console.log('Event jeepCapVideoPlayerPlay ', data);
     
      }, false);
      this._handlerPause = this._videoPlayer.addListener('jeepCapVideoPlayerPause', (data:any) => {
        console.log('Event jeepCapVideoPlayerPause ', data);
      
        this.currentTime=parseFloat(data.currentTime)/60;

        console.log('aqui quedo',this.currentTime)
     
      }, false);
      this._handlerEnded = this._videoPlayer.addListener('jeepCapVideoPlayerEnded', async (data:any) => {
        console.log('Event jeepCapVideoPlayerEnded ', data);
     
      }, false);
      this._handlerExit = this._videoPlayer.addListener('jeepCapVideoPlayerExit', async (data:any) => {
        console.log('Event jeepCapVideoPlayerExit ', data)

        

        let currentTime232 = await this._videoPlayer.getCurrentTime({playerId:"fullscreen"});
        console.log('const currentTime ', parseFloat(currentTime232.value)/60);

        console.log('aqui quedo232',parseFloat(currentTime232.value)/60)


        console.log('esta es  la duracion ',this.Duracion)

        this.totalPorcentaje=(parseFloat(currentTime232.value)*100/parseFloat(this.Duracion))/100

        console.log('este es el porcentaje visto', this.totalPorcentaje.toFixed(1))

        this.PlayPersona(this.idDelvideo,this.totalPorcentaje.toFixed(1))

        if(this.subscripcion==2){
          const options: AdOptions = {
            adId: 'ca-app-pub-4358645498669349/8738193237',
            // isTesting: true
            // npa: true
          };
  
          await AdMob.prepareInterstitial(options);
          await AdMob.showInterstitial();

        }

 
     
        }, false);
      this._handlerReady = this._videoPlayer.addListener('jeepCapVideoPlayerReady', async (data:any) => {
        console.log('Event jeepCapVideoPlayerReady ', data)
        console.log("testVideoPlayerPlugin testAPI ",this._testApi);
        console.log("testVideoPlayerPlugin first ",this._first);
        const duration = await this._videoPlayer.getDuration({playerId:"fullscreen"});
        

        this.Duracion=parseFloat(duration.value)/60;

        console.log("duration ",this.Duracion);
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
      .subscribe(res => {
        // this.cateSpinner=false
        // console.log('esto retorna el carro',res)
        if(res){
          this.gteCart()
         
        }
        
        // if(JSON.parse(JSON.stringify(res)).message){
        //   this.presentToast(JSON.parse(JSON.stringify(res)).message)
        //   return;
        // }else{
        //   this.presentToast('Agregado correctamente al carrito')
        // }
        // console.log('respuesta del agregar carrito',JSON.parse(JSON.stringify(res)).message);
         
        // this.categories = JSON.parse(JSON.stringify(res)).data;
     
      }, err => {
      //  this.cateSpinner=false
        console.log(err);
      });

    }

    sabercurso(){
      // 

      
      this.service.saberPremiun({idUsuarioFk:this.idUsuario,idCursoFk:this.route.snapshot.paramMap.get('id')})
      .subscribe(res => {
        // this.cateSpinner=false
        console.log('respuesta dde si existe  o no ',res);

        this.tienePremiun=res
        
        // this.categories = JSON.parse(JSON.stringify(res)).data;
     
      }, err => {
      //  this.cateSpinner=false
        console.log(err);
      });
    }

    async presentModal() {
      const modal = await this.modalController.create({
        component: PagomodalPage,
        componentProps: {
          'monto': this.valorTotal,
          'cursos': this.cart
        },
  
      });
      modal.onDidDismiss()
        .then((data) => {
          // console.log('se cerro la puta modal',data)
          // this.gteCart()
          this.navCtrl.navigateForward(['/tabs/home'])
      });
      return await modal.present();
  }

  gteCart(){

  
    this.service.getCartUser({idUsuarioFk:this.idUsuario})
    .subscribe(res => {
      // this.cateSpinner=false
     
      //  this.presentToast('Agregado correctamente al carrito')
      // this.categories = JSON.parse(JSON.stringify(res)).data;
      this.cart=res;
      let totar=''
      this.cart.forEach((element,index) => {
  
         console.log(element.precioCurso)
         let text = element.precioCurso;
          let result = text.replace(",", ".");
  
         let precioss:number = parseFloat(result)
  
         console.log('precios',result)
  
         
         totar+=precioss.toFixed(2)
  
        
  
        
  
      
        
      });
  
      this.valorTotal=totar
      console.log('este es el precio',this.valorTotal)

      if(this.valorTotal==''){
        this.presentToast('Ya posee este curso') 
        return;
      }
      this.presentModal()
   
    }, err => {
    //  this.cateSpinner=false
      console.log(err);
    });
  
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

  videosCargar(evet){
    console.log('evento del video',evet.target.value.videos)
    this.videosCurso=evet.target.value.videos
  }
    

}
