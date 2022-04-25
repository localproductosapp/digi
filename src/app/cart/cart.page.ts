import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse} from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

import { Plugins } from '@capacitor/core';

import { Stripe } from '@awesome-cordova-plugins/stripe/ngx';

import { first } from 'rxjs/operators';
import { IonRouterOutlet } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PagomodalPage } from '../pagomodal/pagomodal.page';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { NavParams,LoadingController,NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  processSheet: 'willReady' | 'Ready' = 'willReady';
  processFlow: 'willReady' | 'Ready' | 'canConfirm' = 'willReady';
  processApplePay: 'willReady' | 'Ready' = 'willReady';
  processGooglePay: 'willReady' | 'Ready' = 'willReady';
  isApplePayAvailable = false;
  isGooglePayAvailable = false;

    idUsuario
    cart
    valorTotal: any=0;

  constructor(    private http2: HTTP, 
    private http: HttpClient,
    private navCtrl: NavController,
    private stripe: Stripe,
    public routerOutlet: IonRouterOutlet,
    public modalController: ModalController ,
    private service: ApiService,


    public toastController: ToastController,) { 
    // Stripe.initialize({
    //   publishableKey: "pk_test_51K7hlpGPfZahrmfPjpVX1KxmRtWqr3UNiqov7pO0sswLMoXRJhsceulNSjacflHABhjT5CfABaZbiCs7TNpDIpvB003866cfYb",
    // });



  }

   ngOnInit() {

    let arreglo=localStorage.getItem('user')

    this.idUsuario=JSON.parse(arreglo).id
 
  }

  ngAfterViewInit() {
    this.gteCart()
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
        this.gteCart()
        this.navCtrl.navigateForward(['/tabs/cursosPremiun'])
    });
    return await modal.present();
}

// getCartUser

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

delete(id){
  // deleteCartUser

    this.service.deleteCartUser({id:id})
  .subscribe(res => {
    // this.cateSpinner=false
    console.log('respuesta del delete carrito',res);
    //  this.presentToast('Agregado correctamente al carrito')
    // this.categories = JSON.parse(JSON.stringify(res)).data;
    // this.cart=res;
    this.gteCart()
    this.presentToast(JSON.parse(JSON.stringify(res)).message)
 
  }, err => {
  //  this.cateSpinner=false
    console.log(err);
  });
}


 
}
