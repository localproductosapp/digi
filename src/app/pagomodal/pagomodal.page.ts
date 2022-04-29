import { Component, Input, OnInit } from '@angular/core';
// import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
//import { Stripe } from '@awesome-cordova-plugins/stripe/ngx';
import { ApiService } from '../services/api.service';
import { ToastController } from '@ionic/angular';
import { NavParams,LoadingController,NavController, AlertController } from '@ionic/angular';

// import { Stripe } from '@capacitor-community/stripe';
// import { Plugins } from '@capacitor/core';

// const { Stripe } = Plugins;
import '@stripe/stripe-js';
declare var Stripe;

@Component({
  selector: 'app-pagomodal',
  templateUrl: './pagomodal.page.html',
  styleUrls: ['./pagomodal.page.scss'],
})
export class PagomodalPage implements OnInit {

    // Data passed in by componentProps
    @Input() monto: string;
    @Input() lastName: string;
    @Input() middleInitial: string;



    numeroTarjeta
    expMonth
    expYear
    cvc

    montoTotal
    cursoss
    idUsuario
    cart
    valorTotal
    terminos=false

    spinnerFeatured=false
    stripe = Stripe('pk_test_51K7hlpGPfZahrmfPjpVX1KxmRtWqr3UNiqov7pO0sswLMoXRJhsceulNSjacflHABhjT5CfABaZbiCs7TNpDIpvB003866cfYb');

  constructor(navParams: NavParams,
    // private stripe: Stripe,
    private service: ApiService,
    public modalController: ModalController ,
    public toastController: ToastController,
    private navCtrl: NavController) { 
    console.log(navParams.get('monto'));
    console.log(navParams.get('cursos'));

    this.montoTotal=parseFloat(navParams.get('monto'));
    this.cursoss=navParams.get('cursos')

    let arreglo=localStorage.getItem('user')

    this.idUsuario=JSON.parse(arreglo).id

    let elements = this.stripe.elements();
    
  }

  ngOnInit() {
  }

  valorCheck(){
    console.log('este es el valor',this.terminos)
  }

  async pagar(){
    this.spinnerFeatured=true
    //this.stripe.setPublishableKey('pk_test_51K7hlpGPfZahrmfPjpVX1KxmRtWqr3UNiqov7pO0sswLMoXRJhsceulNSjacflHABhjT5CfABaZbiCs7TNpDIpvB003866cfYb');
  
  let card = {
   number: this.numeroTarjeta,
   exp_month: this.expMonth,
   exp_year: this.expYear,
   cvc: this.cvc
  }
  
  /*this.stripe.createCardToken(card)
     .then(token => {

      // console.log('este es el toke',token.id)
        // if(token.id){

        
          let numerito =this.montoTotal.toString()
          console.log('este es el monto a  pagar',numerito)
          let result = numerito.replace(".", "");

          console.log('este es el monto que va a viajar',result)

          this.service.pagar({token:0,amount:result,card:card})
                        .subscribe(res => {
                          // this.cateSpinner=false
                          console.log('esta es la respuesta del pago',res);

                          if(JSON.parse(JSON.stringify(res)).status=='succeeded'){
                            this.spinnerFeatured=false

                            this.presentToast('Pago procesado con éxito','success') 

                            

                            this.cursoss.forEach((element,index) => {

                              // console.log(element)
                        
                              this.AgregarCurso({idCursoFk:element.idCursoFk,idUsuarioFk:this.idUsuario,id:element.id})


                        
                           
                            
                              
                            });
                          
                            //  this.navCtrl.navigateForward(['/tabs/cursosPremiun'])
                       

                           

                            

                          }else{
                            this.presentToast('Pago no procesado','danger') 
                            this.spinnerFeatured=false
                          }

                          this.dismiss()
                       
                        }, err => {
                        //  this.cateSpinner=false
                        this.spinnerFeatured=false
                          console.log(err);
                        });


        // }

    //  }
 

    //  )

     .catch(error => console.error(error));*/
    }


    

    async presentToast(message,color) {
      const toast = await this.toastController.create({
        message: message,
        duration: 3000,
        color:color
      });
      toast.present();
    }


    AgregarCurso(dato){
      this.service.addCursoPremiun(dato)
      .then(res => {
        // this.cateSpinner=false
        console.log('respuesta del agrego cursos',res);
    

        this.service.deleteCartUser({id:dato.id}).then(res => {
          // this.cateSpinner=false
          console.log('respuesta del borro',res);
      
       
        });
     
      }, err => {
      //  this.cateSpinner=false
        console.log(err);
      });
    }

    borrarCarro(){
      
      this.cursoss.forEach((element,index) => {

        // console.log(element)
  
        // this.AgregarCurso({idCursoFk:element.idCursoFk,idUsuarioFk:this.idUsuario,id:element.id})


        this.service.deleteCartUser({id:element.id}).then(res => {
          // this.cateSpinner=false
          console.log('respuesta del borro',res);
      
       
        });
     
      
        
      });
   
    }


    dismiss() {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalController.dismiss({
        'dismissed': true
      });
    }

    gteCart(){

  
      this.service.getCartUser({idUsuarioFk:this.idUsuario})
      .then(res => {
        // this.cateSpinner=false
        console.log('respuesta del get carrito',res);
        //  this.presentToast('Agregado correctamente al carrito')
        // this.categories = JSON.parse(JSON.stringify(res)).data;
        this.cart=res;
    
        this.cart.forEach((element,index) => {
    
          // console.log(element)
    
          this.valorTotal+=parseFloat(element.precioCurso)
    
          console.log('este es el precio',this.valorTotal)
    
        
          
        });
    
    
     
      }, err => {
      //  this.cateSpinner=false
        console.log(err);
      });
    
    }



}
