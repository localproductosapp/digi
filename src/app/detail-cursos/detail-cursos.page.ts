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

import { IonRouterOutlet } from '@ionic/angular';
import { PagomodalPage } from '../pagomodal/pagomodal.page';

const { CapacitorVideoPlayer, Toast } = Plugins;

import { InAppPurchase2, IAPProduct } from '@ionic-native/in-app-purchase-2/ngx';


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


 cart
 valorTotal: any=0;

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
    private store: InAppPurchase2,
    private ref: ChangeDetectorRef,
    private alertController: AlertController,
    public platform: Platform) { 

      this.platform.ready().then(() => {
        // Only for debugging!
        this.store.verbosity = this.store.DEBUG;
   
        this.registerProducts();
        this.setupListeners();
        
        // Get the real product information
        this.store.ready(() => {
          this.products = this.curso;
          this.ref.detectChanges();
        });
      });

    }

    registerProducts() {

      this.store.register({
        id: PRODUCT_PRO_KEY,
        type: this.store.NON_CONSUMABLE,
      });
   
      this.store.refresh();
    }

    setupListeners() {
      // General query to all products
      this.store.when('product')
        .approved((p: IAPProduct) => {
          // Handle the product deliverable
          if (p.id === PRODUCT_PRO_KEY) {
            console.log('compro');
          } 
          this.ref.detectChanges();
   
          return p.verify();
        })
        .verified((p: IAPProduct) => p.finish());
   
   
      // Specific query for one ID
      this.store.when(PRODUCT_PRO_KEY).owned((p: IAPProduct) => {
        console.log('compro el curso',p)
      });
    }

    purchase(product: IAPProduct) {
      this.store.order(product).then(p => {
        // Purchase in progress!
        console.log('esto retorna',p)
      }, e => {
        this.presentAlert('Failed', `Failed to purchase: ${e}`);
      });
    }
   
    // To comply with AppStore rules
    restore() {
      this.store.refresh();
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

     reproducir(url,suscripcion,videoId){

       this.PlayPersona(videoId)

  
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
  
     

      }else{

        // Playing a video.
        this._videoPlayer.initPlayer({mode:"fullscreen",url:url,playerId:"fullscreen",componentTag:"app-detail-cursos",subtitle:null,language:null,subtitleOption:null})
        
      }
      
  
      
    }


  
       

  getProduct(){
this.spinnerFeatured=true
    this.service.obtenerCurso(this.route.snapshot.paramMap.get('id'))
        .then(res => {

          this.spinnerFeatured=false
          
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
      .then(res => {
        // this.cateSpinner=false
        console.log('guardo el video',res);
        if(res.message){
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
      .then(res => {
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
    .then(res => {
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
    

}
